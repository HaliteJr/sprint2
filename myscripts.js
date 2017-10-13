
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
    
    
        var leftPos = 80;
        var id = setInterval(frame, 10);

        function frame() {
            if (leftPos == 700) {
                clearInterval(id);
            } else {
                leftPos++; 
                elem.style.left = leftPos + 'px'; 
            }
        }



setTimeout(function(){
    var topPos = 300;
    var leftPos = 700;
    var id = setInterval(frame, 10);
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
    }, 6200);

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
