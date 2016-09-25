myApp.controller("productsCtrl",function ($scope,$rootScope) {
    $rootScope.productDetail={};
    $scope.skip=function (index) {
        $rootScope.productDetail=$rootScope.products[index];
    }
});
