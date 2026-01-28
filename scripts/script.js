let expenses = getFromLocalStorage() || [];

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
  expenses.unshift(expenseObj);

  saveToLocalStorage();
  clearInputs();
  updateUI();
}
