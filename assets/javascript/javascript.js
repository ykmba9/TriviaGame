

//click start to start game

$(document).on('click', '#start', function(){
	console.log("Start");
	game.startGame();

});

//Reset on Click 
	$(document).on('click', '#reset', function(){
	game.reset();
});


var randomQuestions = Math.floor(Math.random()*(questions));

var questions = [{
question: "1.	What is the Italian word for pie?",
answers:["Pizza", "Pasta", "Donut", "Cake"],
correctAnswer: "Pizza",
}, {

question: "Which sea creature has three hearts?",
answers: ["Fish", "Octopus", "Shark", "Whale"],
correctAnswer: "Octopus",
}, {

question: "Spinach is high in which mineral? ",
answers: ["Potassium", "Calcium", "Iron", "Magnesium"],
correctAnswer: "Iron",
}, {

question: "Which fictional city is the home of Batman?",
answers: ["NewYork", "Boston", "LosAngeles", "GothamCity"],
correctAnswer: "GothamCity",
}, {

question: "Which sign of the zodiac is represented by the ram?",
answers: ["Aries", "Cancer", "Libra","Gemini"],
correctAnswer: "Aries",
}];




var game = {
correct:0,
incorrect:0,
counter:30,

countdown: function(){
	game.counter--;
	$('#counter-number').html(game.counter);
	if (game.counter === 0){
	console.log('Times Up');
	game.timeUP();
}
},
startGame:function(){
	timer=setInterval(game.countdown, 1000);
	$('#start').remove();
	for (var i = 0; i < questions.length; i++) {
	}
	}
},
timeUP:function() {
	clearInterval (timer);
	alert('Times Up!');

},
reset:function() {
location.reload();

},


});
	
	
game.result();
},
	 result:function(){
	 clearInterval(timer);
	 $("#start").empty();
	 $("#start").append("Correct answers: " + game.correct + "<br/>");
	 $("#start").append("Incorrect answers: " + game.incorrect);

	 }
 }
