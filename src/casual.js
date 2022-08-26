'use strict';

const casual = require('casual');

const sent1 = casual.sentence;
console.log('sakinys:', sent1);

const miest1 = casual.city;
console.log('Miestas:', miest1);

function firstLastName(){
// const vardas = casual.first_name;     
// const pavarde = casual.last_name;
// console.log(`vardas ir  pavarde: ${vardas} ${pavarde}`);
const firstLastNem = `${casual.first_name} ${casual.last_name}`
console.log('vardas ir  pavarde:', firstLastNem);
}
firstLastName();

// const laikas = casual.time(format = 'HH:mm:ss');
// console.log('laikas:', laikas);

const moment = casual.moment 
console.log('momentas:', moment);

// function randData() {
//     const data = casual.date(format = 'YYYY-MM-DD')
//     console.log('data', data);
// }
// randData();


function makeMeCards(howMany) {
    const cards = [];
    for (let i = 0; i < howMany; i++) {
      cards.push(casual.card_data);
    }
    return cards;
  }
  console.log('makeMeCards(4) ===', makeMeCards(4));
  

function data() {
    const metaiMenuoDiena = `${casual.year}.${casual.month_name}.${casual.day_of_month}`;
    console.log(' funkcijos data sugeneruota data:', metaiMenuoDiena);
    return metaiMenuoDiena;
}
data()
module.exports = data;
