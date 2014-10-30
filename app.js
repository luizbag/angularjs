(function() {
  var gem = {
    name: 'Dodecahedron',
    price: 2.95,
    description: 'Some gems have hidden qualities beyond their luster, beyond thei shine... Dodeca is one of those gems.',
    canPurchase: false
  };

  var app = angular.module('store', [ ]);

  app.controller('StoreController', function() {
    this.product = gem;
  });
})();