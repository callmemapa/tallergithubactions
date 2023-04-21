const { sum, res, div } = require('./sum');

test('sums two numbers', () => {
    expect(sum(1, 2)).toBe(3);
});

test('res two numbers', () => {
    expect(res(5, 4)).toBe(1);
})

test('div two numbers', () => {
    expect(div(10, 5)).toBe(2);
})