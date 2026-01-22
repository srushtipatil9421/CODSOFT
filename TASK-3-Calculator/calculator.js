const display = document.getElementById("display");

function appendValue(value){
    if(display.value === "Error"){
        display.value = "";
    }
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function deleteLast(){
    display.value = display.value.slice(0, -1);
}

function calculate(){
    try{
        let result = eval(display.value);
        display.value = result;
    }catch{
        display.value = "Error";
    }
}

document.addEventListener("keydown", (e) => {
    if((e.key >= "0" && e.key <= "9") || "+-*/.%".includes(e.key)){
        appendValue(e.key);
    }
    else if(e.key === "Enter"){
        calculate();
    }
    else if(e.key === "Backspace"){
        deleteLast();
    }
    else if(e.key === "Escape"){
        clearDisplay();
    }
});
