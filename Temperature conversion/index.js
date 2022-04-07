document.getElementById("submitbtn").onclick=function(){
    let temp=document.getElementById("myTemp").value;
    console.log("input value", temp);
    if (document.getElementById("cbutton").checked){
        temp=Number(temp);
        
        temp=tocelsius(temp);
        document.getElementById("result").innerHTML = `temperature in celsius = ${temp} °C`;
    
    }
    if (document.getElementById("fbutton").checked){
        temp=Number(temp);
        
        temp=tofarenheit(temp);
        document.getElementById("result").innerHTML = `temperature in farenheit = ${temp} °F`;
    
    }

}
function tocelsius(temp){
    return (temp-32) * (5/9);
}
function tofarenheit(temp){
    return temp * 9/5 + 32;
}




