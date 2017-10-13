

/* Open the sidenav */
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

/* Close/hide the sidenav */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}




function goingRedFirst(){
	myleftMove(700);
}

function goingBlueFirst(){
	myRightAngleMove(300, 80, 350, 900, 1);
}


function goingRedtoBlue(){
	
var elem = document.getElementById("mother_ship"); 
var wingman = document.getElementById("baby_ship");


    var leftPos = 80;
    var wingman_leftPos = 60;

    var id = setInterval(frame, 10);

    function frame() {
        if (leftPos == 700) {
            clearInterval(id);
        } else {
            leftPos++; 
            wingman_leftPos = 1.3 + wingman_leftPos;
            wingman.style.left = wingman_leftPos + 'px';
            elem.style.left = leftPos + 'px'; 
        }
    }

    setTimeout(function(){
        var topPos = 300;
        var leftPos = 700;

        var wingman_leftPos = 680;
        var wingman_topPos = 380;

        var id = setInterval(frame, 10);
        function frame() {
            if (leftPos == 900) {
                clearInterval(id);
            } else {
                leftPos++; 
                topPos = topPos + 1.4;

                wingman_leftPos++;
                wingman_topPos = wingman_topPos + 1.4;

                elem.style.top = topPos+ 'px'; 
                elem.style.left = leftPos + 'px'; 
                
                wingman.style.top = wingman_topPos + 'px';
                wingman.style.left = wingman_leftPos + 'px';
            }
        }
    }, 6200);


    setTimeout(function(){
        var topPos = 580;
        var leftPos = 900;

        var wingman_topPos = 660;
        var wingman_leftPos = 880;

        var id = setInterval(frame, 10);
        function frame() {
            if (leftPos == 1100) {
                clearInterval(id);
            } else {
                leftPos++; 
                topPos = topPos - 1;

                wingman_leftPos++;
                wingman_topPos = wingman_topPos - 1;

                elem.style.top = topPos + 'px'; 
                elem.style.left = leftPos + 'px'; 

                wingman.style.top = wingman_topPos + 'px';
                wingman.style.left = wingman_leftPos + 'px';
            }
        }    

    }, 8200);


}



function myRightAngleMove(topPos, leftPos, intendedLeftPos, myleftMoveValue, value) {
    var elem = document.getElementById("mother_ship"); 
    var topPos = topPos;
    var leftPos = leftPos;
    var id = setInterval(frame, 10);
    function frame() {
        if (leftPos == intendedLeftPos) {
            clearInterval(id);
        } else {
            leftPos++; 
            topPos = topPos + value;
            elem.style.top = topPos+ 'px'; 
            elem.style.left = leftPos + 'px'; 
        }
    }
}

function myleftMove(leftPosValue, nextMove) {
    var elem = document.getElementById("mother_ship"); 
    var leftPos = 80;
    var id = setInterval(frame, 10);

    function frame() {
        if (leftPos == leftPosValue) {
            clearInterval(id);
            callback();
        } else {
            leftPos++; 
            elem.style.left = leftPos + 'px'; 
        }
    }
    
}


goingRedtoBlue();




var start = new Date();
var startsec = start.getHours()*3600+start.getMinutes()*60+start.getSeconds();

var score = 0;
var life = 12;
var energy = 12;

var shieldChosen = false;
var drillChosen = false;

function chooseUpgrade() {
    $("#upgrade-box").hide();
}

function upgradeShield() {
    if (drillChosen) {
        upgradeDrill();
    }
    if (!shieldChosen) {
        document.getElementById('shield-box').innerHTML = '<img id="shield-select" class="upgrade" src="assets/upgrade_shield_selected.png" onclick="upgradeShield()">';
        shieldChosen = true;
    } else {
        document.getElementById('shield-box').innerHTML = '<img id="shield" class="upgrade" src="assets/upgrade_shield.png" onclick="upgradeShield()">';
        shieldChosen = false;
    }
}

function upgradeDrill() {
    if (shieldChosen) {
        upgradeShield();
    }
    if (!drillChosen) {
        document.getElementById('drill-box').innerHTML = '<img id="drill-select" class="upgrade" src="assets/upgrade_drill_selected.png" onclick="upgradeDrill()">';
        drillChosen = true;
    } else {
        document.getElementById('drill-box').innerHTML = '<img id="drill" class="upgrade" src="assets/upgrade_drill.png" onclick="upgradeDrill()">';
        drillChosen = false;
    }
}

