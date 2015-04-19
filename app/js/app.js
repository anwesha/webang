"use-strict";

/* App Module */
var debApp = angular.module("debApp", [
    "ngRoute",
    "debAppControllers",
    "debAppServices"
]);

debApp.config(["$routeProvider", "$locationProvider",
function ($routeProvider) {
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
}
]);
