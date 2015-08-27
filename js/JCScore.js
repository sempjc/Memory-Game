/***************************************************
Title:      JCScore.js
Program:    Memory Game
Description:
    JCScore manage the game movesand match. Provide
    setter and getter methods and methods for Increase
    and Decrease both property. JCScore have a special
    method for calculate the game score base on the
    proportion of the total movesand total
    match of the game.

Created by: Jean Carlos Semprit Rodriguez
***************************************************/
function JCScore() {
  //Numbers of turn the player take for
  //reach the goal of the game
  this.moves = 0;
  //Store the numbers of match the player has made
  this.match = 0;
}
//Set the value moves property
JCScore.prototype.set_moves = function (moves){
  this.moves = moves;
}
//Get the moves property value
JCScore.prototype.get_moves = function(){
  return this.moves;
}
//Set the value of match property
JCScore.prototype.set_match = function(match){
  this.match = match;
}
//Get the match property value
JCScore.prototype.get_match = function(){
  return this.match;
}
//Get the score of the game
JCScore.prototype.compute_score = function(){
  //If moves is equal to zero is not posible calculate the score
  //so return zero to prevent error
  if(this.moves === 0){
    return 0;
  }
  //calculate the score and return his value
  return ((this.match / this.moves) * 1000);
}
//Increase the movesby one
JCScore.prototype.movesincrease_by_one = function(){
  this.moves ++;
}
//Decrease the movesby one until zero
JCScore.prototype.movesdecrease_by_one = function(){
  //If movesis great than 0, then Decrease
  if(this.moves> 0){
    this.moves--;
  }
  //else set movesto zero
  else {
    this.moves= 0;
  }
}
//Increase the match by one
JCScore.prototype.match_increase_by_one = function(){
  this.match ++;
}
//Decrease the match by one until zero
JCScore.prototype.match_decrease_by_one = function(){
  //If match is great than 0, then Decrease
  if(this.match > 0){
    this.match --;
  }
  //else set movesto zero (this is for prevent negative numbers)
  else {
    this.match = 0;
  }
}
