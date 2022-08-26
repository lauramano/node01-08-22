'use strict';
// failu sistmos modulis (tokia sistema, sintakse)
const fs = require('fs');

//  irasyti i failu sistema
// fs.writeFile('./user.txt', 'Username=James', () => {});
function irasyt(){
fs.writeFile('./user.txt', 'Username=James\n age=25\n Miestas=Kaunas\n lastName=Iene', (err) => {
    if (err) {
        // ivyko klaida
        console.log(err.stack);
        return;
    }
    console.log('failas sukurtas ir duomenys irasyti sekmingai');
});
}
irasyt();
function skaitom(path) {
fs.readFile(path, (err, data) => {
    if (err) {
        // ivyko klaida
        console.log(err);
        return;
    }
    // klaidos nera
    console.log(('data', data.toString()));
    const rows = data.toString().split('\n');
    console.log(rows);
});
}
// skaitom('./user.txt');

// istrinti faila is failu sistemos
// fs.unlink
//  irasyti i funkcija -  istrinti
function istrinti(path){
if(fs.existsSync(path)){
    console.log('failas yra')
    fs.unlink(path, (err) => {
        if (err) {
            // ivyko klaida
            console.log(err);
            return;
        } 
        console.log(path, 'failas istrintas sekmingai');
    })
    } else{
        console.log('failas nerastas');
    }
}
istrinti('delete.txt');