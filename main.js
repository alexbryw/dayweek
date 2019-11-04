const date = new Date();
console.log(date.getDay());
document.getElementById('put-text-here').innerHTML = NumToDay(date.getDay()) +' '+ numToMonth(date.getMonth());

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
        case 1:
            return 'Januari';
            break;
        case 2:
            return 'Februari';
            break;
        case 3:
            return 'Mars';
            break;
        case 4:
            return 'April';
            break;
        case 5:
            return 'Maj';
            break;
        case 6:
            return 'Juni'
            break;
        case 7:
            return 'Juli';
            break;
        case 8:
            return 'Augusti';
            break;
        case 9:
            return 'September';
            break;
        case 10:
            return 'Oktober';
            break;
        case 11:
            return 'November';
            break;
        case 12:
            return 'December';
            break;
        default:
            return 'error month';
            break;
    }
}

console.log(date.getMonth());