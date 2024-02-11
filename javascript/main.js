const calObj = {
  num1: "",
  num2: "",
  operator: "",
  final: 0,
  displayNum: "",
};

// to display the operation
let display = document.querySelector(".display-input");

// clear all operation 
let allClearButton = document.getElementById("all-clear");

// delete last input 
let del = document.getElementById("clear");

// number buttons
let one = document.getElementById("1");
let two = document.getElementById("2");
let three = document.getElementById("3");
let four = document.getElementById("4");
let five = document.getElementById("5");
let six = document.getElementById("6");
let seven = document.getElementById("7");
let eight = document.getElementById("8");
let nine = document.getElementById("9");
let zero = document.getElementById("0");
let doubleZero = document.getElementById("00");
let point = document.getElementById("point");

// operator buttons
let sumOperator = document.getElementById("plus");
let subtractOperator = document.getElementById("minus");
let divisionOperator = document.getElementById("divide");
let multiplicationOperator = document.getElementById("multiply");
let percentageOperator = document.getElementById("percentage");

// make the numbers display on the calculator screen
one.addEventListener("click", function () {
  calObj.displayNum = calObj.displayNum.concat("1");
  display.textContent = calObj.displayNum;
});

two.addEventListener("click", () => {
  calObj.displayNum = calObj.displayNum.concat("2");
  display.textContent = calObj.displayNum;
});
three.addEventListener("click", function () {
  calObj.displayNum = calObj.displayNum.concat("3");
  display.textContent = calObj.displayNum;
});
four.addEventListener("click", function () {
  calObj.displayNum = calObj.displayNum.concat("4");
  display.textContent = calObj.displayNum;
});
five.addEventListener("click", function () {
  calObj.displayNum = calObj.displayNum.concat("5");
  display.textContent = calObj.displayNum;
  5;
});
six.addEventListener("click", function () {
  calObj.displayNum = calObj.displayNum.concat("6");
  display.textContent = calObj.displayNum;
});
seven.addEventListener("click", function () {
  calObj.displayNum = calObj.displayNum.concat("7");
  display.textContent = calObj.displayNum;
});
eight.addEventListener("click", function () {
  calObj.displayNum = calObj.displayNum.concat("8");
  display.textContent = calObj.displayNum;
});
nine.addEventListener("click", function () {
  calObj.displayNum = calObj.displayNum.concat("9");
  display.textContent = calObj.displayNum;
});
zero.addEventListener("click", function () {
  if (calObj.num1.length !== 0) {
    calObj.displayNum = calObj.displayNum.concat("0");
  }
  display.textContent = calObj.displayNum;
});

doubleZero.addEventListener("click", function () {
  if (calObj.num1.length !== 0) {
    calObj.displayNum = calObj.displayNum.concat("00");
  }
  display.textContent = calObj.displayNum;
});
point.addEventListener("click", () => {
  calObj.displayNum = calObj.displayNum.concat(".");
  display.textContent = calObj.displayNum;
});

// Make the opeators display on the screen and to concatenate in the calObj object
sumOperator.addEventListener("click", () => {
  if(calObj.operator !== ""){
    performOperation();
  }
   else if (
     calObj.displayNum.charAt(calObj.displayNum.length - 1) === "+" ||
     calObj.displayNum.charAt(calObj.displayNum.length - 1) === "-" ||
     calObj.displayNum.charAt(calObj.displayNum.length - 1) === "*" ||
     calObj.displayNum.charAt(calObj.displayNum.length - 1) === "÷" ||
     calObj.displayNum.charAt(calObj.displayNum.length - 1) === "%"
     ) {
       calObj.displayNum = calObj.displayNum
       .substring(0, calObj.displayNum.length - 1)
       .concat("+");
       display.textContent = calObj.displayNum;
       console.log('+ concatenated')
      } else {
        calObj.operator = calObj.operator.substring(0, "").concat("+");
        calObj.displayNum = calObj.displayNum.concat("+");
    display.textContent = calObj.displayNum;
  }
});


