let inputObj1 = document.getElementById('inputObj1');
let inputObj2 = document.getElementById('inputObj2');
let outputData = document.getElementById('outputData');
let convertButton = document.getElementById('convert');

convertButton.onclick = function(e){
    let interpolated = interpolate(inputObj1.value, inputObj2.value);
    outputData.value = `\\left[${interpolated.join(',')}\\right]`;
}