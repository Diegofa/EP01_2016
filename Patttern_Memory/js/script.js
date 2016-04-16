var level = 0;
var score = 0;
var playersTurn = false;
var timer;
var patternArray = [];
var userChoicesArray = [];
var numPlayerClicks = 0;

function a_Jugar(){
    swal({   title: "El juego Iniciara en 3sg!",   text: "Vamos a Jugar!",   timer: 3000,   showConfirmButton: false });

}

$(document).ready(function() {
    /* Click the start or start-over button. */
    $("#play,#play-over").click(function() {
      level = 0;
      // Display play-window accordinly - if userChoicesArray is populated,
      // that means a game was just played.
      if (userChoicesArray.length != 0) {
          $("#end-game-window").slideUp(1100, function() {
              startGame();
          });
      } else {
          startGame();
      }
    });


    /* Click a game block. */
    $(".bloques").mousedown(function(){
        if (playersTurn) {
            var gameBlockID = '#' + this.id;
            var highlightColor = $(this).css('border-color');
            
            // Animate the background-color
            // Can be done using JQuery UI Color Plugin, but for now, use timeout
            $(gameBlockID).css('background-color', $(gameBlockID).css('border-color'));
            
            // Animate back to white in 400ms
            setTimeout(function() { $(gameBlockID).css('background-color', '#FFFFFF'); }, 400);
            
            // Compare
            if(numPlayerClicks == (level + 1)){
                userChoicesArray[numPlayerClicks] = gameBlockID
                comparePattern();
            }else{
                userChoicesArray[numPlayerClicks] = gameBlockID
                numPlayerClicks++;
            }
        }
    });
});

function startGame() {
    $("#play-window").css("display","block");
    $("#end-game-window").css("display","none");
    $("#start-window").css("display","none");
    $("#end-game-window").css("display","none");

    alertUser(COMPS_TURN_MSG);
    displayPattern();
}
function alertUser(msg) {
    $('#notif-msg').html(msg);
}

function displayPattern() {
    var i = 0;
    var randNumber;
    var gameBlockID;
    var color;
    numPlayerClicks = 0;
    patternArray = [];
    playersTurn = false;
    level = level + 1;
    $("#level").text(level + "/20")
    $("#score").text(score)

    timer = setInterval(function(){
        randNumber = Math.floor((Math.random() * 6) + 1);
        gameBlockID = "#game-block" + randNumber;
        patternArray[i] = gameBlockID;
        color = $(gameBlockID).css("border-color");
        $(gameBlockID).css("background-color", color);

        setTimeout(function(){
          $(gameBlockID).css("background-color", "#FFF");
            i = i + 1;
            if(i == (level + 2)){
                clearInterval(timer);
                playersTurn = true;

                alertUser(PLAYERS_TURN_MSG);
                return;
            }
        }, 800);
  }, 1000);
};

function comparePattern(){
    for(var j = 0; j < (level + 2); j++){
        if(userChoicesArray[j] != patternArray[j]){
            gameOver();
            return;
        }
    }
    nextLevel();
}

function nextLevel(){
    alertUser(LEVEL_UP_MSG);
    score = score + 1.5*level*1100

    // Let user celebrate for a second...
    setTimeout(function() {
        alertUser(COMPS_TURN_MSG);
        displayPattern();
    }, 1000);
}

function gameOver(){
    // Show end game screen
    $('#end-game-msg').html(GAME_OVER_MSG + score);
    $('#end-game-window').slideDown(1100);

    level = 0;
    score = 0;
    playerTurn = false;

    $("#start-window").css("display","none");
}
 
