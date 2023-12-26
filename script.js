document.addEventListener('DOMContentLoaded', function() {
    // Function to calculate the budget
    function calculateBudget() {
        var income = parseFloat(document.getElementById('mIncome').value);
        var expense = parseFloat(document.getElementById('mExpense').value);
        var resultElement = document.getElementById('result');

        // Check if the values are numbers
        if (!isNaN(income) && !isNaN(expense)) {
            var balance = income - expense;
            resultElement.textContent = 'Your balance is: ' + balance;
        } else {
            resultElement.textContent = 'Please enter valid numbers for income and expense.';
        }
    }

    // Event listener for the button click
    document.getElementById('calculateButton').addEventListener('click', calculateBudget);
});
