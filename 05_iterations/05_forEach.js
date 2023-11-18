const coding = ['javascript', 'python', 'java', 'swift', 'php']

coding.forEach( function (item) {
    //console.log(item);
})



coding.forEach((item)=>{
    //console.log(item);
})



function printMe(item){
    console.log(item);
}

// coding.forEach(printMe)



coding.forEach( (item, index, arr)=>{
    //console.log(item,index,arr);
})



const myCoding = [
    {
         languageName: 'JavaScript',
         languageFileName: "js"
    },
    {
         languageName: 'Python',
         languageFileName: "py"
    },
    {
         languageName: 'Java',
         languageFileName: "java"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
})



