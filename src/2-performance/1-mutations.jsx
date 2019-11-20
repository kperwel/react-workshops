// Omit mutations

let array = [];

// append with mutation

array.push(Math.random())

array === array // true;

// append without mutation

array = [...array, Math.random()];

// array === array // false
// Different data means new reference!