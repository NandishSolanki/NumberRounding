var nr = require('../index.js');

test('roundHalfEven(2.5)', () => {
    expect(nr.roundHalfEven(2.5)).toBe(2);
});

test('roundHalfEven(2.5, 0)', () => {
    expect(nr.roundHalfEven(2.5, 0)).toBe(2);
});

test('roundHalfEven(3.5)', () => {
    expect(nr.roundHalfEven(3.5)).toBe(4);
});

test('roundHalfEven(0.025, 2)', () => {
    expect(nr.roundHalfEven(0.025, 2)).toBe(0.02);
});

test('roundHalfEven(0.035, 2)', () => {
    expect(nr.roundHalfEven(0.035, 2)).toBe(0.04);
});

test('roundHalfEven(0.031, 2)', () => {
    expect(nr.roundHalfEven(0.031, 2)).toBe(0.03);
});

test('roundHalfEven(0.038, 2)', () => {
    expect(nr.roundHalfEven(0.038, 2)).toBe(0.04);
});

// same tests for negative values

test('roundHalfEven(-2.5)', () => {
    expect(nr.roundHalfEven(-2.5)).toBe(-2);
});

test('roundHalfEven(-2.5, 0)', () => {
    expect(nr.roundHalfEven(-2.5, 0)).toBe(-2);
});

test('roundHalfEven(-3.5)', () => {
    expect(nr.roundHalfEven(-3.5)).toBe(-4);
});

test('roundHalfEven(-0.025, 2)', () => {
    expect(nr.roundHalfEven(-0.025, 2)).toBe(-0.02);
});

test('roundHalfEven(-0.035, 2)', () => {
    expect(nr.roundHalfEven(-0.035, 2)).toBe(-0.04);
});

test('roundHalfEven(-0.031, 2)', () => {
    expect(nr.roundHalfEven(-0.031, 2)).toBe(-0.03);
});

test('roundHalfEven(-0.038, 2)', () => {
    expect(nr.roundHalfEven(-0.038, 2)).toBe(-0.04);
});