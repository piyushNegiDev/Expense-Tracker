let expenses = getFromLocalStorage() || [];

document.addEventListener("DOMContentLoaded", () => {
  updateUI();
});

function getExpense() {
  let expenseTitle = document.getElementById("expenseTitle").value;
  let expenseAmount = document.getElementById("expenseAmount").value;
  let expenseCategory = document.getElementById("inputOptions").value;
  let expenseDate = document.getElementById("expenseDate").value;

  if ([expenseTitle, expenseAmount, expenseDate].some((v) => !v)) return;

  let expenseObj = {
    id: Date.now(),
    expenseTitle,
    expenseAmount: Number(expenseAmount),
    expenseCategory,
    expenseDate,
  };
  expenses.push(expenseObj);

  saveToLocalStorage();
  clearInputs();
  updateUI();
}

function renderExpensesList(list) {
  document.getElementById("expenses").innerHTML = "";
  let html = "";

  list.forEach((expense) => {
    html += `<div class="expense">
        <div class="expenseTypeDate">
          <h3>${expense.expenseTitle}</h3>
          <p>${expense.expenseCategory} &#8226; ${convertMonthArray(
      expense.expenseDate
    )}</p>
        </div>
        <div class="expensePrice">
          <p>₹${expense.expenseAmount.toLocaleString("en-IN")}</p>
          <button data-id='${expense.id}' class="removeBtn">&#10060;</button>
        </div>
      </div>`;
  });

  document.getElementById("expenses").innerHTML = html;
}

function removeExpenseFromList(id) {
  expenses = expenses.filter((exp) => exp.id !== id);
  saveToLocalStorage();
}

function clearInputs() {
  document.getElementById("expenseTitle").value = "";
  document.getElementById("expenseAmount").value = "";
  document.getElementById("expenseDate").value = "";
}

document.getElementById("addExpenseBtn").addEventListener("click", () => {
  getExpense();
});

document.getElementById("expenses").addEventListener("click", (e) => {
  if (e.target.classList.contains("removeBtn")) {
    const id = Number(e.target.dataset.id);
    removeExpenseFromList(id);
    updateUI();
  }
});

function calculateTotalExpense(expenses) {
  let totalExpense = expenses.reduce(
    (acc, expense) => acc + expense.expenseAmount,
    0
  );

  document.getElementById(
    "totalExpense"
  ).innerText = `₹${totalExpense.toLocaleString("en-IN")}`;
}

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

document.getElementById("filterOptions").addEventListener("change", () => {
  updateUI();
});

function getFilteredExpenses() {
  const selectedValue = document.getElementById("filterOptions").value;

  if (selectedValue === "allCategories") return expenses;

  return expenses.filter(
    (expense) => expense.expenseCategory === selectedValue
  );
}

function renderFilterList() {
  renderExpensesList(getFilteredExpenses());
}

function updateUI() {
  calculateTotalExpense(getFilteredExpenses());
  checkEmptyList();
}
