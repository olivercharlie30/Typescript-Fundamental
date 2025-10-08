// const InputNum1 = document.querySelector("#input1") as HTMLInputElement;
// const InputNum2 = document.querySelector("#input2") as HTMLInputElement;
// const SubmitButton = document.querySelector("button");
// function addNumbers(num1 :number, num2 :number){
//     return num1 - num2;
// };
// SubmitButton?.addEventListener("click", ()=> {
//     console.log(`The Number: ${addNumbers(parseInt(InputNum1.value), parseInt(InputNum2.value))} `);
// });
// function syntaxFunction(number1 :number, number2 :number, ShowResult :boolean, message :string) {
//     const result = number1 * number2;
//     if(ShowResult){
//         console.log(`${message} ${result}`);
//     }else{
//         console.log("error result...");
//     }
// }
// const Num1 = 53;
// const Num2 = 35.25;
// const ShowResult = true;
// const message = "Compute the number:";
// console.log(syntaxFunction(Num1, Num2, ShowResult, message));
// let number1 :number;
// number1 = 5;
// let number2 :number;
// number2 = 10;
// console.log(number1 + number2);
// enum access {ADMIN = 'pass123', MODERATOR = 12345, USER = 111}
// const student :{
//     name : string;
//     age : number;
//     gender : string[];
//     habbit : string[];   //array
//     //access : [number, string];   // same any[] 
//     access : access;
// } = {
//     name : "oliver",
//     age : 30,
//     gender : ["male", "female"],
//     habbit : ["motorcycle ride", "coding"],
//    // access : [10, "allowed num $ string"]
//    access : access.ADMIN
// }
// console.log(student.name);
// console.log(student.gender[0]);
// console.log(student.habbit[0]);
// if(student.access === 'pass123')
//     {
//     console.log(`I'M ADMIN`);
// }else{
//     console.log("Sign off");
// }
//UNION TYPES
function addOrCombines(data1, data2) {
    var result;
    if (typeof data1 === "number" && typeof data2 === "number") {
        result = data1 + data2;
    }
    else {
        result = data1.toString() + data2.toString();
    }
    return result;
}
var combineNumbers = addOrCombines(10, 5);
console.log(combineNumbers);
var combineString = addOrCombines("oliver", "zachary earl");
console.log(combineString);
