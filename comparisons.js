// we are going to create a password checker

//database ->holds information a bout the user
//form on the client side to login
//you ask them to input the password
//you collect the values and send them back to the server


const email = 'abc@gmail.com';
const password = '12345678';


// Define userEmail and userPassword
const userEmail = 'abc@gmail.com';
const userPassword = '12345678';


//a simple functin to check details are correct

if (email === userEmail && password === userPassword) {
    console.log('Login successful');
}
    else {
        console.log('Invalid email or Password ');

    }

    //calling the function
    function validateData(email, password) {
        if (email === userEmail && password === userPassword) {
            console.log('Login successful');
        }
        else {
            console.log('Invalid email or Password ');
    
        }
    }


    function validateData(email, password) {
        if (email === userEmail ) {
            console.log('Correct Email');
        }
        else {
            console.log('Invalid email  ');
    
        }
        if (password === userPassword) {
            console.log('Correct Password');
        }
        else {
            console.log('Invalid Password ');
        
        }
    }

    validateData('abc@gmail.com', '12345678');

    console.log('24' === 24); //true
    console.log('24' === 27); //false
    