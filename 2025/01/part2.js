const fs = require('fs');

const rawInput = fs.readFileSync(0).toString()
let password = 0
rawInput.split('\n')
    .map(s => {
        const firstChar = s.charAt(0)
        const int = parseInt(s.substring(1))
        password += Math.floor(int / 100)
        const number = int % 100
        return firstChar === 'L' ? -number : number
    })
    .reduce((a, b, i) => {
        let stepSum = a + b
        let shouldIncrementPassword = a !== 0
        let alreadyIncremented = false

        if (stepSum > 99) {
            stepSum -= 100
            alreadyIncremented = incrementPassword(shouldIncrementPassword, i)
        } else if (stepSum < 0) {
            stepSum += 100
            alreadyIncremented = incrementPassword(shouldIncrementPassword, i)
        }
        
        if (stepSum === 0 && !alreadyIncremented) {
            incrementPassword(shouldIncrementPassword, i)
        }

        return stepSum
    }, 50)

function incrementPassword(shouldIncrementPassword, i) {
    if (shouldIncrementPassword) {
        password++
        return true
    }
    return false
}

console.log(password)
