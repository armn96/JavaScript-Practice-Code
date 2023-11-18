// const coding = ['js', 'ruby', 'java', 'python', 'cpp']

// const value = coding.forEach((item)=>{    // forEach doesnt return values....
//     console.log(item);
//     return item
// })

// console.log(value);



//Filter
const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter( (num) => num > 4)

console.log(newNums);





const newNum = myNums.filter( (num) => {
    return num > 4
})
console.log(newNum);




const myNewNum = []
myNums.forEach( (num) => {
    if(num > 4){
       myNewNum.push(num)
    }
})
console.log(myNewNum);



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userInput = 'Science'
let userBooks = books.filter((bk) => bk.genre === userInput)


userBooks = books.filter((bk) => {return bk.publish >= 2000})

userBooks = books.filter((bk) => {return bk.publish >= 1995 && bk.genre === 'History'})
console.log(userBooks);





