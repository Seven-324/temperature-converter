const theCelcius = document.getElementById('celciusinput');
const theFahrenheit = document.getElementById('fahrenheitinput');

function roundNum(num){
    return Math.round(num*100)/100;
}

function celciusToFahrenheit() {
    const cTemp = (theCelcius.value);
    const fTemp = (cTemp * 9/5) + 32;
    theFahrenheit.value = roundNum(fTemp);
};
function fahrenheitToCelcius(){
    const fTemp = (theFahrenheit.value);
    const cTemp = (fTemp - 32) * (5/9);
    theCelcius.value = roundNum(cTemp);
};
function main(){
    theCelcius.addEventListener('input', celciusToFahrenheit);
    theFahrenheit.addEventListener('input', fahrenheitToCelcius);
};
main();

