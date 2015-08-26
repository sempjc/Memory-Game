

function  JCCard() {
  this.currentFace;     //Store the current face of the card
  this.imageFace;       //Store the image of the card when is face up and is active
  this.backFace;        //Store the image of the card when is face down and active
  this.blankFace;       //Store the image of the card when the card is inactive
  this.cardActiveState; //Store the active/inactive states of the card
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
//When this method is evoke, will set the currentFace
//property to display the card face up
JCCard.prototype.faceUP = function() {
  //Check if the card is active or not
  if(cardActiveState){
    //if true, assing the imageFace to the currentFace property
    this.currentFace = this.imageFace;
  }
  else {
    //if not, assing the blankFace to the currentFace property
    this.currentFace = this.blankFace;
  }
}
//Set face Down
JCCard.prototype.faceDOWN = function() {
  //if true, assing the backFace to the currentFace property
  if(cardActiveState){
    this.currentFace = this.backFace;
  }
  else {
    //if not, assing the blankFace to the currentFace property
    this.currentFace = this.blankFace;
  }
}
