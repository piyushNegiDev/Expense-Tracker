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

  if (selectedValue === "allCategories") return expenses;

  return expenses.filter(
    (expense) => expense.expenseCategory === selectedValue
  );
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
