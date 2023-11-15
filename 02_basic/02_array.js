const marvel_heroes = ['Ironman', 'Spiderman', 'Thor', 'Captain America']
const dc_heroes = ['Superman', 'Batman', 'Wonder Woman', 'Flash']

// marvel_heroes.push(dc_heroes)

// console.log("After pushing Dc heroes in marvel array", marvel_heroes)
// console.log("Finding a hero in nested array: ", marvel_heroes[4][2]);


// concat or spread(...)
//concat
const all_heroes = marvel_heroes.concat(dc_heroes) // concat -> combine both array into one array.
console.log("After Concat: ",all_heroes);

//spread

const all_new_heroes = [...marvel_heroes,...dc_heroes]
console.log("After using spread operator [...] :",all_new_heroes)

//////////////////////////////////////////////////////////////////////////////////////

const anotherArr = [1,2,3,4,[5,6,7],8,[2,5,6,[10,58,2]]]

const real_another_array = anotherArr.flat(Infinity)
console.log(real_another_array)


console.log(Array.isArray("Arman Talukder")); // output: 'False', not a array
console.log(Array.from("Arman Talukder")); // now it will be array.

console.log(Array.from({name: "ArmanTalukder"})) // interesting case, it gives ouput : [] empty array.


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));




