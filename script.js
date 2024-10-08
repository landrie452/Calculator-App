let calculation = '' ;
function calculate(value){
    calculation += value ;
    displayCalculation();
    
}

function displayCalculation(){
    document.querySelector('.js-display').innerHTML = calculation;
}






