var nr = require('../index.js');

test('roundHalfDown(2.5)', () => {
    expect(nr.roundHalfDown(2.5)).toBe(2);
});

test('roundHalfDown(3.5, 0)', () => {
    expect(nr.roundHalfDown(3.5, 0)).toBe(3);
});

test('roundHalfDown(0.025, 2)', () => {
    expect(nr.roundHalfDown(0.025, 2)).toBe(0.02);
});

test('roundHalfDown(0.035, 2)', () => {
    expect(nr.roundHalfDown(0.035, 2)).toBe(0.03);
});

test('roundHalfDown(0.038, 2)', () => {
    expect(nr.roundHalfDown(0.038, 2)).toBe(0.04);
});

test('roundHalfDown(0.031, 2)', () => {
    expect(nr.roundHalfDown(0.031, 2)).toBe(0.03);
});

// same tests for negative value

test('roundHalfDown(-2.5)', () => {
    expect(nr.roundHalfDown(-2.5)).toBe(-3);
});

test('roundHalfDown(-3.5, 0)', () => {
    expect(nr.roundHalfDown(-3.5, 0)).toBe(-4);
});

test('roundHalfDown(-0.025, 2)', () => {
    expect(nr.roundHalfDown(-0.025, 2)).toBe(-0.03);
});

test('roundHalfDown(-0.035, 2)', () => {
    expect(nr.roundHalfDown(-0.035, 2)).toBe(-0.04);
});

test('roundHalfDown(-0.038, 2)', () => {
    expect(nr.roundHalfDown(-0.038, 2)).toBe(-0.04);
});

test('roundHalfDown(-0.031, 2)', () => {
    expect(nr.roundHalfDown(-0.031, 2)).toBe(-0.03);
});