subtractOperator.addEventListener("click", () => {
  if(calObj.operator !== ""){
    performOperation();
  }
  else if (
    (calObj.displayNum.charAt(calObj.displayNum.length - 1) === "-" ||
    calObj.displayNum.charAt(calObj.displayNum.length - 1) === "+" ||
    calObj.displayNum.charAt(calObj.displayNum.length - 1) === "*" ||
      calObj.displayNum.charAt(calObj.displayNum.length - 1) === "÷" ||
      calObj.displayNum.charAt(calObj.displayNum.length - 1) === "%") 
    // calObj.num1 !== ""
  ) {
    calObj.displayNum = calObj.displayNum
    .substring(0, calObj.displayNum.length - 1)
    .concat("-");
    display.textContent = calObj.displayNum;
  } else if(calObj.num1 !== "") {
    calObj.operator = calObj.operator.substring(0, "").concat("-");
    calObj.displayNum = calObj.displayNum.concat("-");
    display.textContent = calObj.displayNum;
  }
});


divisionOperator.addEventListener("click", () => {
  if(calObj.operator !== ""){
    performOperation();
  }
  else if (
    calObj.displayNum.charAt(calObj.displayNum.length - 1) === "÷" ||
    calObj.displayNum.charAt(calObj.displayNum.length - 1) === "-" ||
    calObj.displayNum.charAt(calObj.displayNum.length - 1) === "*" ||
    calObj.displayNum.charAt(calObj.displayNum.length - 1) === "+" ||
    calObj.displayNum.charAt(calObj.displayNum.length - 1) === "%"
    ) {
      calObj.displayNum = calObj.displayNum
      .substring(0, calObj.displayNum.length - 1)
      .concat("÷");
      display.textContent = calObj.displayNum;
  } else {
    calObj.operator = calObj.operator.substring(0, "").concat("÷");
    calObj.displayNum = calObj.displayNum.concat("÷");
    display.textContent = calObj.displayNum;
  }
});


multiplicationOperator.addEventListener("click", () => {
  if(calObj.operator !== ""){
    performOperation();
  }
  else if (
    calObj.displayNum.charAt(calObj.displayNum.length - 1) === "*" ||
    calObj.displayNum.charAt(calObj.displayNum.length - 1) === "-" ||
    calObj.displayNum.charAt(calObj.displayNum.length - 1) === "*" ||
    calObj.displayNum.charAt(calObj.displayNum.length - 1) === "÷" ||
    calObj.displayNum.charAt(calObj.displayNum.length - 1) === "%"
    ) {
      calObj.displayNum = calObj.displayNum
      .substring(0, calObj.displayNum.length - 1)
      .concat("*");
      display.textContent = calObj.displayNum;
    } else {
      calObj.operator = calObj.operator.substring(0, "").concat("*");
      calObj.displayNum = calObj.displayNum.concat("*");
    display.textContent = calObj.displayNum;
  }
});


percentageOperator.addEventListener("click", () => {
  if(calObj.operator !== ""){
    performOperation();
  }
  else if (
    calObj.displayNum.charAt(calObj.displayNum.length - 1) === "%" ||
    calObj.displayNum.charAt(calObj.displayNum.length - 1) === "-" ||
    calObj.displayNum.charAt(calObj.displayNum.length - 1) === "*" ||
    calObj.displayNum.charAt(calObj.displayNum.length - 1) === "÷" ||
    calObj.displayNum.charAt(calObj.displayNum.length - 1) === "+"
    ) {
      calObj.displayNum = calObj.displayNum
      .substring(0, calObj.displayNum.length - 1)
      .concat("%");
      display.textContent = calObj.displayNum;
    } else {
    calObj.operator = calObj.operator.substring(0, "").concat("%");
    calObj.displayNum = calObj.displayNum.concat("%");
    display.textContent = calObj.displayNum;
  }
});



function getSum(n1, n2) {
  calObj.num2 = "";
  return Number(n1) + Number(n2);
}

