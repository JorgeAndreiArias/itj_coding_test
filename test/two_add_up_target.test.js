const two_add_up_to_target = require('../src/two_add_up_target')

test('should return an array of index that add up to the given target', () => {
    expect(two_add_up_to_target([2, 7, 11, 15], 9)).toEqual(expect.arrayContaining([0, 1]));
});

test('should return an array of index that add up to the given target', () => {
    expect(two_add_up_to_target([3, 2, 4], 6)).toEqual(expect.arrayContaining([1, 2]));
});

test('should return an array of index that add up to the given target', () => {
    expect(two_add_up_to_target([3, 3], 6)).toEqual(expect.arrayContaining([0, 1]));
});

test('should return an array of index that not add up to the given target', () => {
    expect(two_add_up_to_target([2, 5, 10, 18, 3], 23)).not.toEqual(expect.arrayContaining([1, 4]));
});

test('should throw an error if called without an null argument', () => {
    expect(() => { two_add_up_to_target() }).toThrow('Invalid arguments expected array got undefined or null');
});

test('should throw an error if called with an invalid arguments, given a string', () => {
    expect(() => { two_add_up_to_target(['a', 'b', 'c', 'd'], 1) }).toThrow('Invalid arguments: expected integer');
});

test('should throw an error if called wit and invalid argument given a decimal', () => {
    expect(() => { two_add_up_to_target([1,2.2], '1') }).toThrow('Invalid arguments: expected integer');
});
