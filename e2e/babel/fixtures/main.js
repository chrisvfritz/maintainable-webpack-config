// const, spread operator, arrow function
const myArray = Array(...Array(10)).map((_, i) => i)

console.log(myArray.join(','))
