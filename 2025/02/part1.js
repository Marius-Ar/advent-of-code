const fs = require('fs');

let password = 0;
fs.readFileSync(0)
    .toString()
    .replaceAll('\n', '')
    .split(',')
    .map((rangeString) => {
        const split = rangeString.split('-');

        let min = split[0]
        const max = split[1]
        const minLength = min.length;

        if (!isEven(minLength)) {
            const maxLength = max.length;
            if (!isEven(maxLength)) {
                return
            }

            if (minLength < maxLength) {
                min = Math.pow(10, minLength).toString()
            }
        }

        return {min, max}
    })
    .filter(range => !!range)
    .forEach((range) => {
        const min = parseInt(range.min)
        const max = parseInt(range.max)
        for (let i = min; i <= max; i++) {
            const iString = i.toString();
            const halfLength = iString.length / 2;
            const firstPart = iString.substring(0, halfLength)
            const secondPart = iString.substring(halfLength)
            
            if (firstPart === secondPart) {
                password += i
            }
        }
    })

console.log(password);    

function isEven(n) {
    return n % 2 === 0
}
