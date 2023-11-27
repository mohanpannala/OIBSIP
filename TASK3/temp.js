let formELE = document.getElementById("myform");
let tempELE = document.getElementById("temp");
let resultELE = document.getElementById("result");
let fromELE = document.getElementById("seleFrom");
let toELE = document.getElementById("seleTo");
let errorMsgEle = document.getElementById("errorMsg");
let convertbtnEle = document.getElementById("convertBtn");
let resetbtnEle = document.getElementById("resetBtn");


convertbtnEle.onclick = function(){
    let temparature = parseFloat(tempELE.value);
    
    if (isNaN(tempELE.value) || tempELE.value === "" ){
        errorMsgEle.textContent = "enter the correct value";
    }
    
    else{
        errorMsgEle.textContent = "";
        if (fromELE.value === "celsious"){
            if(toELE.value === "fahrenheit"){
                resultELE.textContent= (1.8*temparature)+32;
            }
         else if(toELE.value === "kelvin"){
                resultELE.textContent= temparature +273.15;
            }
        else if(toELE.value === "celsious"){
                resultELE.textContent= temparature;
            }
        } 
        
        else if (fromELE.value === "fahrenheit"){
            if(toELE.value === "celsious"){
                resultELE.textContent= (temparature - 32) * (5/9);
            }
         else if(toELE.value === "kelvin"){
                resultELE.textContent= (temparature - 32) * (5/9)+273.15;
            }
        else if(toELE.value === "fahrenheit"){
                resultELE.textContent= temparature;
            }
        } 
        
        else if (fromELE.value === "kelvin"){
            if(toELE.value === "celsious"){
                resultELE.textContent= (temparature - 273.15).toFixed(2);
            }
         else if(toELE.value === "fahrenheit"){
                resultELE.textContent= ((temparature - 273.15) * (9/5) + 32).toFixed(2);
            }
        else if(toELE.value === "kelvin"){
                resultELE.textContent= temparature;
            }
        } 
        
    }
    
}

resetbtnEle.onclick = function(){
    tempELE.value = "";
    resultELE.textContent = "";
    fromELE.value = "celsious";
    toELE.value = "fahrenheit";
    errorMsgEle.textContent = "";
}