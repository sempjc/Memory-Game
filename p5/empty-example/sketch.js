
//Label Constructor---------------
function Label (text, coordX, coordY, width, height) {
  //properties
  this.text = text;
  this.coordX = coordX;
  this.coordY = coordY;
  this.xAlign = CENTER;
  this.yAlign  = CENTER;
  this.width = width;
  this.height = height;
  this.textColor = color(1,1,1);
  this.textBorderColor = noStroke();
  this.backgroundColor = noFill();
  this.borderColor = noStroke();
  this.borderRadius = 0;
}

//Methods------------------------------------------------------------------
//Define the text for the label
Label.prototype.setLabelText = function(text){
  this.text = text;
}
Label.prototype.setLabelTextColor = function (r, g, b) {
  this.textColor = color(r, g, b);
  this.textBorderColor = color(r, g, b);
}
Label.prototype.setLabelTextBorderColor = function (r, g, b) {
  this.textBorderColor = color(r, g, b);
}
//text aligment
Label.prototype.setLabelTextAligment = function (xAlign, yAlign) {
  this.xAlign = xAlign;
  this.yAlign  = yAlign;
}

//Set coordinate for x and y
Label.prototype.setLabelXPosition = function(x){
  this.coordX = x;
}
Label.prototype.setLabelYPosition = function(y){
  this.coordY = y;
}

//Set width and height
Label.prototype.setLabelWidth = function(width){
  this.width = width;
}
Label.prototype.setLabelHeight = function(height){
  this.height = height;
}

//Set colors
Label.prototype.setLabelBackgroundColor = function (r, g, b) {
  this.backgroundColor = color(r,g,b);
}
Label.prototype.setLabelBorderColor = function (r, g, b) {
  this.borderColor = color(r,g,b);
}


Label.prototype.setLabelBorderRadius = function(radiusSize) {
  this.borderRadius = radiusSize;
}

//Draw label on screen
Label.prototype.labelDraw = function () {
  //Test if borderColor is define
  if(this.borderColor !== noStroke()){
    stroke(this.borderColor);
  }
  //Test if backgroundColor is define
  if(this.backgroundColor !== noFill()){
    fill(this.backgroundColor);
    rect(this.coordX, this.coordY, this.width, this.height, this.borderRadius);
  }
  textAlign(this.xAlign, this.yAlign);
  fill(this.textColor);
  //Test If text border color is define
  if(this.textBorderColor !== noStroke()){
    stroke(this.textBorderColor);
  }
  //Draw text
  text(this.text, this.coordX, this.coordY,this.width, this.height);
}


//Test code
function setup() {
  createCanvas(640, 480);
}
function draw() {
  var myLabel = new Label("Hello World!!", 100, 100, 100, 50);
  myLabel.setLabelTextAligment(CENTER,CENTER);
  myLabel.setLabelBackgroundColor(255,0,0);
  myLabel.setLabelBorderColor(0,255,0);
  myLabel.setLabelTextColor(1,1,1);
  myLabel.setLabelBorderColor(0,150,100);
  myLabel.setLabelBorderRadius(10);
  myLabel.labelDraw();

  var myLabel2 = new Label("Hello World!!", 100, 200, 100,50);
  //myLabel2.setLabelBackgroundColor(0,255,0);
  myLabel2.setLabelBorderColor(1,1,1);
  myLabel2.labelDraw();
}

function Button (Label, contentAligment, color, width, height, x, y) {
  //properties
  this.label = Label;
  this.width = width;
  this.height = height;
  this.color = color;
  this.posX = x;
  this.posY = y;
  this.contentAligment = contentAligment;
}
