"use strict";

var c = 0;
function setDate() {
    var date = new Date();
    var newTime = date.toLocaleTimeString();

    //   const mishmash = 13 + 'world';
    //   [13].length;
    

    var day = date.getDate();
    var month = (date.getMonth() + 1);
    var year = date.getFullYear();
    // var hour = (date.getHours() % 12);
    // var minute = date.getMinutes();
    // var seconds = date.getSeconds();

    // var after = (date.getHours() < 12) ? "AM" : "PM";
//  <span style="font-size:5vh;border-bottom:1px solid white;margin-top:10px">${hour} : ${minute} : ${seconds} : ${after}</span><br>
   
    var first = `
     <span style="font-size:5vh;border-bottom:1px solid white;margin-top:10px">${newTime}</span><br>
    <span style="font-size:3vh">${day} - ${month} - ${year}</span><br><br> <br> 
  `;

    document.getElementsByClassName("reference")[0].style.display = "block";
    document.getElementsByClassName("reference")[1].style.display = "none";
    document.getElementsByClassName("reference")[2].style.display = "none";
    document.getElementsByClassName("reference")[0].innerHTML = first;
    if (c == 0) {
        setTimeout(() => {
            setDate();
        }, 1);
    }
    else {
        getLocation();
    }
}

setDate();
