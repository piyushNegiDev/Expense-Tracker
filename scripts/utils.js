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
