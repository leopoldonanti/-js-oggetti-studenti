/* Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età */

var stu = {
    name : 'Antonio',
    surname :'Rossi',
    age : 30
  };

/* Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell’oggetto. */
for(var key in stu){
  console.log(key + ': ' + stu[key])
};

//ESERCIZIO SECONDA PARTE

//Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età 

var nameStu = prompt('Iscrizione: Inserisci il tuo nome');

var surnameStu = prompt('Iscrizione: Inserisci il tuo cognome');

var ageStu = prompt('Iscrizione: Inserisci la tua nazionalità');


/* Creare un array di oggetti di studenti. */

var arrStu = [
  {
    name : 'Antonio',
    surname :'Rossi',
    age : 30
  },

  {
    name : 'Kim',
    surname :'Jung Un',
    age : 40
  },

  {
    name : 'Pablo',
    surname :'Escobar',
    age :70
  },

];

/* Aggiungo un nuovo profilo studente grazie alle tre  var-prompt */

arrStu.push({
 name : nameStu,
 surname : surnameStu,
 age : ageStu
});

/* Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome. */

for(var info of arrStu){
  console.log('Nome: ' + info.name),
  console.log('Cognome:' + info.surname),
  console.log('Età: ' + info.age)
}
