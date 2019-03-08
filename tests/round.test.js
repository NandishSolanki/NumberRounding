var nr = require('../index.js');

test('round(2.5)', () => {
    expect(nr.round(2.5)).toBe(3);
});

test('round(3.5, 0)', () => {
    expect(nr.round(3.5, 0)).toBe(4);
});

test('round(0.025, 2)', () => {
    expect(nr.round(0.025, 2)).toBe(0.03);
});

test('round(0.035, 2)', () => {
    expect(nr.round(0.035, 2)).toBe(0.04);
});

test('round(0.038, 2)', () => {
    expect(nr.round(0.038, 2)).toBe(0.04);
});

test('round(0.031, 2)', () => {
    expect(nr.round(0.031, 2)).toBe(0.03);
});

// same tests for negative value

test('round(-2.5)', () => {
    expect(nr.round(-2.5)).toBe(-2);
});

test('round(-3.5, 0)', () => {
    expect(nr.round(-3.5, 0)).toBe(-3);
});

test('round(-0.025, 2)', () => {
    expect(nr.round(-0.025, 2)).toBe(-0.02);
});

test('round(-0.035, 2)', () => {
    expect(nr.round(-0.035, 2)).toBe(-0.03);
});

test('round(-0.038, 2)', () => {
    expect(nr.round(-0.038, 2)).toBe(-0.04);
});

test('round(-0.031, 2)', () => {
    expect(nr.round(-0.031, 2)).toBe(-0.03);
});