document.getElementById('calculator-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const power = document.getElementById('power').value;
    const hours = document.getElementById('hours').value;

    if (power && hours) {
        const energyConsumed = (power * hours) / 1000; // in kWh
        const costPerKWhUSD = 0.12; // Assuming $0.12 per kWh
        const usdToInrRate = 83.00; // Conversion rate from USD to INR
        const costInUSD = energyConsumed * costPerKWhUSD;
        const costInINR = costInUSD * usdToInrRate;

        document.getElementById('result').innerText = `Energy consumed: ${energyConsumed.toFixed(2)} kWh, Cost: ₹${costInINR.toFixed(2)}`;
    } else {
        document.getElementById('result').innerText = 'Please fill in all fields';
    }
});
