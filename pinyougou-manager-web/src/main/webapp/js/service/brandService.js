app.service('brandService',function ($http) {
    this.save=function (entity) {
        return $http.post('../brand/save.do',entity)
    }
    this.queryPage=function (page, rows, entity) {
        return $http.post('../brand/search.do?page='+page+'&rows='+rows,entity);
    }
    this.dele=function (ids) {
        return $http.get('../brand/delete.do?ids='+ids);
    }
    this.selectOptionList=function () {
        return $http.get('../brand/selectOptionList.do');
    }
})