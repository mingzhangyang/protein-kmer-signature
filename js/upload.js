import setup_1 from './setup/k-mer-1.js';
import setup_2 from './setup/k-mer-2.js';
import setup_3 from './setup/k-mer-3.js';

export default async function handleFile() {
  const file = this.files[0];
  // if (!file.name.toUpperCase().endsWith(".FASTA")) {
  //   alert("An fasta file is expected.");
  //   return;
  // }
  try {
    let str = await file.text();
    setup_1(str);
    setup_2(str);
    setup_3(str);
  } catch(err) {
    console.error(err);
    alert("Something wrong. Please try again.");
  }
}