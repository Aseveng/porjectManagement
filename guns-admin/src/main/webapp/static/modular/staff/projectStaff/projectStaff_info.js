/**
 * 初始化员工管理详情对话框
 */
var ProjectStaffInfoDlg = {
    projectStaffInfoData : {}
};

/**
 * 清除数据
 */
ProjectStaffInfoDlg.clearData = function() {
    this.projectStaffInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
ProjectStaffInfoDlg.set = function(key, val) {
    this.projectStaffInfoData[key] = (typeof val == "undefined") ? $("#" + key).val() : val;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
ProjectStaffInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
ProjectStaffInfoDlg.close = function() {
    parent.layer.close(window.parent.ProjectStaff.layerIndex);
}

/**
 * 收集数据
 */
ProjectStaffInfoDlg.collectData = function() {
    this
    .set('name')
    .set('id')
    .set('department')
    .set('position');
}

/**
 * 提交添加
 */
ProjectStaffInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/projectStaff/add", function(data){
        Feng.success("添加成功!");
        window.parent.ProjectStaff.table.refresh();
        ProjectStaffInfoDlg.close();
    },function(data){
        Feng.error("添加失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.projectStaffInfoData);
    ajax.start();
}

/**
 * 提交修改
 */
ProjectStaffInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/projectStaff/update", function(data){
        Feng.success("修改成功!");
        window.parent.ProjectStaff.table.refresh();
        ProjectStaffInfoDlg.close();
    },function(data){
        Feng.error("修改失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.projectStaffInfoData);
    ajax.start();
}

$(function() {

});
