document.addEventListener("DOMContentLoaded", () => {
  calculateTotalExpense();
  checkEmptyList();
});

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
