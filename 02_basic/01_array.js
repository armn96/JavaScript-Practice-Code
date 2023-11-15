//array

const myArr = [0,1,2,3,4,5]
const myHeroes = ['superman', 'batman', 'aquaman', 'flash']

const myArrTwo = new Array(1,2,3)

console.log(myHeroes[2]);

// ARRAY METHODS

myArr.push(6) // insert at last
myArr.push(7) 
console.log(`Pushed:`, myArr);


myArr.pop() // remove the last value of an array
console.log(`Poped:`, myArr);


myArr.unshift(9)   // inserted in the start(first place) of an array
console.log(`Unshift:`,myArr);
myArr.shift()
console.log(`Shift:`,myArr);


console.log(`Does this number is in array? Ans:${myArr.includes(5)}`)
console.log(`Whats the value of index provided here? Ans: ${myArr.indexOf(3)}`)


const newArr = myArr.join()

console.log("Array:",myArr) // shows in array style [1,2,3,4,4]
console.log("New Array String type:",newArr) // type become string  1,2,3,4,5



console.log("\n\n************************************************************************** \n");


// slice , splice 

console.log("Original Array ",myArr);

const myNewArr = myArr.slice(1,3) // In slice the last value will be ignored. 
console.log("After Slicing: ",myNewArr);//Here 3 is ignored and output is [1,2]
console.log("Original Array after SLICE: ",myArr);

const myNewArr1 = myArr.splice(1,3)
console.log("After Splice: ",myNewArr1); //in splice the last value is included
console.log("Orginal Array after SPLICE:  ",myArr); // Here the array is modified and the spliced value is removed from array









