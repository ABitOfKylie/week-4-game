var totalScore = 0;
var wins = 0;
var losses = 0;
var counter = 0;
// latest version as of 7/28 3:20pm

var crystal1 = Math.floor((Math.random()*12)+1);
var crystal2 = Math.floor((Math.random()*12)+1);
var crystal3 = Math.floor((Math.random()*12)+1);
var crystal4 = Math.floor((Math.random()*12)+1);
var randomNumber = Math.floor(Math.random()*((120-19)+1)+19);

		$(document).ready(function(){
    			console.log( "ready!" );
    	
    	/*var audioElement = document.createElement('audio');
		audioElement.setAttribute('src ', 'Assets/mystery.wav');*/
    
    	$("#random").html(randomNumber);
   				console.log(randomNumber);

		function resetNow(){
			location.reload();
			totalScore=0;
    		crystal1 = Math.floor((Math.random()*12)+1);
			crystal2 = Math.floor((Math.random()*12)+1);
			crystal3 = Math.floor((Math.random()*12)+1);
			crystal4 = Math.floor((Math.random()*12)+1);
    		randomNumber= Math.floor(Math.random()*((120-19)+1)+19);
		}


		$("#reset").keyup(function(){
	    	resetNow();
	    	alert( "Handler for .keyup() called." );

		});

		

   		function setValues(){
   			$("#Crys1").data ("value",crystal1);
   			$("#Crys2").data ("value",crystal2);
   			$("#Crys3").data ("value",crystal3);
   			$("#Crys4").data ("value",crystal4);
   			console.log("value")
   		}

   		$(".cImage").click(function() {
    		setValues();
    		$(this).data("value"); 
			totalScore = totalScore + parseInt($(this).data('value'));
			$("#totalScore").fadeOut('slow');
			$("#totalScore").fadeIn('slow');
			$("#totalScore").html("Your Total Score is " + "<br>" + totalScore);
			/*audioElement.play();*/
			ifRun();
		});

   		function ifRun(){
		if (totalScore<randomNumber && counter<11){
			console.log("first if - keep going");
		}
		else if(totalScore>randomNumber && counter<11){
			losses++;
			counter++;
			$("#loss").html("Losses: " + losses);
			alert("Ahhh you lost! Try again");
			console.log(losses);
			console.log(counter);
			location.reload();
		}
		else if (totalScore===randomNumber && counter<11){
			wins++;
			counter++;
			$("#win").html("Wins: "+ wins);
			alert("Congrats - you win!");
			location.reload();
		}
		else{ // counter=11 - only 10 games then reset 
			counter++;
			
			console.log("last else");
			alert("You've run out of games!")
			location.reload();
		}
	}; // close if/else function -- 
	});

 
	// To do list: add reset button. Add animation / audio 
	// audio for loss, animation for win?
	// pull down Game Play instructions. and let slide back up --
	// using a button - .click slide up/slide down -- stays hidden as default?
	// if slide down covers / z-index/overflow??? the game below. 
	
	




