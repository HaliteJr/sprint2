
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
	myRightAngleMove();
}


setTimeout(goingRedFirst(), 10);
setTimeout(goingRedtoBlue(), 10);





function goingRedtoBlue(){
	var elem = document.getElementById("mother_ship"); 
    var topPos = 300;
    var leftPos = 700;
    var id = setInterval(frame, 7);
    function frame() {
        if (leftPos == 900) {
            clearInterval(id);
        } else {
            leftPos++; 
            topPos = topPos + 1.4;
            elem.style.top = topPos+ 'px'; 
            elem.style.left = leftPos + 'px'; 
        }
    }
}





function myRightAngleMove() {
    var elem = document.getElementById("mother_ship"); 
    var topPos = 300;
    var leftPos = 80;
    var id = setInterval(frame, 10);
    function frame() {
        if (leftPos == 350) {
            clearInterval(id);
        } else {
            leftPos++; 
            topPos++;
            elem.style.top = topPos+ 'px'; 
            elem.style.left = leftPos + 'px'; 
        }
    }
    myleftMove(900);
}
function myleftMove(leftPosValue) {
    var elem = document.getElementById("mother_ship"); 
    var leftPos = 80;
    var id = setInterval(frame, 10);
    function frame() {
        if (leftPos == leftPosValue) {
            clearInterval(id);
        } else {
            leftPos++; 
            elem.style.left = leftPos + 'px'; 
        }
    }
}

