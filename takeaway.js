//takeway- convert from nested if else to switch case statement
//takeaway2 - use the ternary operator to achieve the same output.

//taking from the control-flow, the info on days of the week


function getDayOfWeek(dayNumber) {
    switch (dayNumber) {
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("Wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        case 7:
            console.log("Saturday");
            break;
        default:
            console.log("Out of bounds exception (1-7)");
    }
}

getDayOfWeek(5);
getDayOfWeek(15);



// 2. Using the ternary operator to achieve the same output

const prompt = require('prompt-sync')();

function dayOfWeek(day) {
    const result = (day === 1) ? "Sunday" :
                   (day === 2) ? "Monday" :
                   (day === 3) ? "Tuesday" :
                   (day === 4) ? "Wednesday" :
                   (day === 5) ? "Thursday" :
                   (day === 6) ? "Friday" :
                   (day === 7) ? "Saturday" :
                   "Out of bounds exception (1-7)";
    console.log(result);
}

const dayNumber = parseInt(prompt("Enter a number between 1 and 7: "), 10);
dayOfWeek(dayNumber);


dayOfWeek(5);
dayOfWeek(15);
