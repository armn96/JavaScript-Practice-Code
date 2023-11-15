// const = if declare, can't change
// var = can change
//let = can change, use it instead of var.
/*
Prefer not to use Var
because of issue in block scope and functional scope.
*/

const account_Id = 125463;
let account_Email = "arman@gmail.com";
var account_password = "12345678";

accountCity = "Dhaka"// This practce is not good for coding

let account_State;

// account_Id = 2 // not allowed

account_Email = "raiyan@gmail.com"
account_password = "25638741"

console.log(account_Id);
console.table([account_Email,account_Id,account_password,accountCity,account_State])


