/**********************************************************
Title:      card.js
Program:    Memory Game
Description:
    JCCard represent the card of the memory game.
    JCCard store images for the different phase of
    the card (face up, face down and inactive).
    This object has methods for setter and getter for the
    different property. And to main function for manage the
    face-up and face-down of the card.

Created by: Jean Carlos Semprit Rodriguez
************************************************************/

function  JCCard(imageFace, backFace, blankFace) {
  //Store the current face of the card
  this.currentFace;
  //Store the image of the card when is face up and is active
  this.imageFace = imageFace;
  //Store the image of the card when is face down and active
  this.backFace = backFace;
  //Store the image of the card when the card is inactive
  this.blankFace = blankFace;
  //Store the active/inactive states of the card
  this.cardActiveState = true;
}

//Set active or inactive state for the card
JCCard.prototype.set_cardActiveState = function(state) {
  this.cardActiveState = state;
}
//Get the card state
JCCard.prototype.get_cardActiveState = function() {
  return this.cardActiveState;
}
//Set to each variable an image
JCCard.prototype.set_BlankFace = function(image) {
  this.blankFace = image;
}
//Get the image of the blankFace property
JCCard.prototype.get_BlankFace = function () {
  return this.blankFace;
}
//Set the image face, when the card is face up and active
JCCard.prototype.set_ImgeFace = function(image) {
  this.imageFace = image;
}
//Get the image of the imageFace property
JCCard.prototype.get_ImageFace = function () {
  return this.imageFace;
}
//Set the image face, when the card is face down and active
JCCard.prototype.set_BackFace = function(image) {
  this.backFace = image;
}
//Get the image of the backFace property
JCCard.prototype.get_BackFace = function () {
  return this.backFace;
}
JCCard.prototype.get_currentFace = function(){
  return this.currentFace;
}
//When this method is evoke, will set the currentFace
//property to display the card image
JCCard.prototype.faceUP = function() {
  //Check the active state of the card
  //if true, assing the imageFace to the currentFace property
  if(cardActiveState){
    this.currentFace = this.imageFace;
  }
  else {
    //if not, assing the blankFace to the currentFace property
    this.currentFace = this.blankFace;
  }
}
//When this method is evoke, will set the currentFace
//property to display the backface
JCCard.prototype.faceDOWN = function() {
  //Check the active state of the card
  //if true, assing the backFace to the currentFace property
  if(cardActiveState){
    this.currentFace = this.backFace;
  }
  else {
    //if not, assing the blankFace to the currentFace property
    this.currentFace = this.blankFace;
  }
}



/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    !!Only for testing erase/comment code when finish!!

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
var main = function(){
    //Pre-test:
    //Create 3 variable with the path of the image file
    var img1 = '/images/apple.png';
    var img2 = '/images/slack.png'
    var backimg = '/images/css3.png';
    var blankimg = '/images/HTML5.png';
    console.log("Pre-section pass");

    //Creating and initialization test
//*****************************************************
    //Test 1 create and initialize a card object named card1
    var card1 = new JCCard(img1, backimg, blankimg);
    //Test 2 create and initialize another card object named card2
    var card2 = new JCCard(img2, backimg, blankimg);
    console.log("section 1 pass");

    //Call setters and getters methods
//*****************************************************
    //Test 3 edit card2 images (using setters)
    card2.set_ImgeFace('/images/octocat.png');
    card2.set_BackFace('/images/JavaScript.png');
    card2.set_BlankFace('/images/apple.png');
    //Test 4 use the getter methods and store each value
    //in a variable (look the value on the console)
    var getImg1 = card2.get_ImageFace();
    var getbackface = card2.get_ImageFace();
    var getblankface = card2.get_ImageFace();
    var activeState = card2.get_ImageFace();
    console.log("section 2 pass");

    //Test Active state, Face up and Face Down methods
//*****************************************************
    //Test 5 Change card2 cardActiveState to false
    card2.cardActiveState(false);
    //Test 6 Call FaceUp methods on both cards
    card1.faceUP();
    card2.faceUP();
    //Test 7 Call get_currentFace on both cards
    var currentUP1 = card1.get_currentFace();
    var currentUP2 = card2.get_currentFace();
    //Test 8 Call FaceDown method on both cards
    card1.faceDOWN();
    card2.faceDOWN();
    //Test 9 Call get_currentFace on both cards
    var currentDOWN1 = card1.get_currentFace();
    var currentDOWN2 = card2.get_currentFace();
    console.log("section 3 pass");
 }
main();
