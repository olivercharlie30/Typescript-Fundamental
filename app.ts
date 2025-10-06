const InputNum1 = document.querySelector("#input1") as HTMLInputElement;
const InputNum2 = document.querySelector("#input2") as HTMLInputElement;
const SubmitButton = document.querySelector("button");

function addNumbers(num1 :number, num2 :number){

    return num1 - num2;
};

SubmitButton?.addEventListener("click", ()=> {
    console.log(`The Number: ${addNumbers(parseInt(InputNum1.value), parseInt(InputNum2.value))} `);
});

