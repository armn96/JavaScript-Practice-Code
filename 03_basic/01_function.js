function greeting(name){
    console.log("Hello ",name);
}

// greeting('arman')

// function addTwoNumber(number1, number2){
//     num = number1+number2
//     console.log(num);
// }

function addTwoNumber(number1, number2){
    // let num = number1+number2
    // return num
    console.log("Printable") // code will be execute before return
    return number1+number2
    console.log("Printable") // no code will execute After return 
}

//const result = addTwoNumber(10,20)
// console.log(result);


function loginUserMessage(username){
    if (username == undefined){                       //OR (if(!username))
        return `Please enter your User name`
    }

    return `${username} just logged in`
}

// console.log(loginUserMessage('Arman'))


function calculateCartPrice(...num ){    // (...num) => rest Operator
    return num
}
// console.log(calculateCartPrice(100,200,300,400,2000));

function calculateCartPrice2(val1, val2,...num2 ){    // (...num) => rest Operator
    return val1, val2, num2
}
// console.log(calculateCartPrice2(100,200,300,400,2000));  //here output 300,400,2000


// object with function

const user = {
    username : 'arman',
    price : 200
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and Price is ${anyobject.price}`)
}

// handleObject(user)
handleObject({
    username : "Rumman",
    price : 300
})

// for array 

const arr = ['Arman', 'Ruma', 1 , 2 ]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(arr))