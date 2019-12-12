import Counter from './counter.js';

const parse = (fasta, k) => {
  let lines = fasta.split("\n").map(line => line.trim());
  let counter = new Counter();
  let all = [];
  for (let line of lines) {
    if (line[0] === ">") {
      continue;
    }
    all.push(line);
  }
  let s = all.join("");
  for (let i = 0, n = s.length; i < n - k + 1; i++) {
    counter.add(s.slice(i, i+k));
  }
  return counter;
};

export default parse;
