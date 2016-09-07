/**
 * Created by liujihong on 16/3/6.
 */

$(function() {
    initDocument();

    //右上角快捷菜单
    $(window).scroll(function () {
        var scrollHeight = $(document).scrollTop();
        //console.log(scrollHeight);
        if (scrollHeight < 115) {
            $(".demos-anchor").removeClass("sticky");
        } else {
            $(".demos-anchor").addClass("sticky");
        }
    });

    $(".main-wrapper li[data-finished]").each(function() {
        var hasFinished = $(this).attr("data-finished");
        if ( hasFinished == 1 ) {
            $(this).addClass("finished");
        }
    })
});

function initDocument() {
    header();
    footer();
    initAsideNav();

    var currentFileName = $("#fileName").val();
    $('a[href="' + currentFileName + '.html"]').addClass("current");
}

function header() {
    var content =
        '<div class="header-wrapper clearfix">' +
        '<img class="logo left" src="../img/logo.png" alt="千米网logo">' +
        '<p class="left">前端规范0.1</p>' +
        '</div>'

    $("#header").html(content);
}

function footer() {
    var content =
        '<div class="container">' +
        '千米网前端规范0.1 2016/03' +
        '</div>'

    $("#footer").html(content);
}

function initAsideNav() {
    var order = 0;

    var navList = [
        {key: ++order,title: "Color Library", chinese: "颜色规范", link: "color-library.html", finished: 1},
        {key: ++order,title: "Fonts Library", chinese: "字体规范", link: "fonts-library.html", finished: 1},
        {key: ++order,title: "Layout", chinese: "布局", link: "layout.html", finished: 1},
        {key: ++order,title: "Panels", chinese: "面板", link: "panels.html", finished: 1},
        {key: ++order,title: "Icon", chinese: "图标", link: "icons.html", finished: 1},
        {key: ++order,title: "Typography", chinese: "排版", link: "typography.html", finished: 1},
        {key: ++order,title: "Button", chinese: "按钮", link: "button.html", finished: 1},
        {key: ++order,title: "List", chinese: "列表", link: "list.html", finished: 1},
        {key: ++order,title: "Radio", chinese: "单选框", link: "radio.html", finished: 1},
        {key: ++order,title: "Checkbox", chinese: "多选框", link: "checkbox.html", finished: 1},
        {key: ++order,title: "Cascader", chinese: "级联选择", link: "cascader.html", finished: 1},

        {key: ++order,title: "DatePicker", chinese: "日期选择框", link: "date-picker.html", finished: 1},
        {key: ++order,title: "Form", chinese: "表单", link: "forms.html", finished: 1},
        {key: ++order,title: "InputNumber", chinese: "数字输入框", link: "input-number.html", finished: 1},

        {key: ++order,title: "Select", chinese: "选择器", link: "select.html", finished: 1},
        {key: ++order,title: "Slider", chinese: "滑动输入条", link: "slider.html", finished: 1},
        {key: ++order,title: "Switch", chinese: "开关", link: "switch.html", finished: 1},
        {key: ++order,title: "TimePicker", chinese: "时间选择框", link: "time-picker.html", finished: 1},
        {key: ++order,title: "Transfer", chinese: "穿梭框", link: "transfer.html", finished: 1},
        {key: ++order,title: "TreeSelect", chinese: "树选择", link: "tree-select.html", finished: 1},
        {key: ++order,title: "Upload", chinese: "文件上传", link: "upload.html", finished: 1},
        {key: ++order,title: "Alert", chinese: "警告提示", link: "alert.html", finished: 1},
        {key: ++order,title: "Badge", chinese: "徽标数", link: "badge.html", finished: 1},
        {key: ++order,title: "Calendar", chinese: "日历", link: "calendar.html", finished: 1},
        {key: ++order,title: "Carousel", chinese: "走马灯", link: "carousel.html", finished: 1},
        {key: ++order,title: "Collapse", chinese: "折叠面板", link: "collapse.html", finished: 1},
        {key: ++order,title: "Dropdown", chinese: "下拉菜单", link: "dropdown.html", finished: 1},
        {key: ++order,title: "Message", chinese: "全局提示", link: "message.html", finished: 1},
        {key: ++order,title: "Modal", chinese: "对话框", link: "modal.html", finished: 1},
        {key: ++order,title: "Notification", chinese: "通知提醒框", link: "notification.html", finished: 1},
        {key: ++order,title: "Popconfirm", chinese: "气泡确认框", link: "popconfirm.html", finished: 1},
        {key: ++order,title: "Popover", chinese: "气泡卡片", link: "popover.html", finished: 1},
        {key: ++order,title: "Progress", chinese: "进度条", link: "progress.html", finished: 1},
        {key: ++order,title: "Table", chinese: "表格", link: "table.html", finished: 1},
        {key: ++order,title: "Tag", chinese: "标签", link: "tag.html", finished: 1},
        {key: ++order,title: "Timeline", chinese: "时间轴", link: "timeline.html", finished: 1},
        {key: ++order,title: "Tooltip", chinese: "文字提示", link: "tooltip.html", finished: 1},
        {key: ++order,title: "Tree", chinese: "树形控件", link: "tree-structure.html", finished: 1},
        {key: ++order,title: "Breadcrumb", chinese: "面包屑", link: "breadcrumb.html", finished: 1},
        {key: ++order,title: "Menu", chinese: "导航菜单", link: "menu.html", finished: 1},
        {key: ++order,title: "Pagination", chinese: "分页", link: "pagination.html", finished: 1},
        {key: ++order,title: "Steps", chinese: "步骤条", link: "steps.html", finished: 1},
        {key: ++order,title: "Tabs", chinese: "标签页", link: "tabs.html", finished: 1},
        {key: ++order,title: "Affix", chinese: "固钉", link: "affix.html", finished: 1},
        {key: ++order,title: "QueueAnim", chinese: "进出场动画", link: "queueAnim.html", finished: 0},
        {key: ++order,title: "Spin", chinese: "加载中", link: "spin.html", finished: 0},
        {key: ++order,title: "", chinese: "表单场景一", link: "scene-form01.html", finished: 0},
        {key: ++order,title: "", chinese: "表单场景二", link: "scene-form02.html", finished: 0},
        {key: ++order,title: "", chinese: "对话框场景一", link: "scene-modal01.html", finished: 0},
        {key: ++order,title: "", chinese: "对话框场景二", link: "scene-modal02.html", finished: 0},
    ];

    var navMenu =
        '<ul class="list-unstyled">' +
        '<li class=""><a href="overview.html">快速上手</a></li>' +
        '<li class=""><a href="log.html">更新日志</a></li>' +
        '<li class="open"><h4>Components</h4><ul id="componentsList">'+
        '<li class="type-divider">基本</li>' +
        '<li class="type-divider">表单</li>' +
        '<li class="type-divider">展示</li>' +
        '<li class="type-divider">导航</li>' +
        '<li class="type-divider">其他</li>' +
        '</ul></li>' +
        '<li class="open"><h4>使用场景</h4><ul id="sceneList">' +
        '<li class="type-divider">表单场景</li>' +
        '<li class="type-divider">对话框场景</li>' +
        '</ul></li>'
    ' </ul>'

    $(".aside-container").children().remove();
    $(".aside-container").append(navMenu);

    $("#indexMenu").children().remove();
    $("#indexMenu").append(navMenu);

    var basicList = ["", "","","","","",""];
    var lineList = [8, 21, 38, 43, 46, 48, 50];
    var i = 0;
    for(var j=0; j<7; j++) {

        for( i; i<lineList[j]; i++) {
            basicList[j] = basicList[j] +
                '<li data-finished="'+ navList[i].finished +'"><a href="' + navList[i].link + '">' + navList[i].title +
                '<span class="chinese">' + navList[i].chinese + '</span></a></li>';
        }

        $(".type-divider").eq(j).after(basicList[j]);

    }
}



