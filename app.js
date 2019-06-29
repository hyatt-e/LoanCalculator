// Listen for submit
document.getElementById('loan-form').addEventListener('submit', calculateResults);
let inputListeners = false

// Calculate results
function calculateResults(e){
    console.log('Calculating...');
    // UI variables
    const principalField = document.getElementById("amount");
    const interestRateField = document.getElementById("interest");
    const monthsField = document.getElementById("months");

    let principal = parseFloat(principalField.value)
    let interestRate = parseFloat(interestRateField.value)/100;
    let months = parseFloat(monthsField.value)

    // Check for event listeners
    if(inputListeners === false) {
        inputListeners = true;
        // Add new event listeners to check for new input
        principalField.addEventListener('keyup', calculateResults);
        interestRateField.addEventListener('keyup', calculateResults);
        monthsField.addEventListener('keyup', calculateResults);
    }


    const monthlyPayField = document.getElementById("monthly-payment");
    const paymentTotField = document.getElementById("total-payment");
    const interestTotField = document.getElementById("total-interest");

    // Calculate amouts
    let interestTotal = ((interestRate*(months/12))*principal);
    let totalPayment = (interestTotal+principal);
    let monthlyPayment = (totalPayment/months);
    

    // Update DOM
    interestTotField.value = interestTotal;
    paymentTotField.value = totalPayment;
    monthlyPayField.value = monthlyPayment;

    e.preventDefault();
}