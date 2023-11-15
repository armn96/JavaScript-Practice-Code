// Primitive 
/* 7 types:
String, Number, Boolean, null, undefined, Symbol, BigInt */

const score = 100
const isRaining = false
const temperature = null
let age;
const player_Id = Symbol('123')
const anoter_id = Symbol('123')
const bigNum = 345669872145458632179956565655655565n
console.log(typeof bigNum);

// Reference Type/ Non Primitive
/* Array, Objects, Functions */

const heroes = ['Superman', 'Batman', 'Wonder-Woman']  //Array

const student_info = {
    name: 'Arman',
    age : 27,
    addr: 'kazla'     // Object
}

console.table(student_info);


const myfunc = function (){
    console.log("Hello Arman")
}

myfunc()


/// *************************************************************************** ///

// Stack (primitive), Heap (Non-Primitive )


let nam1 = "Arman"
let nam2 = nam1 
nam2 = "raiyan"

console.log(nam1)
console.log(nam2)


let userOne = {
    name : 'Arman',
    email : 'arm@gmail.com'
}

let userTwo = userOne
userTwo.email = 'rai@mail.com'
console.log(userOne)
console.log(userTwo)
