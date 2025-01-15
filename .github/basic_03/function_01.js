// function printname(){
//     console.log("P")
//     console.log("R")
//     console.log("I")
//     console.log("N")
//     console.log("C")
//     console.log("E")

// }
// printname()

function addtwonumbers(num1,num2){
  //  let number = num1+num2
    return num1+num2
}
 const number =addtwonumbers(5,5)
 console.log("result is:",number)

// function loginmessage(username){
//     return `${username} just logged in`

// console.log(loginmessage("Prince"))
//}
//console.log(loginmessage("Prince"))


function message(username){
if(username===undefined){
    console.log( "Please enter the username")
    return
}
return `${username} just logged in`
}
console.log(message("Prince"));
