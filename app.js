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
    soldOut: false
  },
  {
    name: "Pentagonal Gem",
    price: 5,
    description: "...",
    canPurchase: true,
    soldOut: false
  }];

  var app = angular.module('store', [ ]);

  app.controller('StoreController', function() {
    this.products = gems;
  });
})();