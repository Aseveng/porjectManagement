/**
 * 初始化项目管理详情对话框
 */
var ProjectManagementInfoDlg = {
    projectManagementInfoData : {}
};

/**
 * 清除数据
 */
ProjectManagementInfoDlg.clearData = function() {
    this.projectManagementInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
ProjectManagementInfoDlg.set = function(key, val) {
    this.projectManagementInfoData[key] = (typeof val == "undefined") ? $("#" + key).val() : val;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
ProjectManagementInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
ProjectManagementInfoDlg.close = function() {
    parent.layer.close(window.parent.ProjectManagement.layerIndex);
}

/**
 * 收集数据
 */
ProjectManagementInfoDlg.collectData = function() {
    this
    .set('id')
    .set('projectName')
    .set('projectDescribe')
    .set('projectManager')
    .set('startTime')
    .set('endTime')
    .set('status');
}

/**
 * 提交添加
 */
ProjectManagementInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/projectManagement/add", function(data){
        Feng.success("添加成功!");
        window.parent.ProjectManagement.table.refresh();
        ProjectManagementInfoDlg.close();
    },function(data){
        Feng.error("添加失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.projectManagementInfoData);
    ajax.start();
}

/**
 * 提交修改
 */
ProjectManagementInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/projectManagement/update", function(data){
        Feng.success("修改成功!");
        window.parent.ProjectManagement.table.refresh();
        ProjectManagementInfoDlg.close();
    },function(data){
        Feng.error("修改失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.projectManagementInfoData);
    ajax.start();
}

$(function() {

});
