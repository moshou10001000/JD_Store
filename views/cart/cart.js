myApp.controller("cartCtrl",function ($scope,$rootScope) {
    $scope.message="cart";
    $scope.allProductPrice=function () {
        var total=0;
        $rootScope.cart.forEach(function (product) {
            total+=product.item.price*product.quantity;
        });
        return total;
    };
    $scope.allProductQuantity=function () {
        var total=0;
        $rootScope.cart.forEach(function (product) {
            total+=product.quantity;
        });
        return total;
    };
    $scope.freight=function () {
        var totalPrice=$scope.allProductPrice();
        if (totalPrice>1000 || totalPrice==0){
            return 0;
        }else {
            return 100;
        }
    }
});

