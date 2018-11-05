package com.stylefeng.guns.modular.staff.controller;

import com.stylefeng.guns.core.base.controller.BaseController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.beans.factory.annotation.Autowired;
import com.stylefeng.guns.core.log.LogObjectHolder;
import org.springframework.web.bind.annotation.RequestParam;
import com.stylefeng.guns.modular.system.model.ProjectStaff;
import com.stylefeng.guns.modular.staff.service.IProjectStaffService;

/**
 * 员工管理控制器
 *
 * @author fengshuonan
 * @Date 2018-10-10 14:10:17
 */
@Controller
@RequestMapping("/projectStaff")
public class ProjectStaffController extends BaseController {

    private String PREFIX = "/staff/projectStaff/";

    @Autowired
    private IProjectStaffService projectStaffService;

    /**
     * 跳转到员工管理首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "projectStaff.html";
    }

    /**
     * 跳转到添加员工管理
     */
    @RequestMapping("/projectStaff_add")
    public String projectStaffAdd() {
        return PREFIX + "projectStaff_add.html";
    }

    /**
     * 跳转到修改员工管理
     */
    @RequestMapping("/projectStaff_update/{projectStaffId}")
    public String projectStaffUpdate(@PathVariable Integer projectStaffId, Model model) {
        ProjectStaff projectStaff = projectStaffService.selectById(projectStaffId);
        model.addAttribute("item",projectStaff);
        LogObjectHolder.me().set(projectStaff);
        return PREFIX + "projectStaff_edit.html";
    }

    /**
     * 获取员工管理列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(String condition) {
        return projectStaffService.selectList(null);
    }

    /**
     * 新增员工管理
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Object add(ProjectStaff projectStaff) {
        projectStaffService.insert(projectStaff);
        return SUCCESS_TIP;
    }

    /**
     * 删除员工管理
     */
    @RequestMapping(value = "/delete")
    @ResponseBody
    public Object delete(@RequestParam Integer projectStaffId) {
        projectStaffService.deleteById(projectStaffId);
        return SUCCESS_TIP;
    }

    /**
     * 修改员工管理
     */
    @RequestMapping(value = "/update")
    @ResponseBody
    public Object update(ProjectStaff projectStaff) {
        projectStaffService.updateById(projectStaff);
        return SUCCESS_TIP;
    }

    /**
     * 员工管理详情
     */
    @RequestMapping(value = "/detail/{projectStaffId}")
    @ResponseBody
    public Object detail(@PathVariable("projectStaffId") Integer projectStaffId) {
        return projectStaffService.selectById(projectStaffId);
    }
}
