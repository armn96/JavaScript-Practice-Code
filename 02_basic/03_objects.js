// singleton   -> constructor
//Object.create()   // constructor



// object literals 
const mySym = Symbol("key1")

const usr = {
    [mySym] : "myKey1",
    name : 'Arman',
    "full name" : "Md Morsheduzzaman Arman",
    age  : 27,  
    email: "arm@gm.com",
    pass : '12345acbd',
    location : 'Dhaka', 
    isLogged: false,
}
console.log(usr[mySym]) //symbol
console.log(typeof (usr[mySym]))

console.log(`My name is ${usr.name} and I am ${usr.age} years old`);

// another way of printing objects :

console.log(`User full name: ${usr["full name"]}, Age: ${usr["age"]}, Email: ${usr["email"]}`)


//to change email
usr.email = "arman@gmail.com"
Object.freeze()
usr.email = "arman@outlook.com"

console.log(usr);

//adding function in object

usr.greeting = function(){
    console.log(`hello ${this.name}`)
}

usr.greeting()
