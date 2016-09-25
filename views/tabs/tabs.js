myApp.controller("tabsCtrl",function ($scope,$rootScope) {
    $scope.allProductQuantity=function () {
        var total=0;
        $rootScope.cart.forEach(function (product) {
            total+=product.quantity;
        });
        return total;
    };
});
