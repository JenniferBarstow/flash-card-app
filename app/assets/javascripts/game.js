$(document).ready(function() {
  var questionsArray = JSON.parse($(".questions-array").attr("value"))
  var questionCounter = 0
  var activeQuestion = questionsArray[questionCounter];
  var input = document.getElementsByClassName("results")[0];
  var numCorrect = 0;
  var numMissed = 0;

  $(".number-one").text(activeQuestion.number_1)
  $(".number-two").text(activeQuestion.number_2)
  $(".property").text(activeQuestion.operator)
  $(".correct").text(numCorrect);
  $(".missed").text(numMissed);

  $("#form-answer").submit(function(event) {
    // Determine if answer is correct
    var answer = $("#answer").val(),
        correctAnswer = eval(String(activeQuestion.number_1) + String(activeQuestion.operator) + String(activeQuestion.number_2));

    // Increase the questionCounter
    questionCounter += 1

    // Conditional to show correct/incorrect view
    if (correctAnswer === parseInt(answer)) {
      numCorrect += 1;
      $(".answer-status.bg-correct").show();
      $(".ninja").addClass("right");
    } else {
      numMissed += 1;
      $(".answer-status.bg-incorrect").show();
      $(".ninja").addClass("left");
    }

    // Update correct score
    $(".correct").text(numCorrect);
    $(".missed").text(numMissed);

    $("#answer").val("");
    event.preventDefault();
  });

  $(".answer-status a").on("click", function() {
    $(".answer-status").hide();
    $(".ninja").removeClass("right left");

    activeQuestion = questionsArray[questionCounter];
    $(".number-one").text(activeQuestion.number_1)
    $(".number-two").text(activeQuestion.number_2)
    $(".property").text(activeQuestion.operator)
  })
})
