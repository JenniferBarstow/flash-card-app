$(document).ready(function() {
  // var random_num = Math.floor(Math.random()*11),
  //     random_num_2 = Math.floor(Math.random()*random_num),
  //     operators = ["+", "-", "*"];
  //
  // var randomOperator = function () {
  //   return operators[Math.floor(Math.random()*operators.length)];
  // }

  // var numberOne = Math.round(random_num),
  //     numberTwo = Math.round(random_num_2),
  //     operator = randomOperator();

  var questionsArray = JSON.parse($(".questions-array").attr("value"))
  var randomQuestion = questionsArray[Math.floor(Math.random()*questionsArray.length)];

  $(".number-one").text(randomQuestion.number_1)
  $(".number-two").text(randomQuestion.number_2)
  $(".property").text(randomQuestion.operator)

  $("#form-answer").submit(function(event) {
    var answer = $("#answer").val(),
        correctAnswer = eval(String(randomQuestion.number_1) + String(randomQuestion.operator) + String(randomQuestion.number_2));

    if (correctAnswer === parseInt(answer)) {
      $(".container").html("<div class='answer-status bg-correct'><a href='#' onclick='location.reload();'>Correct! Next Question</a></div>")
    } else {
      $(".container").html("<div class='answer-status bg-incorrect'><a href='#' onclick='location.reload();'>Incorrect! Next Question</a></div>")
    }
    event.preventDefault();
  });
})
