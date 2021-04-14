function main() {
  const numbersStrings = document.querySelectorAll('.number');
  const operators = document.querySelectorAll('.operator');
  const equals = document.querySelector('.equals');
  const clear = document.querySelector('.clear-all');
  const deleteBtn = document.querySelector('.delete');
  const previousOperand = document.querySelector('.previous-operand');
  const currentOperand = document.querySelector('.current-operand');
  let mathSymbol = document.querySelector('.math-symbol');

  numbersStrings.forEach((numberString) => {
    numberString.addEventListener('click', insertNumberStringToUi);

    function insertNumberStringToUi() {
      currentOperand.innerHTML += numberString.innerHTML;
    }
  });

  operators.forEach((operator) => {
    operator.addEventListener('click', insertOperatorToUi);
    function insertOperatorToUi() {
      // setTimeout as a solution to delay setting operator to mathSymbol innerHTML so multiple math operations work normally//
      setTimeout(() => {
        mathSymbol.innerHTML = operator.innerHTML;
      }, 0.1);

      if (previousOperand.innerHTML == '') {
        previousOperand.innerHTML = currentOperand.innerHTML;
        currentOperand.innerHTML = '';
      }
      if (previousOperand.innerHTML != '' && currentOperand.innerHTML != '') {
        getResult();
        currentOperand.innerHTML = '';
      }
    }
  });
  function getResult() {
    switch (mathSymbol.innerHTML) {
      case '+':
        previousOperand.innerHTML =
          parseFloat(previousOperand.innerHTML) +
          parseFloat(currentOperand.innerHTML);
        break;
      case '-':
        previousOperand.innerHTML =
          parseFloat(previousOperand.innerHTML) -
          parseFloat(currentOperand.innerHTML);
        break;
      case '×':
        previousOperand.innerHTML =
          parseFloat(previousOperand.innerHTML) *
          parseFloat(currentOperand.innerHTML);
        break;
      case '÷':
        previousOperand.innerHTML =
          parseFloat(previousOperand.innerHTML) /
          parseFloat(currentOperand.innerHTML);
        break;
      default:
        return;
    }
  }

  deleteBtn.addEventListener('click', deleteOutput);
  function deleteOutput() {
    const originalCurrentOperand = currentOperand.innerHTML;
    const modifiedCurrentOperand = originalCurrentOperand.slice(0, -1);
    currentOperand.innerHTML = modifiedCurrentOperand;
  }
  clear.addEventListener('click', clearInput);
  function clearInput() {
    previousOperand.innerHTML = '';
    currentOperand.innerHTML = '';
    mathSymbol.innerHTML = '';
  }

  equals.addEventListener('click', getFinalResult);

  function getFinalResult() {
    switch (mathSymbol.innerHTML) {
      case '+':
        currentOperand.innerHTML =
          parseFloat(previousOperand.innerHTML) +
          parseFloat(currentOperand.innerHTML);
        break;
      case '-':
        currentOperand.innerHTML =
          parseFloat(previousOperand.innerHTML) -
          parseFloat(currentOperand.innerHTML);
        break;
      case '×':
        currentOperand.innerHTML =
          parseFloat(previousOperand.innerHTML) *
          parseFloat(currentOperand.innerHTML);
        break;
      case '÷':
        currentOperand.innerHTML =
          parseFloat(previousOperand.innerHTML) /
          parseFloat(currentOperand.innerHTML);
        break;
      default:
        return;
    }
    previousOperand.innerHTML = '';
    mathSymbol.innerHTML = '';
  }
}

main();
