// // for loops

// for(let i=0; i < 5; I++) {
//     console.log('Loop Output =', i);
// }

// Functions @ AppAcademy.io

// function average(number1, number2) {
//     return (number1 + number2) / 2 //number1 is parameter.
// }

// // Syntax is a Function call
// console.log(average(4, 12)) // Num 4 * 12 are arguments.


// without return keyword, the function call return undefined
// function testme() {
//     console.log('test me please1')
// }

// testme()

// function testme() {
//     return true // returns true

//     //no more syntax execution beyond this point.
//     return false
// }

// console.log(testme())

var triple = function(x) {
    return x * 3
}

var waffle = triple

console.log(waffle(30))