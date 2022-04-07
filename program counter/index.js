let count=0;
document.getElementById("decreasebutton").onclick=function(){
    count-=1
    document.getElementById("countlabel").innerHTML=count;
}
document.getElementById("resetbutton").onclick=function(){
    count=0
    document.getElementById("countlabel").innerHTML=count;
}
document.getElementById("increasebutton").onclick=function(){
    count+=1
    document.getElementById("countlabel").innerHTML=count;
}