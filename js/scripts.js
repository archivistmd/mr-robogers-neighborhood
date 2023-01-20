//business logic
function beepBoop(number) {
  let number = [];

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

// ui logic
window.onload = function() {
  document.querySelector("number-form").onsubmit = function(event) {
    event.preventDefault();
    const div = document.getElementById("u-array");
    const number1 = document.getElementById("number1").ariaValueMax;
    let p = document.createElement("display-array");
    let numberArray = beepBoop(number1)
    p.innerText = numberArray.join(", ");
  };

  function reset() {
    document.getElementById("number-form").reset();
    const p = document.getElementById("display-array");
    p.innerText = "";
  }
}