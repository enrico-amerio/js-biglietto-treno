const distance = prompt('quanti km devi percorrere?');
const age = prompt('quanti anni hai?');
console.log(distance, age);

const priceKm = 0.21;
const fullPrice = distance * priceKm;
console.log(fullPrice);

if(age < 18){
  risultato = fullPrice - ((fullPrice * 20) / 100);
}else if(age >= 65){
  risultato = fullPrice - ((fullPrice * 40) / 100);
}else{
  risultato = fullPrice;
}
console.log(risultato)

document.getElementById('output').innerHTML += (risultato).toFixed(2) + '\u20AC';
