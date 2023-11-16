// THIS

const user = {
    username : 'arman',
    price : 1000,
    
    welcomeMessage : function(){
        console.log(`${this.username} ,welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = 'sam'
// user.welcomeMessage()

// console.log(this);


// function chai(){
//     let username = 'Arman'
//     console.log(this.username);         // In inner scope function, ''this'', will not work 
// }

// chai()


// const chai = function(){
//     let username = 'Arman'
//     console.log(this.username);
// }

// chai()

// Arrow function
// const chai = () => {                    
//     let username = 'Arman'
//     console.log(this);
// }
// chai()

//Explicit Return
// const addTwo = (num1,num2) => {     //inside curly braces we need to write return
//     return num1+num2
// }

// console.log(addTwo(3,4));


//Implicit Return 
const addSum = (num1,num2) =>  (num1 + num2 )    // here we do not need to write 'return' statement
console.log(addSum(3,4));

const objReturn = (num1,num2) => ({username : 'Arman'})  // We need to wrap object in parenthesis to return it.
console.log(objReturn(3,4));



// const myArr = [2,3,5,4,7]

// myArr.forEach()