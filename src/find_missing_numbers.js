const find_missing_numbers = (numbers) => { // [4,3,2,7,8,2,3,1]
    if (!numbers) throw new Error("Invalid arguments expected array got undefined or null");
    const range = Array.from({ length: numbers.length + 1 })
    for (const number of numbers) {
        if (!Number.isInteger(number)) throw new Error("Invalid arguments expected integer");
        range[number] = true
    }
    let missing_numbers = []
    for (let index = 1; index <= numbers.length; index++) {
        if (!range[index]) missing_numbers.push(index)
    }
    return missing_numbers
}

module.exports = find_missing_numbers