const ime = document.getElementById("ime");
const zacuvajSkorBtn = document.getElementById("zacuvajSkorBtn");
const PosledenSkor = localStorage.getItem('PosledenSkor');
const kraenSkor=document.getElementById("kraenSkor");

const NajdobriRezultati = JSON.parse(localStorage.getItem("NajdobriRezultati")) || [];

const MaksimalenSkor = 5;

kraenSkor.innerText = PosledenSkor;

ime.addEventListener('keyup', () => {
    zacuvajSkorBtn.disabled = !ime.value;
} );


zacuvajSkor = (e) =>{
    e.preventDefault();
    
    const SKOR = {
        SKOR: PosledenSkor,
        ime:ime.value
    };
    

    NajdobriRezultati.push(SKOR);
    
    NajdobriRezultati.sort((a,b)=> b.SKOR - a.SKOR);
    
    NajdobriRezultati.splice(5);
      
    localStorage.setItem('NajdobriRezultati', JSON.stringify(NajdobriRezultati));
    
    window.location.assign("html_test.html");
};