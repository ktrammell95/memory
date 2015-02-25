var Deck = (function() {
  function Deck() {
    this.cards = this.makeCards();
    this.shuffle();
    this.$el = $("<div class='deck'></div>");
  }

  Deck.prototype = {
    
    makeCards: function() {
      var cards, totalFaces, uniqFaces;
      //Generate the 13 uniq cards
       uniqFaces = "23456789AJQK".split("");
       uniqFaces.push("10");

       //get all the faces for a deck (uniq * 4)
       totalFaces = [];

       _.each(_.range(1,5), function() {
       totalFaces = totalFaces.concat(uniqFaces);
        });

       //map the faces to card instances
       cards = _.map(totalFaces, function(face) {
        return new Card(face);
       });

       return cards;
    },

    shuffle: function() {
      this.cards = _.shuffle(this.cards);
    },

    matchesFound: function() {
      var cardsThatAreMatched = _.filter(this.cards, function(card){
        return card.isMatched;
      });

      var matchedCardsCount = cardsThatAreMatched.length;
      var matchesCount = matchedCardsCount / 2;

      return matchesCount;

      // return _.filter(this.cards, function(card){
      //   return card.isMatched;
      // }).length;
    },

    matchesRemaining: function() {
      return 26 - this.matchesFound;
    },

    render: function() {
      var $el = this.$el;

      $el.empty();

      _.each(this.cards, function(card) {
        $el.append(card.render());
   });
      return $el;
  }
}
  return Deck;


})();