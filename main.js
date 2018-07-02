function getRandomNumber() {
  return Math.ceil(Math.random() * 100);
}

console.log('> ' + getRandomNumber(100));

var guessNum = getRandomNumber();
var accountant = 0;

function ifNumMinor(){
	var answerNum = document.getElementById('answerNum').innerHTML;
	if (answerNum<guessNum){
		alert('Demasiado bajo');
		accountant++;
	} else if (answerNum>guessNum){
		alert('Demasiado alto');
		accountant++;
	} else if (answerNum===guessNum){
		alert('¡ACERTASTE, CAMPEONA!');
	} else {
		alert('ERROR, ESTE ORDENADOR SE AUTODSETRUIRÁ');
	}
	document.getElementById('accountant').innerHTML = accountant;
}

document.getElementById('accountant').innerHTML = accountant;
