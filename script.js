function updateInputs() {
    // Get the selected figure and calculation type from the dropdowns
    const figure = document.getElementById('figure').value;
    const calculationType = document.getElementById('calculationType').value;

    // Get all input elements within the #inputs container
    const inputs = document.querySelectorAll('#inputs input');

    // Hide all input elements initially
    inputs.forEach(input => input.style.display = 'none');

    // Show relevant inputs based on the selected calculation type and figure
    if (calculationType === 'perimeter') {
        // For perimeter calculations
        if (figure === 'triangle' || figure === 'trapezoid') {
            // Show three inputs for triangle and trapezoid
            inputs[0].style.display = 'inline';
            inputs[1].style.display = 'inline';
            inputs[2].style.display = 'inline';
        } else if (figure === 'rectangle' || figure === 'parallelogram') {
            // Show two inputs for rectangle and parallelogram
            inputs[0].style.display = 'inline';
            inputs[1].style.display = 'inline';
        } else if (figure === 'circle' || figure === 'square' || figure === 'rhombus') {
            // Show one input for circle, square, and rhombus
            inputs[0].style.display = 'inline';
        }
    } else if (calculationType === 'area') {
        // For area calculations
        if (figure === 'triangle' || figure === 'rectangle' || figure === 'parallelogram' || figure === 'rhombus') {
            // Show two inputs for triangle, rectangle, parallelogram and rhombus
            inputs[0].style.display = 'inline';
            inputs[1].style.display = 'inline';
        } else if (figure === 'square' || figure === 'circle') {
            // Show one input for square and circle
            inputs[0].style.display = 'inline';
        } else if (figure === 'trapezoid') {
            // Show three inputs for trapezoid
            inputs[0].style.display = 'inline';
            inputs[1].style.display = 'inline';
            inputs[2].style.display = 'inline';
        }
    }

    // Update the image based on the selected figure
    updateImage(figure);
}


function updateImage(figure) {
    // Get the image element
    const img = document.getElementById('figureImg');

    // If no figure is selected, hide the image
    if (figure === '') {
        img.style.display = 'none';
        img.alt = '';
    } else {
        // Otherwise, show the image and set the source and alt text
        img.style.display = 'block';
        img.src = `figure/${figure}.png`;
        img.alt = `Image of ${figure}`;
    }
}


function calculate() {
    // Get the selected figure and calculation type from the dropdowns
    const figure = document.getElementById('figure').value;
    const calculationType = document.getElementById('calculationType').value;

    // Get the input values and parse them as floats
    const param1 = parseFloat(document.getElementById('a').value);
    const param2 = parseFloat(document.getElementById('b').value);
    const param3 = parseFloat(document.getElementById('c').value);
    let result = 0;

    // Calculate the result based on the selected figure and calculation type
    if (calculationType === 'perimeter') {
        switch (figure) {
            case 'triangle':
                result = param1 + param2 + param3;
                break;
            case 'square':
                result = 4 * param1;
                break;
            case 'circle':
                result = 2 * Math.PI * param1;
                break;
            case 'rectangle':
                result = 2 * (param1 + param2);
                break;
            case 'rhombus':
                result = 4 * param1;
                break;
            case 'trapezoid':
                result = param1 + param2 + param3 + Math.sqrt(param1 * param1 + param2 * param2);
                break;
            case 'parallelogram':
                result = 2 * (param1 + param2);
                break;
        }
    } else if (calculationType === 'area') {
        switch (figure) {
            case 'triangle':
                result = param1 * param2 / 2;
                break;
            case 'square':
                result = param1 * param1;
                break;
            case 'circle':
                result = Math.PI * param1 * param1;
                break;
            case 'rectangle':
                result = param1 * param2;
                break;
            case 'rhombus':
                result = (param1 * param2) / 2;
                break;
            case 'trapezoid':
                result = ((param1 + param2) / 2) * param3;
                break;
            case 'parallelogram':
                result = param1 * param2;
                break;
        }
    }

    // Display the result
    document.getElementById('result').textContent = result.toFixed(1) + ' cm';
}


function resetForm() {
    // Reset the form fields
    document.getElementById('figure').value = '';
    document.getElementById('a').value = '';
    document.getElementById('b').value = '';
    document.getElementById('c').value = '';
    document.getElementById('result').textContent = 0;

    // Update the inputs based on the reset form
    updateInputs();
}
