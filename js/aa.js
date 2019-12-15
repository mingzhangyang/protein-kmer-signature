const a = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const aa = [];
for (let i of a) {
  for (let j of a) {
    aa.push(i+j);
  }
}

const aaa = [];
for (let i of a) {
  for (let j of a) {
    for (let k of a) {
      aaa.push(i+j+k);
    }
  }
}

export {a, aa, aaa};