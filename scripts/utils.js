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
  const selectedCategory = document.getElementById("filterOptions").value;
  const selectedMonth = document.getElementById("month").value;

  return expenses.filter((expense) => {
    const matchCategory =
      selectedCategory === "allCategories" ||
      expense.expenseCategory === selectedCategory;

    const matchMonth =
      selectedMonth === "" || formatDate(expense.expenseDate) === selectedMonth;

    return matchCategory && matchMonth;
  });
}

function formatDate(dateValue) {
  const [year, month] = dateValue.split("-");
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
