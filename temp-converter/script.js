function convertTemperature() {
    const temperatureInput = document.getElementById('temperature').value;
    const unitSelect = document.getElementById('unit');
    const selectedUnit = unitSelect.options[unitSelect.selectedIndex].value;

    if (!temperatureInput || isNaN(temperatureInput)) {
        document.getElementById('result').innerText = 'Please input a number';
        return;
    }

    const numericInput = parseFloat(temperatureInput);
    let result;
    let resultUnit;

    if (selectedUnit === 'celsius') {
        result = (numericInput * (9/5)) + 32;
        resultUnit = 'Fahrenheit';
    } else {
        result = (numericInput - 32) * (5/9);
        resultUnit = 'Celsius';
    }

    document.getElementById('result').innerText = `Result: ${result.toFixed(2)} °${resultUnit}`;
}
