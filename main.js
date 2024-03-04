//100 Days Challange (Governer Initiative)
//Question No: 2
var personName = "Arsalan";
console.log("Hello ".concat(personName, ", would you like to learn some TypeScript today?"));
//Question No: 3
var personName_1 = "arsalan";
console.log("To UpperCase: ".concat(personName_1.toUpperCase()));
console.log("To LowerCase: ".concat(personName_1.toLowerCase()));
console.log("To TitleCase: ".concat(personName_1.charAt(0).toUpperCase() + personName_1.slice(1).toLowerCase()));
//Question No: 4
console.log("Albert Einstein once said, \"A person who never made a mistake never tried anything new.\"");
//Question No: 5
var famous_person = "Albert Einstein";
var message = "A person who never made a mistake never tried anything new.";
console.log("".concat(famous_person, " once said, \"").concat(message, "\""));
//Question No: 6
var trim_name = "\t\nArsalan\t\n";
console.log(trim_name);
console.log(trim_name.trim());
//Question No: 7 & 8
console.log(5 + 3); //Addition
console.log(10 - 2); //Subtraction
console.log(2 * 4); //Multiplication
console.log(16 / 2); //Division
//Question No: 9
var favoriteNumber = 7;
console.log("My favorite number is ".concat(favoriteNumber, "."));
//Question No: 10
// This is 100 days challange of TypeScript with practice/exercise questions.
//Question No: 11
var friendsName1 = ["Arsalan", "Ahsan", "Ali", "Hamza"];
for (var i = 0; i < friendsName1.length; i++) {
    console.log(friendsName1[i]);
}
//Question No: 12
var friendsName2 = ["Arsalan", "Ahsan", "Ali", "Hamza"];
for (var i = 0; i < friendsName2.length; i++) {
    console.log("Hello ".concat(friendsName2[i], ", would you like to learn some TypeScript today?"));
}
//Question No: 13
var transportation = ["Car", "Bike", "Motor Cycle", "Bus"];
for (var i = 0; i < transportation.length; i++) {
    console.log("I would like to own a ".concat(transportation[i], "."));
}
//Question No: 14
var guestList = ["Arsalan", "Ahsan", "Ali", "Hamza"];
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ", you are cordially invited to dinner, we would honoured to have you!"));
}
