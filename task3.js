// Calculate the Number of Days Between Two Dates
let date1 = "11/01/2021";
let date2 = "8/05/2022";

let newdate1 = new Date("11/01/2021");
let newdate2 = new Date("8/05/2022");

// expected outcome: 276

// Calculate the time difference in milliseconds
let timeDifference = newdate2.getTime() - newdate1.getTime();

let dayDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
console.log(`Number of days between date1 and date2 : ${dayDifference}`);
