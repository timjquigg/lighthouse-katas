/*
We will be given a date as a string (not a Date object). The date will always be formatted as YYYY/MM/DD. We will have to parse the given string and produce a human readable date.
*/

const talkingCalendar = function (date) {
  const dateArr = date.split('/');
  switch (dateArr[1]) {
    case '01':
      dateArr[1] = 'January';
      break;
    case '02':
      dateArr[1] = 'February';
      break;
    case '03':
      dateArr[1] = 'March';
      break;
    case '04':
      dateArr[1] = 'April';
      break;
    case '05':
      dateArr[1] = 'May';
      break;
    case '06':
      dateArr[1] = 'June';
      break;
    case '07':
      dateArr[1] = 'July';
      break;
    case '08':
      dateArr[1] = 'August';
      break;
    case '09':
      dateArr[1] = 'September';
      break;
    case '10':
      dateArr[1] = 'October';
      break;
    case '11':
      dateArr[1] = 'November';
      break;
    case '12':
      dateArr[1] = 'December';
      break;
  }
  dateArr[2] = String(Number(dateArr[2]));
  switch (dateArr[2][dateArr[2].length - 1]) {
    case '1':
      dateArr[2] += 'st';
      break;
    case '2':
      dateArr[2] += 'nd';
      break;
    default:
      dateArr[2] += 'th';
      break;
  }
  return `${dateArr[1]} ${dateArr[2]}, ${dateArr[0]}`;
}

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));

/*
Expected Output:
December 2nd, 2017
November 11th, 2007
August 24th, 1987
*/