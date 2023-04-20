function checkAnswer() {
  const answer = document.getElementById("answer-input").value;
  if (answer.toLowerCase() == "paris") {
    document.getElementById("result").innerHTML = "Correct!";
  } else {
    document.getElementById("result").innerHTML = "Incorrect.";
  }
}

function checkAnswer2() {
  const answer2 = document.getElementById("answer-input2").value;
  if (answer2.toLowerCase() == "yes") {
    document.getElementById("result2").innerHTML = "Well, okay then good for you!";
  } else {
    document.getElementById("result2").innerHTML = "Hmm, maybe you should try to google it?";
  }
}