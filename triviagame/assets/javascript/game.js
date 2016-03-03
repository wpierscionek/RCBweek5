$("#container2").hide();
$("#container3").hide();
// Global Variables
var answeredCorrect = 0;
var answeredWrong = 0;
var correct = new Audio("correct.wav");
var wrong = new Audio("wrong.wav");
// Functions for each question
	function questionOne(){
 	 $("#question").html("<h1>Who was Walter White in TV series Breaking Bad?</h1>");
 	 $("#choiceOne").html("<button type='sumbit' class='submit' value='answeredCorrect'>Teacher</button>");
 	 $("#choiceTwo").html("<button type='sumbit' class='submit' value='answeredWrong'>Driver</button>");
 	 $("#choiceThree").html("<button type='sumbit' class='submit' value='answeredWrong'>Programmer</button>");
 	 $("#choiceFour").html("<button type='sumbit' class='submit' value='answeredWrong'>Dancer</button>");
     $("button").click(function() {
        var choice = $(this);
        if(choice.val() == "answeredCorrect") {
            answeredCorrect++
            correct.play();
            correct.currentTime = 0;
            // console.log(answeredCorrect);
        } else if(choice.val() == "answeredWrong") {
            answeredWrong++;
            wrong.play();
            wrong.currentTime = 0;
            // console.log(answeredWrong);
        };
     });
  	 $(".submit").click(function(){
      questionTwo();
   	 });
};
	function questionTwo(){
 	 $("#question").html("<h1>What was Walt's original car?</h1>");
	 $("#choiceOne").html("<button type='submit' class='submit' value='answeredCorrect'>Pontiac</button>");
 	 $("#choiceTwo").html("<button type='submit' class='submit' value='answeredWrong'>Bmw</button>");
 	 $("#choiceThree").html("<button type='submit' class='submit' value='answeredWrong'>Audi</button>");
 	 $("#choiceFour").html("<button type='submit' class='submit' value='answeredWrong'>Toyota</button>");
         $("button").click(function() {
        var choice = $(this);
        if(choice.val() == "answeredCorrect") {
            answeredCorrect++
            correct.play();
            correct.currentTime = 0;
            // console.log(answeredCorrect);
        } else if(choice.val() == "answeredWrong") {
            answeredWrong++;
            wrong.play();
            wrong.currentTime = 0;
            // console.log(answeredWrong);
        };
     });
     $(".submit").click(function(){
     questionThree();
     });
};
	function questionThree(){
 	 $("#question").html("<h1>What is Jack's last sentence before Walt shoots him?</h1>");
	 $("#choiceOne").html("<button type='submit' class='submit' value='answeredWrong'>Wait..</button>");
 	 $("#choiceTwo").html("<button type='submit' class='submit' value='answeredWrong'>You want money right?</button>");
 	 $("#choiceThree").html("<button type='submit' class='submit' value='answeredCorrect'>Let me have a cigarette before I die</button>");
 	 $("#choiceFour").html("<button type='submit' class='submit' value='answeredWrong'>You pull that trigger, you'll never...</button>");
        $("button").click(function() {
        var choice = $(this);
        if(choice.val() == "answeredCorrect") {
            answeredCorrect++
            correct.play();
            correct.currentTime = 0;
            // console.log(answeredCorrect);
        } else if(choice.val() == "answeredWrong") {
            answeredWrong++;
            wrong.play();
            wrong.currentTime = 0;
            // console.log(answeredWrong);
        };
     });
     $(".submit").click(function(){
     questionFour();
     });
};
	function questionFour(){
 	 $("#question").html("<h1>How much money did Skyler realize Walt makes in a year?</h1>");
	 $("#choiceOne").html("<button type='submit' class='submit' value='answeredWrong'>5 milion dollars</button>");
 	 $("#choiceTwo").html("<button type='submit' class='submit' value='answeredWrong'>3 milion dollars</button>");
 	 $("#choiceThree").html("<button type='submit' class='submit' value='answeredWrong'>1 milion dollars</button>");
 	 $("#choiceFour").html("<button type='submit' class='submit' value='answeredCorrect'>10 milion dollars</button>");
     $("button").click(function() {
        var choice = $(this);
        if(choice.val() == "answeredCorrect") {
            answeredCorrect++
            correct.play();
            correct.currentTime = 0;
            // console.log(answeredCorrect);
        } else if(choice.val() == "answeredWrong") {
            answeredWrong++;
            wrong.play();
            wrong.currentTime = 0;
            // console.log(answeredWrong);
        };
     });
     $(".submit").click(function(){
     questionFive();
     });
};
	function questionFive(){
 	 $("#question").html("<h1>What distracts Walt from absorbing the news of his cancer diagnosis?</h1>");
	 $("#choiceOne").html("<button type='submit' class='submit' value='answeredWrong'>The doctor has a lazy eye</button>");
 	 $("#choiceTwo").html("<button type='submit' class='submit' value='answeredCorrect'>Walt is stressing about money.</button>");
 	 $("#choiceThree").html("<button type='submit' class='submit' value='answeredWrong'>Walt’s second cell phone is buzzing in his pocket</button>");
 	 $("#choiceFour").html("<button type='submit' class='submit' value='answeredWrong'>The doctor has mustard on his coat</button>");
     $("button").click(function() {
        var choice = $(this);
        if(choice.val() == "answeredCorrect") {
            answeredCorrect++
            correct.play();
            correct.currentTime = 0;
            // console.log(answeredCorrect);
        } else if(choice.val() == "answeredWrong") {
            answeredWrong++;
            wrong.play();
            wrong.currentTime = 0;
            // console.log(answeredWrong);
        };
     });
     $(".submit").click(function(){
     questionSix();
     });
};  
    function questionSix(){
     $("#question").html("<h1>What’s Jesse’s old dream?</h1>");
     $("#choiceOne").html("<button type='submit' class='submit' value='answeredWrong'>To be a surfer</button>");
     $("#choiceTwo").html("<button type='submit' class='submit' value='answeredCorrect'>To be an artist</button>");
     $("#choiceThree").html("<button type='submit' class='submit' value='answeredWrong'>To be a chef</button>");
     $("#choiceFour").html("<button type='submit' class='submit' value='answeredWrong'>To be a professional video gamer</button>");
     $("button").click(function() {
        var choice = $(this);
        if(choice.val() == "answeredCorrect") {
            answeredCorrect++
            correct.play();
            correct.currentTime = 0;
            // console.log(answeredCorrect);
        } else if(choice.val() == "answeredWrong") {
            answeredWrong++;
            wrong.play();
            wrong.currentTime = 0;
            // console.log(answeredWrong);
        };
     });
     $(".submit").click(function(){
     questionSeven();
     });
};
    function questionSeven(){
     $("#question").html("<h1>What was Mike Ehrmantraut’s career before working with Gus Fring?</h1>");
     $("#choiceOne").html("<button type='submit' class='submit' value='answeredWrong'>Bail bondsman</button>");
     $("#choiceTwo").html("<button type='submit' class='submit' value='answeredWrong'>Lawyer</button>");
     $("#choiceThree").html("<button type='submit' class='submit' value='answeredCorrect'>Police officer</button>");
     $("#choiceFour").html("<button type='submit' class='submit' value='answeredWrong'>Bouncer</button>");
     $("button").click(function() {
        var choice = $(this);
        if(choice.val() == "answeredCorrect") {
            answeredCorrect++
            correct.play();
            correct.currentTime = 0;
            // console.log(answeredCorrect);
        } else if(choice.val() == "answeredWrong") {
            answeredWrong++;
            wrong.play();
            wrong.currentTime = 0;
            // console.log(answeredWrong);
        };
     });
     $(".submit").click(function(){
     questionEight();
     });
};
    function questionEight(){
     $("#question").html("<h1>Who was poisoned with ricin?</h1>");
     $("#choiceOne").html("<button type='submit' class='submit' value='answeredCorrect'>Brock</button>");
     $("#choiceTwo").html("<button type='submit' class='submit' value='answeredWrong'>Hector Salamanca</button>");
     $("#choiceThree").html("<button type='submit' class='submit' value='answeredWrong'>no one</button>");
     $("#choiceFour").html("<button type='submit' class='submit' value='answeredWrong'>Ted Beneke</button>");
     $("button").click(function() {
        var choice = $(this);
        if(choice.val() == "answeredCorrect") {
            answeredCorrect++
            correct.play();
            correct.currentTime = 0;
            // console.log(answeredCorrect);
        } else if(choice.val() == "answeredWrong") {
            answeredWrong++;
            wrong.play();
            wrong.currentTime = 0;
            // console.log(answeredWrong);
        };
     });
     $(".submit").click(function(){
     questionNine();
     });
};
    function questionNine(){
     $("#question").html("<h1>What is the name of Hanks DEA partner?</h1>");
     $("#choiceOne").html("<button type='submit' class='submit' value='answeredWrong'>Todd</button>");
     $("#choiceTwo").html("<button type='submit' class='submit' value='answeredWrong'>Vince Gilligan</button>");
     $("#choiceThree").html("<button type='submit' class='submit' value='answeredCorrect'>Steven Gomez</button>");
     $("#choiceFour").html("<button type='submit' class='submit' value='answeredWrong'>DEA agent</button>");
     $("button").click(function() {
        var choice = $(this);
        if(choice.val() == "answeredCorrect") {
            answeredCorrect++
            correct.play();
            correct.currentTime = 0;
            // console.log(answeredCorrect);
        } else if(choice.val() == "answeredWrong") {
            answeredWrong++;
            wrong.play();
            wrong.currentTime = 0;
            // console.log(answeredWrong);
        };
     });
     $(".submit").click(function(){
     questionTen();
     });
};
    function questionTen(){
     $("#question").html("<h1>In season two, which character kills Tuco?</h1>");
     $("#choiceOne").html("<button type='submit' class='submit'' value='answeredWrong'>Krazy 8</button>");
     $("#choiceTwo").html("<button type='submit' class='submit'' value='answeredCorrect'>Hank</button>");
     $("#choiceThree").html("<button type='submit' class='submit'' value='answeredWrong'>Skinny</button>");
     $("#choiceFour").html("<button type='submit' class='submit'' value='answeredWrong'>Mike</button>");
     $("button").click(function() {
        var choice = $(this);
        if(choice.val() == "answeredCorrect") {
            answeredCorrect++
            correct.play();
            correct.currentTime = 0;
            // console.log(answeredCorrect);
        } else if(choice.val() == "answeredWrong") {
            answeredWrong++;
            wrong.play();
            wrong.currentTime = 0;
            // console.log(answeredWrong);
        };
     });
     $(".submit").click(function(){
     questionEleven();
     });
};  
    function questionEleven(){
     $("#question").html("<h1>In season three, Hank brutally beats which character?</h1>");
     $("#choiceOne").html("<button type='submit' class='submit'' value='answeredWrong'>Walter</button>");
     $("#choiceTwo").html("<button type='submit' class='submit'' value='answeredCorrect'>Jesse</button>");
     $("#choiceThree").html("<button type='submit' class='submit'' value='answeredWrong'>Mike</button>");
     $("#choiceFour").html("<button type='submit' class='submit'' value='answeredWrong'>Saul</button>");
     $("button").click(function() {
        var choice = $(this);
        if(choice.val() == "answeredCorrect") {
            answeredCorrect++
            correct.play();
            correct.currentTime = 0;
        } else if(choice.val() == "answeredWrong") {
            answeredWrong++;
            wrong.play();
            wrong.currentTime = 0;
            // console.log(answeredWrong);
        };
     });
        $(".submit").click(function(){
        $("#container2").hide();
        $("#container3").show();
        $("#resultcorrect").html(answeredCorrect);
        $("#resultwrong").html(answeredWrong);
     });

        $("#playagain").click(function() {
          $("#container2").show();
          $("#container3").hide();
            restart();
        });
     function restart() {
        answeredCorrect = 0;
        answeredWrong = 0;
        $("#container").hide();
        $("#container2").show();
        questionOne();    
     };
 };   
$("#start").click(function() {
	$("#container").hide();
	$("#container2").show();
    questionOne();
});