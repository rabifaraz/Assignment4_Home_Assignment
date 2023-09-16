
// Class Activity Chapter 17 -20 ARRAYS AND LOOP

// Q3:

// for (i=0; i<=10; i++){
// document.write(i + "<br>");
// }

// Q4:

// var userTable = +prompt("Please Enter no to generate Table");
// var cycles = +prompt("Enter the length No.")
// for(a=0; a<=cycles; a++){
// document.write(userTable + " X " + a + " = " + (userTable*a) + "<br>");
// }

// Q5:

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for(i=0; i<=fruits.length -1; i++){
//     document.write("<h3>" + fruits[i] + "<br>");
// }

// for(i=0; i<=fruits.length -1; i++){
//     document.write("Element at index " + i + " is " + fruits[i] + "<br>");
// }

// Q6:

// document.write("<h1>Counting:</h1>")
// for(i=1; i<=15; i++){
// document.write(i +  ", ");
// }
// document.write("<h1>Reverse Counting:</h1>")
// for(i=10; i>=1; i--){
// document.write(i +  ", ");
// }
// document.write("<h1>Even:</h1>")
// for(i=0; i<=20; i+=2){
// document.write(i +  ", ");
// }
// document.write("<h1>Odd:</h1>")
// for(i=1; i<=20; i+=2){
// document.write(i +  ", ");
// }
// document.write("<h1>Series:</h1>")
// for(i=2; i<=20; i+=2){
// document.write(i +  "k, ");
// }

// Q7:

// var bakeryItem = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Search an item in Bakery!");
// var found = false;

// for (var i = 0; i < bakeryItem.length; i++) {
//     if (userInput === bakeryItem[i]) {
//         document.write(userInput + " is available at index " + i + " in our bakery");
//         found = true;
//         break;
//     }
// }

// if (!found) {
//     document.write("We are Sorry!!! " + userInput + " is not available in our bakery");
// }

// Q8:

// var numbers = [24, 53, 78, 91, 12];
// var max = numbers[0];


// for (var i = 0; i < numbers.length; i++) {
//     if (numbers[i] > max) {
//         max = numbers[i];
//     }
// }
// document.write("<h2>Array Items: "+ numbers[0] + ", " +  numbers[1] + ", " + numbers[2] + ", " + numbers[3] + ", " + numbers[4] + " " +"<br>The largest number is: " + max);

// Q9:

// var numbers = [24, 53, 78, 91, 12];
// var min = numbers[0];


// for (var i = 0; i < numbers.length; i++) {
//     if (numbers[i] < min) {
//         min = numbers[i];
//     }
// }
// document.write("<h2>Array Items: "+ numbers[0] + ", " +  numbers[1] + ", " + numbers[2] + ", " + numbers[3] + ", " + numbers[4] + " " +"<br>The largest number is: " + min);

// Q10: 

for(i=0; i<=100; i+=5){
document.write(i +  ", ");
}