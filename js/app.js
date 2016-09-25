var myApp = angular.module("myApp", ["ionic"]);
myApp.config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    //清除ionic坑
    $ionicConfigProvider.backButton.text("");
    $ionicConfigProvider.backButton.previousTitleText("");
    $ionicConfigProvider.platform.ios.tabs.style('standard');
    $ionicConfigProvider.platform.ios.tabs.position('bottom');
    $ionicConfigProvider.platform.android.tabs.style('standard');
    $ionicConfigProvider.platform.android.tabs.position('bottom');
    $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
    $ionicConfigProvider.platform.android.navBar.alignTitle('center');
    $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
    $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');
    $ionicConfigProvider.platform.ios.views.transition('ios');
    $ionicConfigProvider.platform.android.views.transition('android');
    //配置路由
    $stateProvider.state("tabs", {
        url: "/tabs",
        abstract: true,
        templateUrl: "views/tabs/tabs.html",
        controller:"tabsCtrl"
    });
    $stateProvider.state("tabs.home", {
        url: "/home",
        views: {"tabs-home": {templateUrl: "views/home/home.html",controller: "homeCtrl"}}
    });
    $stateProvider.state("tabs.products", {
        url: "/products",
        views: {"tabs-home": {templateUrl: "views/products/products.html",controller: "productsCtrl"}}
    });
    $stateProvider.state("tabs.details", {
        url: "/details",
        views: {"tabs-home": {templateUrl: "views/details/details.html",controller: "detailsCtrl"}}
    });
    $stateProvider.state("tabs.cart", {
        url: "/cart",
        views: {"tabs-cart": {templateUrl: "views/cart/cart.html",controller: "cartCtrl"}}

    });
    $stateProvider.state("tabs.payment", {
        url: "/payment",
        views: {"tabs-cart": {templateUrl: "views/payment/payment.html",controller: "paymentCtrl"}}
    });
    $stateProvider.state("tabs.order", {
        url: "/order",
        views: {"tabs-cart": {templateUrl: "views/order/order.html",controller: "orderCtrl"}}
    });
    $stateProvider.state("tour", {
        url: "/tour",
        templateUrl: "views/tour/tour.html",
        controller:"tourCtrl"
    });
    $urlRouterProvider.otherwise("/tour");
});
myApp.controller("myCtrl",function ($scope,$rootScope) {
    $rootScope.products=[];
    $rootScope.cart=[];
    $rootScope.core={
        addProduct: function (product) {
            var flag = true;
            $rootScope.cart.forEach(function (item) {
                if (item.item.name == product.name) {
                    item.quantity++;
                    flag = false;
                }
            });
            if (flag) {
                $rootScope.cart.push({item: product, quantity: 1});
            }
        },
        deleteProduct: function (product) {
            $rootScope.cart.forEach(function (item, index) {
                if (item.item.name == product.name) {
                    $rootScope.cart.splice(index, 1);
                }
            })
        },
        findAllProduct: function () {
            return $rootScope.cart;
        },
        clearProduct: function () {
            $rootScope.cart.length = 0;
        },
        updateProduct: function (product,boolean) {
            //boolean? product.quantity++:product.quantity--;
            if(boolean){
                product.quantity++;
            }else {
                if(product.quantity>0){
                    product.quantity--;
                }
            }
        }
    };
});
