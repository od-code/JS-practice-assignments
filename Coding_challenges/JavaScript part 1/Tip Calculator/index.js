"user strict";
const resultMessage = function (message) {
  document.querySelector(".display").textContent = message;
};
//Adding an event listener to the button
document.querySelector(".tip").addEventListener("click", function () {
  //Get the value from the input fields
  const billPaid = document.querySelector("#bill").value;
  const tipToPay =
    billPaid >= 50 && billPaid <= 300 ? billPaid * 0.15 : billPaid * 0.2;
  resultMessage(
    `The tip was ${tipToPay} and the total value to be paid is ${
      billPaid + tipToPay
    }`
  );
});
