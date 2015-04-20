var debAppServices = angular.module("debAppServices", ["ngResource"]);

debAppServices.factory("Appdata", ["$resource",
function ($resource) {
    return $resource("appdata/:secId.json", {}, {
      query: {
            method: "GET",
            params: { secId: "splash" },
            isArray: false
          }
    });
}]);
