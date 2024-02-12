// Object for initial value
const calcObj = {
  num1: "",
  num2: "",
  operator: "",
  displayNum: "",
};

let display = document.querySelector(".display-input");
display.textContent = calcObj.num1;

let buttons = document.querySelectorAll(".buttons");
buttons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    let element = event.target;
    if (
      element.classList.contains("buttons") &&
      element.classList.contains("numbers")
    ) {
      console.log("You clicked a num btn");
      if (calcObj.num1 === "0" || calcObj.num1 === "00") {
        calcObj.num1 = calcObj.num1
          .substring(0, "")
          .concat(`${element.textContent}`);
          characterOnDisplay();
      } else if (calcObj.num2 === "" && calcObj.operator === "") {
        calcObj.num1 = calcObj.num1.concat(`${element.textContent}`);
        characterOnDisplay();
      } else if (calcObj.num1 !== "" && calcObj.operator !== "") {
        calcObj.num2 = calcObj.num2.concat(`${element.textContent}`);
        characterOnDisplay();
      }
    } else if (
      element.classList.contains("buttons") &&
      element.classList.contains("operator")
    ) {
      if (calcObj.operator !== "") {
        getOperation(calcObj.num1, calcObj.num2);
        stateAfterEveryOperation();
      } else {
        console.log("You clicked a operator btn");
        calcObj.operator = calcObj.operator
          .substring(0, "")
          .concat(`${element.textContent}`);
        characterOnDisplay();
      }
    } else if (
      element.classList.contains("buttons") &&
      element.id === "equals-to"
    ) {
      console.log("You clicked a equals-to btn");
      getOperation(calcObj.num1, calcObj.num2);
      stateAfterEveryOperation();
    } else if (
      element.classList.contains("buttons") &&
      element.classList.contains("delete")
    ) {
      if (element.id === "all-clear") {
        clearAll();
      } else {
        deleteLastInput();
        characterOnDisplay();
      }
    }
  });
});

function getOperation(n1, n2) {
  if (calcObj.operator === "+") {
    return Number(n1) + Number(n2);
  } else if (calcObj.operator === "-") {
    return Number(n1) - Number(n2);
  } else if (calcObj.operator === "*") {
    return Number(n1) * Number(n2);
  } else if (calcObj.operator === "÷") {
    return Number(n1) / Number(n2);
  } else if (calcObj.operator === "%") {
    return (Number(n1) * Number(n2)) / 100;
  }
}

function stateAfterEveryOperation() {
  calcObj.num1 = `${getOperation(calcObj.num1, calcObj.num2)}`;
  calcObj.num2 = "";
  calcObj.operator = "";
  calcObj.displayNum = `${calcObj.num1}`;
  display.textContent = calcObj.displayNum;
}

function clearAll() {
  calcObj.num1 = "";
  calcObj.num2 = "";
  calcObj.displayNum = "";
  calcObj.operator = "";
  display.textContent = calcObj.displayNum;
}

function deleteLastInput() {
  if (calcObj.num1 !== "" && calcObj.operator === "" && calcObj.num2 === "") {
    calcObj.num1 = calcObj.num1.substring(0, calcObj.num1.length - 1);
  } else if (
    calcObj.num1 !== "" &&
    calcObj.operator !== "" &&
    calcObj.num2 === ""
  ) {
    calcObj.operator = "";
  } else if (
    calcObj.num1 !== "" &&
    calcObj.operator !== "" &&
    calcObj.num2 !== ""
  ) {
    calcObj.num2 = calcObj.num2.substring(0, calcObj.num2.length - 1);
  }
}

function characterOnDisplay() {
  calcObj.displayNum = `${calcObj.num1}${calcObj.operator}${calcObj.num2}`;
  display.textContent = calcObj.displayNum.trim();
}

function doWhenStartingZero() {
  if (calcObj.num1 === "0" || calcObj.displayNum === "0") {
    calcObj.num1 = calcObj.num1
      .substring(0, "")
      .concat(`${element.textContent}`);
  }
}
