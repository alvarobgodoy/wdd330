// let calculator = {
//     a: 0,
//     b: 0,
//     read() {
//         this.a = +prompt('a?', 0);
//         this.b = +prompt('b?', 0);
//         alert('Check the console for results')
//     },
//     sum() {
//         return this.a + this.b
//     },
//     mul() {
//         return this.a * this.b
//     }
// }

// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());

class Calculator {
    read() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
        alert('Check the console for results')
    }
    sum() {
        return this.a + this.b
    }
    mul() {
        return this.a * this.b
    }
}

let calculator = new Calculator();
calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());