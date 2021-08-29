"use strict";
window.addEventListener("DOMContentLoaded", settingUp);

let firstNumber = document.querySelector("#firstnumber").value;
let secondNumber = document.querySelector("#secondnumber").value;
let operator = document.querySelector("#operator").value;
let decimal = document.querySelector("#decimals").value;
let checkbox = document.querySelector("#doround").checked;
let result;

function settingUp() {
    console.log("setting up");
    document.querySelector("#firstnumber").addEventListener("input", readNumbers);
    document.querySelector("#secondnumber").addEventListener("input", readNumbers);
    document.querySelector("#operator").addEventListener("change", readOperator);
    document.querySelector("#calculate").addEventListener("click", calculation);
    document.querySelector("#decimals").addEventListener("change", readDecimals);
    document.querySelector("#doround").addEventListener("change", readCheckBox);
    document.querySelector("#clear").addEventListener("click", clearResult);
}

function readNumbers() {
    console.log("read numbers");
    firstNumber = Number(document.querySelector("#firstnumber").value);
    secondNumber = Number(document.querySelector("#secondnumber").value);
    console.log(firstNumber);
    console.log(secondNumber);
}

function readOperator() {
    console.log("read operator");
    operator = document.querySelector("#operator").value;
    console.log(operator);
}

function readCheckBox() {
    checkbox = document.querySelector("#doround").checked;
    console.log(checkbox);
}

function readDecimals() {
    console.log("read decimals");
    decimal = document.querySelector("#decimals").value;
    console.log(decimal);
}

function calculation() {
    console.log("calculation");
    if (operator === "add") {
        result = firstNumber + secondNumber;
    }
    else if (operator === "sub") {
        result = firstNumber - secondNumber;
    }
    else if (operator === "mul") {
        result = firstNumber * secondNumber;
    }
    else if (operator === "div") {
        result = firstNumber / secondNumber;
    }
    if (checkbox === true) {
        result = result.toFixed(decimal);
    }
    showResult();
}

function showResult() {
    console.log(result);
    let li = document.createElement("li");
    const resultNode = document.createTextNode(result.toString());
    li.appendChild(resultNode);
    document.querySelector("#results").appendChild(li);
    document.querySelector("#results").scrollTo(0, 10000000);
}

function clearResult() {
    console.log("clear result");
    document.querySelector("#results").innerHTML = "";
}