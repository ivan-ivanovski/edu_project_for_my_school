const NajdobriRezultatiList = document.getElementById("NajdobriRezultatiList");
const NajdobriRezultati = JSON.parse(localStorage.getItem("NajdobriRezultati")) || [];

NajdobriRezultatiList.innerHTML = NajdobriRezultati
  .map(skor => {
    return `<table border="1px solid gray" width="100%"><tr class="VisokSkor"><td >${skor.ime}</td><td> ${skor.SKOR}</td></tr></table>`;
  })
  .join("");