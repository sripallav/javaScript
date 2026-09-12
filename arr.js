const roles = new Map();
roles.set("Ajay","Developer");
roles.set("Aditya","SDE1");
console.log(roles.get("Aditya"));
console.log("--------------------------");
let numbers =[10,20,30];
let result = numbers.map(number => number*2);
console.log(result);
console.log(" ");
let prices = [1000,2000,3000];
let discountPrices = prices.map(prices=>prices*0.9);
console.log(discountPrices);

console.log("--------------------------");

const marks = new Set([34,67,78,34,78,97,36]);
// console.log([...marks]);// output -> [34 67 78 97 36]
// console.log(...marks);  // output -> 34 67 78 97 36
console.log(marks); // output ->  Set(5) { 34, 67, 78, 97, 36 }