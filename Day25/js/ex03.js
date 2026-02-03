Array.prototype.reduce2 = function (callback, initialValue) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  const length = this.length;
  let accumulator;
  let startIndex = 0;

  if (arguments.length >= 2) {
    accumulator = startIndex;
  } else {
    while (startIndex < length && !(startIndex in this)) {
      startIndex++;
    }

    if (startIndex >= length) {
      throw new TypeError("Reduce of empty array with no initial value");
    }

    accumulator = this[startIndex];
    startIndex++;
  }

  for (let i = startIndex; i < length; i++) {
    if (!(i in this)) continue;
    accumulator = callback(accumulator, this[i], i, this);
  }

  return accumulator;
};

// Sample usage

// Sample 1

const arr1 = [1, 2, 3, 4, 5];

const result1 = arr1.reduce2((accumulator, value) => {
  return accumulator + value;
}, 0);

console.log(result1); // 15

// Sample 3

const arr3 = [];

const result3 = arr3.reduce2((accumulator, value) => {
  return accumulator + value;
}, 0);

console.log(result3); // 0

// Sample 2

const arr2 = [];

const result2 = arr2.reduce2((accumulator, value) => {
  return accumulator + value;
});

console.log(result2); // Error: Reduce of empty array with no initial value
