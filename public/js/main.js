function updateCard(htmlDOM, choice, cardArray, score){
  var img = 'url('+cardArray[choice].get_currentFace()+')';
  $('#'+choice).css({ "background": img, "background-size": "80px 80px" });
  $('#mv').text(score.get_moves());
  $('#mch').text(score.get_match());
  $('#pt').text(score.compute_score());
}
//Main function-----------------------------------
$( document ).ready(function() {
  //Create an array of pair of images
  //This will be the image the player need to guess
  var sourceIMG = [
    "/images/img1.png",
    "/images/img2.png",
    "/images/img3.png",
    "/images/img4.png",
    "/images/img5.png",
    "/images/img6.png",
  ];
  var backFace = '/images/back.png';
  var blankFace = '/images/blanck1.png';
  //The for loop will fill the empty imageFaces array with a pair of image
  //Variable i will increment the index of imageFaces
  //Variable img will increment the index of sourceIMG
  var imageFaces = [];
  for(var i = img = 0; i < ((sourceIMG.length*2)-1); i+=2){
    imageFaces[i] = sourceIMG[img];       //First pair
    imageFaces[(i+1)] = sourceIMG[img];   //Second pair
    img++; //Increase sourceIMG index
  }
  //Initialize the game logic and call the methods initializeCard
  //to configure the game card.
  var game = new JCLogic();
  game.initializeCard(imageFaces,backFace, blankFace);
  //Initialize the game score
  var score = new JCScore();
  //Put all card face down
  for (var i = 0; i < imageFaces.length; i++){
    game.cardDeck[i].faceDOWN();
    updateCard($('#'+i), i, game.cardDeck, score);
  }

  //Event listener when user click on card
  $('.card').on('click',function(event){
    //Evaluate if the user already choose two cards
    //If Only one is selected (choiceCounter = 1)
    //then skip the evaluation
      if(game.get_choiceCounter() === 1){
        game.set_choice1(event.target.id);    //assign the id number to choice1
        //flip up the card in the position of choice1 to updated currentFace
        game.cardDeck[game.get_choice1()].faceUP();
        //Draw the currentFace
        updateCard(this, game.get_choice1(), game.cardDeck, score);
        game.set_choiceCounter(2);    //Set choiceCounter to 2
      }
      //If player has already choose one and now is selecting
      //the second card (choiceCounter = 2) evaluate if the two card is equal
      else {
        game.set_choice2(event.target.id);  //assign to choice2 the value of id
        //evaluate if the to card are the same or not
        //If not the same then compare the 2 card
        if(game.get_choice1() !== game.get_choice2()){
          //Flip up the second card to updated currentFace
          game.cardDeck[game.get_choice2()].faceUP();
          updateCard(this, game.get_choice2(), game.cardDeck, score);
          //If the two card have the same image, then eliminate
          if(game.cardDeck[game.get_choice1()].get_cardActiveState() && game.cardDeck[game.get_choice1()].get_cardActiveState()){
            if(game.compare2Card()){
              //Eliminate cardDeck
              game.cardDeck[game.get_choice1()].set_cardActiveState(false);
              game.cardDeck[game.get_choice2()].set_cardActiveState(false);
              //Increase match
              score.match_increase_by_one();
              console.log('match increase by one');
            }
        }
          score.movesincrease_by_one();  //increase score
          console.log('move increase by one');
          game.set_choiceCounter(1);    //Reset to 1 choiceCounter
          //Flip card down
          //Delay for 1 second
          setTimeout(function (){
            game.cardDeck[game.get_choice1()].faceDOWN();
            updateCard(this, game.get_choice1(), game.cardDeck, score);
            game.cardDeck[game.get_choice2()].faceDOWN();
            updateCard(this, game.get_choice2(), game.cardDeck, score);
          }, 1000);
        }
      }
  });
  console.log('finish load');
});