function getDifference(n1, n2) {
  calObj.num2 = "";
  return Number(n1) - Number(n2);
}

function getProduct(n1, n2) {
  calObj.num2 = "";
  return Number(n1) * Number(n2);
}

function getQuotient(n1, n2) {
  calObj.num2 = "";
  return Number(n1) / Number(n2);
}

function getPercentage(n1, n2) {
  calObj.num2 = "";
  return (Number(n1) * Number(n2)) / 100;
}



let equalsTo = document.getElementById("equals-to");
equalsTo.addEventListener("click", performOperation)
function performOperation() {
  if (
    calObj.operator === ("+" || "-" || "*" || "÷" || "%") &&
    calObj.num2 === ""
  ) {
    // calObj.num1 = calObj.num1;
    calObj.displayNum = calObj.num1;
    display.textContent = calObj.displayNum;
  } else if (calObj.operator === "+") {
    calObj.operator = "";
    calObj.final = getSum(calObj.num1, calObj.num2);
    calObj.displayNum = calObj.final.toString();
    display.textContent = calObj.displayNum;
    return (calObj.num1 = calObj.final.toString());
  } else if (calObj.operator === "-") {
    calObj.operator = "";
    calObj.final = getDifference(calObj.num1, calObj.num2);
    calObj.displayNum = calObj.final.toString();
    display.textContent = calObj.displayNum;
    return (calObj.num1 = calObj.final.toString());
  } else if (calObj.operator === "*") {
    calObj.operator = "";
    calObj.final = getProduct(calObj.num1, calObj.num2);
    calObj.displayNum = calObj.final.toString();
    display.textContent = calObj.displayNum;
    return (calObj.num1 = calObj.final.toString());
  } else if (calObj.operator === "÷") {
    calObj.operator = "";
    calObj.final = getQuotient(calObj.num1, calObj.num2);
    calObj.displayNum = calObj.final.toString();
    display.textContent = calObj.displayNum;
    return (calObj.num1 = calObj.final.toString());
  } else if (calObj.operator === "%") {
    calObj.operator = "";
    calObj.final = getPercentage(calObj.num1, calObj.num2);
    calObj.displayNum = calObj.final.toString();
    display.textContent = calObj.displayNum;
    return (calObj.num1 = calObj.final.toString());
  }
};



document.addEventListener("click", numSelectionListner);

