var isNumber = (item) => {
  return !!item.match(/[0-9]+/);
}
var operate = (numberOne, numberTwo, operation) => {
  var first = parseInt(numberOne, 10);
  var second = parseInt(numberTwo, 10);
  if (operation === '+') {
    return (first + second).toString();
  }
  if (operation === '-') {
    return (first - second).toString();
  }
  if (operation === 'x') {
    return (first * second).toString();
  }
  if (operation === '÷') {
    return (first / second).toString();
  }
}

export default function calculate(obj, buttonName) {
  if (buttonName === 'AC') {
    return {
      total: null,
      last: null,
      operation: null,
    };
  }

  if (isNumber(buttonName)) {
    // If there is an operation, update last
    if (obj.operation) {
      if (obj.last) {
        return { last: obj.last + buttonName };
      }
      return { last: buttonName };
    }
    // If there is no operation, update last and clear the value
    if (obj.last) {
      return {
        last: obj.last + buttonName,
        total: null,
      };
    }
    return {
      last: buttonName,
      total: null,
    };
  }

  if (buttonName === '=') {
    if (obj.last && obj.operation) {
      return {
        total: operate(obj.total, obj.last, obj.operation),
        last: null,
        operation: null,
      };
    } else {
      // '=' with no operation, nothing to do
      return {};
    }
  }

  // save the operation and shift 'last' into 'total'
  return {
    total: obj.last,
    last: null,
    operation: buttonName,
  };
}