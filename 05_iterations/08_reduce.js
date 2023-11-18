const myNum = [1,2,3]

const myTotal = myNum.reduce((acc, curval) => {
    console.log(`acc : ${acc} and current value: ${curval}`);
    return acc + curval
},0)


const myTotal1 = myNum.reduce((acc, curval) => acc + curval,0 )
console.log(myTotal1);





const shoppingCart = [
    {
        itemName: 'Js Course',
        price : 1000
    },
    {
        itemName: 'Python Course',
        price : 1200
    },
    {
        itemName: 'Data Course',
        price : 2000
    },
    {
        itemName: 'Mobile Course',
        price : 3000
    }
]


const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(priceToPay);