let qtdcartas = 0;
let par = 0;

/* let div = [];
let qtdimagens = []; */

/*
while(qtdcartas<4 || qtdcartas>15 || par!==0){
    qtdcartas=prompt("Quantas cartas...?");
    qtdcartas=parseInt(qtdcartas);
    par = qtdcartas%2;
}
*/

let main = document.querySelector("main")
const images = [
    "bobrossparrot.gif",
    "explodyparrot.gif",
    "fiestaparrot.gif",
    "metalparrot.gif",
    "revertitparrot.gif",
    "tripletsparrot.gif",
    "unicornparrot.gif"
];

let div = []

for(let i = 0; i < images.length; i++){
    main.innerHTML = main.innerHTML + `
    <div class="card-box">
    <img src=images/${images[i]} alt="Parrot">
</div>

   `
}

main.innerHTML = div;
