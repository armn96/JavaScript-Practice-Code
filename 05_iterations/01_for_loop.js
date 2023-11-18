// for 

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
        console.log(`${element} is the best number`);
    }
    //console.log(element);
}


//nested loop


for (let i = 0; i <= 10; i++) {
    //console.log(`Outer Loop : ${i}`);
    for(let j = 0; j <= 10; j++){
        //console.log(`Inner Loop value : ${j} and Inner loop ${i}`);

        //console.log(i + '*' + j + '=' + i*j);

    }
    
}



let myarray = ['flash', 'batman', 'superman']

for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    //console.log(element);
}


// break 
// for (let index = 1; index <= 20; index++) {
//     if( index == 10){
//         console.log(`${index} is Best`);
//         break;
//     }
//     console.log(`Value of i is ${index}`);
    
    
// }


//Continue
for (let index = 1; index <= 20; index++) {
    if( index == 10){
        console.log(`${index} is Best`);
        continue;
    }
    console.log(`Value of i is ${index}`);
    
    
}


// Factorial using loop
num = 4
fact = 1

for(i=1;i<=num;i++){
    fact = fact * i
}
console.log(fact);