function getScore() {
    var scoreString = score.toString();
    document.getElementById('points').innerHTML = "SCORES : "+ "0".repeat(6 - scoreString.length) + scoreString;
}

function addScore() {
    score += 500;
    getScore();
}

function updateLife(n) {
    life -= n;
    if (life < 0) {
        life = 0;
    }
    document.getElementById('life').innerHTML = '<img src="assets/heart_bar' + life + '.png" alt="Life" style="margin-left:5vw">';
}

function startTime() {
var today = new Date();
var currsec = today.getHours()*3600+today.getMinutes()*60+today.getSeconds();
var m = Math.floor((currsec-startsec)/60);
var s = (currsec-startsec)%60;
m = checkTime(m);
s = checkTime(s);
document.getElementById('timer').innerHTML =
m + " : " + s;
var t = setTimeout(startTime, 500);
}
function checkTime(i) {
if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
return i;
}



function rere(){ window.location.reload();}



function addImg() {
    document.getElementById("button1").innerHTML = "<img src=assets/if_heart02.png style='height:60px;margin-left:-10px'>";
    $(".popup").hide();
    document.getElementById("button3").innerHTML = "<img src=assets/if_heart01.png style='height:60px;margin-left:-10px'>";
    }

function addImg1() {
    document.getElementById("button1").innerHTML = "<img src=assets/if_shield02.png style='height:60px;margin-left:-10px'>";
    $(".popup").hide();
    document.getElementById("button3").innerHTML = "<img src=assets/if_shield01.png style='height:60px;margin-left:-10px'>";}

function addImg2() {
    document.getElementById("button1").innerHTML = "<img src=assets/if_gem02.png style='height:60px;margin-left:-10px'>";
    $(".popup").hide();
    document.getElementById("button3").innerHTML = "<img src=assets/if_gem01.png style='height:60px;margin-left:-10px'>";}

function addImg3() {
    document.getElementById("button2").innerHTML = "<img src=assets/planet-moon.png style='margin-left:20px;margin-top:-15px;height:100px'>";
    $(".popup1").hide();
}

function addImg4() {
    document.getElementById("button2").innerHTML = "<img src=assets/planet-lava.png style='margin-left:20px;margin-top:-15px;height:100px'>";
    $(".popup1").hide();}

function addImg8() {
    document.getElementById("button4").innerHTML = "<img src=assets/planet-moon.png style='margin-left:20px;margin-top:-15px;height:100px'>";
    $(".popup2").hide();
}

function addImg9() {
    document.getElementById("button4").innerHTML = "<img src=assets/planet-lava.png style='margin-left:20px;margin-top:-15px;height:100px'>";
    $(".popup2").hide();}

function addImg5(){
    document.getElementById("button1").innerHTML = "<img src=assets/if_heart01.png style='height:60px;margin-left:-10px'>";
    $(".popup").hide();
    document.getElementById("button3").innerHTML = "<img src=assets/if_heart02.png style='height:60px;margin-left:-10px'>";
}

function addImg7() {
    document.getElementById("button1").innerHTML = "<img src=assets/if_gem01.png style='height:60px;margin-left:-10px'>";
    $(".popup").hide();
    document.getElementById("button3").innerHTML = "<img src=assets/if_gem02.png style='height:60px;margin-left:-10px'>";}


function addImg6() {
    document.getElementById("button1").innerHTML = "<img src=assets/if_shield01.png style='height:60px;margin-left:-10px'>";
    $(".popup").hide();
    document.getElementById("button3").innerHTML = "<img src=assets/if_shield02.png style='height:60px;margin-left:-10px'>";}




$(".link").click(function(e){
    e.preventDefault();
    $(".popup").fadeIn(300,function(){$(this).focus();});
});

$('.close').click(function() {
    $(".popup").fadeOut(300);
});
$(".popup").on('blur',function(){
    $(this).fadeOut(300);
});

$(".link1").click(function(e){
    e.preventDefault();
    $(".popup1").fadeIn(300,function(){$(this).focus();});
});

$('.close1').click(function() {
    $(".popup1").fadeOut(300);
});
$(".popup1").on('blur',function(){
    $(this).fadeOut(300);
});

$(".link2").click(function(e){
    e.preventDefault();
    $(".popup2").fadeIn(300,function(){$(this).focus();});
});

$('.close2').click(function() {
    $(".popup2").fadeOut(300);
});
$(".popup2").on('blur',function(){
    $(this).fadeOut(300);
});
