var InputNum1 = document.querySelector("#input1");
var InputNum2 = document.querySelector("#input2");
var SubmitButton = document.querySelector("button");
function addNumbers(num1, num2) {
    return num1 - num2;
}
;
SubmitButton === null || SubmitButton === void 0 ? void 0 : SubmitButton.addEventListener("click", function () {
    console.log("The Number: ".concat(addNumbers(parseInt(InputNum1.value), parseInt(InputNum2.value)), " "));
});
