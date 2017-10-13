/* Open the sidenav */
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

/* Close/hide the sidenav */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


// function myMove() {
//     var elem = document.getElementById("mother_ship"); 
//     var topPos = 300;
//     var leftPos = 80;
//     var id = setInterval(frame, 7);
//     function frame() {
//         if (leftPos == 350) {
//             clearInterval(id);
//         } else {
//             leftPos++; 
//             topPos++;
//             elem.style.top = topPos+ 'px'; 
//             elem.style.left = leftPos + 'px'; 
//         }
//     }
// }


function myLeftMove() {
    var elem = document.getElementById("mother_ship"); 
    var leftPos = 80;
    var id = setInterval(frame, 7);
    function frame() {
        if (leftPos == 400) {
            clearInterval(id);
        } else {
            leftPos++; 
            elem.style.left = leftPos + 'px'; 
        }
    }
}