$(document).ready(function() {
  var random_num = Math.floor(Math.random()*11),
      random_num_2 = Math.floor(Math.random()*random_num),
      operators = ["+", "-", "*"];

  var randomOperator = function () {
    return operators[Math.floor(Math.random()*operators.length)];
  }

  var numberOne = Math.round(random_num),
      numberTwo = Math.round(random_num_2),
      operator = randomOperator();

  $(".number-one").text(numberOne)
  $(".number-two").text(numberTwo)
  $(".property").text(operator)

  $("#form-answer").submit(function(event) {
    var answer = $("#answer").val(),
        correctAnswer = eval(String(numberOne) + String(operator) + String(numberTwo));

    if (correctAnswer === parseInt(answer)) {
      $(".container").html("<div class='answer-status bg-correct'><a href='#' onclick='location.reload();'>Correct! Next Question</a></div>")
    } else {
      $(".container").html("<div class='answer-status bg-incorrect'><a href='#' onclick='location.reload();'>Incorrect! Next Question</a></div>")
    }
    event.preventDefault();
  });
})
