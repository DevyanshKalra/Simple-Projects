let pcNum=Math.floor(Math.random()*10)+1;
let guesses=0;
document.getElementById("submitbtn").onclick=function(){
    
    let myNum=document.getElementById("myinput").value;
   
    if(myNum==pcNum){
        
        document.getElementById("result").innerHTML=`You guessed right! it took you ${guesses} guesses.`;
    }
    else if (myNum>pcNum){
        alert("Go Lower!")
        document.getElementById("result").innerHTML=""
        guesses+=1;
    }
    else if(myNum<pcNum){
        alert("Go Higher!")
        document.getElementById("result").innerHTML=""
        guesses+=1;
    }
    else{
        alert("Please enter a valid input")
    }

}
