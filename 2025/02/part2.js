const { log } = require('console');
const fs = require('fs');

let password = 0;
fs.readFileSync(0)
    .toString()
    .replaceAll('\n', '')
    .split(',')
    .map((rangeString) => {
        const split = rangeString.split('-');

        return {min: split[0], max: split[1]}
    })
    .filter(range => !!range)
    .forEach((range) => {
        const min = parseInt(range.min)
        const max = parseInt(range.max)
        for (let i = min; i <= max; i++) {
            const iString = i.toString();

            if (hasPattern(iString)) {
                password += i
            }
        }
    })

console.log('password', password);

function hasPattern(s) {
    const length = s.length
    if (length === 1) {
        return false
    }

    for (let i = 1; i < length; i++) {
        const repeatCount = length / i
        if (repeatCount % 1 != 0) {
            continue
        }

        const pattern = s.slice(0, i)
        const repeated = pattern.repeat(repeatCount);
        
        if (repeated === s) {
            return true
        }
    }

    return false
}
