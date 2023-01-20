//business logic
function beepBoop(number) {
  let numbers = [];

  for (let i = 0; i <= number; i++) {
    if (i.toString().includes(1) && !i.toString(2) && !i.toString(3)) {
      let i = "Beep!";
      numbers.push(i);
    } else if (i.toString().includes(2) && !i.toString(3)) {
      let i = "Boop!";
      numbers.push(i);
    } else if (i.toString().includes(3)) {
      let i = "Won't you be my neighbor?";
      numbers.push(i);
    } else {
      numbers.push(i);
    };
  }
  return numbers;
}

function beepBoopReverse(n) {
  const numbers = beepBoop(n);
  const reverseNumbers = numbers.reverse();
  return reverseNumbers;
}

// ui logic
window.addEventListener("load", function() {
  document.getElementsById("number-form").addEventListener("submit", submitForm);
  this.document.getElementById("reset").addEventListener("click", clearScreen);
});

  function submitForm(event) {
    event.preventDefault();
    const number1 = document.getElementById("number1").value;
    let p = document.createElement("display-array");
    let numberArray = beepBoop(number1);
  };

  function reset() {
    const p = document.getElementById("display-array");
    p.innerText = "";
    document.getElementById("number-form").reset();
  }