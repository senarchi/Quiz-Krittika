class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();

    //write code to change the background color here
    background("yellow")
    fill(0);
    textSize(30);


    //write code to show a heading for showing the result of Quiz
    text("RESULT!",340,50);
    text("......................",320,65);
    //call getContestantInfo( ) here
   Contestant.getPlayerInfo();

    //write condition to check if contestantInfor is not undefined

    //write code to add a note here

    //write code to highlight contest who answered correctly
    if(allContestants!== undefined){
      debugger;
      var display_Answers=230;
      fill("blue");
      textSize(18);
      text("NOTE*: Contestant who have answered correct answer are highlighted in green colour!",130,230)

      for(var plr in allContestants){
        debugger;
        var correctAns = "2";
        if (correctAns === allContestants[plr].answer){
          fill("Green")
        }
        else{
          fill("red");
        }
        display_Answers+=30;
        textSize(20);
        text(allContestants[plr].name + ": " + allContestants[plr].answer, 250,display_Answers)
      }
    }
  }

}
