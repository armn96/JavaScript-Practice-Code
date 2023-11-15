//  const tinderUser = new Object()  // singleton object
const tinderUsr = {}  // non singleton

tinderUsr.id = '123abc'
tinderUsr.name = "Tanvir"
tinderUsr.age = 28

// console.log(tinderUsr);

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userFullname:{
            first_name : "Morsheduzzaman",
            last_name : "Talukder"
        }
    },
    address : "Dhaka"
}

// console.log(regularUser.fullname.userFullname.first_name)

// merging objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = Object.assign({},obj1,obj2) // object.assign(target=obj1, source = obj2)
//////////OR\\\\\\\\\\\\\\\\
const obj3 = {...obj1,...obj2}
// console.log(obj3);



const users = [
    {
        id : 1,
        email : 'a@gmail.com'
    },
    {
        id : 2,
        email : 'a@gmail.com'
    },
    {
        id : 3,
        email : 'a@gmail.com'
    },
]

// console.log(users[1].email)


// console.log(tinderUsr);
// console.log(Object.keys(tinderUsr), Object.values(tinderUsr));
// console.log(Object.entries(tinderUsr)); //make arrays
// console.log(tinderUsr.hasOwnProperty('age'))


//////////////////////////////////////////////////////////////////////////////////////////////



//Object destructuring 

const course = {
    course_name : 'Science',
    price : '999',
    courseInstructor: 'Arman'
}

// course.courseInstructor
const {courseInstructor : instructor} = course  // destructuring
console.log(instructor);



//JSON API

// {
//     "name" : 'Rumman',
//     "courseName" : 'Physics',
//     "price" : 'Free'
// }


//Sometimes we get APis in Array format. For example:

// [
//     {},
//     {},
//     {}
// ]

