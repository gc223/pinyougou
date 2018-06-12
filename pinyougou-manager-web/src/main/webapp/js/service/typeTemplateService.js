app.service('typeTemplateService',function ($http) {
    this.queryPage=function(page,rows,entity){
        return $http.post('../typeTemplate/search.do?page='+page+"&rows="+rows,entity);
    }

});