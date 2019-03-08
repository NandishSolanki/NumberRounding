var nr = require('../index.js');

test('roundDown(2.5, 0)', () => {
    expect(nr.roundDown(2.5, 0)).toBe(2);
});

test('roundDown(2.1, 0)', () => {
    expect(nr.roundDown(2.1, 0)).toBe(2);
});

test('roundDown(2.1)', () => {
    expect(nr.roundDown(2.1)).toBe(2);
});

test('roundDown(2.8)', () => {
    expect(nr.roundDown(2.8, 0)).toBe(2);
});

test('roundDown(0.025, 2)', () => {
    expect(nr.roundDown(0.025, 2)).toBe(0.02);
});

test('roundDown(0.038, 2)', () => {
    expect(nr.roundDown(0.038, 2)).toBe(0.03);
});

test('roundDown(0.031, 2)', () => {
    expect(nr.roundDown(0.031, 2)).toBe(0.03);
});

// same tests for negative values

test('roundDown(-2.5, 0)', () => {
    expect(nr.roundDown(-2.5, 0)).toBe(-3);
});

test('roundDown(-2.1, 0)', () => {
    expect(nr.roundDown(-2.1, 0)).toBe(-3);
});

test('roundDown(-2.1)', () => {
    expect(nr.roundDown(-2.1)).toBe(-3);
});

test('roundDown(-2.8)', () => {
    expect(nr.roundDown(-2.8, 0)).toBe(-3);
});

test('roundDown(-0.025, 2)', () => {
    expect(nr.roundDown(-0.025, 2)).toBe(-0.03);
});

test('roundDown(-0.038, 2)', () => {
    expect(nr.roundDown(-0.038, 2)).toBe(-0.04);
});

test('roundDown(-0.031, 2)', () => {
    expect(nr.roundDown(-0.031, 2)).toBe(-0.04);
});