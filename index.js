
// List of roman numbers and their assigned value
const romanNumbers = {
    m: 1000,
    cm: 900,
    d: 500,
    cd: 400,
    c: 100,
    xc: 90,
    l: 50,
    xl: 40,
    x: 10,
    ix: 9,
    v: 5,
    iv: 4,
    i: 1
};

// Input: any integer number, Output: String of roman number. 42 => 'XLII'
const romanNumberConverter = () => {
    let number = document.getElementById("input").value; //Input from the HTML
    console.log("number", number)
    let output = '';
    Object.keys(romanNumbers).forEach(romanNumber => { // For each keys in romanNumbers takes the assigned value of the key
        const value = romanNumbers[romanNumber];
        while (number >= value) {
            number -= value; // Removes the assigned value of the key from the number
            output += romanNumber; //Adds the name of the key to a string
        }
    });
    console.log('Output', output.toUpperCase());
    document.getElementById("result").value = output.toUpperCase(); // Pastes the output in uppercase to the #result element

    return 'Output', output.toUpperCase(); //Returns the output in uppercase
};

console.log(romanNumberConverter());
