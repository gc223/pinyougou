app.controller("specController",function ($scope, $controller,specService) {
    $controller('baseController',{$scope:$scope});  //继承baseController
    $scope.searchEntity={};//定义搜索对象
    $scope.search=function (page,rows) {
        specService.queryPage(page,rows,$scope.searchEntity).success(
            function (response) {
                $scope.specList=response.rows;
                $scope.paginationConf.totalItems=response.total;
            }
        );
    }
    //添加规格选项行
    $scope.addTableRow=function () {
        $scope.entity.specificationOptionList.push({});
    }
    //删除规格选项行
    $scope.delTableRow=function (index) {
        $scope.entity.specificationOptionList.splice(index,1);
    }

    //保存
    $scope.save = function () {
        specService.save($scope.entity).success(
            function (response) {
                if(response.success){
                    $scope.reloadList();
                }else {
                    alert(response.msg);
                }
            }
        )
    }
    //查询单个
    $scope.findOne=function (id) {
        $scope.entity={'spec':{},specificationOptionList:[]};
        specService.findOne(id).success(function (response) {
            $scope.entity.spec=response.spec;
            $scope.entity.specificationOptionList=response.specificationOptionList;
        });
    }
    $scope.dele=function () {
        specService.dele($scope.selectIds).success(function (response) {
            if(response.success){
                $scope.reloadList();
            }else {
                alert(response.msg);
            }
        })
    }
})