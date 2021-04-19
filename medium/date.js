// let date = '2021-03-24 15:00:00';

// let directorsCut = date.slice(0, 10);

// console.log('director', directorsCut);

const dayArray = [
  '2021-03-24 15:00:00',
  '2021-03-24 18:00:00',
  '2021-03-24 21:00:00',
  '2021-03-24 24:00:00',
  '2021-03-25 00:00:00',
  '2021-03-26 15:00:00',
  '2021-03-27 15:00:00',
];

////Get next day:

let day = new Date();
console.log(day); // Apr 30 2000

let nextDay = new Date(day);
nextDay.setDate(day.getDate() + 1);
console.log(nextDay);
//Thu Mar 25 2021 16:26:58 GMT+0200 (Eastern European Standard Time)

////'2021-03-27 15:00:00'




// console.log('day', nextDay.getDate());

// console.log('month', nextDay.getMonth() + 1);

// console.log('year', nextDay.getFullYear());

let newString = [];

for (i = 0; i < 1; i++) {
  let nextday = nextDay.getDate();

  let nextmonth = nextDay.getMonth() + 1;

  let nextyear = nextDay.getFullYear();

  newString.push(`${nextyear}-0${nextmonth}-${nextday}`);
}

let filtteri = dayArray.filter((p) => {
//   console.log('ppp', p);
//   console.log('p === directorsCut', p === directorsCut);

//   console.log('dayarra include', p.includes(newString));
  if (p.includes(newString)) return p;
});


console.log(`NewString päivämäärän eli huomisen ${nextDay.getDate()} täyttävät:`, newString)