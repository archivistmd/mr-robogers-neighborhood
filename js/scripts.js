//business logic
function beepBoop(number) {
  let number = [];

  for (let i = 0; i <= number; i++) {
    array.push(i);
    if (array[i] === 1) {
      let oneIndex = array.indexOf(1);
      array.splice(oneIndex, 1, "Beep!")
    }
  }
  return array;
}