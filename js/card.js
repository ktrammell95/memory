var Card = (function() {
  
  function Card(face) {
    this.face = face;
    this.$el = this.generateEl(face);
    this._isMatched = false;
  }

  Card.prototype = {

    generateEl: function (face) {
      //declaring variable
      var $el;
      //creating empty div within jQuery
      $el = $("<div />");
      //setting data to face
      $el.data("card", this);
      //adding classes "card" & "back"
      $el.addClass("card back");
      //setting the text
      $el.text(face);

      return $el;
    },

    reveal: function() {
      this.$el.removeClass("back").addClass("front");

    },

    conceal: function() {
      this.$el.removeClass("front").addClass("back");    
    },

    matched: function() {
      this.$el.addClass("matched");
      this._isMatched = true;
    },

    //var card1 = new Card("A");
    //var card2 = new Card ("J");
    //var card3 = new Card ("A");

    //card1.matches(card2); //false
    //card1.matches(card3); //true

    matches: function(card) {
      if (card === this) { //did i click on same thing twice
        return false;//if so return false
      }
      return this.face === card.face; //return whether they have matching faces
    },

    render: function() {
      return this.$el;
    }
  }

  return Card;

})();