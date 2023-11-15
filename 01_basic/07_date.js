const date = new Date()
console.log("ToString:                  ",date.toString())
console.log("toDateString:              ",date.toDateString())
console.log("toISOString:               ",date.toISOString())
console.log("toJSON:                    ",date.toJSON())
console.log("toLocaleDateString:        ",date.toLocaleDateString())
console.log("toLocaleString:            ",date.toLocaleString())
console.log("toLocaleTimeString():      ",date.toLocaleTimeString())

let myCreatedDate0 = new Date(2023, 1, 27)
console.log(myCreatedDate0.toDateString());

let myCreatedDate1 = new Date(2023, 1, 27, 5, 3)
console.log(myCreatedDate1.toLocaleString());

let myCreatedDate2 = new Date("2023-05-27")  // yy-mm-dd
console.log(myCreatedDate2.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate0.getTime());

console.log(Math.floor(Date.now()/1000)); //to find seconds from milliseconds  


let newDate = new Date()
console.log(newDate.getDay());

console.log(newDate.toLocaleString('default',{
    weekday: "long",
}))