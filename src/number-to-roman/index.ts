const dictionary = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function findNearest(num: number): { key: string; value: number } {
  let prev;
  for (const key in dictionary) {
    const temp = dictionary[key];
    if (num >= temp) {
      prev = {
        key,
        value: dictionary[key],
      };
    } else {
      return prev;
    }
  }
  throw new Error("unexpected nearest");
}

export function toRomanNumber(num: number) {
  let result = "";
  let newvalue = num;
  while (newvalue !== 0) {
    const nearest = findNearest(newvalue);
    newvalue -= nearest.value;
    result += nearest.key;
  }
  return result;
}
