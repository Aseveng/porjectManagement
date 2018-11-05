package com.stylefeng.guns.modular.project.controller;

import com.stylefeng.guns.core.base.controller.BaseController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.beans.factory.annotation.Autowired;
import com.stylefeng.guns.core.log.LogObjectHolder;
import org.springframework.web.bind.annotation.RequestParam;
import com.stylefeng.guns.modular.system.model.PositionManagement;
import com.stylefeng.guns.modular.project.service.IPositionManagementService;

/**
 * 职位管理控制器
 *
 * @author fengshuonan
 * @Date 2018-10-31 14:32:07
 */
@Controller
@RequestMapping("/positionManagement")
public class PositionManagementController extends BaseController {

    private String PREFIX = "/project/positionManagement/";

    @Autowired
    private IPositionManagementService positionManagementService;

    /**
     * 跳转到职位管理首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "positionManagement.html";
    }

    /**
     * 跳转到添加职位管理
     */
    @RequestMapping("/positionManagement_add")
    public String positionManagementAdd() {
        return PREFIX + "positionManagement_add.html";
    }


    @RequestMapping("/project")
    public String positionManagement() {
        return PREFIX + "project.html";
    }

    /**
     * 跳转到修改职位管理
     */
    @RequestMapping("/positionManagement_update/{positionManagementId}")
    public String positionManagementUpdate(@PathVariable Integer positionManagementId, Model model) {
        PositionManagement positionManagement = positionManagementService.selectById(positionManagementId);
        model.addAttribute("item",positionManagement);
        LogObjectHolder.me().set(positionManagement);
        return PREFIX + "positionManagement_edit.html";
    }

    /**
     * 获取职位管理列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(String condition) {
        return positionManagementService.selectList(null);
    }

    /**
     * 新增职位管理
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Object add(PositionManagement positionManagement) {
        positionManagementService.insert(positionManagement);
        return SUCCESS_TIP;
    }

    /**
     * 删除职位管理
     */
    @RequestMapping(value = "/delete")
    @ResponseBody
    public Object delete(@RequestParam Integer positionManagementId) {
        positionManagementService.deleteById(positionManagementId);
        return SUCCESS_TIP;
    }

    /**
     * 修改职位管理
     */
    @RequestMapping(value = "/update")
    @ResponseBody
    public Object update(PositionManagement positionManagement) {
        positionManagementService.updateById(positionManagement);
        return SUCCESS_TIP;
    }

    /**
     * 职位管理详情
     */
    @RequestMapping(value = "/detail/{positionManagementId}")
    @ResponseBody
    public Object detail(@PathVariable("positionManagementId") Integer positionManagementId) {
        return positionManagementService.selectById(positionManagementId);
    }
}
