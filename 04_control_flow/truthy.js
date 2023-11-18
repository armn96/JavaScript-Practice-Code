//scenario 1
// const userEmail = "arm@gmail.com"

// if(userEmail){
//     console.log("Got User Email");     // This is output
// }
// else{
//     console.log("Don't have user email");
// }

//scenario 2
// const userEmail = ""

// if(userEmail){
//     console.log("Got User Email");
// }
// else{
//     console.log("Don't have user email");  //this is output
// }

//scenario 3
const userEmail = []

if(userEmail){
    console.log("Got User Email");  //this is output
}
else{
    console.log("Don't have user email");
}



//falsy values

//(false, 0 , -0, BigInt 0n, "", null, undefined, NaN) => this all are falsy values

//truthy value

//("0", 'false', " ", [], {}, function(){}, true, 1,) => this all are trithy values


//To check Array if it is Empty"
if(userEmail.length === 0){
     console.log("Array is Empty");
}

//To check Object if it is Empty
const emptyObj = {}
if (Object.keys(emptyObj).length === 0){
    console.log("Object is Empty");
}



