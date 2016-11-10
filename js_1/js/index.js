var choices = ["rock", "paper", "scissors"];
var player_choice;
var valid_choice = false;

while (valid_choice !== true) {
  player_choice = prompt("Rock, Paper or Scissors?").toLowerCase();
  for (var i = 0; i < choices.length; i++) {
    if(player_choice === choices[i]) {
      valid_choice = true;
    }
  }
  if (!valid_choice) {
    alert("You must enter Rock, Paper or Scissors");
  }
}

var computer_choice = (function() {
  return choices[Math.floor((Math.random() * 3) )];
}());


if (player_choice === "rock" & computer_choice === "scissors" ||
    player_choice === "paper" & computer_choice === "rock" ||
    player_choice === "scissors" & computer_choice === "paper") {

    document.write("You win the computer chose " + computer_choice);

} else if (player_choice === "rock" & computer_choice === "paper" ||
           player_choice === "paper" & computer_choice === "scissors" ||
           player_choice === "scissors" & computer_choice === "rock") {

      document.write("You lose the computer chose " + computer_choice);

} else {

    document.write("Draw. The computer also chose " + computer_choice);

}

//===========================
//PSEUDO CODE
//===========================
function start() {

  //render start page
    // bind event handlers
    function render(view, data, eventHandlers) {
    //...
      eventHandlers(handlers) {

      }

    }

    render("home", {title: "home"}, function() {

    })


    function bindeEventHandlers(handlers) {
      for (var i = 0; i < handlers.length; i++) {
        var el = document.querySelecctor(handlers[i].htmlElement)
        el.onclick = handlers[i].func
      }
    }

    bindeEventHandlers()

}
