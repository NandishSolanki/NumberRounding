'use strict';

function round(num, decimalPlaces, roundingType) {
    var d = decimalPlaces || 0;
    var m = Math.pow(10, d);
    var n = +(d ? num * m : num).toFixed(8);
    var r = Math.round(n)

    return d ? r / m : r;
}

function roundUp(num, decimalPlaces) {
    var d = decimalPlaces || 0;
    var m = Math.pow(10, d);
    var n = +(d ? num * m : num).toFixed(8);
    var i = Math.ceil(n)
    return d ? i / m : i;
}

function roundDown(num, decimalPlaces) {
    var d = decimalPlaces || 0;
    var m = Math.pow(10, d);
    var n = +(d ? num * m : num).toFixed(8);
    var i = Math.floor(n)
    return d ? i / m : i;
}

// source http://stackoverflow.com/a/3109234
function roundHalfEven(num, decimalPlaces) {
    var d = decimalPlaces || 0;
    var m = Math.pow(10, d);
    var n = +(d ? num * m : num).toFixed(8);
    var i = Math.floor(n), f = n - i;
    var e = 1e-8; // Allow for rounding errors in f
    var r = (f > 0.5 - e && f < 0.5 + e) ?
        ((i % 2 == 0) ? i : i + 1) :
            Math.round(n);

    return d ? r / m : r;
}

function roundHalfOdd(num, decimalPlaces) {
    var d = decimalPlaces || 0;
    var m = Math.pow(10, d);
    var n = +(d ? num * m : num).toFixed(8);
    var i = Math.floor(n), f = n - i;
    var e = 1e-8; // Allow for rounding errors in f
    var r = (f > 0.5 - e && f < 0.5 + e) ?
        ((i % 2 == 0) ? i + 1 : i) :
            Math.round(n);

    return d ? r / m : r;
}

function roundHalfUp(num, decimalPlaces) {
    return round(num, decimalPlaces);
}

function roundHalfDown(num, decimalPlaces) {
    var d = decimalPlaces || 0;
    var m = Math.pow(10, d);
    var n = +(d ? num * m : num).toFixed(8);
    var i = Math.floor(n), f = n - i;
    var e = 1e-8; // Allow for rounding errors in f
    var r = (f > 0.5 - e && f < 0.5 + e) ?
        Math.floor(n) :
        Math.round(n);

    return d ? r / m : r;
}

module.exports = {
    round,
    roundDown,
    roundUp,
    roundHalfEven,
    roundHalfOdd,
    roundHalfUp,
    roundHalfDown
};
