// Global Variables
var answeredCorrect = 0;
var answeredWrong = 0;

 $("#container2").hide();

// Functions for each question
	function questionOne(){
 	 $("#question").html("<h1>Who was Walter White in TV series Breaking Bad?</h1>");
 	 $("#choiceOne").html("<button type='sumbit' class='submit' name='question1' value='answeredCorrect'>Teacher</button>");
 	 $("#choiceTwo").html("<button type='sumbit' class='submit' name='question1' value='answeredWrong'>Driver</button>");
 	 $("#choiceThree").html("<button type='sumbit' class='submit' name='question1' value='answeredWrong'>Programmer</button>");
 	 $("#choiceFour").html("<button type='sumbit' class='submit' name='question1' value='answeredWrong'>Dancer</button>");
   
  	  $(".submit").click(function(){
        logic();
      questionTwo();
   	 });
};
	function questionTwo(){
 	 $("#question").html("<h1>What was Walt's original car?</h1>");
	 $("#choiceOne").html("<button type='submit' class='submit' name='question2' value='answeredCorrect'>Pontiac</button>");
 	 $("#choiceTwo").html("<button type='submit' class='submit' name='question2' value='answeredWrong'>Bmw</button>");
 	 $("#choiceThree").html("<button type='submit' class='submit' name='question2' value='answeredWrong'>Audi</button>");
 	 $("#choiceFour").html("<button type='submit' class='submit' name='question2' value='answeredWrong'>Toyota</button>");

     $(".submit").click(function(){
        logic();
     questionThree();
     });
};
	function questionThree(){
 	 $("#question").html("<h1>What is Jack's last sentence before Walt shoots him?</h1>");
	 $("#choiceOne").html("<button type='submit' class='submit' name='question3' value='answeredWrong'>Wait..</button>");
 	 $("#choiceTwo").html("<button type='submit' class='submit' name='question3' value='answeredWrong'>You want money right?</button>");
 	 $("#choiceThree").html("<button type='submit' class='submit' name='question3' value='answeredCorrect'>Let me have a cigarette before I die</button>");
 	 $("#choiceFour").html("<button type='submit' class='submit' name='question3' value='answeredWrong'>You pull that trigger, you'll never...</button>");

     $(".submit").click(function(){
     questionFour();
     });
};
	function questionFour(){
 	 $("#question").html("<h1>How much money did Skyler realize Walt makes in a year?</h1>");
	 $("#choiceOne").html("<button type='submit' class='submit' name='question4' value='answeredWrong'>5 milion dollars</button>");
 	 $("#choiceTwo").html("<button type='submit' class='submit' name='question4' value='answeredWrong'>3 milion dollars</button>");
 	 $("#choiceThree").html("<button type='submit' class='submit' name='question4' value='answeredWrong'>1 milion dollars</button>");
 	 $("#choiceFour").html("<button type='submit' class='submit' name='question4' value='answeredCorrect'>10 milion dollars</button>");

     $(".submit").click(function(){
     questionFive();
     });
};
	function questionFive(){
 	 $("#question").html("<h1>What distracts Walt from absorbing the news of his cancer diagnosis?</h1>");
	 $("#choiceOne").html("<button type='submit' class='submit' name='question5' value='answeredWrong'>The doctor has a lazy eye</button>");
 	 $("#choiceTwo").html("<button type='submit' class='submit' name='question5' value='answeredCorrect'>Walt is stressing about money.</button>");
 	 $("#choiceThree").html("<button type='submit' class='submit' name='question5' value='answeredWrong'>Walt’s second cell phone is buzzing in his pocket</button>");
 	 $("#choiceFour").html("<button type='submit' class='submit' name='question5' value='answeredWrong'>The doctor has mustard on his coat</button>");

     $(".submit").click(function(){
     questionSix();
     });
};  
    function questionSix(){
     $("#question").html("<h1>What’s Jesse’s old dream?</h1>");
     $("#choiceOne").html("<button type='submit' class='submit' name='question6' value='answeredWrong'>To be a surfer</button>");
     $("#choiceTwo").html("<button type='submit' class='submit' name='question6' value='answeredCorrect'>To be an artist</button>");
     $("#choiceThree").html("<button type='submit' class='submit' name='question6' value='answeredWrong'>To be a chef</button>");
     $("#choiceFour").html("<button type='submit' class='submit' name='question6' value='answeredWrong'>To be a professional video gamer</button>");

     $(".submit").click(function(){
     questionSeven();
     });
};
    function questionSeven(){
     $("#question").html("<h1>What was Mike Ehrmantraut’s career before working with Gus Fring?</h1>");
     $("#choiceOne").html("<button type='submit' class='submit' name='question7' value='answeredWrong'>Bail bondsman</button>");
     $("#choiceTwo").html("<button type='submit' class='submit' name='question7' value='answeredWrong'>Lawyer</button>");
     $("#choiceThree").html("<button type='submit' class='submit' name='question7' value='answeredCorrect'>Police officer</button>");
     $("#choiceFour").html("<button type='submit' class='submit' name='question7' value='answeredWrong'>Bouncer</button>");

     $(".submit").click(function(){
     questionEight();
     });
};
    function questionSeven(){
     $("#question").html("<h1>Who was poisoned with ricin?</h1>");
     $("#choiceOne").html("<button type='submit' class='submit' name='question8' value='answeredCorrect'>Brock</button>");
     $("#choiceTwo").html("<button type='submit' class='submit' name='question8' value='answeredWrong'>Hector Salamanca</button>");
     $("#choiceThree").html("<button type='submit' class='submit' name='question8' value='answeredWrong'>no one</button>");
     $("#choiceFour").html("<button type='submit' class='submit' name='question8' value='answeredWrong'>Ted Beneke</button>");

     $(".submit").click(function(){
     questionEight();
     });
};
    function questionEight(){
     $("#question").html("<h1>What is the name of Hanks DEA partner?</h1>");
     $("#choiceOne").html("<button type='submit' class='submit' name='question9' value='answeredWrong'>Todd</button>");
     $("#choiceTwo").html("<button type='submit' class='submit' name='question90' value='answeredWrong'>Vince Gilligan</button>");
     $("#choiceThree").html("<button type='submit' class='submit' name='question90' value='answeredCorrect'>Steven Gomez</button>");
     $("#choiceFour").html("<button type='submit' class='submit' name='question90' value='answeredWrong'>DEA agent</button>");

     $(".submit").click(function(){
     questionNine();
     });
};
    function questionNine(){
     $("#question").html("<h1>In season two, which character kills Tuco?</h1>");
     $("#choiceOne").html("<button type='submit' class='submit' name='question1' value='answeredWrong'>Krazy 8</button>");
     $("#choiceTwo").html("<button type='submit' class='submit' name='question1' value='answeredCorrect'>Hank</button>");
     $("#choiceThree").html("<button type='submit' class='submit' name='question1' value='answeredWrong'>Skinny</button>");
     $("#choiceFour").html("<button type='submit' class='submit' name='question1' value='answeredWrong'>Mike</button>");

     $(".submit").click(function(){


     questionTen();
     });
};  
    function questionTen(){
     $("#question").html("<h1>In season three, Hank brutally beats which character?</h1>");
     $("#choiceOne").html("<button type='submit' class='submit' name='question10' value='answeredWrong'>Walter</button>");
     $("#choiceTwo").html("<button type='submit' class='submit' name='question10' value='answeredCorrect'>Jesse</button>");
     $("#choiceThree").html("<button type='submit' class='submit' name='question10' value='answeredWrong'>Mike</button>");
     $("#choiceFour").html("<button type='submit' class='submit' name='question10' value='answeredWrong'>Saul</button>");

     $(".submit").click(function(){
     });
}; 
// logic
        function logic() {
        if( ".submit" == 'answeredCorrect') {
            answeredCorrect++;
            console.log(answeredCorrect);
        }
        else if (".submit" == answeredWrong) {
            answeredWrong++;
            console.log(answeredWrong);
        };
    }
$("#start").click(function() {
	$("#container").hide();
	$("#container2").show();
    questionOne();
});