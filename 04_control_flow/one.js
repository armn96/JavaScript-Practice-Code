//if
//0)
// const isUserLoggedIn = true
// if(isUserLoggedIn == false){
//     console.log("Logged IN");
// }

// //   "===" triple equals checks data type

// if (2==="2"){
//     console.log("Executed")
// }
// else{
//     console.log("Not executed");
// }



// (<, >, <=, >=, ==, !=, !==, ===, ||)

//1)

// const temperature = 41

// if(temperature < 50){
//     console.log("Less than 50");
// }
// else{
//     console.log("Temperature is Greater than 50");
// }

//2) scope
// const score = 200

// if (score > 100){
//     const power = "Fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


//3)
// const balance = 10000

// // if (balance > 500) console.log("test"), console.log('Test2');  /don't


//4)
// //nesting
// const balance = 10000
// if (balance < 500){
//     console.log("Less than")
// }
// else if (balance < 750){
//     console.log("Less than 750")
// }
// else if(balance < 900){
//     console.log("Less Than 900")
// }
// else{
//     console.log("Less Than 1200");
// }


//5)

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if((userLoggedIn && debitCard) && (loggedInFromGoogle || loggedInFromEmail)) {
    console.log("Allowed to buy the course");
}
else{
    console.log("Not Allowed");
}



