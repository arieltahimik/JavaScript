// if else

var result = 50;

if(result > 40) {
    console.log('You passed the test');
} else {
    console.log('You did not pass the test');
}

// if - else if - else

var place = 'first';
// var place = 'second';
// var place = 'third';
// var place = 'fourth';

if (place == 'first') {
    console.log('Gold');
} else if (place == 'second') {
    console.log('Silver');
} else if (place == 'third') {
    console.log('Bronze');
} else {
    console.log('No medal');
}

// switch statement
switch (place) {
    case 'first':
        console.log('Gold');
        break;
    case 'second':
        console.log('Silver');
        break;
    case 'third':
        console.log('Bronze');
        break;
    default:
        console.log('No medal');
}


var age = 21;

if (age >= 65) {
    console.log("You get your income from your pension");
} else if (age >= 18 && age < 65) {
    console.log("Each month you get a salary");
} else if (age < 18) {
    console.log("You get an allowance");
} else {
    console.log("The value of the age variable is not numerical");
}

var day = "Tuesday";
switch (day) {
    case 'Monday':
        console.log('Moon day');
        break;
    case 'Tuesday':
        console.log('Twos day');
        break;
    case 'Wednesday':
        console.log('Wed today');
        break;
    case 'Thursday':
        console.log("Thor's day");
        break;
    case 'Friday':
        console.log('Fry day');
        break;
    case 'Saturday':
        console.log('Shabbat shalom');
        break;
    case 'Sunday':
        console.log('Sun day');
        break;
    default:
        console.log('There is no such day');
}