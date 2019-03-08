var nr = require('../index.js');

test('roundHalfUp(2.5)', () => {
    expect(nr.roundHalfUp(2.5)).toBe(3);
});

test('roundHalfUp(3.5, 0)', () => {
    expect(nr.roundHalfUp(3.5, 0)).toBe(4);
});

test('roundHalfUp(0.025, 2)', () => {
    expect(nr.roundHalfUp(0.025, 2)).toBe(0.03);
});

test('roundHalfUp(0.035, 2)', () => {
    expect(nr.roundHalfUp(0.035, 2)).toBe(0.04);
});

test('roundHalfUp(0.038, 2)', () => {
    expect(nr.roundHalfUp(0.038, 2)).toBe(0.04);
});

test('roundHalfUp(0.031, 2)', () => {
    expect(nr.roundHalfUp(0.031, 2)).toBe(0.03);
});

// same tests for negative value

test('roundHalfUp(-2.5)', () => {
    expect(nr.roundHalfUp(-2.5)).toBe(-2);
});

test('roundHalfUp(-3.5, 0)', () => {
    expect(nr.roundHalfUp(-3.5, 0)).toBe(-3);
});

test('roundHalfUp(-0.025, 2)', () => {
    expect(nr.roundHalfUp(-0.025, 2)).toBe(-0.02);
});

test('roundHalfUp(-0.035, 2)', () => {
    expect(nr.roundHalfUp(-0.035, 2)).toBe(-0.03);
});

test('roundHalfUp(-0.038, 2)', () => {
    expect(nr.roundHalfUp(-0.038, 2)).toBe(-0.04);
});

test('roundHalfUp(-0.031, 2)', () => {
    expect(nr.roundHalfUp(-0.031, 2)).toBe(-0.03);
});