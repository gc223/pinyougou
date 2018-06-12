package com.pinyougou.sellergoods.service;

import com.pinyougou.pojo.TbBrand;
import entity.PageResult;

import java.util.List;
import java.util.Map;

/**
 * 品牌服务层接口
 */
public interface BrandService {
    /**
     * 查询所有品牌
     * @return
     */
//    List<TbBrand> findAll();
    PageResult findPage(TbBrand tbBrand,int page,int size);
    void add(TbBrand tbBrand);
    void update(TbBrand tbBrand);
    void delete(long[] ids);

    List<Map> selectOptionList();
}
