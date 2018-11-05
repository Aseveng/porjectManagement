/**
 * 职位管理管理初始化
 */
var PositionManagement = {
    id: "PositionManagementTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
PositionManagement.initColumn = function () {
    return [
        {field: 'selectItem', radio: true},
            {title: 'id', field: 'id', visible: true, align: 'center', valign: 'middle'},
            {title: '职位名称', field: 'positionName', visible: true, align: 'center', valign: 'middle'}
    ];
};

/**
 * 检查是否选中
 */
PositionManagement.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        PositionManagement.seItem = selected[0];
        return true;
    }
};

/**
 * 点击添加职位管理
 */
PositionManagement.openAddPositionManagement = function () {
    var index = layer.open({
        type: 2,
        title: '添加职位管理',
        area: ['800px', '420px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/positionManagement/positionManagement_add'
    });
    this.layerIndex = index;
};

/**
 * 打开查看职位管理详情
 */
PositionManagement.openPositionManagementDetail = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: '职位管理详情',
            area: ['800px', '420px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/positionManagement/positionManagement_update/' + PositionManagement.seItem.id
        });
        this.layerIndex = index;
    }
};

/**
 * 删除职位管理
 */
PositionManagement.delete = function () {
    if (this.check()) {
        var ajax = new $ax(Feng.ctxPath + "/positionManagement/delete", function (data) {
            Feng.success("删除成功!");
            PositionManagement.table.refresh();
        }, function (data) {
            Feng.error("删除失败!" + data.responseJSON.message + "!");
        });
        ajax.set("positionManagementId",this.seItem.id);
        ajax.start();
    }
};

/**
 * 查询职位管理列表
 */
PositionManagement.search = function () {
    var queryData = {};
    queryData['condition'] = $("#condition").val();
    PositionManagement.table.refresh({query: queryData});
};

$(function () {
    var defaultColunms = PositionManagement.initColumn();
    var table = new BSTable(PositionManagement.id, "/positionManagement/list", defaultColunms);
    table.setPaginationType("client");
    PositionManagement.table = table.init();
});
