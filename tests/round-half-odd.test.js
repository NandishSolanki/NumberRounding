var nr = require('../index.js');

test('roundHalfOdd(2.5)', () => {
    expect(nr.roundHalfOdd(2.5, 0)).toBe(3);
});

test('roundHalfOdd(3.5)', () => {
    expect(nr.roundHalfOdd(3.5, 0)).toBe(3);
});

test('roundHalfOdd(0.025, 2)', () => {
    expect(nr.roundHalfOdd(0.025, 2)).toBe(0.03);
});

test('roundHalfOdd(0.035, 2)', () => {
    expect(nr.roundHalfOdd(0.035, 2)).toBe(0.03);
});

test('roundHalfOdd(0.031, 2)', () => {
    expect(nr.roundHalfOdd(0.031, 2)).toBe(0.03);
});

test('roundHalfOdd(0.038, 2)', () => {
    expect(nr.roundHalfOdd(0.038, 2)).toBe(0.04);
});

// same tests with negative values

test('roundHalfOdd(-2.5)', () => {
    expect(nr.roundHalfOdd(-2.5)).toBe(-3);
});

test('roundHalfOdd(-3.5, 0)', () => {
    expect(nr.roundHalfOdd(-3.5, 0)).toBe(-3);
});

test('roundHalfOdd(-0.025, 2)', () => {
    expect(nr.roundHalfOdd(-0.025, 2)).toBe(-0.03);
});

test('roundHalfOdd(-0.035, 2)', () => {
    expect(nr.roundHalfOdd(-0.035, 2)).toBe(-0.03);
});

test('roundHalfOdd(-0.031, 2)', () => {
    expect(nr.roundHalfOdd(-0.031, 2)).toBe(-0.03);
});

test('roundHalfOdd(-0.038, 2)', () => {
    expect(nr.roundHalfOdd(-0.038, 2)).toBe(-0.04);
});