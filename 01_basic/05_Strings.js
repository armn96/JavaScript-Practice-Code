const name = "Arman Talukder"
const points = 150

//console.log(name + " have " + points + " points");

console.log(`${name} have ${points} points`);

const gameName = new String("Avenger")

console.log(gameName[0])
console.log(gameName.length)
console.log(gameName.__proto__)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(5))
console.log(gameName.indexOf("v"))

const newStr = gameName.substring(0,4)
console.log(newStr); 
console.log(gameName.slice(-6,4))

const newStrOne = "   Arman   "
console.log(newStrOne)
console.log(newStrOne.trim())

const url = "https://arman.com/matu%10pati"
const url1 = (url.replace("%10", "-"))
console.log(url1)

console.log(url1.includes("Arman"))

console.log(gameName.split(""))