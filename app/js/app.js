"use-strict";

/* App Module */
var debApp = angular.module("debApp", [
    "ngRoute",
    "debAppControllers"
]);

debApp.config(["$routeProvider",
function ($routeProvider) {
    $routeProvider.
    when("/splash", {
        templateUrl: "partials/splash.html",
        controller : "SplashCtrl"
    }).
    when("/about-me",{
        templateUrl: "partials/about-me.html",
        controller : "AboutMeCtrl"
    }).
    otherwise({
        redirectTo: "/splash"
    });
}
]);
