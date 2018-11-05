/**
 * 项目管理管理初始化
 */
var ProjectManagement = {
    id: "ProjectManagementTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
ProjectManagement.initColumn = function () {
    return [
        {field: 'selectItem', radio: true},
            {title: '序号', field: 'id', visible: true, align: 'center', valign: 'middle'},
            {title: '项目名称', field: 'projectName', visible: true, align: 'center', valign: 'middle'},
            {title: '项目经理', field: 'projectManager', visible: true, align: 'center', valign: 'middle'},
            {title: '开始时间', field: 'startTime', visible: true, align: 'center', valign: 'middle'},
            {title: '结束时间', field: 'endTime', visible: true, align: 'center', valign: 'middle'},
            {title: '状态', field: 'status', visible: true, align: 'center', valign: 'middle'},
             {title: '操作', field: 'operation', visible: true, align: 'center', valign: 'middle',
                 formatter : function(value, row, index) {
                     var e = '<button  class="btn btn-primary" onclick="detail(\''
                         + row.id
                         + '\')">详情</button> ';
                     return e ;
                 }
             }
    ];
};

/**
 * 查看项目详情
 * 局部刷新
 */
function detail(id) {
    var url=combinUrl("/projectDetail/detail")
    $("#detail").load(url);
}


/**
 * 检查是否选中
 */
ProjectManagement.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        ProjectManagement.seItem = selected[0];
        return true;
    }
};

/**
 * 点击添加项目管理
 */
ProjectManagement.openAddProjectManagement = function () {
    var index = layer.open({
        type: 2,
        title: '添加项目管理',
        area: ['800px', '420px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/projectManagement/projectManagement_add'
    });
    this.layerIndex = index;
};

/**
 * 打开查看项目管理详情
 */
ProjectManagement.openProjectManagementDetail = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: '项目管理详情',
            area: ['800px', '420px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/projectManagement/projectManagement_update/' + ProjectManagement.seItem.id
        });
        this.layerIndex = index;
    }
};

/**
 * 删除项目管理
 */
ProjectManagement.delete = function () {
    if (this.check()) {
        var ajax = new $ax(Feng.ctxPath + "/projectManagement/delete", function (data) {
            Feng.success("删除成功!");
            ProjectManagement.table.refresh();
        }, function (data) {
            Feng.error("删除失败!" + data.responseJSON.message + "!");
        });
        ajax.set("projectManagementId",this.seItem.id);
        ajax.start();
    }
};

/**
 * 查询项目管理列表
 */
ProjectManagement.search = function () {
    var queryData = {};
    queryData['condition'] = $("#condition").val();
    ProjectManagement.table.refresh({query: queryData});
};

$(function () {
    var defaultColunms = ProjectManagement.initColumn();
    var table = new BSTable(ProjectManagement.id, "/projectManagement/list", defaultColunms);
    table.setPaginationType("client");
    ProjectManagement.table = table.init();
});
