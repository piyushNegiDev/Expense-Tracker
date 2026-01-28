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

function updateUI() {
  calculateTotalExpense(getFilteredExpenses());
  checkEmptyList();
}

function calculateTotalExpense(expenses) {
  let totalExpense = expenses.reduce(
    (acc, expense) => acc + expense.expenseAmount,
    0
  );

  document.getElementById(
    "totalExpense"
  ).innerText = `₹${totalExpense.toLocaleString("en-IN")}`;
}
