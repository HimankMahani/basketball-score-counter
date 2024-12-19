let homeScore = 0;
let guestScore = 0;

function homePoint1(){
    homeScore++;
    document.getElementById("home-score").innerHTML = homeScore;
    setColor();
}

function homePoint2(){
    homeScore+=2;
    document.getElementById("home-score").innerHTML = homeScore;
    setColor();
}

function homePoint3(){
    homeScore+=3;
    document.getElementById("home-score").innerHTML = homeScore;
    setColor();
}

function guestPoint1(){
    guestScore++;
    document.getElementById("guest-score").innerHTML = guestScore;
    setColor();
}

function guestPoint2(){    
    guestScore+=2;
    document.getElementById("guest-score").innerHTML = guestScore;
    setColor();
}

function guestPoint3(){
    guestScore+=3;
    document.getElementById("guest-score").innerHTML = guestScore;
    setColor();
}

function setColor(){
    if(homeScore>guestScore){
        document.getElementById("home-score").style.color = "green";
        document.getElementById("guest-score").style.color = "red";
        document.getElementById("homeHead").style.color = "green";
        document.getElementById("guestHead").style.color = "red";
    }else if(homeScore<guestScore){
        document.getElementById("home-score").style.color = "red";
        document.getElementById("guest-score").style.color = "green";
        document.getElementById("homeHead").style.color = "red";
        document.getElementById("guestHead").style.color = "green";
    }else{
        document.getElementById("home-score").style.color = "#F94F6D";
        document.getElementById("guest-score").style.color = "#F94F6D";
        document.getElementById("homeHead").style.color = "white";
        document.getElementById("guestHead").style.color = "white";
    }
}

function reset(){
    homeScore = 0;
    guestScore = 0;
    document.getElementById("home-score").innerHTML = homeScore;
    document.getElementById("guest-score").innerHTML = guestScore;
    setColor();
}