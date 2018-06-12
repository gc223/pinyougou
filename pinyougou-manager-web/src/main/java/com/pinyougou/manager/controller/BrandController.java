package com.pinyougou.manager.controller;

import com.alibaba.dubbo.config.annotation.Reference;
import com.pinyougou.pojo.TbBrand;
import com.pinyougou.sellergoods.service.BrandService;
import entity.PageResult;
import entity.Result;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/brand")
public class BrandController {
    @Reference
    private BrandService brandService;

//    @RequestMapping("/findAll")
//    public List<TbBrand> findAll(){
//        return brandService.findAll();
//    }

    @RequestMapping("/search")
    public PageResult findPage(@RequestBody TbBrand tbBrand,int page,int rows){
        return  brandService.findPage(tbBrand,page, rows);
    }

    @RequestMapping("/save")
    public Result add(@RequestBody TbBrand tbBrand){
        try {
            if(tbBrand.getId() != null && !"".equals(tbBrand.getId().toString())){
                brandService.update(tbBrand);
            }
            else {brandService.add(tbBrand);}
            return new Result(true,"添加成功");
        } catch (Exception e) {
            e.printStackTrace();
            return new Result(false,"添加失败");
        }
    }

    @RequestMapping("/delete")
    public Result delete(long[] ids){
        try {
            brandService.delete(ids);
            return new Result(true,"删除成功");
        } catch (Exception e) {
            e.printStackTrace();
            return new Result(false,"删除失败");
        }
    }
    @RequestMapping("/selectOptionList")
    public List<Map> selectOptionList(){
        return brandService.selectOptionList();
    }
}
