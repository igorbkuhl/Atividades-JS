// take input
let data = document.getElementById("data").value;
let result = document.getElementById("result");

// program to check leap year
function checkLeapYear(year) {

    //three conditions to find out the leap year
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        result = (year + ' is a leap year');
    } else {
        result = (year + ' is not a leap year');
    }
}
const year = prompt('Enter a year:');

checkLeapYear(year);