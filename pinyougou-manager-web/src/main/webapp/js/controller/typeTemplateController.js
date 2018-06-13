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
    //添加规格选项行
    $scope.addTableRow=function () {
        $scope.entity.customAttributeItems.push({});
    }
    //删除规格选项行
    $scope.delTableRow=function (index) {
        $scope.entity.customAttributeItems.splice(index,1);
    }
    $scope.save=function () {
        if(entity.id !=null){
            responseData= typeTemplateService.update($scope.entity);
        }else {
            responseData= typeTemplateService.add($scope.entity);
        }
        responseData.success(function (response) {
            if(response.success){
                $scope.reloadList();
            }else{
                alert(response.msg);
            }
        })
    }
    $scope.findOne=function (id) {
        typeTemplateService.findOne(id).success(function (response) {
            $scope.entity=response;
            $scope.entity.brandIds=JSON.parse($scope.entity.brandIds);
            $scope.entity.specIds=JSON.parse($scope.entity.specIds);
            $scope.entity.customAttributeItems=JSON.parse($scope.entity.customAttributeItems);
        })
    }
    //批量删除
    $scope.dele=function(){
        //获取选中的复选框
        typeTemplateService.dele( $scope.selectIds ).success(
            function(response){
                if(response.success){
                    $scope.reloadList();//刷新列表
                    $scope.selectIds=[];
                }
            }
        );
    }
});