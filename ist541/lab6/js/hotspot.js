// JavaScript Document
$( function() {
   $("map area").click( function(){

      if ($(this).attr("id") == "nucleus") {
         $("#feedback").css("color","red");
         $("#feedback").html("No, this is the nucleus");
      }

      if ($(this).attr("id") == "mitochondrion") {
         $("#feedback").css("color","green");
         $("#feedback").html("Yes, this is a mitochondrion");
      }
	   if ($(this).attr("id") == "mitochondrion 2") {
         $("#feedback").css("color","green");
         $("#feedback").html("Yes, this is another mitochondrion");
      }
	   if ($(this).attr("id") == "mitochondrion 3") {
         $("#feedback").css("color","green");
         $("#feedback").html("Yes, this is one of three mitochondria");
      }
      if ($(this).attr("id") == "Golgi body") {
         $("#feedback").css("color","red");
         $("#feedback").html("No, this is a Golgi body");
      }

  $("#feedback").css("backgroundColor","yellow");
	   $('#myModal').modal("show");

   });
}); //end main jQuery function