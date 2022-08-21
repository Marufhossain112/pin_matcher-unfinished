// generate pin
// document.getElementById("generate-pin").addEventListener("click", function () {
//     // display pin
//     const displayPin = document.getElementById('display-pin');
// });

// function getPin(generatePin(pin)) {
//   const pinString = pin + "";
//   console.log(pinString);
// }
function generatePin() {
  const pin = Math.round(Math.random() * 10000);
  return pin;
}
const secretPin = generatePin();
// console.log(secretPin);

function getPin(secretPin) {
  // console.log(secretPin);
  const pinString = secretPin + "";
  // console.log(typeof pinString);
}
getPin(secretPin);
// ;
// getPin();
