function clock() {
    var date = new Date();

    var Hoursess = date.getHours();
    var Minutes = date.getMinutes();
    var Seconds = date.getSeconds();

    if (Hoursess === 0) {
        Hoursess = 12;
    }

    if (Hoursess > 12) {
        Hoursess -= 12;
    }

    Hoursess = (Hoursess < 10) ? "0" + Hoursess : Hoursess;
    Minutes = (Minutes < 10) ? "0" + Minutes : Minutes;
    Seconds = (Seconds < 10) ? "0" + Seconds : Seconds;

    var alltime = Hoursess + ":" + Minutes + ":" + Seconds;
    document.getElementById("Time").innerHTML = alltime;

    setTimeout(clock, 1000);
}
clock();