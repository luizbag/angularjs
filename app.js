(function() {
  var gems = [
  {
    name: 'Dodecahedron',
    price: 2.95,
    description: 'Some gems have hidden qualities beyond their luster, beyond thei shine... Dodeca is one of those gems.',
    images: [
      {
        full: 'dodecahedron-01-full.jpg',
        thumb: 'dodecahedron-01-thum.jpg'
      }
    ],
    canPurchase: true,
    soldOut: false,
    reviews: [
      {
        stars:5,
        body: "I love this product!",
        author:"joe@thomas.com"
      }
    ]
  },
  {
    name: "Pentagonal Gem",
    price: 5,
    description: "...",
    canPurchase: true,
    soldOut: false,
    reviews: [
      {
        stars:5,
        body: "I love this product!",
        author:"joe@thomas.com"
      }
    ]
  }];

  var app = angular.module('store', [ ]);

  app.controller('StoreController', function() {
    this.products = gems;
  });

  app.controller("PanelController", function() {
    this.tab = 1;

    this.selectTab = function(setTab) {
      this.tab = setTab;
    };

    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    };
  });

  app.controller('ReviewController', function() {
    this.review={}
    this.addReview = function(product) {
      product.reviews.push(this.review);
      this.review={}
    };
  });
})();