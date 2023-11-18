const myObject ={
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    py: 'python'
}

for (const key in myObject) {
       // console.log(`${key} = ${myObject[key]}`);
}




//for in arr
const programming = ['js', 'cpp', 'py', 'golang', 'swift']
for(const key in programming){
   // console.log(programming[key]);
}




const map = new Map()

map.set('BD','Bangladesh')
map.set('IN','India')
map.set('USA','United States of America')
map.set('IN','India')


for (const key in map) {                // Not Iterable
    console.log(key);

}



// For in For Objects
// For of for array
