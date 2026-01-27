let expenses = [];

document.getElementById("addExpenseBtn").addEventListener("click", () => {
  getExpense();
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
  console.log("DateId", expenseObj.id);

  expenses.push(expenseObj);

  clearInputs();

  console.log(expenses);
  renderExpensesList();
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

document.getElementById("expenses").addEventListener("click", (e) => {
  if (e.target.classList.contains("removeBtn")) {
    const id = Number(e.target.dataset.id);
    removeExpenseFromList(id);
  }
});

function removeExpenseFromList(id) {
  expenses = expenses.filter((exp) => exp.id !== id);
  renderExpensesList();
}

function clearInputs() {
  document.getElementById("expenseTitle").value = "";
  document.getElementById("expenseAmount").value = "";
  document.getElementById("expenseDate").value = "";
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
