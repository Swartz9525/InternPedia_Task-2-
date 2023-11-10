function convertFahrenheit(){
    var celcius=parseFloat(document.querySelector("#celcius").value);
    var fahrenheitresult=(1.8*celcius)+32;
    var a=fahrenheitresult.toFixed(2);
document.querySelector("#celcius").value=celcius;
document.querySelector("#fahrenheit").value=a;
}
function convertCelcius(){
    var fahrenheit=parseFloat(document.querySelector("#fahrenheit").value);
    var celciusresult=(fahrenheit-32)/1.8;
    var b=celciusresult.toFixed(2);
document.querySelector("#celcius").value=b;
document.querySelector("#fahrenheit").value=fahrenheit;

}
const reset=()=>{
    document.querySelector("#celcius").value=" ";
    document.querySelector("#fahrenheit").value=" ";
}