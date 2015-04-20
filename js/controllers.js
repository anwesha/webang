"use-strict";

var debAppControllers = angular.module("debAppControllers", []);

debAppControllers.controller("SplashCtrl", ["$scope", "Appdata",
function($scope, Appdata) {
    $scope.secData = Appdata.query();
}]);

debAppControllers.controller("SectionCtrl", ["$scope", "$routeParams", "Appdata",
function ($scope, $routeParams, Appdata) {
    $scope.aboutme = Appdata.get({secId: $routeParams.secId}, function(secData) {
      $scope.secData = secData;
    });
}]);
