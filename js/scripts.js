//business logic
function beepBoop(number) {
  let numbers = [];

  for (let i = 0; i <= number; i++) {
    if (i.toString().includes(1)) {
      let i = "Beep!";
      numbers.push(i);
    } else if (i.toString().includes(2)) {
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
window.addEventListener("load", function() {
  document.getElementById("number-form").addEventListener("submit", submitForm);
  document.getElementById("reset").addEventListener("click", resetScreen)
});

  function handleFormSubmission(event) {
    event.preventDefault();
    const number1 = document.getElementById("number1").value;
    const  p = document.getElementById("array-display");
    let numbersArray = beepBoop(number1);
    p.innerText = numbersArray.join(", ");
  };

  function reset() {
    document.getElementById("number-form").reset();
    const p = document.getElementById("array-display");
    p.innerText ="";
  }