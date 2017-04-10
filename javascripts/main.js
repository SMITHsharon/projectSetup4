
//***************************************************
// event listener for <?Zoe?Callan?Lauren?> button
//***************************************************
$("#whoWins").click(function (){

  $("#asking").addClass("hidden");
  $("#whoWins").addClass("hidden");

  $("#pPuffGirls").addClass("hidden");
  $("#pPuffFighting").removeClass("hidden");
  $("#pPuffFighting").addClass("visible");
  $("#action").removeClass("hidden");
  $("#action").addClass("visible");

});


//***************************************************
// event listener for <!Zoe!Callan!Lauren!> button
//***************************************************
$("#action").click(function (){

  $("#pPuffFigting").removeClass("visible");
  $("#pPuffFigting").addClass("hidden");
  $("#action").addClass("hidden");

  $("#pPuffFighting").addClass("hidden");
  $("#winner").removeClass("hidden");
  $("#winner").addClass("visible");
});


