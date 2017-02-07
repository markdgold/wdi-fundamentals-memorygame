console.log("JS file is connected to HTML! Woo!")

cardOne = "queen";
cardTwo = "queen";
cardThree = "king";
cardFour = "king";

/*if(cardTwo===cardFour){
	alert('Sorry, try again.');
}
else if(cardOne===cardTwo){
	alert('You found a match!')
}
else if(cardThree===cardFour){
	alert('You found a match!')
}*/

var gameBoard = document.getElementById('gameBoard');

function createCard(){
	for (i = 0; i<4; i++)  {
		var newDiv = document.createElement('div');
		newDiv.className = 'card';
		document.getElementById('gameBoard').appendChild(newDiv);
		console.log("created four divs");	
	}
}

createCard();

