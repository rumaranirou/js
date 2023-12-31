//show result

function cName(){
    var data = document.getElementsByTagName('h1');
    alert(data.length);
}



//show result
//function cName(){
 //   document.getElementsByClassName('p')[0].innerHTML="world";
//}




// show result
var number1 = 18;
var number2 = 6;
var result = number1 - number2;


function showResult(){
    document.getElementById('result').innerHTML=result;

}


// show result





 var number1 = 59;
 var number2 = 3;

 var result = number1 + number2;

function showResult(){
    document.getElementById('result').innerHTML=result;
}

//show/hide text
function showText(){
    document.getElementById('tsh').style.display="block";

}
function hideText(){
    document.getElementById('tsh').style.display="none";

}
//show border
function showBorder(){

    document.getElementById('sb').style.border="2px solid red";

}
//bulb on/off
function bulbOn(){
    document.getElementById('img').src="img/on.gif";

} 
function bulbOff(){
    document.getElementById('img').src=img/Off.gif;

    
} 

//show date
function showDate(){
    document.getElementById('sd').innerHTML=Date();
}


//jstext change

function textChange(){

    document.getElementById('t_h3').innerHTML="hello"
}


//jq