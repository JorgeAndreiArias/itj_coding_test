const two_add_up_to_target = (numbers, target)  => { // [4,3,2,7,8,2,3,1], 1
    if (!numbers) throw new Error("Invalid arguments expected array got undefined or null")
    if (!numbers.every(number => Number.isInteger(number)) || !Number.isInteger(target)) throw new Error("Invalid arguments: expected integers")
    for (var i = 0; i < numbers.length; i++){
        const diff = target - numbers[i]
        const index = numbers.indexOf(diff)
        if (index !== -1 && index !== i ) return [i, index]
    }
}

module.exports = two_add_up_to_target