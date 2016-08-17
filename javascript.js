var initiate = function(option) {
	
  $("#grid").html(""); //clear the grid
  var input = prompt("Pick a number between 1 and 128:");
  
  if (input >= 1 && input <= 128) {
  	var squaresize = $("#grid").width()/input - 2;
    	for (var i = 1; i <= input; i++) {
      
      	for (var j = 1; j <= input; j++) {
        	$("#grid").append('<div class="squareinrow"></div>');
        }
        $("#grid").append('<div class="row"></div>');
      }
      $(".squareinrow").css("width", squaresize);
      $(".squareinrow").css("height", squaresize);
      
      //now setting up what happens for each option when you mouse over 
      
      $(".squareinrow").mouseenter(function() {
      	switch(option){
        	case 1: //light up square
          				$(this).addClass("litsquare");	
                  break;
          case 2: 
          				var current = $(this).css("opacity");
                  if (current > 0) {
                  	$(this).css("opacity", current - 0.5);
                  }
                  break;
          case 3:
          				$(this).fadeTo(200, 0);
                  $(this).mouseleave(function() {
                  	$(this).fadeTo(400, 1);
                  });
                  break;
          case 4:
                  $("#grid").jqxGrid('clear');
                  break;
        }  
      });
      
  }
	else {
  	alert("That's ludicrous, pick again!");
  }
}