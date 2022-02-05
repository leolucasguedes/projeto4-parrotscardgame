let qtdcartas = 14;
let par = 0;

/*
while(qtdcartas<4 || qtdcartas>14 || par!==0){
    qtdcartas=prompt("Com quantas cartas quer jogar?");
    qtdcartas=parseInt(qtdcartas);
    par = qtdcartas%2;
}
*/

let main = document.querySelector(".main")
const images = [
    "bobrossparrot.gif",
    "explodyparrot.gif",
    "fiestaparrot.gif",
    "metalparrot.gif",
    "revertitparrot.gif",
    "tripletsparrot.gif",
    "unicornparrot.gif"
];

let arrayDeCartas = [];

for (let a = 0; a < qtdcartas / 2; a++){
    arrayDeCartas.push(images[a]);
    arrayDeCartas.push(images[a]);
}

for(let i = 0; i < arrayDeCartas.length; i++){
    main.innerHTML += `
    <div class="card-box">
    <img src="images/${arrayDeCartas[i]}" alt="Parrot">
    <img src="images/front.png">
</div>`;
}
