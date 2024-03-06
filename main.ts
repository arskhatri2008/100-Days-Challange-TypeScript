//100 Days Challange (Governer Initiative)

//Question No: 2
let personName : string = "Arsalan"
console.log(`Hello ${personName}, would you like to learn some TypeScript today?`)

//Question No: 3
let personName_1: string = "arsalan"
console.log(`To UpperCase: ${personName_1.toUpperCase()}`)
console.log(`To LowerCase: ${personName_1.toLowerCase()}`)
console.log(`To TitleCase: ${personName_1.charAt(0).toUpperCase()+personName_1.slice(1).toLowerCase()}`)

//Question No: 4
console.log(`Albert Einstein once said, "A person who never made a mistake never tried anything new."`);

//Question No: 5
let famous_person : string = "Albert Einstein"
let message : string = "A person who never made a mistake never tried anything new."
console.log(`${famous_person} once said, "${message}"`)

//Question No: 6
let trim_name = "\t\nArsalan\t\n"
console.log(trim_name);
console.log(trim_name.trim());

//Question No: 7 & 8
console.log(5+3); //Addition
console.log(10-2); //Subtraction
console.log(2*4); //Multiplication
console.log(16/2); //Division

//Question No: 9
let favoriteNumber : number = 7
console.log(`My favorite number is ${favoriteNumber}.`)

//Question No: 10
// This is 100 days challenge of TypeScript with practice/exercise questions.

//Question No: 11
let friendsName1 : string[] = ["Arsalan", "Ahsan", "Ali", "Hamza"]
for (let i = 0; i < friendsName1.length; i++) {
    console.log(friendsName1[i])
}

//Question No: 12
let friendsName2 : string[] = ["Arsalan", "Ahsan", "Ali", "Hamza"]
for (let i = 0; i < friendsName2.length; i++) {
    console.log(`Hello ${friendsName2[i]}, would you like to learn some TypeScript today?`)
}

//Question No: 13
let transportation : string[] = ["Car", "Bike", "Motor Cycle", "Bus"]
for (let i = 0; i < transportation.length; i++) {
    console.log(`I would like to own a ${transportation[i]}.`)
}

//Question No: 14
let guestList : string[] = ["Arsalan", "Ahsan", "Ali", "Hamza"]
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, you are cordially invited to dinner, we would honoured to have you!`)
}

//Question No: 15
let guestList1 : string[] = ["Arsalan", "Ahsan", "Ali", "Hamza"] //Guest select as per previous example
for (let i = 0; i < guestList1.length; i++) {
    console.log(`Dear ${guestList1[i]}, you are cordially invited to dinner, we would honoured to have you!`)
}

//Assume Arsalan can't make it to dinner
let guestUnableToAttend : string = "Arsalan"

//Print a statement saying about guest who can't make it to dinner
console.log(`Unfortunately ${guestUnableToAttend} can't make it to the dinner`)

//Modify the list accordingly, lets replace the new name with that guest who can't make it.
let guestReplacement : string = "Ahmed"
guestList1[guestList1.indexOf(guestUnableToAttend)] = guestReplacement

//Print the new list of guests
for (let i = 0; i < guestList1.length; i++) {
    console.log(`Dear ${guestList1[i]}, you are cordially invited to dinner, we would honoured to have you!`)
}


//Question No: 16
//You just found a bigger dinning table, so now more space is available now thing more 3 guest to invite them in to the dinner.
for (let i = 0; i < guestList1.length; i++) {
    console.log(`Dear ${guestList1[i]} I have found a bigger dinning table.`)
}

//Add new guest in the beginning of the list
let newGuestAtBeginning : string = "Kashan"
guestList1.unshift(newGuestAtBeginning)
console.log(guestList1)

//Add new guest in the middle of the list
let newGuestAtMiddle : string = "Usman"
guestList1.splice(Math.floor(guestList1.length/2), 0, newGuestAtMiddle)
console.log(guestList1);

//Add new guest in the end of the list
let newGuestAtEnd : string = "Fayyaz"
guestList1.push(newGuestAtEnd)
console.log(guestList1);

//Print new invitations
for (let i = 0; i < guestList1.length; i++) {
    console.log(`Dear ${guestList1[i]}, you are cordially invited to dinner, we would honoured to have you!`)
}

//Question No: 17
//You just found out that your new table won't arrive on time for the dinner, now you have space for only two guests.
for (let i = 0; i < guestList1.length; i++) {
    console.log(`Dear ${guestList1[i]} unfortunately my dinning table won't arrive on time for the dinner, now i have only space for two guests.`)
}

//Remove guests until only two names remain
while (guestList1.length > 2) {
    let removedGuest = guestList1.pop()
    console.log(`Dear ${removedGuest} Sorry we can't invite you to dinner.`);
}

//Print message to remaining guests
for (let i = 0; i < guestList1.length; i++) {
    console.log(`Dear ${guestList1[i]} you are still invited to dinner.`);
}