const Cornometer=document.querySelector(".timer");
var Timer=[0,0,0,0];
var runner=false;
function Standardtimer(time){
    if(time<=9){
        time="0"+time;
    }
    return time;
}
function runtimer(){
    let currentTime= Standardtimer(Timer[0]) +":" + Standardtimer(Timer[1])+":"+Standardtimer(Timer[2]);
    Timer[3]++;
    Timer[0]=Math.floor((Timer[3]/100)/60);
    Timer[1]=Math.floor((Timer[3]/100)-(Timer[0]*60));
    Timer[2]=Math.floor(Timer[3]-(Timer[1]*100)-(Timer[0]*6000));
    Cornometer.innerHTML=currentTime;
}

function textTimer(){
    let textAreaLength=document.querySelector("#text-area").value.length;
    if (textAreaLength==0 && !runner){
        runner=true;
        setInterval(runtimer,10);
    }
}
var textArea=document.querySelector("#text-area");
textArea.addEventListener("keypress",textTimer);