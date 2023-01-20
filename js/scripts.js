//business logic
function beepBoop(number) {
  let number = [];

  for (let i = 0; i <= number; i++) {
    if (i === 1) {
      let i = "Beep!";
      numbers.push(i);
    } else if (i === 2) {
      let i = "Boop!";
      numbers.push(i);
    } else if (i === 3) {
      let i = "Won't you be my neighbor?";
      numbers.push(i);
    } else {
      numbers.push(i);
    };
  }
}

// ui logic

window.onload = function() {
  document.querySelector("form#number-form").onsubmit = function(event) {
    event.preventDefault();
  };
};