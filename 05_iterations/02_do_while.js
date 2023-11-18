
let index = 0
while(index <= 10){
    console.log(`Value of index is : ${index}`);
    index = index + 2;
}

let myarray = ['superman','dog','woman','boy']

let arr = 0

while(arr<myarray.length){
    console.log(`Value is ${myarray[arr]}`);
    arr = arr + 1
}


let score = 11
do{
   console.log(`Score is ${score}`);
   score++
}while(score<=10);



//Factorial using while


const num = 5
let fact = 1
let i = 1;
while(i<=num){
    fact = fact * i
    i++
}
console.log(fact);