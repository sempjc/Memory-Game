//Main function-----------------------------------
$( document ).ready(function() {
  //Create an array of pair of images
  //This will be the image the player need to guess
  var backFace = '/images/back.png';
  var blankFace = '/images/blanck.png'
  var sourceIMG = [
    '/images/apple.png',
    '/images/css3.png',
    '/images/octocat.png',
    '/images/slack.png',
    '/images/HTML5.png',
    '/images/JavaScript.png',
  ];
  //The for loop will fill the empty imageFaces array with a pair of image
  //Variable i will increment the index of imageFaces
  //Variable img will increment the index of sourceIMG
  var imageFaces = [];
  for(var i = img = 0; i < ((sourceIMG.length*2)-1); i+=2){
    imageFaces[i] = sourceIMG[img];       //First pair
    imageFaces[(i+1)] = sourceIMG[img];   //Second pair
    img++; //Increase sourceIMG index
    console.log('work');
  }
  //Initialize the game logic and call the methods initializeCard
  //to configure the game card.
  var game = new JCLogic();
  game.initializeCard(imageFaces,backFace, blankFace);

  //Event listener
  $('.card').click(function(event){
    //Evaluate if the user already choose two cards
    //If Only one is selected (choiceCounter = 1)
    //then skip the evaluation
      if(game.get_choiceCounter() === 1){
        game.set_choice1(event.target.id);    //assign the id number to choice1
        //flip up the card in the position of choice1
        game.cardDeck[game.get_choice1()].faceUP();
        game.set_choiceCounter(2);    //Set choiceCounter to 2
      }
      //If player has already choose one and now is selecting
      //the second card (choiceCounter = 2) evaluate if the two card is equal
      else {
        game.set_choice2(event.target.id);  //assign to choice2 the value of id
        //evaluate if the to card are the same or not
        //If not the same (result in true) then compare the 2 card
        if(game.get_choice1() !== game.get_choice2()){
          //Flip up the second card
          game.cardDeck[game.get_choice2()].faceUP();
          if(game.compare2Card()){
            //Eliminate cardDeck
            game.cardDeck[game.get_choice1()].set_cardActiveState(false);
            game.cardDeck[game.get_choice2()].set_cardActiveState(false);
            //Increase match
          }
        }
        //Flip card down
        game.cardDeck[game.get_choice1()].faceDOWN();
        game.cardDeck[game.get_choice2()].faceDOWN();
      }

    if(game.get_choice1() !== game.get_choice2()){
      //increase moves
    }
    game.set_choiceCounter(0);    //Reset to 0 choiceCounter
  });


  console.log('finish load');
});
