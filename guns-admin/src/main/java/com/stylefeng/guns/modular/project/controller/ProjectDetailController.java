package com.stylefeng.guns.modular.project.controller;

/**
 * Created by gqc on 2018/11/2.
 */

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 *项目细节
 *
 * @author gqc
 * @Date 2018-10-31
 */
@Controller
@RequestMapping("/projectDetail")
public class ProjectDetailController {

    private String PREFIX = "/project/projectDetail/";

    /**
     * 跳转到职位管理首页
     */
    @RequestMapping("/detail")
    public String detail() {
        return PREFIX + "project.html";
    }



}

