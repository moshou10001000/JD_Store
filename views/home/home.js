myApp.controller("homeCtrl",function ($scope,$http,$rootScope) {
    $scope.getProductsList=function (category) {
        var url="";
        switch (category){
            case "cpu":
                url="data/cpu.json";
                break;
            case "zhuban":
                url="data/zhuban.json";
                break;
            case "neicun":
                url="data/neicun.json";
                break;
            case "xianka":
                url="data/xianka.json";
                break;
            case "yingpan":
                url="data/yingpan.json";
                break;
            case "yinxiang":
                url="data/yinxiang.json";
                break;
            case "jixiang":
                url="data/jixiang.json";
                break;
            case "dianyuan":
                url="data/dianyuan.json";
                break;
            case "xianshiqi":
                url="data/xianshiqi.json";
                break;
            case "jianshu":
                url="data/jianshu.json";
                break;
        }
        $http.get(url).success(function (data) {
            $rootScope.products=data;
        });
    }
});
