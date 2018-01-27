// alert("hi")

// for the timer
var count = 120

// the last container variables
var correct = 0;
var unanswered = 0;
var wrong = 0;

// the game logic

$(document).ready(function(){


	// hide my divs
	$("#questionCont").hide();
	$("#results").hide();

	


	// click function to start the game
	$("#begin").on("click", function(){
		// console.log("hi")

		// hide the first div
		$("#beginGameCont").hide();

		$("#questionCont").show();

		startCountdown();
		return;
	});

function countdown(){
	 count--;

	 $("#timeNum").html(count + " seconds");

	 	$("#submit").on("click", function(){


	 		count = 0;
	 		return;
	 	});


	 	if(count == -1){

	 		timeUp();

	 		$("#questionCont").hide();
	 		$("#results").show();
	 	}



};

function startCountdown(){
	setInterval(countdown, 1000);
}



function timeUp(){

		var Q1 = $('input:radio[name="q1"]:checked').val();
		var Q2 = $('input:radio[name="q2"]:checked').val();
		var Q3 = $('input:radio[name="q3"]:checked').val();
		var Q4 = $('input:radio[name="q4"]:checked').val();
		var Q5 = $('input:radio[name="q5"]:checked').val();
		var Q6 = $('input:radio[name="q6"]:checked').val();
		var Q7 = $('input:radio[name="q7"]:checked').val();
		var Q8 = $('input:radio[name="q8"]:checked').val();
		var Q9 = $('input:radio[name="q9"]:checked').val();
		var Q10 = $('input:radio[name="q10"]:checked').val();
		var Q11 = $('input:radio[name="q11"]:checked').val();
		var Q12 = $('input:radio[name="q12"]:checked').val();



		// conditional for question 1
		if(Q1 == undefined){
			unanswered++;
		}

		else if (Q1 == "May 4th, 1852")
			correct++;
		
		else{
			wrong++;
		}


		// conditional for question 1
		if(Q2 == undefined){
			unanswered++;
		}

		else if (Q2 == "80+")
			correct++;
		
		else{
			wrong++;
		}



		// conditional for question 1
		if(Q3 == undefined){
			unanswered++;
		}

		else if (Q3 == "All of them")
			correct++;
		
		else{
			wrong++;
		}



		// conditional for question 1
		if(Q4 == undefined){
			unanswered++;
		}

		else if (Q4 == "Fairyland")
			correct++;
		
		else{
			wrong++;
		}



		// conditional for question 1
		if(Q5 == undefined){
			unanswered++;
		}

		else if (Q5 == "Bruce Lee")
			correct++;
		
		else{
			wrong++;
		}



		// conditional for question 1
		if(Q6 == undefined){
			unanswered++;
		}

		else if (Q6 == "MC Hammer")
			correct++;
		
		else{
			wrong++;
		}



		// conditional for question 1
		if(Q7 == undefined){
			unanswered++;
		}

		else if (Q7 == "Rocky Road")
			correct++;
		
		else{
			wrong++;
		}



		// conditional for question 1
		if(Q8 == undefined){
			unanswered++;
		}

		else if (Q8 == "The Popsicle")
			correct++;
		
		else{
			wrong++;
		}



		// conditional for question 1
		if(Q9 == undefined){
			unanswered++;
		}

		else if (Q9 == "Mai Tai")
			correct++;
		
		else{
			wrong++;
		}



		// conditional for question 1
		if(Q10 == undefined){
			unanswered++;
		}

		else if (Q10 == "Merritt College")
			correct++;
		
		else{
			wrong++;
		}


		// conditional for question 1
		if(Q11 == undefined){
			unanswered++;
		}

		else if (Q11 == "Lake Merritt")
			correct++;
		
		else{
			wrong++;
		}



		// conditional for question 1
		if(Q12 == undefined){
			unanswered++;
		}

		else if (Q12 == "Oakland")
			correct++;
		
		else{
			wrong++;
		}


		$("#correct").html(correct);
		$("#wrong").html(wrong);
		$("#unanswered").html(unanswered);




	}





});