import setup_4 from "./setup/k-mer-4.js"

window.onload = () => {
  console.log("loaded");
  document.getElementById("upload-btn").addEventListener("change", async function () {
    const file = this.files[0];
    if (!file.name.toUpperCase().endsWith(".FASTA")) {
      alert("An fasta file is expected.");
      return;
    }
    try {
      let str = await file.text();
      setup_4(str);
    } catch(err) {
      console.error(err);
      alert("Something wrong. Please try again.");
    }
  });
  setup_4();
};