// if statement
// let question = "Are you learning JavaScript? "
// let answer;
// answer = "A professional"
// if (answer == "Yes") {
//     console.log("That is wonderful")
// } else if(answer == "A professional"){
//     console.log("Woo, That is great")
// } else if(answer == "a newbie") {
//     console.log("That is a great step")
// }
// else {
//     console.log("You need learn JavaScript")
// }

// ?

// let allowedAccess;
// let age = 45;
// if(age > 18){
//      allowedAccess = true
// } else {
//     allowedAccess = false
// }

// console.log(allowedAccess)
let age = 14;
// let allowedAccess = age > 18 ? "You are allowed" : "You are not allowed"
let allowedAccess = (age < 10) ? "You are a kid" :
    (age < 18) ?  "You are not allowed" :
    (age > 50) ? "Hello Granpa" :
    "we need to know your age"

console.log(allowedAccess)

