const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", handleInput);

function handleInput() {
  // Get the input element and its value
  const input = document.getElementById("numberInput");
  const inputValue = parseInt(input.value);

  // Check if the input is a positive number
  if (inputValue < 0) {
    document.getElementById("output").innerHTML =
      "Please enter a positive number.";
    return;
  }

  // Determine the next three even or odd numbers based on the input
  let nextNumbers = [];
  if (inputValue % 2 === 0) {
    for (let i = 1; i <= 3; i++) {
      nextNumbers.push(inputValue + i * 2);
    }
  } else {
    for (let i = 1; i <= 3; i++) {
      nextNumbers.push(inputValue + (i * 2 ));
    }
  }

  // Show the next three even or odd numbers to the user
  document.getElementById("output").innerHTML = `The next three ${
    inputValue % 2 === 0 ? "even" : "odd"
  } numbers after ${inputValue} are: ${nextNumbers.join(", ")}`;
}
