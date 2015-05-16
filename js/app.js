"use-strict";

/* App Module */
var debApp = angular.module("debApp", [
    "ngRoute",
    "ngAnimate",
    "debAppControllers",
    "debAppServices"
]);

debApp.config(["$routeProvider", "$locationProvider",
function ($routeProvider, $locationProvider) {
    $routeProvider.
    when("/:secId",{
        templateUrl: function (params) {
            return "partials/" + params.secId + ".html";
        },
        controller : "SectionCtrl"
    }).
    otherwise({
        redirectTo: "/splash"
    });

    //check browser support
    if(window.history && window.history.pushState) {
     $locationProvider.html5Mode({
             enabled: true
      });
    }
}
]);
