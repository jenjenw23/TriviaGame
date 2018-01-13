// JavaScript Document
 $(document).ready(function() {
		//var timer = 0;
		var timeLeft = 45;
		

        // When random-button is clicked...
      $("#start-button").on("click", function() {
		  startGame();
		  //countdown();
	  });
		 
		 
		function startGame() {
		var timerId = setInterval(countdown, 1000);
		
		function countdown() {
 		 	if (timeLeft == 0) {
   				 clearTimeout(timerId);
		  		 //doSomething();
 		 	} else {
		 		$("#timerDisplay").text(timeLeft);
    	 		timeLeft--;
  		 		}
		 	} 
		} 
		  
		  // start timer countdown

        // ...create a string which will hold the lottery number.
        //var lottoNumber = "";

        // Then create a loop that generates 9 separate numbers.
        //for (var i = 0; i < 9; i++) {
         // var random = Math.floor(Math.random() * 9) + 1;

          // Add to the lottery number.
         // lottoNumber = random + lottoNumber;
        //}

        // Then prepend the lotto number to the top of our random-number div.
       // $("#random-number").prepend("<br><hr>" + lottoNumber);
     
    });
