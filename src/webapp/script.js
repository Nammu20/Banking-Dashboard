// Initial balance
let balance = 1000;

// Function to update the balance display
function updateBalanceDisplay() {
    document.getElementById("balance").textContent = `$${balance.toFixed(2)}`;
}

// Deposit function
document.getElementById("depositButton").addEventListener("click", function() {
    const depositAmount = parseFloat(document.getElementById("depositAmount").value);
    if (!isNaN(depositAmount) && depositAmount > 0) {
        balance += depositAmount;
        updateBalanceDisplay();
        document.getElementById("depositAmount").value = ''; // Clear input
    } else {
        alert("Please enter a valid deposit amount.");
    }
});

// Withdraw function
document.getElementById("withdrawButton").addEventListener("click", function() {
    const withdrawAmount = parseFloat(document.getElementById("withdrawAmount").value);
    if (!isNaN(withdrawAmount) && withdrawAmount > 0) {
        if (withdrawAmount <= balance) {
            balance -= withdrawAmount;
            updateBalanceDisplay();
            document.getElementById("withdrawAmount").value = ''; // Clear input
        } else {
            alert("Insufficient funds for this withdrawal.");
        }
    } else {
        alert("Please enter a valid withdrawal amount.");
    }
});

// Initial balance display
updateBalanceDisplay();
