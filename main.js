
let timerThing = setInterval(setCurrentTime, 1000);

function setCurrentTime(){
    let date = new Date();
    let currentTime = date.getHours()+' '+date.getMinutes() +' '+date.getSeconds();
    document.getElementById('put-text-here').innerHTML = NumToDay(date.getDay()) +' '+ numToMonth(date.getMonth()) + ' ' + currentTime;
    //return currentTime;
}

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