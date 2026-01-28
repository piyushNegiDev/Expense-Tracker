function saveToLocalStorage() {
  localStorage.setItem("expenses", JSON.stringify(expenses));
}

function getFromLocalStorage() {
  try {
    return JSON.parse(localStorage.getItem("expenses")) || [];
  } catch {
    return [];
  }
}

function getFilteredExpenses() {
  const selectedValue = document.getElementById("filterOptions").value;
  const monthValue = document.getElementById("month").value;

  if (selectedValue === "allCategories" && monthValue === "") {
    return expenses;
  }
  if (selectedValue === "allCategories" && monthValue !== "") {
    return expenses.filter((expense) => {
      return monthValue === formateDate(expense);
    });
  }
  return expenses
    .filter((expense) => expense.expenseCategory === selectedValue)
    .filter((expense) => {
      return monthValue === formateDate(expense);
    });
}

function formateDate(expense) {
  let [year, month] = expense.expenseDate.split("-");
  return `${year}-${month}`;
}

function convertMonthArray(dateValue) {
  const date = new Date(dateValue);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return `${date.getDate()} ${months[date.getMonth()]}`;
}

function checkEmptyList() {
  const filtered = getFilteredExpenses();

  if (filtered.length === 0) {
    document.querySelector(
      "#expenses"
    ).innerHTML = `<p class="defaultMsg">No expenses found</p>`;
    return;
  }

  renderExpensesList(filtered);
}
