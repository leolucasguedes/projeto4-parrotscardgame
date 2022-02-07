function strTime() {
    let seg = Time % 60;
    let min = Math.trunc(Time / 60);

    if (seg < 10) {
        seg = "0" + seg;
    }

    if (min < 10) {
        min = "0" + min;
    }

    return min + ":" + seg;
}

function startTime() {
    StartTime = new Date();
    setTimeout(partialTime, 1000);
}

function partialTime() {
    if(GameOver == false) {
        Time = Math.trunc((new Date() - StartTime) / 1000);
    
        updateTime();
        setTimeout(partialTime, 1000);
    }
}

function stopTime() {
    Time = Math.trunc((new Date() - StartTime) / 1000);
}