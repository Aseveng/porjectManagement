package com.stylefeng.guns.modular.system.model;

import com.baomidou.mybatisplus.enums.IdType;
import com.baomidou.mybatisplus.annotations.TableId;
import com.baomidou.mybatisplus.activerecord.Model;
import com.baomidou.mybatisplus.annotations.TableName;
import java.io.Serializable;

/**
 * <p>
 * 
 * </p>
 *
 * @author gqc
 * @since 2018-10-10
 */
@TableName("project_staff")
public class ProjectStaff extends Model<ProjectStaff> {

    private static final long serialVersionUID = 1L;

    /**
     * 姓名
     */
    private String name;
    /**
     * 序号
     */
    @TableId(value = "id", type = IdType.AUTO)
    private Long id;
    /**
     * 部门
     */
    private String department;
    /**
     * 职位
     */
    private String position;


    public String getName() {
        return name;
    }

    public void setName(String name) { this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    @Override
    protected Serializable pkVal() {
        return this.id;
    }

    @Override
    public String toString() {
        return "ProjectStaff{" +
        "name=" + name +
        ", id=" + id +
        ", department=" + department +
        ", position=" + position +
        "}";
    }
}
