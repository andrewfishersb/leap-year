// business logic
var leapYear = function(year){
  if ((year > 0)&&(year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)&&(year>0)) {
    console.log(year);
    return true;

  } else {
    return false;
  }
};

// user iterface logic
$(document).ready(function(){
  $("form#leap-year").submit(function(event){
    event.preventDefault();
    var year = parseInt($("input#year").val());
    var result = leapYear(year);

    $(".year").text(year);

    if (!result) {
      $(".not").text("not");

    } else {
      $(".not").text("");
    }

    $("#result").show();
  });
});
