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
import com.stylefeng.guns.modular.system.model.ProjectManagement;
import com.stylefeng.guns.modular.project.service.IProjectManagementService;

/**
 * 项目管理控制器
 *
 * @author fengshuonan
 * @Date 2018-11-01 10:10:21
 */
@Controller
@RequestMapping("/projectManagement")
public class ProjectManagementController extends BaseController {

    private String PREFIX = "/project/projectManagement/";

    @Autowired
    private IProjectManagementService projectManagementService;

    /**
     * 跳转到项目管理首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "projectManagement.html";
    }

    /**
     * 跳转到添加项目管理
     */

    @RequestMapping("/projectManagement_add")
    public String projectManagementAdd() {
        return PREFIX + "projectManagement_add.html";
    }

    /**
     * 跳转到修改项目管理
     */
    @RequestMapping("/projectManagement_update/{projectManagementId}")
    public String projectManagementUpdate(@PathVariable Integer projectManagementId, Model model) {
        ProjectManagement projectManagement = projectManagementService.selectById(projectManagementId);
        model.addAttribute("item",projectManagement);
        LogObjectHolder.me().set(projectManagement);
        return PREFIX + "projectManagement_edit.html";
    }

    /**
     * 获取项目管理列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(String condition) {
        return projectManagementService.selectList(null);
    }

    /**
     * 新增项目管理
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Object add(ProjectManagement projectManagement) {
        projectManagementService.insert(projectManagement);
        return SUCCESS_TIP;
    }

    /**
     * 删除项目管理
     */
    @RequestMapping(value = "/delete")
    @ResponseBody
    public Object delete(@RequestParam Integer projectManagementId) {
        projectManagementService.deleteById(projectManagementId);
        return SUCCESS_TIP;
    }

    /**
     * 修改项目管理
     */
    @RequestMapping(value = "/update")
    @ResponseBody
    public Object update(ProjectManagement projectManagement) {
        projectManagementService.updateById(projectManagement);
        return SUCCESS_TIP;
    }

    /**
     * 项目管理详情
     */
    @RequestMapping(value = "/detail/{projectManagementId}")
    @ResponseBody
    public Object detail(@PathVariable("projectManagementId") Integer projectManagementId) {
        return projectManagementService.selectById(projectManagementId);
    }
}
