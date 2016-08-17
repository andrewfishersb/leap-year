// business logic
var leapYear = function(year){
  if ((year > 0)&&(year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)&&(year>0)) {
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

// business logic Pig Latin
  var isDigit = function(characters){
    var reg = /\d/;
    if(characters.search(reg)!== -1){
      return true;
    }else{
      return false;
    }
    //need to figure out how to work when with words
  }

  var indexOfFirstVowel = function(word){
    var index = /[aeiou]/i.exec(word);
    return index;
  }
