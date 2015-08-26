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
