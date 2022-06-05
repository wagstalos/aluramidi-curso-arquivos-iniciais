function playSound(idElementAudio){
    document.querySelector(idElementAudio).play();
}

//document.querySelector('.tecla_pom').onclick = playPom;
const listaDeTeclas = document.querySelectorAll('.tecla');

// let contador = 0;
// while (contador < listaDeTeclas.length){

//     const tecla = listaDeTeclas[contador];
//     const instrumento = tecla.classList[1];

//     const idAudio = `#som_${instrumento}`;

//     tecla.onclick = function(){
//         playSound(idAudio)
//     };

//     contador ++;
// }

for (let contador = 0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function(){
        playSound(idAudio)
    };

}