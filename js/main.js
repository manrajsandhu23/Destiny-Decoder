const dob = document.querySelector("#dob");
const luckyNumber = document.querySelector("#luckyNumber");
const output = document.querySelector("#output");
const submit = document.querySelector("#sub");

submit.addEventListener("click", clickHandler);

function clickHandler() {
  console.log("btn clicked");

  let inputDate = dob.value;
  let inputFinal = inputDate.replaceAll("-", "");
  let finalNumber = luckyNumber.value;
  let totalSum = 0;

  for (let i = 0; i < inputFinal.length; i++) {
    let check = parseInt(inputFinal[i]);
    totalSum += check;
  }
  let isLuckyNO = totalSum % finalNumber;
  if (isLuckyNO == 0) {
    console.log("You are Lucky My Friend");
    output.innerText = "You are Lucky My Friend";
  } else {
    console.log("No", finalNumber, "is not that lucky i guess");
    output.innerText = "No " + finalNumber + " is not that lucky i guess";
  }
}
