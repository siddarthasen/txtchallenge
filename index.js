/*
  Validates the numbers then orders them.
*/
function validateOrder() {
  var num1, num2, num3, msg;
  var num1 = document.getElementById("num1").value;
  if (setMessage(checkNum(num1), "1")) {
    return;
  }

  var num2 = document.getElementById("num2").value;
  if (setMessage(checkNum(num2), "2")) {
    return;
  }
  var num3 = document.getElementById("num3").value;
  if (setMessage(checkNum(num3), "3")) {
    return;
  }
  order(num1, num2, num3);
}

/*
  Checks if input NUM is a number.
  0: ok; 1: null; 2: not a number.
*/
function checkNum(num) {
  if (num == null || num.length == 0) {
    return 1;
  } else if (!/^\d+$/.test(num)) {
    return 2;
  }
  return 0;
}

/*
  Sets message for the INPUT based on error NUM.
*/
function setMessage(num, input) {
  if (num == 1) {
    document.getElementById("msg").innerText = "Input " + input + " is null";
    return true;
  } else if (num == 2) {
    document.getElementById("msg").innerText = "Input " + input + " is not a number";
    return true;
  }
  return false;
}

/*
  Orders the 3 numbers.
*/
function order(num1, num2, num3) {
  var arr = [parseInt(num1), parseInt(num2), parseInt(num3)];
  arr.sort(function(a,b) { return a - b; });
  document.getElementById("msg").innerText = arr[0] + ", " + arr[1] + ", " + arr[2];
}