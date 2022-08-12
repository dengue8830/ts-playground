const dictionary = {
  I: {
    value: 1,
    substract: {
      V: true,
      X: true,
    },
  },
  V: {
    value: 5,
  },
  X: {
    value: 10,
    substract: {
      L: true,
      C: true,
    },
  },
  L: {
    value: 50,
  },
  C: {
    value: 100,
    substract: {
      D: true,
      M: true,
    },
  },
  D: {
    value: 500,
  },
  M: {
    value: 1000,
  },
};

const ableToSubstract = [
  {
    key: "I",
    substract1: "V",
  },
];

function romanToInt(s: string): number {
  let total = 0;
  let prev;
  let current;
  for (let letter of s) {
    current = dictionary[letter];
    const substract = prev?.substract && prev.substract[letter];
    if (substract) {
      total -= prev.value;
      total += current.value - prev.value;
    } else {
      total += current.value;
    }
    prev = current;
  }
  return total;
}

romanToInt("LVIII");
