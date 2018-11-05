package com.stylefeng.guns.modular.system.model;

import com.baomidou.mybatisplus.annotations.TableField;
import com.baomidou.mybatisplus.activerecord.Model;
import com.baomidou.mybatisplus.annotations.TableName;
import java.io.Serializable;


/**
 * <p>
 * 
 * </p>
 *
 * @author gqc
 * @since 2018-10-31
 */
@TableName("position_management")
public class PositionManagement extends Model<PositionManagement> {

    private static final long serialVersionUID = 1L;

    private String id;
    @TableField("position_name")
    private String positionName;


    public String getId() {
        return id;
    }

    public void setId(String id) {this.id = id;}

    public String getPositionName() {
        return positionName;
    }

    public void setPositionName(String positionName) {
        this.positionName = positionName;
    }

    @Override
    protected Serializable pkVal() {
        return this.id;
    }

    @Override
    public String toString() {
        return "PositionManagement{" +
        "id=" + id +
        ", positionName=" + positionName +
        "}";
    }
}
