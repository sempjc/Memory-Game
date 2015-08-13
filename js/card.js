//JCCard is a visual representation of a real world card. This card store image that
//represent different state of the card.  The different state are face up, face down, and optional  blankface.
//For example if you call face down method the
//card will set as "down" position, then you can change the position to face up and will
//display the "oder card face". You can set whatever you want for
/*
function  JCCard() {
  this.cards = [];  // array of image
  this.cardTag;     //String
  this.display;     //Point that switch to an element in the array of image
  this.image;       //Point to an element in the array (image data)
  this.backFace;    //Point to an element in the array (image data)
  this.blankFace;   //Point to an element in the array (image data)
  this.cardFlag;    //Indicate if a card have been eliminate or still active
}
//Set active or inactive state for the card
JCCard.prototype.set_cardFlag = function( flag) {
  this.cardFlag = flag;
}
JCCard.prototype.get_cardFlag = function() {
  return this.cardFlag;
}

//A string that describe a tag (this will use for comparison between to card)
JCCard.prototype.set_cardTag = function(tag) {
  this.cardTag = tag;
}
JCCard.prototype.get_cardTag = function() {
  return this.cardTag;
}

//Set to each variable an image
JCCard.prototype.set_face_Blank = function(index_of_aCard) {
  this.blankFace = this.cards[index_of_aCard];
}
JCCard.prototype.set_face_Img = function(index_of_aCard) {
  this.img = this.cards[index_of_aCard];
}
JCCard.prototype.set_face_Back = function(index_of_aCard) {
  this.backFace = this.cards[index_of_aCard];
}

//Set fae
JCCard.prototype.set_face_UP = function() {
  if(cardFlag){
    this.display = this.img;
  }
  else {
    this.display = this.blankFace;
  }
}
JCCard.prototype.set_face_DOWN = function() {
  if(cardFlag){
    this.display = this.backFace;
  }
  else {
    this.display = this.blankFace;
  }
}

JCCard.prototype.get_face_Blank = function () {
  return this.blankFace;
}
JCCard.prototype.get_face_Img = function () {
  return this.img;
}
JCCard.prototype.get_face_Back = function () {
  return this.backFace;
}
JCCard.prototype.get_face_Display = function () {
  if(!this.cardFlag) {
    return this.blankFace;
  }else {
    return this.display;
  }
}

//For testing pourpose

JCCard.prototype.showCard = function () {
  if(!this.cardFlag){
    this.blankFace;
  }else {
    this.display
  }
  console.log("hello");
}
*/





$( document ).ready(function() {
    // Exmaple code for write on a html document
    //document.write("<p>Hello!!!!</p>");
});
