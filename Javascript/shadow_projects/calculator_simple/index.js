//Calculator program

const display = document.getElementById("display");
let flag = true;

function appendToDisplay(input){
    flag == true ? display.value += input : display.value = input;
    flag = true;
    console.log(flag);
}

function clearDisplay(){
    display.value = '';
    flag = false;
}

function calculate() {
    try{
        display.value = eval(display.value);
        flag = false;
    }
    catch(error){
        display.value = "Error"
        flag = false;
    }
}