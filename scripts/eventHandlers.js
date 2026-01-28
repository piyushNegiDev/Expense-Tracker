document.addEventListener("DOMContentLoaded", () => {
  updateUI();
});

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

document.getElementById("filterOptions").addEventListener("change", () => {
  updateUI();
});
