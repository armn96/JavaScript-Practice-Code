// =========================== NUMBER =====================================\\
const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const othrnum = 124.85698
console.log(othrnum.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))


//============================ MATH ============================================\\

console.log(Math);  // go to browser and open console to run math to see details

// E: 2.718281828459045
// LN10: 2.302585092994046​
// LN2: 0.6931471805599453
// LOG10E: 0.4342944819032518
// LOG2E: 1.4426950408889634
// PI: 3.141592653589793
// SQRT1_2: 0.7071067811865476
// SQRT2: 1.4142135623730951
// abs: function abs()
// acos: function acos()
// acosh: function acosh()
// asin: function asin()
// asinh: function asinh()
// atan: function atan()
// atan2: function atan2()
// atanh: function atanh()
// cbrt: function cbrt()
// ceil: function ceil()
// clz32: function clz32()
// cos: function cos()
// cosh: function cosh()
// exp: function exp()
// expm1: function expm1()
// floor: function floor()
// fround: function fround()
// hypot: function hypot()
// imul: function imul()
// log: function log()
// log10: function log10()
// log1p: function log1p()
// log2: function log2()
// max: function max()
// min: function min()
// pow: function pow()
// random: function random()
// round: function round()
// sign: function sign()
// sin: function sin()
// sinh: function sinh()
// sqrt: function sqrt()
// tan: function tan()
// tanh: function tanh()
// trunc: function trunc()
// Symbol(Symbol.toStringTag): "Math"

console.log(Math.abs(-4))
console.log(Math.round(4.6))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.9))

console.log(Math.sqrt(25))
console.log(Math.min(4,5,1,2,8,9,7))
console.log(Math.max(4,5,1,2,8,9,7))

console.log(Math.random())
console.log((Math.random()*10)+1)
console.log((Math.floor(Math.random()*10)+1))

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) +1  )