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
