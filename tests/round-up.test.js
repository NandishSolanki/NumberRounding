var nr = require('../index.js');

test('roundUp(2.5, 0)', () => {
    expect(nr.roundUp(2.5, 0)).toBe(3);
});

test('roundUp(2.5)', () => {
    expect(nr.roundUp(2.5)).toBe(3);
});

test('roundUp(2.1, 0)', () => {
    expect(nr.roundUp(2.1, 0)).toBe(3);
});

test('roundUp(2.8)', () => {
    expect(nr.roundUp(2.8)).toBe(3);
});

test('roundUp(0.025, 2)', () => {
    expect(nr.roundUp(0.025, 2)).toBe(0.03);
});

test('roundUp(0.038, 2)', () => {
    expect(nr.roundUp(0.038, 2)).toBe(0.04);
});

test('roundUp(0.031, 2)', () => {
    expect(nr.roundUp(0.031, 2)).toBe(0.04);
});

// same tests for negative values

test('roundUp(-2.5, 0)', () => {
    expect(nr.roundUp(-2.5, 0)).toBe(-2);
});

test('roundUp(-2.5)', () => {
    expect(nr.roundUp(-2.5)).toBe(-2);
});

test('roundUp(-2.1, 0)', () => {
    expect(nr.roundUp(-2.1, 0)).toBe(-2);
});

test('roundUp(-2.8)', () => {
    expect(nr.roundUp(-2.8)).toBe(-2);
});

test('roundUp(-0.025, 2)', () => {
    expect(nr.roundUp(-0.025, 2)).toBe(-0.02);
});

test('roundUp(-0.038, 2)', () => {
    expect(nr.roundUp(-0.038, 2)).toBe(-0.03);
});

test('roundUp(-0.031, 2)', () => {
    expect(nr.roundUp(-0.031, 2)).toBe(-0.03);
});