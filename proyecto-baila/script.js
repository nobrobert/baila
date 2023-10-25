let esqueleto="off";
let esqueletoStop = document.getElementById("esqueletoQuieto");
let botonsonido =new Audio("audios/bailar.mp3");
let botonsonido1 =new Audio("audios/audio.mp3");
function bailar(){
    if(esqueleto =="off"){
        esqueleto="on"
        esqueletoStop.classList.add("on");
        esqueletoStop.addEventListener('click',()=>{
             botonsonido.play();
        })
        esqueletoStop.addEventListener('click',()=>{
            botonsonido1.play();
        })
        console.log("On");

    }else{
        esqueleto="off"
        esqueletoStop.classList.remove("on");
        esqueletoStop.addEventListener('click',()=>{
            botonsonido1.pause();
        })
    }
}
