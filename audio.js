var Audio =document.querySelector("#audio");
Audio.pause();

function play(i){  
    if(i==1){
        Audio.play();
    }

    else if(i==0){
        Audio.pause();
    }    
}

document.querySelector("#play").addEventListener("click",()=>{
   document.querySelector("#play").style.display="none";
   document.querySelector("#music").style.display="block";
    play(0);

})

document.querySelector("#music").addEventListener("click",()=>{
   document.querySelector("#music").style.display="none";
   document.querySelector("#play").style.display="block";
   play(1);

})
