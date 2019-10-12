var p1Button = document.getElementById("p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var winningScoreDisplay = document.querySelector("p span");
var numInput = document.getElementById("input");
var p1Score = 0;
var p2Score = 0;
var p1Display = document.getElementById("p1Display");
var p2Display = document.getElementById("p2Display");
var gameOver = false;
var winningScore = 5;


p1Button.addEventListener("click" , function(){
	if(!gameOver){
		p1Score++ ;
		if(p1Score === winningScore){
			p1Display.classList.add("winner");
			gameOver = true;
			alert("player 1 won !");
		}
		p1Display.textContent = p1Score;
	}

});


p2Button.addEventListener("click" , function(){
	if (!gameOver) {
		p2Score++ ;
		if(p2Score === winningScore){

			p2Display.classList.add("winner");
			gameOver = true;
			alert("player 2 won !");

			
		}
		p2Display.textContent = p2Score;
	}

});

resetButton.addEventListener("click", function(){
	reset();
});

function reset () {
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameOver = false;
}

numInput.addEventListener("change" , function(){

winningScoreDisplay.textContent = this.value;
winningScore = Number(this.value) ;
reset();

});


















 	