// JavaScript Document
$( function() {
   $("map area").click( function(){

      if ($(this).attr("id") == "incorrect") {
         $("#feedback").css("color","red");
         $("#feedback").html("No, this is not correct");
      }

      if ($(this).attr("id") == "correct") {
         $("#feedback").css("color","green");
         $("#feedback").html("Yes, this is correct");
      }
	  
  $("#feedback").css("backgroundColor","yellow");
	   $('#myModal').modal("show");

   });
}); //end main jQuery function