const Cornometer=document.querySelector(".timer");
var Timer=[0,0,0,0];
function runtimer(){
    let currentTime= Timer[0] +":" + Timer[1]+":"+Timer[2];
    Timer[3]++;
    Timer[0]=Math.floor((Timer[3]/100)/60);
    Timer[1]=Math.floor((Timer[3]/100)-(Timer[0]*60));
    Timer[2]=Math.floor(Timer[3]-(Timer[1]*100)-(Timer[0]*6000));
    Cornometer.innerHTML=currentTime;
}
setInterval(runtimer,10);
