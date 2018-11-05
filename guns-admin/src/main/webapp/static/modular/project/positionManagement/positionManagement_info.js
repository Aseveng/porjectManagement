/**
 * 初始化职位管理详情对话框
 */
var PositionManagementInfoDlg = {
    positionManagementInfoData : {}
};

/**
 * 清除数据
 */
PositionManagementInfoDlg.clearData = function() {
    this.positionManagementInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
PositionManagementInfoDlg.set = function(key, val) {
    this.positionManagementInfoData[key] = (typeof val == "undefined") ? $("#" + key).val() : val;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
PositionManagementInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
PositionManagementInfoDlg.close = function() {
    parent.layer.close(window.parent.PositionManagement.layerIndex);
}

/**
 * 收集数据
 */
PositionManagementInfoDlg.collectData = function() {
    this
    .set('id')
    .set('positionName');
}

/**
 * 提交添加
 */
PositionManagementInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/positionManagement/add", function(data){
        Feng.success("添加成功!");
        window.parent.PositionManagement.table.refresh();
        PositionManagementInfoDlg.close();
    },function(data){
        Feng.error("添加失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.positionManagementInfoData);
    ajax.start();
}

/**
 * 提交修改
 */
PositionManagementInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/positionManagement/update", function(data){
        Feng.success("修改成功!");
        window.parent.PositionManagement.table.refresh();
        PositionManagementInfoDlg.close();
    },function(data){
        Feng.error("修改失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.positionManagementInfoData);
    ajax.start();
}

$(function() {

});
