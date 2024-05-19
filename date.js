const children1 = document.querySelector('.children1')
const children2 = document.querySelector('.children2')

const date = new Date;

let month = date.getMonth() + 1;
let day = date.getDate();
let weekDay = date.getUTCDay()


// why is the date api off.
let MonthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

switch(month){
    case month = 1:
        month = MonthArr[1 - 1]
    break;
    case month = 2:
        month = MonthArr[2 - 1]
        break;
    case month = 3:
        month = MonthArr[3 - 1]
        break;
    case month = 4:
        month = MonthArr[4 - 1]
        break;
    case month = 5:
        month = MonthArr[5 - 1]
        break;
    case month = 6:
        month = MonthArr[6 - 1]
        break;
    case month = 7:
        month = MonthArr[7 - 1]
        break;
    case month = 8:
        month = MonthArr[8 - 1]
        break;
    case month = 9:
        month = MonthArr[9 - 1]
        break;
    case month = 10:
        month = MonthArr[10 - 1]
        break;
    case month = 11:
        month = MonthArr[11 - 1]
        break;
    case month = 12:
        month = MonthArr[12 - 1]
        break;
   
}
switch(weekDay){
    case weekDay = 1:
        weekDay = 'Monday'
        break;
    case weekDay = 2:
        weekDay = 'Tuesday'
        break;
    case weekDay = 3:
        weekDay = 'Wednesday'
        break;
    case weekDay = 4:
        weekDay = 'Thurday'
        break;
    case weekDay = 5:
        weekDay = 'Friday'
        break;
    case weekDay = 6:
        weekDay = 'Saturday'
        break;
    case weekDay = 0:
        weekDay = 'Sunday'
       

}


// let lat/long - hawaii- 21.3099, -157.858093;
// let lat/long -St. Augustine- 29.8922° N, 81.3139° W

export { month, day, children1, children2 ,weekDay};