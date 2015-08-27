/***************************************************
Title:      JCLogic.js
Program:    Memory Game
Description:
            JCLogic manage the game logic. This logic
            is for game like Memory Game where you try to find
            the same pair of card. This logic is designed for a
            game where you win after discover all the pair of card.
            So endGameCondition = array.length / 2. Take special care to create an array with even number!!!.
            Also this logic include methods for shuffle arrays.
            The initializeCard Method configure your card in one call. The parameter he expect is the image face of the card, back face and blank face.

Created by: Jean Carlos Semprit Rodriguez
***************************************************/
function JCLogic (){
  //This property indicate the state of the game loop
  //While gameOver is false the game will continue
  this.gameOverState = false;
  //This property count the number of card the player choose for guest,
  //the maximum number of card is 2 then this property is reset to zero
  this.choiceCounter = 0;
  //Store the id of the first selected card choose by the user
  this.choice1;
  //Store the id of the second selected card choose by the user
  this.choice2;
  //Set the number for win or loose in the game
  //Ex. If the goal of a game is to match 15 card, then endGameCondition must be 15
  this.endGameCondition;
  //Array of card, you need to assign an initialized array of card
  this.cardDeck = [];
}
//Set the choice1 property with the value of the first selected card
JCLogic.prototype.set_choice1 = function(selectedCard){
  this.choice1 = selectedCard;
}
//Get the value assigned to choice1 property
JCLogic.prototype.get_choice1 = function(){
  return choice1;
}
//Set the choice2 property with the value of the first selected card
JCLogic.prototype.set_choice2 = function(selectedCard){
  this.choice2 = selectedCard;
}
//Get the value assigned to choice2 property
JCLogic.prototype.get_choice2 = function(){
  return choice2;
}
//Set or change the gameOverState property
JCLogic.prototype.set_gameOverState = function(gameOverState){
  this.gameOverState = gameOverState;
}
//Get the value of the gameOverState property
JCLogic.prototype.get_gameOverState = function(){
  return this.gameOverState;
}
//Check if the end game condition is reach, the variable currentCondition
//means the current condition (moves or match) of the game score
JCLogic.prototype.check_endGame_condition = function(currentCondition){
  if (this.endGameCondition === currentCondition){
    //Change the value to true
    return gameOverState = true;
  }
  //The default value is false
  return gameOverState;
}
//Compare if two car are equal or different
JCLogic.prototype.compare2Card = function(){
  var isEqual = false;
  //Test if the two card selected are equal
  if (cardDeck[choice1].imageFace === cardDeck[choice2].imageFace){
    //If true the assign true to the isEqual variable
    return isEqual = true;
  }
  //If false return isEqual = false
  return isEqual;
}
//Shuffle an array
JCLogic.prototype.shuffle = function( contentArray ){
  //initialize variables to zero
  var az = 0;   //Store random number
  //Store temporary values of the array Shuffle the array
  var temp = contentArray[0];
  var rand;
  //1. The variable az will store the random generated number,
  //This number is restricted with the k variable who will decrese in each
  //interaccion of the loop.
  //2. The temp variable will store the temporary random value of the array

  //The Switch operation
  //3. Assing in a random position the value on the current k position
  //4. Assing in the k position of the array the value of temp
  for(var k = contentArray.length-1; k > 0; --k){
    //Store the random number
    rand = Math.floor(Math.random()*10);
    az = (1 + rand % contentArray.length-1);  //1.
    temp = contentArray[az];                  //2.
    contentArray[az] = contentArray[k];       //3.
    contentArray[k] = temp;                   //4.
  }
  //Debug
  return contentArray;
}
//Method for initialized the card array and assing the image variable
JCLogic.prototype.initializeCard = function(contentArray, backimg, blankFace){
  //contentArray is an array of image, the image is represent by a url string
  //Start the shuffle of the image
  contentArray = this.shuffle(contentArray);
  for(var i = 0; i < contentArray.length; i++){
    this.cardDeck.push((new JCCard(contentArray[i], backimg, blankFace )));
  }
}
