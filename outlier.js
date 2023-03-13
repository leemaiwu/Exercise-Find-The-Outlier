//let array = [2, 4, 0, 100, 4, 11, 2602, 36]
let array = [160, 3, 1719, 19, 11, 13, -21]

function outlier () {
    evenOutput = []
    oddOutput = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            evenOutput.push(array[i])
        } else if (array[i] % 3 !== 0) {
            oddOutput.push(array[i])
        }
    } if (evenOutput < oddOutput) {
        return evenOutput
    } else {
        return oddOutput
    }
}

console.log(outlier(array))
