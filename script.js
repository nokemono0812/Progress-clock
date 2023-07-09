let count = 0, fps = 2, milliSecLog = 0;
window.onload = calc();
function calc(){
    count ++;
    if(count == 15){
        document.getElementById('dot').textContent = '.';
    }
    if(count == 30){
        document.getElementById('dot').textContent = '..';
    }
    if(count == 45){
        document.getElementById('dot').textContent = '...';
    }
    if(count == 60){
        document.getElementById('dot').textContent = '';
        count = 0;
    }
    let rate;
    let rate2;
    let rate3;
    let rate4;
    let rate5;
    let rate6;
    let now;
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let millisecond = date.getMilliseconds();
    if(month == 1){
        now = (86400000 * (day - 1)) + (3600000 * hour) + (60000 * minute) + (1000 * second) + millisecond;
    }
    if(month == 2){
        now = (86400000 * (day - 1)) + (3600000 * hour) + (60000 * minute) + (1000 * second) + millisecond + (86400000 * 31);
    }
    if(month == 3){
        if(year % 4 == 0){
            now = (86400000 * (day - 1)) + (3600000 * hour) + (60000 * minute) + (1000 * second) + millisecond + (86400000 * 60);
        }
        else{
            now = (86400000 * (day - 1)) + (3600000 * hour) + (60000 * minute) + (1000 * second) + millisecond + (86400000 * 59);
        }
    }
    if(month == 4){
        if(year % 4 == 0){
            now = (86400000 * (day - 1)) + (3600000 * hour) + (60000 * minute) + (1000 * second) + millisecond + (86400000 * 91);
        }
        else{
            now = (86400000 * (day - 1)) + (3600000 * hour) + (60000 * minute) + (1000 * second) + millisecond + (86400000 * 90);
        }
    }
    if(month == 5){
        if(year % 4 == 0){
            now = (86400000 * (day - 1)) + (3600000 * hour) + (60000 * minute) + (1000 * second) + millisecond + (86400000 * 121);
        }
        else{
            now = (86400000 * (day - 1)) + (3600000 * hour) + (60000 * minute) + (1000 * second) + millisecond + (86400000 * 120);
        }
    }
    if(month == 6){
        if(year % 4 == 0){
            now = (86400000 * (day - 1)) + (3600000 * hour) + (60000 * minute) + (1000 * second) + millisecond + (86400000 * 152);
        }
        else{
            now = (86400000 * (day - 1)) + (3600000 * hour) + (60000 * minute) + (1000 * second) + millisecond + (86400000 * 151);
        }
    }
    if(month == 7){
        if(year % 4 == 0){
            now = (86400000 * (day - 1)) + (3600000 * hour) + (60000 * minute) + (1000 * second) + millisecond + (86400000 * 182);
        }
        else{
            now = (86400000 * (day - 1)) + (3600000 * hour) + (60000 * minute) + (1000 * second) + millisecond + (86400000 * 181);
        }
    }
    if(month == 8){
        if(year % 4 == 0){
            now = (86400000 * (day - 1)) + (3600000 * hour) + (60000 * minute) + (1000 * second) + millisecond + (86400000 * 213);
        }
        else{
            now = (86400000 * (day - 1)) + (3600000 * hour) + (60000 * minute) + (1000 * second) + millisecond + (86400000 * 212);
        }
    }
    if(month == 9){
        if(year % 4 == 0){
            now = (86400000 * (day - 1)) + (3600000 * hour) + (60000 * minute) + (1000 * second) + millisecond + (86400000 * 244);
        }
        else{
            now = (86400000 * (day - 1)) + (3600000 * hour) + (60000 * minute) + (1000 * second) + millisecond + (86400000 * 243);
        }
    }
    if(month == 10){
        if(year % 4 == 0){
            now = (86400000 * (day - 1)) + (3600000 * hour) + (60000 * minute) + (1000 * second) + millisecond + (86400000 * 274);
        }
        else{
            now = (86400000 * (day - 1)) + (3600000 * hour) + (60000 * minute) + (1000 * second) + millisecond + (86400000 * 273);
        }
    }
    if(month == 11){
        if(year % 4 == 0){
            now = (86400000 * (day - 1)) + (3600000 * hour) + (60000 * minute) + (1000 * second) + millisecond + (86400000 * 305);
        }
        else{
            now = (86400000 * (day - 1)) + (3600000 * hour) + (60000 * minute) + (1000 * second) + millisecond + (86400000 * 304);
        }
    }
    if(month == 12){
        if(year % 4 == 0){
            now = (86400000 * (day - 1)) + (3600000 * hour) + (60000 * minute) + (1000 * second) + millisecond + (86400000 * 335);
        }
        else{
            now = (86400000 * (day - 1)) + (3600000 * hour) + (60000 * minute) + (1000 * second) + millisecond + (86400000 * 334);
        }
    }
    if(year % 4 == 0){
        rate = now / 31622400000;
    }
    else{
        rate = now / 31536000000;
    }
    let displayMonth;
    let dayCount;
    if(month == 1){
        dayCount = 31;
        displayMonth = 'January';
    }
    if(month == 2){
        if(year % 4 == 0){
            dayCount = 29;
        }
        else{
            dayCount = 28;
        }
        displayMonth = 'February';
    }
    if(month == 3){
        dayCount = 31;
        displayMonth = 'March';
    }
    if(month == 4){
        dayCount = 30;
        displayMonth = 'April';
    }
    if(month == 5){
        dayCount = 31;
        displayMonth = 'May';
    }
    if(month == 6){
        dayCount = 30;
        displayMonth = 'June';
    }
    if(month == 7){
        dayCount = 31;
        displayMonth = 'July';
    }
    if(month == 8){
        dayCount = 31;
        displayMonth = 'August';
    }
    if(month == 9){
        dayCount = 30;
        displayMonth = 'September';
    }
    if(month == 10){
        dayCount = 31;
        displayMonth = 'October';
    }
    if(month == 11){
        dayCount = 30;
        displayMonth = 'November';
    }
    if(month == 12){
        dayCount = 31;
        displayMonth = 'December';
    }
    let displayMinute;
    if(minute < 10){
        displayMinute = '0' + minute;
    }
    else{
        displayMinute = minute;
    }
    let displaySecond;
    if(second < 10){
        displaySecond = '0' + second;
    }
    else{
        displaySecond = second;
    }
    let displayMillisecond;
    if(millisecond < 100){
        if(millisecond < 10){
            displayMillisecond = '00' + millisecond;
        }
        else{
            displayMillisecond = '0' + millisecond;
        }
    }
    else{
        displayMillisecond = millisecond;
    }
    rate2 = ((86400000 * (day - 1)) + (3600000 * hour) + (60000 * minute) + (1000 * second) + millisecond) / (86400000 * dayCount);
    rate3 = ((3600000 * hour) + (60000 * minute) + (1000 * second) + millisecond) / 86400000;
    rate4 = ((60000 * minute) + (1000 * second) + millisecond) / 3600000;
    rate5 = ((1000 * second) + millisecond) / 60000;
    if(fps == 0){
        rate6 = 0;
    }
    else{
        rate6 = millisecond / 1000;
    }
    document.getElementById("now").textContent = displayMonth + ' ' + day + ', ' + year + ' ' + hour + ':' + displayMinute + ':' + displaySecond + ':' + displayMillisecond;
    document.getElementById("year").textContent = year;
    document.getElementById("year2").textContent = year;
    document.getElementById("year3").textContent = year;
    document.getElementById("month").textContent = displayMonth;
    document.getElementById("month2").textContent = displayMonth;
    document.getElementById("day").textContent = day;
    document.getElementById("hour").textContent = hour;
    document.getElementById("hour2").textContent = hour;
    document.getElementById("hour3").textContent = hour;
    document.getElementById("minute").textContent = displayMinute;
    document.getElementById("minute2").textContent = displayMinute;
    document.getElementById("second").textContent = displaySecond;
    document.getElementById("rate").textContent = rate * 100;
    document.getElementById("rate2").textContent = rate2 * 100;
    document.getElementById("rate3").textContent = rate3 * 100;
    document.getElementById("rate4").textContent = rate4 * 100;
    document.getElementById("rate5").textContent = rate5 * 100;
    if(fps == 0){
        document.getElementById("rate6").textContent = 'incalculable';
    }
    else{
        document.getElementById("rate6").textContent = rate6 * 100;
    }
    document.getElementById("bar").style.width = rate * 400 + 'px';
    document.getElementById("bar2").style.width = rate2 * 400 + 'px';
    document.getElementById("bar3").style.width = rate3 * 400 + 'px';
    document.getElementById("bar4").style.width = rate4 * 400 + 'px';
    document.getElementById("bar5").style.width = rate5 * 400 + 'px';
    document.getElementById("bar6").style.width = rate6 * 400 + 'px';
    if(rate < .50){
        document.getElementById("bar").style.backgroundColor = 'rgb(0,0,255)';
    }
    else if(rate < .90){
        document.getElementById("bar").style.backgroundColor = 'rgb(0,255,0)';
    }
    else{
        document.getElementById("bar").style.backgroundColor = 'rgb(255,0,0)';
    }
    if(rate2 < .50){
        document.getElementById("bar2").style.backgroundColor = 'rgb(0,0,255)';
    }
    else if(rate2 < .90){
        document.getElementById("bar2").style.backgroundColor = 'rgb(0,255,0)';
    }
    else{
        document.getElementById("bar2").style.backgroundColor = 'rgb(255,0,0)';
    }
    if(rate3 < .50){
        document.getElementById("bar3").style.backgroundColor = 'rgb(0,0,255)';
    }
    else if(rate3 < .90){
        document.getElementById("bar3").style.backgroundColor = 'rgb(0,255,0)';
    }
    else{
        document.getElementById("bar3").style.backgroundColor = 'rgb(255,0,0)';
    }
    if(rate4 < .50){
        document.getElementById("bar4").style.backgroundColor = 'rgb(0,0,255)';
    }
    else if(rate4 < .90){
        document.getElementById("bar4").style.backgroundColor = 'rgb(0,255,0)';
    }
    else{
        document.getElementById("bar4").style.backgroundColor = 'rgb(255,0,0)';
    }
    if(rate5 < .50){
        document.getElementById("bar5").style.backgroundColor = 'rgb(0,0,255)';
    }
    else if(rate5 < .90){
        document.getElementById("bar5").style.backgroundColor = 'rgb(0,255,0)';
    }
    else{
        document.getElementById("bar5").style.backgroundColor = 'rgb(255,0,0)';
    }
    if(rate6 < .50){
        document.getElementById("bar6").style.backgroundColor = 'rgb(0,0,255)';
    }
    else if(rate6 < .90){
        document.getElementById("bar6").style.backgroundColor = 'rgb(0,255,0)';
    }
    else{
        document.getElementById("bar6").style.backgroundColor = 'rgb(255,0,0)';
    }
    milliCheck = millisecond;
    if(year % 4 == 0){
        console.log(year + ':' + month + ':' + day + ':' + hour + ':' + minute + ':' + second + ':' + millisecond + ' ' + now + '/' + 31622400000);
    }
    else{
        console.log(year + ':' + month + ':' + day + ':' + hour + ':' + minute + ':' + second + ':' + millisecond + ' ' + now + '/' + 31536000000);
    }
    let fpsSet;
    let milliSecNow = date.getTime();
    if(fps == 4){
        fpsSet = 'auto';
        requestAnimationFrame(calc);
    }
    else if(fps == 3){
        fpsSet = 60;
        setTimeout(calc, 1000/fpsSet);
    }
    else if(fps == 2){
        fpsSet = 30;
        setTimeout(calc, 1000/fpsSet);
    }
    else if(fps == 1){
        fpsSet = 15;
        setTimeout(calc, 1000/fpsSet);
    }
    else if(fps == 0){
        fpsSet = 1;
        setTimeout(calc, 1000/fpsSet);
    }
    if(fps == 4){
        document.getElementById('fps').textContent = fpsSet;
    }
    else{
        document.getElementById('fps').textContent = fpsSet + 'fps';
    }
    let num = 1000 / (milliSecNow - milliSecLog);
    document.getElementById('fpsNow').textContent = Math.round(num * 100) / 100;
    milliSecLog = milliSecNow;
}

function minus(){
    if(fps == 0){
        fps = 4;
    }
    else{
        fps --;
    }
}

function plus(){
    if(fps == 4){
        fps = 0;
    }
    else{
        fps ++;
    }
}