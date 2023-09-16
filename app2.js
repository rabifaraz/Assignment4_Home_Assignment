// Chapter 17 - 20 (for Loops) Home Assignment

// Q1: 

// for(i=1; i<=10; i++){}

// Q2:

// for(i=1; i<=12; i++){
//     document.write(i + "<br>");
// }

// Q3:

// for (var i = 0; i <= 4; i++){}

// Q4:

// for(myloop = 0; myloop < 100; myloop++){}

// Q5:

// for(i=0; i>-3; i--){}

// Q6:

// var elements = arrayName.length;

// Q7:

// var flag = true;

// Q8:

// for (var i = 0; i < pets.length; i++) {}

// Q9:

// for(i=0; i<=10; i++){
//     if(i === 1){
//         alert(i);
//         break;
//     }
// }

// Q10:

// var userNames = ["Asad", "Abbas", "Ali", "Hamza", "Faraz"];
// var firstName = prompt("Please Enter First Name.");
// var match = false;

// for (var i = 0; i < userNames.length; i++) {
//   if (firstName === userNames[i]) {
//     match = true;
//     break;
//   }
// }

// if (match === true) {
//   alert("Please Enter, " + firstName + "!");
// } else {
//   alert("Please write the correct user name.");
// }

// Q11:

// var list = ["Asad", "Abbas", "Ali", "Hamza", "Faraz"];
// var userInput = prompt("Please Enter First Name.");
// var matchFound = false;

// for (var i = 0; i < list.length; i++) {
// if (userInput === list[i]) {
// matchFound = true; 
// break;}
// };
// if(matchFound === true){
//     alert("Match found");
// }else{
//     alert("Sorry! Match Not found");
// }

// Q12:

var firstArr = ["a", "b", "c", "d", "e", "f"]; 
var secondArr = [1, 2, 3, 4, 5, 6];

for (i=0; i<firstArr.length; i++){
    for(a=0; a<secondArr.length; a++){
        document.write(firstArr[i]+secondArr[a] + "<br>");
    }
}