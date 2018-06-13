app.service('typeTemplateService',function ($http) {
    this.queryPage=function(page,rows,entity){
        return $http.post('../typeTemplate/search.do?page='+page+"&rows="+rows,entity);
    }
    this.add=function (entity) {
        return $http.post('../typeTemplate/add.do',entity);
    }
    this.findOne=function (id) {
        return $http.get('../typeTemplate/findOne.do?id='+id);
    }
    this.update=function (entity) {
        return $http.post('../typeTemplate/update.do',entity);
    }
    //删除
    this.dele=function(ids){
        return $http.get('../typeTemplate/delete.do?ids='+ids);
    }
});