(function () {
    angular
        .module("cryptoDemo")
        .config(Config);
    function Config($routeProvider,$httpProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "client/views/user/login.view.client.html",
                controller: "LoginController",
                controllerAs: "model"
            })
            .otherwise({
                redirectTo: "/"
            });
    }
})();
