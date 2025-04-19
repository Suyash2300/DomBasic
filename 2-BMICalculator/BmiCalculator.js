let form = document.querySelector('form');
let result = document.querySelector('#results');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form from reloading

    let height = document.querySelector('#height').value;
    let weight = document.querySelector('#weight').value;

    // Convert string input to numbers
    height = parseFloat(height);
    weight = parseFloat(weight);

    if (!height || height <= 0 || isNaN(height)) {
        result.innerHTML = `Please enter a valid height.`;
        return;
    }

    if (!weight || weight <= 0 || isNaN(weight)) {
        result.innerHTML = `Please enter a valid weight.`;
        return;
    }

    // BMI calculation
    let BMI = (weight / ((height / 100) ** 2)).toFixed(2);

    if(BMI  < 18.6)
    {
        result.innerHTML =`<span>Your BMI is UNDER WEIGHT: ${BMI}</span>`
    }
    else if(BMI  >= 18.6 && BMI <=24.9)
        {
            result.innerHTML =`<span>Your BMI is Normal Range: ${BMI}</span>`
        }
    else{
    result.innerHTML = `<span>Your BMI is OVER WEIIGHT: ${BMI}</span>`;
    }
});
