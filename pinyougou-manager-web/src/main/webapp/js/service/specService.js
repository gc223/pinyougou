//服务层
app.service('specService',function ($http) {

    this.queryPage=function (page,rows,searchEntity) {

        return $http.post('../specification/search.do?page='+page+'&rows='+rows,searchEntity);
    }
    this.save = function (entity) {
        return $http.post("../specification/save.do",entity);
    }
    this.findOne = function (id) {
        return $http.get('../specification/findOne.do?id='+id);
    }
    this.dele=function (ids) {
        return $http.get('../specification/delete.do?ids='+ids);
    }
    this.selectOptionList=function () {
        return $http.get('../specification/selectOptionList.do');
    }
});