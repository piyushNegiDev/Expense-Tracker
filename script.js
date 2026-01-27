let expenses = getFromLocalStorage() || [];

document.addEventListener("DOMContentLoaded", () => {
  calculateTotalExpense();
  checkEmptyList();
});

function getExpense() {
  let expenseTitle = document.getElementById("expenseTitle").value;
  let expenseAmount = document.getElementById("expenseAmount").value;
  let expenseCategory = document.getElementById("inputOptions").value;
  let expenseDate = document.getElementById("expenseDate").value;

  if (!expenseTitle || !expenseAmount || !expenseDate) return;

  let expenseObj = {
    id: Date.now(),
    expenseTitle,
    expenseAmount: Number(expenseAmount),
    expenseCategory,
    expenseDate,
  };
  expenses.push(expenseObj);

  saveToLocalStorage();
  calculateTotalExpense();
  clearInputs();
  checkEmptyList();
}

function renderExpensesList() {
  document.getElementById("expenses").innerHTML = "";
  let html = "";

  expenses.forEach((expense) => {
    html += `<div class="expense">
        <div class="expenseTypeDate">
          <h3>${expense.expenseTitle}</h3>
          <p>${expense.expenseCategory} &#8226; ${convertMonthArray(
      expense.expenseDate
    )}</p>
        </div>
        <div class="expensePrice">
          <p>₹${expense.expenseAmount}</p>
          <button data-id='${expense.id}' class="removeBtn">&#10060;</button>
        </div>
      </div>`;
  });

  document.getElementById("expenses").innerHTML += html;
}

function removeExpenseFromList(id) {
  expenses = expenses.filter((exp) => exp.id !== id);
  saveToLocalStorage();
  checkEmptyList();
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
    calculateTotalExpense();
  }
});

function calculateTotalExpense() {
  let totalExpense = expenses.reduce(
    (acc, expense) => acc + expense.expenseAmount,
    0
  );

  document.getElementById("totalExpense").innerText = `₹${totalExpense}`;
}

function saveToLocalStorage() {
  localStorage.setItem("expenses", JSON.stringify(expenses));
}

function getFromLocalStorage() {
  return JSON.parse(localStorage.getItem("expenses"));
}

function checkEmptyList() {
  if (expenses.length === 0) {
    document.querySelector(
      "#expenses"
    ).innerHTML = `<p class="defaultMsg">Expenses Will Be Seen Here</p>`;
  } else {
    renderExpensesList();
  }
}

function convertMonthArray(dateValue) {
  let months = [
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
  let dateParts = dateValue.split("-");
  let monthIndex = parseInt(dateParts[1]) - 1;
  return `${dateParts[2]} ${months[monthIndex]}`;
}
