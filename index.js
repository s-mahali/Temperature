const calculateTemp =() => {

    const numberTemp = document.getElementById('temp').value ;
    console.log(numberTemp);

   const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

const celTofeh = (cel) => {
    let fahrenheit = Math.round((cel*9/5)+32);
return fahrenheit;
}

    const fahTocel =(fah) => {
let celsius = Math.round((fah-32) *5/9);
return celsius;

    }

let result;

if(valueTemp == 'cel'){
    result =celTofeh(numberTemp);
    document.getElementById('resultContainer').innerHTML= `${result } °Fahrenheit`;

}
else{
    result = fahTocel(numberTemp);
    document.getElementById('resultContainer').innerHTML =`${result } °Celsius`;
}

};