function numSelectionListner(event) {
  let element = event.target;
  if (element.classList.contains("numbers") && element.id === "1") {
    if (calObj.num2 === "" && calObj.operator === "") {
      calObj.num1 = calObj.num1.concat("1");
    } else if (calObj.num1 !== "" && calObj.operator !== "") {
      calObj.num2 = calObj.num2.concat("1");
    }
    console.log("1 clicked");
  } else if (element.classList.contains("numbers") && element.id === "2") {
    if (calObj.num2 === "" && calObj.operator === "") {
      calObj.num1 = calObj.num1.concat("2");
    } else if (calObj.num1 !== "" && calObj.operator !== "") {
      calObj.num2 = calObj.num2.concat("2");
    }
    console.log("2 clicked");
  } else if (element.classList.contains("numbers") && element.id === "3") {
    if (calObj.num2 === "" && calObj.operator === "") {
      calObj.num1 = calObj.num1.concat("3");
    } else if (calObj.num1 !== "" && calObj.operator !== "") {
      calObj.num2 = calObj.num2.concat("3");
    }
    console.log("3 clicked");
  } else if (element.classList.contains("numbers") && element.id === "4") {
    if (calObj.num2 === "" && calObj.operator === "") {
      calObj.num1 = calObj.num1.concat("4");
    } else if (calObj.num1 !== "" && calObj.operator !== "") {
      calObj.num2 = calObj.num2.concat("4");
    }
    console.log("4 clicked");
  } else if (element.classList.contains("numbers") && element.id === "5") {
    if (calObj.num2 === "" && calObj.operator === "") {
      calObj.num1 = calObj.num1.concat("5");
    } else if (calObj.num1 !== "" && calObj.operator !== "") {
      calObj.num2 = calObj.num2.concat("5");
    }
    console.log("5 clicked");
  } else if (element.classList.contains("numbers") && element.id === "6") {
    if (calObj.num2 === "" && calObj.operator === "") {
      calObj.num1 = calObj.num1.concat("6");
    } else if (calObj.num1 !== "" && calObj.operator !== "") {
      calObj.num2 = calObj.num2.concat("6");
    }
    console.log("6 clicked");
  } else if (element.classList.contains("numbers") && element.id === "7") {
    if (calObj.num2 === "" && calObj.operator === "") {
      calObj.num1 = calObj.num1.concat("7");
    } else if (calObj.num1 !== "" && calObj.operator !== "") {
      calObj.num2 = calObj.num2.concat("7");
    }
    console.log("7 clicked");
  } else if (element.classList.contains("numbers") && element.id === "8") {
    if (calObj.num2 === "" && calObj.operator === "") {
      calObj.num1 = calObj.num1.concat("8");
    } else if (calObj.num1 !== "" && calObj.operator !== "") {
      calObj.num2 = calObj.num2.concat("8");
    }
    console.log("8 clicked");
  } else if (element.classList.contains("numbers") && element.id === "9") {
    if (calObj.num2 === "" && calObj.operator === "") {
      calObj.num1 = calObj.num1.concat("9");
    } else if (calObj.num1 !== "" && calObj.operator !== "") {
      calObj.num2 = calObj.num2.concat("9");
    }
    console.log("9 clicked");
  } else if (element.classList.contains("numbers") && element.id === "0") {
    if (
      calObj.num2 === "" &&
      calObj.operator === "" &&
      calObj.num1.length !== 0
    ) {
      calObj.num1 = calObj.num1.concat("0");
    } else if (calObj.num1 !== "" && calObj.operator !== "") {
      calObj.num2 = calObj.num2.concat("0");
    }
    console.log("0 clicked");
  } else if (element.classList.contains("numbers") && element.id === "00") {
    if (
      calObj.num2 === "" &&
      calObj.operator === "" &&
      calObj.num1.length !== 0
    ) {
      calObj.num1 = calObj.num1.concat("00");
    } else if (calObj.num1 !== "" && calObj.operator !== "") {
      calObj.num2 = calObj.num2.concat("00");
    }
    console.log("00 clicked");
  } else if (element.classList.contains("numbers") && element.id === "point") {
    if (calObj.num2 === "" && calObj.operator === "") {
      calObj.num1 = calObj.num1.concat(".");
    } else if (calObj.num1 !== "" && calObj.operator !== "") {
      calObj.num2 = calObj.num2.concat(".");
    }
  }
}


function clearAll() {
  calObj.num1 = "";
  calObj.num2 = "";
  calObj.displayNum = "";
  calObj.operator = "";
  calObj.final = 0;
  display.textContent = calObj.displayNum;
}
allClearButton.addEventListener("click", clearAll);



function deleteLastInput() {
  if (calObj.num1 !== "" && calObj.operator === "" && calObj.num2 === "") {
    calObj.num1 = calObj.num1.substring(0, calObj.num1.length - 1);
    calObj.displayNum = `${calObj.num1}`;
    display.textContent = calObj.displayNum;
  } else if (
    calObj.num1 !== "" &&
    calObj.operator !== "" &&
    calObj.num2 === ""
  ) {
    calObj.operator = "";
    calObj.displayNum = `${calObj.num1}`;
    display.textContent = calObj.displayNum;
  } else if (
    calObj.num1 !== "" &&
    calObj.operator !== "" &&
    calObj.num2 !== ""
  ) {
    calObj.num2 = calObj.num2.substring(0, calObj.num2.length - 1);
    calObj.displayNum = `${calObj.num1}${calObj.operator}${calObj.num2}`;
    display.textContent = calObj.displayNum;
  }
}

del.addEventListener("click", deleteLastInput);
