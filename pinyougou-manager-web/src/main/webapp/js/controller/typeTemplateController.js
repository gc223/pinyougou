app.controller('typeTemplateController',function ($scope, $controller, typeTemplateService,brandService,specService) {
    $controller('baseController',{$scope:$scope});
    $scope.searchEntity={};//定义搜索对象
    $scope.search=function (page,rows) {
        typeTemplateService.queryPage(page,rows,$scope.searchEntity).success(
            function (response) {
                $scope.templateList=response.rows;
                $scope.paginationConf.totalItems=response.total;
            }
        );
    }
    $scope.brandList={};//品牌列表
    $scope.findBrandList=function () {
        brandService.selectOptionList().success(function (response) {
            $scope.brandList={data:response}
        })
    }
    $scope.specList={};//品牌列表
    $scope.findSpecList=function () {
        specService.selectOptionList().success(function (response) {
            $scope.specList={data:response}
        })
    }
});