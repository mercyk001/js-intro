const name = 'Masela';

const hobby = 'Cooking';

const age = 18;
if (age >= 16) {
  console.log('You are allowed to cooking gas');
} else {
    console.log('You are not allowed to use cooking gas');  
}


console.log(name);
console.log(hobby);
console.log(age);


// create a program that outputs the day of week when given a number between 1 and 7,
//  use the neted if else statements.
//day 1 = Sunday
//day 2 = Monday
//day 3 = Tuesday
//day 4 = Wednesday
//day 5 = Thursday
//day 6 = Friday
//day 7 = Saturday
// if the number is not between 1 and 7, ouput a message that says out of bounds exception(1-7)

function getDayOfWeek(dayNumber) {
    if (dayNumber === 1) {
        console.log("Sunday");
    } else {
    if (dayNumber === 2) {
    console.log("Monday");
     } else {
    if (dayNumber === 3) {
    console.log("Tuesday");
    } else {
     if (dayNumber === 4) {
    console.log("Wednesday");
     } else {
     if (dayNumber === 5) {
     console.log("Thursday");
     } else {
     if (dayNumber === 6) {
     console.log("Friday");
    } else {
      if (dayNumber === 7) {
      console.log("Saturday");
     } else {
     console.log("Out of bounds exception (1-7)");
     }
     }
     }
     }
     }
    }
    }
}

// calling the function
getDayOfWeek(5); 

getDayOfWeek(15); 


//takeway- convert from nested if else to switch case statement
//takeaway2 - use the ternary operator to achieve the same output.
