
//run setCurrent time every second.
let timerThing = setInterval(setCurrentTime, 1000);

/**
 * Gets date and time and turns the numbers to text in html.
 */
function setCurrentTime(){
    let date = new Date();
    document.querySelector('.day-holder').innerHTML = NumToDay(date.getDay());
    document.querySelector('.month-holder').innerHTML = numToMonth(date.getMonth());
    document.querySelector('.time-holder').innerHTML = NumToTime(date.getHours(), date.getMinutes(), date.getSeconds())
}

/**
 * Adds a zero to time if digits are 9 or smaller.
 * @param {Number} hourNum 
 * @param {Number} minuteNum 
 * @param {Number} secondNum 
 * @returns {String} String of added values.
 */
function NumToTime(hourNum, minuteNum, secondNum){
    let paddedSecond;
    let paddedMinute;
    let paddedHour;

    if(secondNum > 9){
        paddedSecond = secondNum;
    }
    else{
        paddedSecond = '0'+secondNum;
    }

    if(minuteNum > 9){
        paddedMinute = minuteNum;
    }
    else{
        paddedMinute = '0'+minuteNum;
    }

    if(hourNum > 9){
        paddedHour = hourNum;
    }
    else{
        paddedHour = '0'+hourNum;
    }

    return paddedHour + ':' + paddedMinute + ':' + paddedSecond
}

/**
 * Turns a day number to text day name.
 * @param {Number} dayNumber
 * @returns {String} Day name
 */
function NumToDay(dayNumber){
    switch(dayNumber){
        case 1:
            return 'Måndag';
            break;
        case 2:
            return 'Tisdag';
            break;
        case 3:
            return 'Onsdag';
            break;
        case 4:
            return 'Torsdag';
            break;
        case 5:
            return 'Fredag';
            break;
        case 6:
            return 'Lördag';
            break;
        case 0:
            return 'Söndag';
        default:
            return 'error day';
            break;
    }
}

/**
 * Turns month number to text month name.
 * @param {Number} monthNumber
 * @returns {String} Month name.
 */
function numToMonth(monthNumber){
    switch(monthNumber){
        case 0:
            return 'Januari';
            break;
        case 1:
            return 'Februari';
            break;
        case 2:
            return 'Mars';
            break;
        case 3:
            return 'April';
            break;
        case 4:
            return 'Maj';
            break;
        case 5:
            return 'Juni'
            break;
        case 6:
            return 'Juli';
            break;
        case 7:
            return 'Augusti';
            break;
        case 8:
            return 'September';
            break;
        case 9:
            return 'Oktober';
            break;
        case 10:
            return 'November';
            break;
        case 11:
            return 'December';
            break;
        default:
            return 'error month';
            break;
    }
}