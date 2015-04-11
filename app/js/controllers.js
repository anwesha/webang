"use-strict";

var debAppControllers = angular.module("debAppControllers", []);

debAppControllers.controller("SplashCtrl", ['$scope',
function($scope) {
    $scope.splash = {
        name : "anwesha",
        lastname : "deb",
        banner : [
            "Front End Engineer",
            "UI UX Enthusiast"
        ]
    };
}]);

debAppControllers.controller("AboutMeCtrl", ["$scope",
function ($scope) {
    $scope.aboutme = {
        header : "About me",
        body : "I am a front end engineer with a passion for user experience and user interface design. I believe creating a well performant product, but I enjoy my job the most when I get to make it more intuitive, interactive and sharp. I am a pixel pusher!"
    };
}]);
