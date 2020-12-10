function realTimeClock() {

    // Set up Variables 
    var rTClock = new Date();
    var today= rTClock.toDateString();
    console.log(today); 
    var hrs = rTClock.getHours();
    var min = rTClock.getMinutes();
    var sec = rTClock.getSeconds();

    // Add AM and PM system 

    /* var pm = "PM";
    var am = "AM";

    if (hrs > 12) { 
        return pm
    } else return am */

    // let result = condition ? value1 : value2;
    var amPM = (hrs < 12 ? "AM" : "PM")

    // convert hrs to 12-hours format 

    hrs = (hrs > 12) ? hrs - 12 : hrs;

    // zeros before numbers 

    hrs = ("0" + hrs).slice(-2);
    min = ("0" + min).slice(-2);
    sec = ("0" + sec).slice(-2);



    //display the clock 
    document.getElementById('clock').innerHTML = hrs + " : " + min + " : " + sec + " " + amPM;
    document.getElementById('today').innerHTML = today;
    // var t = setTimeout(realTimeClock, 500);

}