import setup_1 from "./setup/k-mer-1.js"
import setup_2 from "./setup/k-mer-2.js"

window.onload = () => {
  console.log("loaded");
  setup_1();
  setup_2();
};