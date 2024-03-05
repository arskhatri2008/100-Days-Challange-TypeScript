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
// This is 100 days challenge of TypeScript with practice/exercise questions.
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
//Question No: 15
var guestList1 = ["Arsalan", "Ahsan", "Ali", "Hamza"]; //Guest select as per previous example
for (var i = 0; i < guestList1.length; i++) {
    console.log("Dear ".concat(guestList1[i], ", you are cordially invited to dinner, we would honoured to have you!"));
}
//Assume Arsalan can't make it to dinner
var guestUnableToAttend = "Arsalan";
//Print a statement saying about guest who can't make it to dinner
console.log("Unfortunately ".concat(guestUnableToAttend, " can't make it to the dinner"));
//Modify the list accordingly, lets replace the new name with that guest who can't make it.
var guestReplacement = "Ahmed";
guestList1[guestList1.indexOf(guestUnableToAttend)] = guestReplacement;
//Print the new list of guests
for (var i = 0; i < guestList1.length; i++) {
    console.log("Dear ".concat(guestList1[i], ", you are cordially invited to dinner, we would honoured to have you!"));
}
//Question No: 16
//You just found a bigger dinning table, so now more space is available now thing more 3 guest to invite them in to the dinner.
for (var i = 0; i < guestList1.length; i++) {
    console.log("Dear ".concat(guestList1[i], " I have found a bigger dinning table."));
}
//Add new guest in the beginning of the list
var newGuestAtBeginning = "Kashan";
guestList1.unshift(newGuestAtBeginning);
console.log(guestList1);
//Add new guest in the middle of the list
var newGuestAtMiddle = "Usman";
guestList1.splice(Math.floor(guestList1.length / 2), 0, newGuestAtMiddle);
console.log(guestList1);
//Add new guest in the end of the list
var newGuestAtEnd = "Fayyaz";
guestList1.push(newGuestAtEnd);
console.log(guestList1);
//Print new invitations
for (var i = 0; i < guestList1.length; i++) {
    console.log("Dear ".concat(guestList1[i], ", you are cordially invited to dinner, we would honoured to have you!"));
}
//Question No: 17
//You just found out that your new table won't arrive on time for the dinner, now you have space for only two guests.
for (var i = 0; i < guestList1.length; i++) {
    console.log("Dear ".concat(guestList1[i], " unfortunately my dinning table won't arrive on time for the dinner, now i have only space for two guests."));
}
//Remove guests until only two names remain
for (var i = 2; i < guestList1.length; i++) {
    console.log("Dear ".concat(guestList1[i], " Sorry we can't invite you to dinner."));
}
// if (guestList1.length >= 2) {
//     let removedGuest = guestList1.pop()
//     console.log(`Dear ${removedGuest} Sorry we can't invite you to dinner.`);
// }
