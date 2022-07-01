///DEKLARIRANJE NA PROMENLIVI I DODELUVANJE NA VREDNOST
const prasanje = document.getElementById("prasanje");
const izborN=Array.from(document.getElementsByClassName("izbor-text"));
const BrojacPrasanje= document.getElementById("prasanjeBrojac");
const BrojacSkor= document.getElementById("skor");
///console.log(izborN);
let ovaPrasanje = {}
let prifatiOdgovor = false;
let skor=0;
let prasanjeBrojac= 0;
let ponudeniPrasanja=[];
///INICIJALIZIRANJE NA TEST PRASANJA
let prasanja=[
    {
        prasanje: "HTML претставуваа: ",
        izbor1:"Скриптен јазик",
        izbor2:"Hyper Text Markup Language",
        izbor3:"Програмски јазик за креирање на страници",
        izbor4:"Структурен јазик за креирање на апликации",
        odgovor: 2
    },{
        prasanje: "Таг за најголем header на страница: ",
        izbor1:"cin>>''text'';",
        izbor2:"cout.line;",
        izbor3:"<h1>Здраво</h1>",
        izbor4:"writeln('text');",
        odgovor: 3
    },{
        prasanje: "Како се повикува надворешен стил: ",
        izbor1:"Со помош на таг за скрипта <script></script>",
        izbor2:"со помош на тагот <style>",
        izbor3:"System scanner = new INT.scanner('css/main.css'); ",
        izbor4:"<link rel='stylesheet' type='text/css' href='../css/style.css'> ",
        odgovor: 4
    },{
        prasanje: "На кој ќе дефинираш внатрешен стил: ",
        izbor1:"Користејќи таг за програмирање <code></code>",
        izbor2:"Со помош на таг <style></style>",
        izbor3:"<p style ='color:crvena;'>Tekst</p>",
        izbor4:"var style = doom.html.css.style='background: red'",
        odgovor: 2
    },{
        prasanje: "Имплементирање на слика се врши со помош на:  ",
        izbor1:"<img src='slika.jpg' alt='Slika1'></img> ",
        izbor2:"<video src='slika.gig'></video>",
        izbor3:"<a href='index.php'><img src='img-nav.jpg'></img></a>",
        izbor4:"Ништо од наведеното",
        odgovor: 1
    },{
        prasanje: "Доделување на стил директно врз html елемент за текст:  ",
        izbor1:"Неможе да се додели таков стил",
        izbor2:"<p class='color:red'>Crven teskt</p>",
        izbor3:"<p style='color:red'>Crven teskt</p>",
        izbor4:"Ништо од наведеното",
        odgovor: 3
    },{
        prasanje: "Таг за табела:  ",
        izbor1:"<table></table>",
        izbor2:"<table>",
        izbor3:"Ништо од наведеното",
        izbor4:"<div id='table'></div>",
        odgovor: 1
    },{
        prasanje: "Најмал header во HTML:  ",
        izbor1:"<hsmaller></hsmaller>",
        izbor2:"<h2>Најмал сум јас</h2>",
        izbor3:"<h6>Се користам за поднаслов</h6>",
        izbor4:"<hsmall>Јас сум најмал </hsmall>",
        odgovor: 3
    },{
        prasanje: "Дефинирање на подредена навигација:  ",
        izbor1:"<ol><li><a>Недефинирана навигација</a></li></ol",
        izbor2:"<ul><li><a>Опреледена и дефинирана навигација</a></li></ul",
        izbor3:"<p style='color:red'>Со помош на параграфи</p>",
        izbor4:"<a>Линкот може да биде и надворешен</a>",
        odgovor: 2
    },{
        prasanje: "Таг за линк:  ",
        izbor1:"<a>Почетна</a>",
        izbor2:"<ul><li><a>Опреледена и дефинирана навигација</a></li></ul",
        izbor3:"<p style='color:red'>Со помош на параграфи</p>",
        izbor4:"<link>Линкот може да биде и надворешен</link>",
        odgovor: 1
    }
];


///INICIJALIZIRANJE NA BONUS I MAX_PRASANJA

const BONUS = 10;
const MAX_PRASANJA = 10;

///INICIJALIZIRANJE NA FUNKCIJA zapocniTest
zapocniTest = () =>{
    prasanjeBrojac = 0;
    skor = 0;
    ponudeniPrasanja = [...prasanja];
    ///console.log(ponudeniPrasanja);
    getNovoPrasanje();
}
///INICIJALIZIRANJE NA FUNKCIJA getNovoPrasanje
getNovoPrasanje=()=>{
    if(ponudeniPrasanja === 0 || prasanjeBrojac >= MAX_PRASANJA){
        localStorage.setItem('PosledenSkor', skor);
        /**ODI NA POSLEDNA STRANICA */
        return window.location.assign("kraj.html");
    }
    prasanjeBrojac++;
    BrojacPrasanje.innerText = `${prasanjeBrojac}/${MAX_PRASANJA} `;
    
    const prasanjePozicija=Math.floor(Math.random() * ponudeniPrasanja.length);
    ovaPrasanje = ponudeniPrasanja[prasanjePozicija];
    prasanje.innerText = ovaPrasanje.prasanje;
    izborN.forEach( izbor=>{
        const broj = izbor.dataset['number'];
        izbor.innerText = ovaPrasanje['izbor'+broj];
    } );
    ponudeniPrasanja.splice(prasanjePozicija,1);
    prifatiOdgovor=true;
};
izborN.forEach(izbor=> {
    izbor.addEventListener ("click", e=>{
        if(!prifatiOdgovor) return alert("nesto");
        prifatiOdgovor=false;
        const SelektiranIzbor=e.target;
        const SelektiranOdgovor=SelektiranIzbor.dataset['number'];

        const clasaZaSelektiranje = SelektiranOdgovor == ovaPrasanje.odgovor ? "tocno" : "netocno";
        if(clasaZaSelektiranje==="tocno"){
            pokaciSkor(BONUS);
        }

        SelektiranIzbor.parentElement.classList.add(clasaZaSelektiranje);
        setTimeout( ( )=>{
            SelektiranIzbor.parentElement.classList.remove(clasaZaSelektiranje);
            getNovoPrasanje();
        },1000);
    });
});
pokaciSkor = num =>{
    skor+=num;
    BrojacSkor.innerText=skor;
};

zapocniTest();