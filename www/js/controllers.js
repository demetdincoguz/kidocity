angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('PlacesCtrl', function($scope, Places) {
  $scope.places = Places.all();
  $scope.remove = function(place) {
    Places.remove(place);
  }
})

.controller('PlaceDetailCtrl', function($scope, $stateParams, Places) {
  $scope.place = Places.get($stateParams.placeId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
