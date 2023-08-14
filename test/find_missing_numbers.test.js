const find_missing_numbers = require('../src/find_missing_numbers')

test('should return an array of missing numbers for an integer array', () => {
    expect(find_missing_numbers([4, 3, 2, 7, 8, 2, 3, 1])).toEqual([5, 6]);
});
test('should return an array of missing numbers for an integer array', () => {
    expect(find_missing_numbers([1, 1])).toEqual([2]);
});
test('should return an array of missing numbers for an integer array with negative values', () => {
    expect(find_missing_numbers([-1, 2, 3])).toEqual([1]);
});
test('should return an incorrect array of missing numbers for an integer array', () => {
    expect(find_missing_numbers([4, 3, 2, 7, 8, 2, 3, 1])).not.toEqual([7, 6]);
});
test('should throw an error if called without an null argument', () => {
    expect(() => { find_missing_numbers(null) }).toThrow('Invalid arguments expected array got undefined or null');
});
test('should throw an error if called with an invalid arguments', () => {
    expect(() => { find_missing_numbers(['a', 'b', 'c', 'd']) }).toThrow('Invalid arguments expected integer');
});
test('should throw an error if called without an argument', () => {
    expect(() => { find_missing_numbers() }).toThrow('Invalid arguments expected array got undefined or null');
});
