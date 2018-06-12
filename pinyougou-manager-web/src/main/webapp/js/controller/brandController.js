app.controller('brandController',function ($scope, $controller,brandService) {
    /*$scope.findAll = function () {
        $http.get('../../brand/findAll.do').success(
            function (response) {
            $scope.brandList = response;
        });
    }*/
    $controller('baseController',{$scope:$scope});  //继承baseController
    $scope.searchEntity={};//定义搜索对象


    $scope.save = function () {
        brandService.save($scope.entity).success(
            function (response) {
                if(response.success){
                    $scope.reloadList();
                }else {
                    alert(response.msg);
                }
            }
        );
    }
    $scope.findOne = function (id,name,firstChar) {
        alert(id);

        $scope.entity = {'id':id,'name':name,'firstChar':firstChar};
    }


    $scope.dele = function () {
        brandService.dele($scope.selectIds).success(
            function (response) {
                if(response.success){
                    $scope.reloadList();
                }else{
                    alert(response.msg);
                }

            }
        );
    }
    $scope.search = function (page,rows) {
        brandService.queryPage(page,rows,$scope.searchEntity).success(
            function (response) {
                $scope.brandList = response.rows;
                $scope.paginationConf.totalItems = response.total;
            }
        )
    }
})