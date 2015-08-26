
function Card (cssFACE, cssBACKFACE, cssBLANK){
  this.cardFace = cssFACE;
  this.cardBackFace = cssBACKFACE;
  this.cardBlankFace = cssBLANK;
}

 function faceUP($element) {
  $element.removeClass('img1');
  $element.addClass('backface');
  console.log('click');
}

//Main function-----------------------------------
$( document ).ready(function() {
    var cards = [
      new Card("img1", "backface"),//Row 1
      new Card("img2", "backface"),//Row 1
      new Card("img3", "backface"),//Row 1
      new Card("img4", "backface"),//Row 2
      new Card("img5", "backface"),//Row 2
      new Card("img6", "backface"),//Row 2
      new Card("img1", "backface"),//Row 3
      new Card("img2", "backface"),//Row 3
      new Card("img3", "backface"),//Row 3
      new Card("img4", "backface"),//Row 4
      new Card("img5", "backface"),//Row 4
      new Card("img6", "backface"),//Row 4
    ];

    //Test for fill up card with a face
    for (var i = 0; i < cards.length; i++){
        $('#' + i).addClass(cards[i].cardFace);
    }

    $('.card').click(function(){
      faceUP($(this));
    });

});
