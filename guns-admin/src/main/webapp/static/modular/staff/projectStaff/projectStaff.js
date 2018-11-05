/**
 * 员工管理管理初始化
 */
var ProjectStaff = {
    id: "ProjectStaffTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
ProjectStaff.initColumn = function () {
    return [
        {field: 'selectItem', radio: true},
        {title: '序号', field: 'id', visible: true, align: 'center', valign: 'middle'},
            {title: '姓名', field: 'name', visible: true, align: 'center', valign: 'middle'},
            {title: '部门', field: 'department', visible: true, align: 'center', valign: 'middle'},
            {title: '职位', field: 'position', visible: true, align: 'center', valign: 'middle'}
    ];
};
/**
 * 检查是否选中
 */
ProjectStaff.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        ProjectStaff.seItem = selected[0];
        return true;
    }
};
/**
 * 点击添加员工管理
 */
ProjectStaff.openAddProjectStaff = function () {
    var index = layer.open({
        type: 2,
        title: '添加员工管理',
        area: ['800px', '420px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/projectStaff/projectStaff_add'
    });
    this.layerIndex = index;
};

/**
 * 打开查看员工管理详情
 */
ProjectStaff.openProjectStaffDetail = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: '员工管理详情',
            area: ['800px', '420px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/projectStaff/projectStaff_update/' + ProjectStaff.seItem.id
        });
        this.layerIndex = index;
    }
};

/**
 * 删除员工管理
 */
ProjectStaff.delete = function () {
    if (this.check()) {
        var ajax = new $ax(Feng.ctxPath + "/projectStaff/delete", function (data) {
            Feng.success("删除成功!");
            ProjectStaff.table.refresh();
        }, function (data) {
            Feng.error("删除失败!" + data.responseJSON.message + "!");
        });
        ajax.set("projectStaffId",this.seItem.id);
        ajax.start();
    }
};

/**
 * 查询员工管理列表
 */
ProjectStaff.search = function () {
    var queryData = {};
    queryData['condition'] = $("#condition").val();
    ProjectStaff.table.refresh({query: queryData});
};

$(function () {
    var defaultColunms = ProjectStaff.initColumn();
    var table = new BSTable(ProjectStaff.id, "/projectStaff/list", defaultColunms);
    table.setPaginationType("client");
    ProjectStaff.table = table.init();
});
