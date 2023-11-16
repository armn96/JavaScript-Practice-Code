// var c = 300;
let a = 400      // global scope
if(true){        // block scope
   let a = 10
   const b = 20 
   var c = 30

   //console.log('Inner: ',a);
}
// console.log('Outer: ',a);
// console.log(b);
//console.log(c);

///////////////////////////////////////////////////////////////////////////////////////////

/////Nested Scope////////

function one(){
    const username = 'Arman'

    function two(){
        const website = 'youtube'
        console.log(username);
    }
    // console.log(website);

    two()
     
}

// one()

if (true){
    const username = 'Arman'
    if (username === "Arman"){
        const website = 'youtube'
        //console.log(username+website);
    }

    //console.log(website);    //error
}

//console.log(username);    //error


/////////////////////////////////// INTERESTING \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//console.log(addOne(5)) // it will print without error
function addOne(num){
    return num+1
}    // when we declare this type of function then we can print it before the function
//console.log(addOne(5)) // it will print without error

//////////////////////////////////////////////////////////////////////////////////////////

//console.log(addTwo(5)) // it will print error
const addTwo = function(num){        //expression  
    return num + 2                   
} // when we declare this type of function then we cannot print it before the function
//console.log(addTwo(5)) // it will not print error