const fs = require('fs');

const rawInput = fs.readFileSync(0).toString()
let password = 0
rawInput.split('\n')
    .map(s => {
        const firstChar = s.charAt(0)
        const number = parseInt(s.substring(1)) % 100
        return firstChar === 'L' ? -number : number
    })
    .reduce((a, b) => {
        const stepSum = a + b
        let finalStepSum = stepSum

        if (stepSum > 99) {
            finalStepSum -= 100
        } else if (stepSum < 0) {
            finalStepSum = 100 + stepSum
        }

        if (finalStepSum === 0) {
            password++;
        }
        return finalStepSum
    }, 50)

console.log(password)

