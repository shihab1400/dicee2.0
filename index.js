
var p1Score = 0;
var p2Score = 0;

var win = document.querySelector(".heading");
var dicee1 = document.querySelector(".dicee1");
var dicee2 = document.querySelector(".dicee2");
var sC1 = document.querySelectorAll(".scoreContainer")[0];
var sC2 = document.querySelectorAll(".scoreContainer")[1];
var s1 = document.querySelector(".score1");
var s2 = document.querySelector(".score2");
var t1 = document.querySelectorAll(".scoreContainer h4")[0];
var t2 = document.querySelectorAll(".scoreContainer h4")[1];
var count = document.querySelector(".count");
var footerImoji = document.querySelector(".footer span");
var start = document.querySelector(".start");

var c = 0;
var doubleRoll = 0;
var myInterval;
var btn;
var rnRand;

document.querySelector(".rlBtn").addEventListener("click", function() {
    footerImoji.innerHTML = "🙂";
    btn = 0;
    roll();
});

document.querySelector(".btnStart").addEventListener("click", function() {
    start.style.display = "none";
});

document.querySelector(".btn1000").addEventListener("click", function() {
    footerImoji.innerHTML = "🙂";
    btn = 1;
    myInterval = setInterval(roll, 1);
});

document.querySelector(".btnRN").addEventListener("click", function() {
    footerImoji.innerHTML = "🙂";
    btn = 2;
    rnRand = Math.ceil(Math.random()*5000)+5000;
    myInterval = setInterval(roll, 1);
});

function roll() {
    var rand1 = Math.ceil(Math.random()*6);
    var rand2 = Math.ceil(Math.random()*6);

    if(Math.abs(rand1-rand2)===5) {
        doubleRoll++;
    }

    if(btn===0) {
        if(doubleRoll>0 && Math.abs(rand1-rand2)!=5) {
            if(rand1>rand2) {
                win.innerHTML = "Round Winner: Player 1🚩";
                p1Score+=2*(rand1-rand2);
            } else if(rand1<rand2) {
                win.innerHTML = "Round Winner: Player 2🚩";
                p2Score+=2*(rand2-rand1);
            } else {
                win.innerHTML = "Round Winner: ⭐Draw!⭐";
            }
            doubleRoll--;
        } else if(Math.abs(rand1-rand2)!=5) {
            if(rand1>rand2) {
                win.innerHTML = "Round Winner: Player 1🚩";
                p1Score+=(rand1-rand2);
            } else if(rand1<rand2) {
                win.innerHTML = "Round Winner: Player 2🚩";
                p2Score+=(rand2-rand1);
            } else {
                win.innerHTML = "Round Winner: ⭐Draw!⭐";
            }
        }
        if(Math.abs(rand1-rand2)===5) {
            win.innerHTML = "Double Roll Round!🥁("+doubleRoll+")";
        }
    }

    if(btn===1 || btn===2) {
        if(doubleRoll>0 && Math.abs(rand1-rand2)!=5) {
            if(rand1>rand2) {
                p1Score+=2*(rand1-rand2);
            } else if(rand1<rand2) {
                p2Score+=2*(rand2-rand1);
            }
            doubleRoll--;
        } else if(Math.abs(rand1-rand2)!=5) {
            if(rand1>rand2) {
                p1Score+=(rand1-rand2);
            } else if(rand1<rand2) {
                p2Score+=(rand2-rand1);
            }
        }
        document.querySelector(".btn1").disabled = true;
        document.querySelector(".btn1000").disabled = true;
        document.querySelector(".btnRN").disabled = true;
        win.innerHTML = "Rolling...";
    }
        
    dicee1.setAttribute("src", "images/"+rand1+".png");
    dicee2.setAttribute("src", "images/"+rand2+".png");

    sC1.style.opacity = "1";
    sC2.style.opacity = "1";

    if(p1Score>p2Score) {
        t1.innerHTML = "Player 1😀";
        t2.innerHTML = "Player 2😥";
    } else if(p1Score<p2Score) {
        t1.innerHTML = "Player 1😥";
        t2.innerHTML = "Player 2😀";
    } else {
        t1.innerHTML = "Player 1😐";
        t2.innerHTML = "Player 2😐";
    }

    s1.innerHTML = p1Score;
    s2.innerHTML = p2Score;
    
    c++;
    count.innerHTML = c;
    
    if(c%1000===0 && btn===1) {
        clearInterval(myInterval);
        document.querySelector(".btn1").disabled = false;
        document.querySelector(".btn1000").disabled = false;
        document.querySelector(".btnRN").disabled = false;
        if(p1Score>p2Score) {
            win.innerHTML = c/1000+"000th Roll Winner: Player 1🚩";
        } else if(p1Score<p2Score) {
            win.innerHTML = c/1000+"000th Roll Winner: Player 2🚩";
        } else {
            win.innerHTML = c/1000+"000th Roll Winner: ⭐Draw!⭐";
        }
    }
    
    if(c%rnRand===0 && btn===2) {
        clearInterval(myInterval);
        document.querySelector(".btn1").disabled = false;
        document.querySelector(".btn1000").disabled = false;
        document.querySelector(".btnRN").disabled = false;
        if(p1Score>p2Score) {
            win.innerHTML = "RN Roll Winner: Player 1🚩";
        } else if(p1Score<p2Score) {
            win.innerHTML = "RN Roll Winner: Player 2🚩";
        } else {
            win.innerHTML = "RN Roll Winner: ⭐Draw!⭐";
        }
    }
}


