var totalScore = 0;
var wins = 0;
var losses = 0;
var counter = 0;

var crystal1 = Math.floor((Math.random()*12)+1);
var crystal2 = Math.floor((Math.random()*12)+1);
var crystal3 = Math.floor((Math.random()*12)+1);
var crystal4 = Math.floor((Math.random()*12)+1);
var randomNumber = Math.floor(Math.random()*((120-19)+1)+19);

// is this really the latest issue?

$(document).ready(function(){
    console.log( "ready!" );
    totalScore=0; // will this reset value at reload? alert("new score start is 0");
    console.log (totalScore);
    $("#random").html(randomNumber);

	console.log(randomNumber);

		function crystal() {
		$(".cImage").click(function(){
		var score = $(this).data("score");
		totalScore=(score+totalScore);
		$("#totalScore").fadeOut('slow')
		$("#totalScore").html(totalScore);
		$("#totalScore").fadeIn('slow'); 
		counter++;
		console.log(totalScore);
		console.log(counter);
		})};
		
// move click function outside of if statements.
// ???assign value to each crys image. change function to class crystals
// ??this refers to crystals take value in and send value back
// to element. 

	if (totalScore<randomNumber && counter<11){
		crystal(); // too late, you need result b4 condition test
		console.log("first if");
	}
	else if (totalScore>randomNumber && counter<11){
		losses++;
		counter++;
		$("#loss").html(losses);
		alert("Ahhh you lost! Try again");
		console.log(losses);
		console.log(counter);
	}
	else if (totalScore===randomNumber && counter<11){
		wins++;
		counter++;
		$("#win").html(wins);
		alert("Congrats - you win!");
	}
	else{ // counter=11 - only 10 games then reset 
		counter++;
		
		console.log(console);
		alert("You've run out of games!")
		window.location.reload();
	};

});

 
	// To do list: add reset button. Add animation / audio 
	// audio for loss, animation for win?
	// pull down Game Play instructions. and let slide back up --
	// using a button - .click slide up/slide down -- stays hidden as default?
	// if slide down covers / z-index/overflow??? the game below. 
	//$("#Crys1, Crys2, Crys3, Crys4").click(function() {
	//if (totalScore<randomNumber){
		//console.log(totalScore);
	/*if(totalScore<randomNumber){  // only run if totalScore<randomNumber --- try if 

	$("#Crys1").click(function(){
	totalScore=(crystal1+totalScore);
	$("#totalScore").fadeOut('slow');
	$("#totalScore").html(totalScore);
	$("#totalScore").fadeIn('slow'); 
	console.log(totalScore);
	counter ++
	});
	

	/*$("#Crys2").click(function(){
	totalScore=(crystal2+totalScore);
	$("#totalScore").replaceWith(totalScore);
	console.log(totalScore);
	});
	$("#Crys3").click(function(){
	totalScore=(crystal3+totalScore);
	$("#totalScore").replaceWith(totalScore);
	console.log(totalScore);
	});
	$("#Crys4").click(function(){
	totalScore=(crystal4+totalScore);
	$("#totalScore").replaceWith(totalScore);
	console.log(totalScore);
	});*/







