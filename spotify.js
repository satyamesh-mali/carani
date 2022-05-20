let i=0;
let list = ['sailing.mp3','music2.mp3'];
let play4 = document.getElementById('play4');
let k = 0;
play4.addEventListener('click',function(){
    i=0;
    if(k==0){
        audiochanger(0);
        document.getElementById('play').classList.remove('fa-play');
        audio.play();
        k+=1;
    }
    else{
        document.getElementById('play').classList.add('fa-play');
        audio.pause();
        k-=1;
    }
})
let play1 = document.getElementById('play1');
j=0;
play1.addEventListener('click',function(){
    i==1;
    if(j==0){
        audiochanger(1);
        document.getElementById('play').classList.remove('fa-play');
        audio.play();
        j+=1;
    }
    else{
        audio.pause();
        document.getElementById('play').classList.add('fa-play');
        j-=1;
    }
})
let play2 = document.getElementById('play2');

function audiochanger(i){
    audio = new Audio(list[i]);
    audio.addEventListener('timeupdate',function(){
        value = (audio.currentTime/audio.duration)*100;
        progressbar.value=value;
    })
    progressbar.addEventListener('change',function(){
        audio.currentTime = progressbar.value*audio.duration/100;
    })
}


// function imagechanger(i,num,name){
//     if(i==num){
//         name.classList.remove('fa-play');
//         name.classList.add('fa-pause');
//     }
//     else{
//         name.classList.remove('fa-pause');
//         name.classList.add('fa-play');
//     }
// }
// audio = new Audio(list[i]);
let play = document.getElementById('play');
let count = 0;
let progressbar = document.getElementById('haha');
play.addEventListener('click',function(){
    if(count==0){
        audio.play();
        count+=1;
        document.getElementById('play').classList.remove('fa-play');
    }
    else{
        audio.pause();
        document.getElementById('play').classList.add('fa-play');
        count-=1;
    }
})
// audio.addEventListener('timeupdate',function(){
//     value = (audio.currentTime/audio.duration)*100;
//     progressbar.value=value;
// })
// progressbar.addEventListener('change',function(){
//     audio.currentTime = progressbar.value*audio.duration/100;
// })
// if(audio.currentTime==audio.duration){
//     audio.currentTime=0;
// }