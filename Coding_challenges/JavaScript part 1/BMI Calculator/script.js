"user strict";
const resultMessage = function (message) {
  document.querySelector(".display").textContent = message;
};
// Adding event listener to the button
document.querySelector(".bodyMassIndex").addEventListener("click", function () {
  // Grabbing the values from the inputs
  const fName = document.querySelector("#name").value;
  const bodyMass = document.querySelector("#mass").value;
  const bodyHeight = document.querySelector("#height").value;
  const resultBMI = Math.round(bodyMass / (bodyHeight * bodyHeight));
  resultMessage(`${fName} your Body Mass Index is ${resultBMI}`);
});
