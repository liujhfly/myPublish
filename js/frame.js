/**
 * Created by liujihong on 16/3/6.
 */

$(function () {

    selectFun();

    cascaderFun();

    timePickerFun();

    datePickerFun();

    treeStructureFun();

    treeSelectFun();

    popoverFun();

    progressFun();

    tableFun();

    paginationFun();

    modalFun();

    fullcalendarFun();

    menuFun();

    $(document).off("click").click(function (evt) {
        //console.log("document执行了click事件");

        $(".calendar-picker-panel").removeClass("open");

        $(".time-picker-panel").removeClass("open");

        $(".form-select").removeClass("open");
        $(".form-multi-select").removeClass("open");
        $(".select-dropdown").removeClass("open");

        $("#popoverPanel").attr("class", "popover-panel");
    });
});

function selectFun() {

    //单项选择的选择器
    $(".form-select").on("click", ".select-choice", function (evt) {
        var e = evt || window.event;
        e.stopPropagation();

        var $this = $(this);
        var $rootSelect = $this.parents(".form-select");

        if (($rootSelect.hasClass("disabled"))) {
            $rootSelect.removeClass("open");
            $rootSelect.find(".select-dropdown").removeClass("open");
        } else {
            $rootSelect.addClass("open");
            $rootSelect.find(".select-dropdown").addClass("open");
        }

    });

    $(".form-select").on("click", ".option", function (evt) {
        var e = evt || window.event;
        e.stopPropagation();

        var $this = $(this);
        var $rootSelect = $this.parents(".form-select");
        var selectedOption = $this.text().trim();

        if (!($this.hasClass("disabled"))) {
            $this.parents(".select-dropdown").find(".option").removeClass("selected");
            $this.addClass("selected");
            $rootSelect.find(".selected-option").removeClass("placeholder").text(selectedOption);
            $this.parents(".select-dropdown").removeClass("open");
            $rootSelect.removeClass("open");
        }

    });

    $(".form-select").on("click", ".selected-clear", function () {
        var $this = $(this);
        var $rootSelect = $this.parents(".form-select");

        $rootSelect.find(".selected-option").addClass("placeholder").text("请选择");
        $rootSelect.find(".option").removeClass("selected");
        return false;
    });

    //多项选择的选择器
    $(".form-multi-select").on("click", ".select-choice", function (evt) {
        var e = evt || window.event;
        e.stopPropagation();

        var $this = $(this);
        var $rootSelect = $this.parents(".form-multi-select");

        if (($rootSelect.hasClass("disabled"))) {
            $rootSelect.removeClass("open");
            $rootSelect.find(".select-dropdown").removeClass("open");
        } else {
            $rootSelect.addClass("open");
            $rootSelect.find(".select-dropdown").addClass("open");
        }

    });

    $(".form-multi-select").on("click", ".option", function (evt) {
        var e = evt || window.event;
        e.stopPropagation();

        var $this = $(this);
        var $rootSelect = $this.parents(".form-multi-select");
        var clickOption = $this.text().trim();

        var $createSpan = $("<span class='selected-option-item'>" + clickOption + "</span>");
        var $createPlaceHolder = $("<span class='placeholder'>请选择</span>");

        if (!($this.hasClass("disabled"))) {

            if ($this.hasClass("selected")) {
                $this.removeClass("selected");

                $rootSelect.find(".selected-option-item").each(function () {
                    var selectedText = $(this).text().trim();

                    if (clickOption == selectedText) {
                        $(this).remove();
                    }
                });

                if ($rootSelect.find(".selected-option-item").length < 1) {
                    $rootSelect.find(".selected-option").addClass("has-placeholder").append($createPlaceHolder);
                }
            } else {
                $this.addClass("selected");

                if ($rootSelect.find(".placeholder")) {
                    $rootSelect.find(".selected-option").removeClass("has-placeholder");
                    $rootSelect.find(".placeholder").remove();
                }
                $rootSelect.find(".selected-option").append($createSpan);

            }

        }

    });

    $(".form-multi-select").on("click", ".selected-clear", function () {
        var $this = $(this);
        var $rootSelect = $this.parents(".form-multi-select");
        var $createPlaceHolder = $("<span class='placeholder'>请选择</span>");

        $rootSelect.find(".selected-option").addClass("has-placeholder").html($createPlaceHolder);
        $rootSelect.find(".option").removeClass("selected");
        return false;
    });

    $(".form-multi-select").on("click", ".selected-option-item", function () {
        var $this = $(this);
        var $rootSelect = $this.parents(".form-multi-select");
        var $createPlaceHolder = $("<span class='placeholder'>请选择</span>");

        var clickOption = $this.text().trim();

        if (!($rootSelect.hasClass("disabled"))) {
            $this.remove();
            $rootSelect.find(".option").each(function () {
                var selectedText = $(this).text().trim();

                if (clickOption == selectedText) {
                    $(this).removeClass("selected");
                }
            });

            if ($rootSelect.find(".selected-option-item").length < 1) {
                $rootSelect.find(".selected-option").addClass("has-placeholder").append($createPlaceHolder);
            }
        }

        return false;
    });
}

function treeSelectFun() {

    //树选择控件-单项选择的选择器
    $(".form-select").on("click", ".select-choice", function (evt) {
        var e = evt || window.event;
        e.stopPropagation();

        var $this = $(this);
        var $rootSelect = $this.parents(".form-select");

        if (($rootSelect.hasClass("disabled"))) {
            $rootSelect.removeClass("open");
            $rootSelect.find(".select-dropdown").removeClass("open");
        } else {
            $rootSelect.addClass("open");
            $rootSelect.find(".select-dropdown").addClass("open");
        }

    });

    $(".form-select .form-tree").on("click", ".tree-text", function (evt) {
        var e = evt || window.event;
        e.stopPropagation();
        var $this = $(this);
        var $rootSelect = $this.parents(".form-select");
        var selectedOption = $this.text().trim();

        if (!($this.hasClass("disabled"))) {
            $this.parents(".select-dropdown").find(".tree-text").removeClass("selected");
            $this.addClass("selected");
            $rootSelect.find(".selected-option").removeClass("placeholder").text(selectedOption);
            $this.parents(".select-dropdown").removeClass("open");
            $rootSelect.removeClass("open");
        }

    });

    $(".form-select").on("click", ".selected-clear", function () {
        var $this = $(this);
        var $rootSelect = $this.parents(".form-select");

        $rootSelect.find(".selected-option").addClass("placeholder").text("请选择");
        $rootSelect.find(".option").removeClass("selected");
        return false;
    });

    //多项选择的选择器
    $(".form-multi-select").on("click", ".select-choice", function (evt) {
        var e = evt || window.event;
        e.stopPropagation();

        var $this = $(this);
        var $rootSelect = $this.parents(".form-multi-select");

        if (($rootSelect.hasClass("disabled"))) {
            $rootSelect.removeClass("open");
            $rootSelect.find(".select-dropdown").removeClass("open");
        } else {
            $rootSelect.addClass("open");
            $rootSelect.find(".select-dropdown").addClass("open");
        }

    });

    $(".form-multi-select .form-tree").on("click", ".tree-text", function (evt) {
        var e = evt || window.event;
        e.stopPropagation();

        var $this = $(this);
        var $rootSelect = $this.parents(".form-multi-select");
        var clickOption = $this.text().trim();

        var $createSpan = $("<span class='selected-option-item'>" + clickOption + "</span>");
        var $createPlaceHolder = $("<span class='placeholder'>请选择</span>");

        if (!($this.parents(".tree-item").hasClass("disabled"))) {

            if ($this.children(".checkbox").children(".input-checkbox").is(":checked")) {
                console.log($(this).text().trim());
                if ($rootSelect.find(".placeholder")) {
                    $rootSelect.find(".selected-option").removeClass("has-placeholder");
                    $rootSelect.find(".placeholder").remove();
                }
                $rootSelect.find(".selected-option").append($createSpan);
            } else {
                $rootSelect.find(".selected-option-item").each(function () {
                    var selectedText = $(this).text().trim();

                    if (clickOption == selectedText) {
                        $(this).remove();
                    }
                });

                if ($rootSelect.find(".selected-option-item").length < 1) {
                    $rootSelect.find(".selected-option").addClass("has-placeholder").append($createPlaceHolder);
                }
            }
        }

    });

    $(".form-multi-select").on("click", ".selected-clear", function () {
        var $this = $(this);
        var $rootSelect = $this.parents(".form-multi-select");
        var $createPlaceHolder = $("<span class='placeholder'>请选择</span>");

        $rootSelect.find(".selected-option").addClass("has-placeholder").html($createPlaceHolder);
        $rootSelect.find(".input-checkbox").attr("checked", false);
        return false;
    });

}

function cascaderFun() {
    var cityData = cityDataFun();
    //console.log(JSON.stringify(cityData));
    //console.log(cityData.length);

    $(".cascader-dropdown").each(function () {
        $(this).children().remove();
        updateData($(this), cityData);
    });


    $(".form-cascader").on("click", ".cascader-choice", function () {

        var $this = $(this);
        var $rootSelect = $this.parents(".form-cascader");
        var curSelected = $this.find(".selected-option").text().trim();

        if (!($rootSelect.hasClass("disabled"))) {

            var selectedArr = new Array();

            $rootSelect.hasClass("open") ? $rootSelect.removeClass("open") : $rootSelect.addClass("open");
            $rootSelect.find(".cascader-dropdown").slideToggle();

            if ($this.find(".selected-option").hasClass("has-placeholder")) {
                selectedArr = optionSelected($rootSelect.find(".cascader-dropdown"), cityData, selectedArr);
            } else {
                selectedArr = curSelected.split("/");
                selectedArr = optionSelected($rootSelect.find(".cascader-dropdown"), cityData, selectedArr);
            }

            if (selectedArr.length > 0) {
                $this.find(".selected-option").text(selectedArr.join("/"));
            }

        }

    });

    /*$(".form-cascader").on("click", ".option",function() {
     var $this = $(this);
     var $rootSelect = $this.parents(".form-cascader");
     var selectedOption = $this.text().trim();

     if ( !($this.hasClass("disabled"))) {
     $this.parents(".cascader-dropdown").find(".option").removeClass("selected");
     $this.addClass("selected");
     $rootSelect.find(".selected-option").removeClass("placeholder").text(selectedOption);
     $this.parents(".select-dropdown").slideUp();
     $rootSelect.removeClass("open");
     }

     });*/

    $(".form-cascader").on("click", ".selected-clear", function () {
        var $this = $(this);
        var $rootSelect = $this.parents(".form-select");

        $rootSelect.find(".selected-option").addClass("placeholder").text("请选择");
        $rootSelect.find(".option").removeClass("selected");
        return false;
    });

    function optionSelected(menuNode, data, arr) {

        var curMenu = menuNode.find(".cascader-menu").first();
        var selectedId;
        var text;
        var optionId;

        if (curMenu.find(".option").hasClass("selected")) {


        } else {
            curMenu.on("click", ".option", function () {

                $(this).parent().find(".option").removeClass("selected");
                $(this).addClass("selected");

                selectedId = $(this).attr("id");

                arr[0] = ($(this).text().trim());

                console.log("arr:" + arr);
                console.log(selectedId);

                var curData = getData(data, selectedId);
                console.log("false:" + JSON.stringify(curData.city));

                curMenu.next().remove();

                updateData(curMenu.parent(), curData.city);

                curMenu.next().on("click", ".option", function () {

                    curMenu.next().find(".option").removeClass("selected");
                    $(this).addClass("selected");

                    selectedId = $(this).attr("id");

                    arr[1] = ($(this).text().trim());

                    console.log("arr:" + arr);
                    console.log(selectedId);

                    var curData = getData(data, selectedId);
                    console.log("true:" + JSON.stringify(curData.city));
                    curMenu.next().next().remove();

                    updateData(curMenu.parent(), curData.city);
                });
            });
        }

        return arr;
    }

    function updateData(object, data) {
        var menuDom = $('<ul class="cascader-menu"></ul>');
        console.log("updateData:" + JSON.stringify(data));
        if (data.length > 0) {
            console.log("updateData1");
            for (var i = 0; i < data.length; i++) {
                //console.log(cityData[i].name);
                var optionDom = '<li class="option" id="' + data[i].code + '">' + data[i].name + '</li>';
                menuDom.append(optionDom);
                console.log("updateData-menuDom:" + optionDom);
            }

            object.append(menuDom);
        } else {

        }
    }

    function getData(data, code) {
        var curData = data;

        if (curData.length > 0) {
            for (var i = 0; i < curData.length; i++) {

                if (curData[i].code == code) {
                    return curData[i];
                } else {
                    getData(curData[i], code);
                }
            }
        } else {
            return -1;
        }

    }
}

function timePickerFun() {

    $(".time-picker-input").siblings(".qIcon").click(function (evt) {
        var e = evt || window.event;

        e.stopPropagation();
        $(this).siblings(".time-picker-input").focus();
    });

    $(".time-picker-input").focus(function (evt) {
        var e = evt || window.event;
        var $rootDom = $(this).parents(".time-picker");

        e.stopPropagation();

        if (!$(this).hasClass("disabled")) {

            if (!$rootDom.find(".time-picker-panel").hasClass("open")) {
                $rootDom.find(".time-picker-panel").addClass("open");

                timePickerPanelFun($rootDom.find(".time-picker-panel"));
            }
        }
    });

    $(".time-picker-panel").click(function (evt) {
        var e = evt || window.event;
        e.stopPropagation();
    });

    function timePickerPanelFun(obj) {
        var length = obj.find(".time-picker-select").length;
        var time = new Array(length);

        obj.find(".time-picker-select").each(function () {
            var selected = $(this).find(".selected").text().trim();
            var index = obj.find(".time-picker-select").index($(this));

            time[index] = selected;
        });

        obj.find(".time-picker-panel-input").val(time.join(":"));

    }

}

function datePickerFun() {

    if (!$(".calendar-picker-inner").hasClass("has-time")) {
        $(".calendar-picker-inner").find(".time-picker").remove();
    }

    $(".calendar-picker-input").siblings(".qIcon").click(function (evt) {
        var e = evt || window.event;

        e.stopPropagation();
        $(this).siblings(".calendar-picker-input").focus();
    });

    $(".calendar-picker-input").focus(function (evt) {
        var e = evt || window.event;
        var $rootDom = $(this).parents(".calendar-picker");

        e.stopPropagation();

        if (!$(this).hasClass("disabled")) {

            if (!$rootDom.find(".calendar-picker-panel").hasClass("open")) {
                $rootDom.find(".calendar-picker-panel").addClass("open");

            }
        }

    });

    $(".calendar-picker-panel").click(function (evt) {
        var e = evt || window.event;
        e.stopPropagation();

        $(".time-picker-panel").removeClass("open");
    });

}

function treeStructureFun() {
    var treeDemoBasic = $("#treeDemoBasic");
    var treeDemoNoCheckbox = $("#treeDemoNoCheckbox");
    var treeData = treeDataFun();

    if (treeData.length > 0) {
        var treeBranchObj = treeAddItem(treeData, true);
        //console.log("treeBranchObj:" + treeBranchObj.html());

        treeDemoBasic.append(treeBranchObj);

        var treeBranchNoCheckboxObj = treeAddItem(treeData, false);

        treeDemoNoCheckbox.append(treeBranchNoCheckboxObj);
    }

    $(".form-tree").click(function (evt) {
        var e = evt || window.event;
        e.stopPropagation();
    });

    $(".tree-branch").on("click", ".tree-switcher", function (evt) {
        var e = evt || window.event;
        var _this = $(this);

        e.stopPropagation();

        _this.hasClass("close") ? _this.removeClass("close") : _this.addClass("close");

        _this.siblings(".tree-branch").hasClass("hide") ? _this.siblings(".tree-branch").removeClass("hide") : _this.siblings(".tree-branch").addClass("hide");
    });

    /*$(".tree-item").on("change", ".input-checkbox", function(evt) {
     var e = evt || window.event;
     var _this = $(this);
     var siblingsChecked = true;

     e.stopPropagation();

     if (_this.is(":checked") ) {
     console.log("checked");
     _this.parent(".tree-item").find(".input-checkbox").attr("checked", "checked");

     } else {
     _this.parent().find(".input-checkbox").removeAttr("checked");
     }

     _this.parent().siblings(".tree-item").each(function () {

     if ($(this).find(".input-checkbox").not("checked")) {
     siblingsChecked = false;
     }
     });

     if (siblingsChecked) {
     _this.parents(".tree-branch").parent().children(".checkbox").children(".input-checkbox").attr("checked", "checked");
     }


     });*/

    $(".tree-item").each(function () {
        var _this = $(this);

        if (_this.hasClass("disabled")) {
            _this.find(".input-checkbox").attr("disabled", "disabled");
        }
    });


    function treeAddItem(data, hasCheckbox) {
        var treeObj = $('<ul class="tree-branch"></ul>');
        var treeItem;

        for (var i = 0; i < data.length; i++) {

            var hasChide = data[i].sublist.length > 0 ? "has-child" : "";

            if (hasCheckbox) {
                treeItem = $(
                    '<li class="tree-item ' + hasChide + ' ">' +
                    '<span class="tree-switcher"></span>' +
                    '<div class="tree-text">' +
                    '<label class="checkbox">' +
                    '<input class="input-checkbox" value="' + data[i].id + '" type="checkbox">' +
                    '<span class="style-checkbox"></span>' +
                    '</label>' +
                    '<span class="qIcon file"> </span>' +
                    '<span>' + data[i].name + '</span>' +
                    '</div>' +
                    '</li>');
            } else {
                treeItem = $(
                    '<li class="tree-item ' + hasChide + ' ">' +
                    '<span class="tree-switcher"></span>' +
                    '<div class="tree-text">' +
                    '<span class="qIcon file"> </span>' +
                    '<span>' + data[i].name + '</span>' +
                    '</div>' +
                    '</li>');
            }

            treeObj.append(treeItem);

            if (data[i].sublist.length > 0) {
                var treeChildObj = treeAddItem(data[i].sublist, hasCheckbox);
                //console.log("treeChildObj:" + $(treeChildObj).html());
                treeObj.children(".tree-item").eq(i).append($(treeChildObj));
            }


        }
        //console.log("treeObj-fun:" + treeObj.html());
        return treeObj;
    }
}

function popoverFun() {

    var demo1 = new ShowPopover($("#popoverDemo1"), $("#popoverPanel"));
    var demo2 = new ShowPopover($("#popoverDemo2"), $("#popoverPanel"));

    var demo3 = new ShowPopover($("#popoverDemo3"), $("#popoverPanel"));
    var demo4 = new ShowPopover($("#popoverDemo4"), $("#popoverPanel"));
    var demo5 = new ShowPopover($("#popoverDemo5"), $("#popoverPanel"));
    var demo6 = new ShowPopover($("#popoverDemo6"), $("#popoverPanel"));
    var demo7 = new ShowPopover($("#popoverDemo7"), $("#popoverPanel"));
    var demo8 = new ShowPopover($("#popoverDemo8"), $("#popoverPanel"));
    var demo9 = new ShowPopover($("#popoverDemo9"), $("#popoverPanel"));
    var demo10 = new ShowPopover($("#popoverDemo10"), $("#popoverPanel"));
    var demo11 = new ShowPopover($("#popoverDemo11"), $("#popoverPanel"));
    var demo12 = new ShowPopover($("#popoverDemo12"), $("#popoverPanel"));
    var demo13 = new ShowPopover($("#popoverDemo13"), $("#popoverPanel"));
    var demo14 = new ShowPopover($("#popoverDemo14"), $("#popoverPanel"));

    $("#popoverPanel").click(function(evt) {
       var e = evt || window.event;
        e.stopPropagation();
    });

    $("#popoverPanel .btn").click(function(evt) {
        var e = evt || window.event;
        e.stopPropagation();

        $("#popoverPanel").attr("class", "popover-panel");
    });
}

function ShowPopover(popObj, popPanelObj) {
    var _this = this;
    var popObj = popObj;
    var popPanelObj = popPanelObj;
    //var pos = pos;
    var operation = popPanelObj.attr("data-event") || null;

    popPanelObj.width = popPanelObj.width();
    popPanelObj.height = popPanelObj.height();

    popObj.width = popObj.width();
    popObj.height = popObj.height();
    popObj.top = getPosition(popObj[0]).top;
    popObj.left = getPosition(popObj[0]).left;

    //console.log("popObj.left:" + popObj.left);

    if (operation == 'click') {
        popObj.click(function (evt) {
            var e = evt || window.event;
            e.stopPropagation();

            var pos = $(this).attr("data-direction");
            //console.log("pos位置:" + pos);
            popPanelObj.attr("class", "popover-panel");
            popPanelObj.addClass("open");
            popPanelObj.addClass("popover-" + pos);

            switch (pos) {
                case "top":
                    popPanelObj.top = _this.top(popObj, popPanelObj).top;
                    popPanelObj.left = _this.top(popObj, popPanelObj).left;
                    break;
                case "topLeft":
                    popPanelObj.top = _this.topLeft(popObj, popPanelObj).top;
                    popPanelObj.left = _this.topLeft(popObj, popPanelObj).left;
                    break;
                case "topRight":
                    popPanelObj.top = _this.topRight(popObj, popPanelObj).top;
                    popPanelObj.left = _this.topRight(popObj, popPanelObj).left;
                    break;
                case "bottom":
                    popPanelObj.top = _this.bottom(popObj, popPanelObj).top;
                    popPanelObj.left = _this.bottom(popObj, popPanelObj).left;
                    break;
                case "bottomLeft":
                    popPanelObj.top = _this.bottomLeft(popObj, popPanelObj).top;
                    popPanelObj.left = _this.bottomLeft(popObj, popPanelObj).left;
                    break;
                case "bottomRight":
                    popPanelObj.top = _this.bottomRight(popObj, popPanelObj).top;
                    popPanelObj.left = _this.bottomRight(popObj, popPanelObj).left;
                    break;
                case "leftTop":
                    popPanelObj.top = _this.leftTop(popObj, popPanelObj).top;
                    popPanelObj.left = _this.leftTop(popObj, popPanelObj).left;
                    break;
                case "left":
                    popPanelObj.top = _this.left(popObj, popPanelObj).top;
                    popPanelObj.left = _this.left(popObj, popPanelObj).left;
                    break;
                case "leftBottom":
                    popPanelObj.top = _this.leftBottom(popObj, popPanelObj).top;
                    popPanelObj.left = _this.leftBottom(popObj, popPanelObj).left;
                    break;
                case "rightTop":
                    popPanelObj.top = _this.rightTop(popObj, popPanelObj).top;
                    popPanelObj.left = _this.rightTop(popObj, popPanelObj).left;
                    break;
                case "right":
                    popPanelObj.top = _this.right(popObj, popPanelObj).top;
                    popPanelObj.left = _this.right(popObj, popPanelObj).left;
                    break;
                case "rightBottom":
                    popPanelObj.top = _this.rightBottom(popObj, popPanelObj).top;
                    popPanelObj.left = _this.rightBottom(popObj, popPanelObj).left;
                    break;
            }

            popPanelObj.css({
                "left": popPanelObj.left,
                "top": popPanelObj.top
            });
        });

    } else {

        popObj.mouseenter(function () {
            var pos = $(this).attr("data-direction");
            //console.log("pos位置:" + pos);
            popPanelObj.addClass("open");
            popPanelObj.addClass("popover-" + pos);

            switch (pos) {
                case "top":
                    popPanelObj.top = _this.top(popObj, popPanelObj).top;
                    popPanelObj.left = _this.top(popObj, popPanelObj).left;
                    break;
                case "topLeft":
                    popPanelObj.top = _this.topLeft(popObj, popPanelObj).top;
                    popPanelObj.left = _this.topLeft(popObj, popPanelObj).left;
                    break;
                case "topRight":
                    popPanelObj.top = _this.topRight(popObj, popPanelObj).top;
                    popPanelObj.left = _this.topRight(popObj, popPanelObj).left;
                    break;
                case "bottom":
                    popPanelObj.top = _this.bottom(popObj, popPanelObj).top;
                    popPanelObj.left = _this.bottom(popObj, popPanelObj).left;
                    break;
                case "bottomLeft":
                    popPanelObj.top = _this.bottomLeft(popObj, popPanelObj).top;
                    popPanelObj.left = _this.bottomLeft(popObj, popPanelObj).left;
                    break;
                case "bottomRight":
                    popPanelObj.top = _this.bottomRight(popObj, popPanelObj).top;
                    popPanelObj.left = _this.bottomRight(popObj, popPanelObj).left;
                    break;
                case "leftTop":
                    popPanelObj.top = _this.leftTop(popObj, popPanelObj).top;
                    popPanelObj.left = _this.leftTop(popObj, popPanelObj).left;
                    break;
                case "left":
                    popPanelObj.top = _this.left(popObj, popPanelObj).top;
                    popPanelObj.left = _this.left(popObj, popPanelObj).left;
                    break;
                case "leftBottom":
                    popPanelObj.top = _this.leftBottom(popObj, popPanelObj).top;
                    popPanelObj.left = _this.leftBottom(popObj, popPanelObj).left;
                    break;
                case "rightTop":
                    popPanelObj.top = _this.rightTop(popObj, popPanelObj).top;
                    popPanelObj.left = _this.rightTop(popObj, popPanelObj).left;
                    break;
                case "right":
                    popPanelObj.top = _this.right(popObj, popPanelObj).top;
                    popPanelObj.left = _this.right(popObj, popPanelObj).left;
                    break;
                case "rightBottom":
                    popPanelObj.top = _this.rightBottom(popObj, popPanelObj).top;
                    popPanelObj.left = _this.rightBottom(popObj, popPanelObj).left;
                    break;
            }

            popPanelObj.css({
                "left": popPanelObj.left,
                "top": popPanelObj.top
            });
        }).mouseleave(function () {
            var pos = $(this).attr("data-direction");

            popPanelObj.removeClass("open");
            popPanelObj.removeClass("popover-" + pos);
        });
    }


}

ShowPopover.prototype = {

    top: function (popObj, popPanelObj) {

        var left = popObj.left + (popObj.width / 2) - (popPanelObj.width / 2);
        var top = popObj.top - popPanelObj.height - 4;

        return {"left": left, "top": top};
    },

    topLeft: function (popObj, popPanelObj) {

        var left = popObj.left;
        var top = popObj.top - popPanelObj.height - 4;

        return {"left": left, "top": top};
    },

    topRight: function (popObj, popPanelObj) {

        var left = popObj.left - (popPanelObj.width - popObj.width);
        var top = popObj.top - popPanelObj.height - 4;

        return {"left": left, "top": top};
    },

    bottom: function (popObj, popPanelObj) {

        var left = popObj.left + (popObj.width / 2) - (popPanelObj.width / 2);
        var top = popObj.top + popObj.height + 4;

        return {"left": left, "top": top};
    },

    bottomLeft: function (popObj, popPanelObj) {

        var left = popObj.left;
        var top = popObj.top + popObj.height + 4;

        return {"left": left, "top": top};
    },

    bottomRight: function (popObj, popPanelObj) {

        var left = popObj.left - (popPanelObj.width - popObj.width);
        var top = popObj.top + popObj.height + 4;

        return {"left": left, "top": top};
    },

    left: function (popObj, popPanelObj) {

        var left = popObj.left - popPanelObj.width - 4;
        var top = popObj.top + (popObj.height / 2) - (popPanelObj.height / 2);

        return {"left": left, "top": top};
    },

    leftTop: function (popObj, popPanelObj) {

        var left = popObj.left - popPanelObj.width - 4;
        var top = popObj.top;

        return {"left": left, "top": top};
    },

    leftBottom: function (popObj, popPanelObj) {

        var left = popObj.left - popPanelObj.width - 4;
        var top = popObj.top + popObj.height - popPanelObj.height;

        return {"left": left, "top": top};
    },

    right: function (popObj, popPanelObj) {

        var left = popObj.left + popObj.width + 4;
        var top = popObj.top + (popObj.height / 2) - (popPanelObj.height / 2);

        return {"left": left, "top": top};
    },

    rightTop: function (popObj, popPanelObj) {

        var left = popObj.left + popObj.width + 4;
        var top = popObj.top;

        return {"left": left, "top": top};
    },

    rightBottom: function (popObj, popPanelObj) {

        var left = popObj.left + popObj.width + 4;
        var top = popObj.top + popObj.height - popPanelObj.height;

        return {"left": left, "top": top};
    }

}

function getPosition(node) {

    if (node) {
        var left = node.offsetLeft;
        var top = node.offsetTop;
        var current = node.offsetParent;

        while (current != null) {
            left += current.offsetLeft;
            top += current.offsetTop;
            current = current.offsetParent;
        }

        return {"left": left, "top": top};
    } else {
        return 0;
    }


}

function progressFun() {


    var progressLine = $("#progressLine");
    var step = 10;

    $("#progressPlus").click(function () {
        startMove(progressLine, step);
    });

    $("#progressMinus").click(function () {
        startMove(progressLine, -step);
    });

    function startMove(obj, step) {

        if (obj) {
            var objBg = obj.find(".progress-line-bg");
            var objText = obj.find(".progress-line-text");
            var curValue = parseInt(objText.text().trim());
            var i = curValue;

            clearInterval(obj.timer);

            obj.timer = setInterval(function () {

                if (step > 0) {
                    i++;
                    if ((i > (curValue + step)) || i > 100) {
                        clearInterval(obj.timer);
                    } else {
                        objBg.width(i + '%');
                        objText.text(i + '%');
                    }

                } else if (step < 0) {
                    i--;
                    if ((i < (curValue + step)) || i < 0) {
                        clearInterval(obj.timer);
                    } else {
                        objBg.width(i + '%');
                        objText.text(i + '%');
                    }
                }


            }, 10);
        }

    }

}

function paginationFun() {
    var paginData = {
        "current": 0,
        "defaultCurrent": 1,
        "total": 5,
        "defaultPageSize": 10,
        "pageSizeOptions": ['10', '20', '30', '40']
    };

    var paginationSimple = new Pagination($("#paginationSimple"), paginData);

    function Pagination(paginationSimple, data) {
        var paginDom = paginationSimple;
        var itemSize = data.total;
        var current = data.current;

        if (current == 0) {
            paginDom.find(".pagination-prev").addClass("pagination-disabled");
        } else if (current == (itemSize - 1)) {
            paginDom.find(".pagination-next").addClass("pagination-disabled");
        } else {
            paginDom.find(".pagination-prev").removeClass("pagination-disabled");
            paginDom.find(".pagination-next").removeClass("pagination-disabled");
        }

        paginDom.on("click", ".pagination-next", function (evt) {
            var _this = $(this);
            var e = evt || window.event;
            e.stopPropagation();

            var curItem = paginDom.find(".current");
            var curIndex = paginDom.find(".pagination-item").index(curItem);
            curIndex++;

            if (curIndex < itemSize - 1) {
                paginDom.find(".pagination-item").removeClass("current");
                paginDom.find(".pagination-item").eq(curIndex).addClass("current");
                paginDom.find(".pagination-prev").removeClass("pagination-disabled");
            } else if (curIndex == itemSize - 1) {
                paginDom.find(".pagination-item").removeClass("current");
                paginDom.find(".pagination-item").eq(curIndex).addClass("current");
                _this.addClass("pagination-disabled");
            }

        });

        paginDom.on("click", ".pagination-prev", function (evt) {
            var _this = $(this);
            var e = evt || window.event;
            e.stopPropagation();

            var curItem = paginDom.find(".current");
            var curIndex = paginDom.find(".pagination-item").index(curItem);
            curIndex--;

            if (curIndex > 0) {
                paginDom.find(".pagination-item").removeClass("current");
                paginDom.find(".pagination-item").eq(curIndex).addClass("current");
                paginDom.find(".pagination-next").removeClass("pagination-disabled");
            } else if (curIndex == 0) {
                paginDom.find(".pagination-item").removeClass("current");
                paginDom.find(".pagination-item").eq(curIndex).addClass("current");
                _this.addClass("pagination-disabled");
            }

        });
    }

}

function tableFun() {

    $(".sorting").click(function (evt) {
        var e = evt || window.event;
        e.stopPropagation();

        var className = $(this).attr("class");

        if (className == "sorting") {

            $(this).attr("class", "sorting desc");

        } else if (className == "sorting desc") {

            $(this).attr("class", "sorting asc");

        } else if (className == "sorting asc") {

            $(this).attr("class", "sorting");
        }

    });

}

function modalFun() {
    $("#btnModal01").click(function () {
        showModal01();
    });

    function showModal01() {
        art.dialog({
            title: '提示信息',
            content: '您的信息已经提交,请耐心等待审核结果!（2秒自动消失）',
            quickClose: true,
            time: 2
        });
    }

    $("#btnModal02").click(function () {
        showModal02();
    });

    function showModal02() {
        art.dialog({
            title: '提示',
            width: 280,
            content: '记录删除后,将无法恢复.<br>您确定要删除该条记录吗!',
            icon: 'error',
            lock: true,
            quickClose: true,
            okValue: '确定',
            ok: function () {
                this.title('提交中...');
                return false;
            },
            cancelValue: '取消',
            cancel: function () {
            }
        });
    }

    $("#btnModal03").click(function () {
        showModal03();
    });

    function showModal03() {
        art.dialog({
            title: "修改用户信息",
            width: 480,
            content: '<div class="form-block">' +
            '<label class="col-6">客户号:</label>' +
            '<span class="text">A148899</span>' +
            '</div>' +
            '<div class="form-block">' +
            '<label class="col-6">用户名:</label>' +
            '<input type="text" placeholder="请输入用户名" value="千米忠实粉丝">' +
            '<span class="error">用户名有误</span>' +
            '</div>' +
            '<div class="form-block">' +
            '<label class="col-6">昵称:</label>' +
            '<div class="col-18">'+
            '<input type="text" placeholder="请输入昵称,帮忙您更容易记忆">'+
            '<p class="error-block">昵称不可以/开头,请输入合法的个性名称.</p>'+
            '</div>' +
            '</div>' +
            '<div class="form-block">' +
            '<label class="col-6">您的性别:</label>' +
            '<label class="checkbox-inline">' +
            '<span class="checkbox">' +
            '<input class="input-checkbox" type="checkbox" checked>' +
            '<span class="style-checkbox"></span>' +
            '</span>' +
            '<span class="label-right">男</span>' +
            '</label>' +
            '<label class="checkbox-inline">' +
            '<span class="checkbox">' +
            '<input class="input-checkbox" type="checkbox" >' +
            '<span class="style-checkbox"></span>' +
            '</span>' +
            '<span class="label-right">女</span>' +
            '</label>' +
            '</div>' +
            '<div class="form-block">' +
            '<label class="col-6"></label>' +
            '<button class="btn">登录</button>' +
            '<button class="btn btn-gray">返回</button>' +
            '</div>' ,
            lock: true,
            quickClose: true
        });
    }

    $("#btnModal04").click(function () {

        artDialog.notice = function (options) {
            var opt = options || {},
                api, aConfig, hide, wrap, top,
                duration = 800;

            var config = {
                id: 'Notice',
                left: '100%',
                top: '100%',
                fixed: true,
                drag: false,
                resize: false,
                follow: null,
                lock: false,
                init: function (here) {
                    api = this;
                    aConfig = api.config;
                    wrap = api.DOM.wrap;
                    top = parseInt(wrap[0].style.top);
                    hide = top + wrap[0].offsetHeight;

                    wrap.css("top", hide + "px")
                        .animate({
                            top: top + "px"
                        }, duration, function () {
                            opt.init && opt.init.call(api,here);
                        });
                },
                close: function (here) {
                    wrap.animate({
                        top: hide + "px"
                    }, duration, function () {
                        opt.close && opt.close.call(this, here);
                        aConfig.close = $.noop;
                        api.close();
                    });
                    return false;
                }
            };

            for(var i in opt) {
                if (config[i] === undefined) config[i] = opt[i];
            }

            return artDialog(config);
        };

        art.dialog.notice({
            title: "系统公告",
            width: 220,
            content: '恭喜您,您已经成为千米的至尊客户!',
            icon: 'face-smile',
            time: 5
        });

    });

}

function fullcalendarFun() {

    $(".fullcalendar").on("click", ".radio-tabs", function (evt) {
        var e = evt || window.event;
        e.stopPropagation();

        var _this = $(this);
        var thisValue = _this.text().trim();
        var rootDom = _this.parents(".fullcalendar");

        if (thisValue == "月") {
            rootDom.find(".fullcalendar-month-table").addClass("hide");
            rootDom.find(".fullcalendar-table").removeClass("hide");
        } else if(thisValue == "年") {
            rootDom.find(".fullcalendar-table").addClass("hide");
            rootDom.find(".fullcalendar-month-table").removeClass("hide");
        }
    });
}

function menuFun() {

    $("#menuInlineDemo1").on("click", ".menu-inline-item", function(evt) {
        var e = evt || window.event;
        e.stopPropagation();
        var _this = $(this);
        _this.hasClass("menu-open") ? _this.removeClass("menu-open") : _this.addClass("menu-open");
    });


    $("#menuInlineDemo2 > .menu-inline-item").click(function(evt) {
        var e = evt || window.event;
        e.stopPropagation();

        var _this = $(this);
        _this.siblings(".menu-inline-item").removeClass("menu-open");
        _this.hasClass("menu-open") ? _this.removeClass("menu-open") : _this.addClass("menu-open");
    });

    $("#menuInlineDemo2 > .menu-inline-item .menu-inline-item").click(function(evt) {
        var e = evt || window.event;
        e.stopPropagation();

        var _this = $(this);
        _this.hasClass("menu-open") ? _this.removeClass("menu-open") : _this.addClass("menu-open");
    });


}

function cityDataFun() {
    var cityData =
        [
            {
                "code": 110000,
                "name": "北京",
                "city": [
                    {
                        "code": 110100,
                        "name": "北京",
                        "city": [
                            {
                                "code": 110101,
                                "name": "东城区",
                                "city": []
                            },
                            {
                                "code": 110102,
                                "name": "西城区",
                                "city": []
                            },
                            {
                                "code": 110103,
                                "name": "崇文区",
                                "city": []
                            },
                            {
                                "code": 110104,
                                "name": "宣武区",
                                "city": []
                            },
                            {
                                "code": 110105,
                                "name": "朝阳区",
                                "city": []
                            }
                        ]
                    }
                ]
            },
            {
                "code": 320000,
                "name": "江苏",
                "city": [
                    {
                        "code": 320100,
                        "name": "南京",
                        "city": [
                            {
                                "code": 320101,
                                "name": "玄武区",
                                "city": []
                            },
                            {
                                "code": 320102,
                                "name": "白下区",
                                "city": []
                            },
                            {
                                "code": 320103,
                                "name": "秦淮区",
                                "city": []
                            },
                            {
                                "code": 320104,
                                "name": "建邺区",
                                "city": []
                            },
                            {
                                "code": 320105,
                                "name": "鼓楼区",
                                "city": []
                            },
                            {
                                "code": 320106,
                                "name": "下关区",
                                "city": []
                            },
                            {
                                "code": 320107,
                                "name": "栖霞区",
                                "city": []
                            }
                        ]
                    },
                    {
                        "code": 320200,
                        "name": "苏州",
                        "city": [
                            {
                                "code": 320201,
                                "name": "金阊区",
                                "city": []
                            },
                            {
                                "code": 320202,
                                "name": "平江区",
                                "city": []
                            },
                            {
                                "code": 320203,
                                "name": "沧浪区",
                                "city": []
                            },
                            {
                                "code": 320204,
                                "name": "虎丘区",
                                "city": []
                            },
                            {
                                "code": 320205,
                                "name": "吴中区",
                                "city": []
                            },
                            {
                                "code": 320206,
                                "name": "相城区",
                                "city": []
                            },
                            {
                                "code": 320207,
                                "name": "常熟市",
                                "city": []
                            }
                        ]
                    }
                ]
            },
            {
                "code": 330000,
                "name": "浙江",
                "city": [
                    {
                        "code": 330100,
                        "name": "杭州",
                        "city": [
                            {
                                "code": 330101,
                                "name": "拱墅区",
                                "city": []
                            },
                            {
                                "code": 330102,
                                "name": "西湖区",
                                "city": []
                            },
                            {
                                "code": 330103,
                                "name": "上城区",
                                "city": []
                            },
                            {
                                "code": 330104,
                                "name": "下城区",
                                "city": []
                            },
                            {
                                "code": 330105,
                                "name": "江干区",
                                "city": []
                            }
                        ]
                    },
                    {
                        "code": 330200,
                        "name": "宁波",
                        "city": [
                            {
                                "code": 330201,
                                "name": "北仑区",
                                "city": []
                            },
                            {
                                "code": 330201,
                                "name": "海曙区",
                                "city": []
                            },
                            {
                                "code": 330201,
                                "name": "江东区",
                                "city": []
                            },
                            {
                                "code": 330201,
                                "name": "江北区",
                                "city": []
                            },
                            {
                                "code": 330201,
                                "name": "镇海区",
                                "city": []
                            },
                            {
                                "code": 330201,
                                "name": "鄞州区",
                                "city": []
                            },
                            {
                                "code": 330201,
                                "name": "余姚市",
                                "city": []
                            }
                        ]
                    }
                ]
            }
        ]

    return cityData;
}

function treeDataFun() {
    var treeData =
        [
            {
                "breadcrumb": "",
                "className": "",
                "currentId": null,
                "currentName": "",
                "empIsshow": null,
                "expandId": null,
                "extClass": "",
                "id": 4539,
                "level": 0,
                "mark": "",
                "method": "get",
                "name": "产品与服务",
                "parentId": null,
                "pgroup": "common",
                "pid": 0,
                "roleid": null,
                "sort": 0,
                "state": 1,
                "sublist": [
                    {
                        "breadcrumb": "",
                        "className": "laidinghuo",
                        "currentId": null,
                        "currentName": "",
                        "empIsshow": null,
                        "expandId": null,
                        "extClass": "",
                        "id": 4841,
                        "level": 1,
                        "mark": "",
                        "method": "get",
                        "name": "云订货",
                        "parentId": null,
                        "pgroup": "b2b1",
                        "pid": 4539,
                        "roleid": null,
                        "sort": 10,
                        "state": 1,
                        "sublist": [
                            {
                                "breadcrumb": "0",
                                "className": "",
                                "currentId": null,
                                "currentName": "",
                                "empIsshow": null,
                                "expandId": null,
                                "extClass": "",
                                "id": 5202,
                                "level": 2,
                                "mark": "",
                                "method": "get",
                                "name": "首页",
                                "parentId": null,
                                "pgroup": "common",
                                "pid": 4841,
                                "roleid": null,
                                "sort": 0,
                                "state": 1,
                                "sublist": [],
                                "sysflag": "0033",
                                "type": "2",
                                "url": "http://ldh.qianmi.com/home",
                                "value": ""
                            },
                            {
                                "breadcrumb": "",
                                "className": "",
                                "currentId": null,
                                "currentName": "",
                                "empIsshow": null,
                                "expandId": null,
                                "extClass": "",
                                "id": 4842,
                                "level": 2,
                                "mark": "",
                                "method": "get",
                                "name": "交易",
                                "parentId": null,
                                "pgroup": "common",
                                "pid": 4841,
                                "roleid": null,
                                "sort": 10,
                                "state": 1,
                                "sublist": [
                                    {
                                        "breadcrumb": "",
                                        "className": "",
                                        "currentId": null,
                                        "currentName": "",
                                        "empIsshow": null,
                                        "expandId": null,
                                        "extClass": "",
                                        "id": 5301,
                                        "level": 2,
                                        "mark": "",
                                        "method": "get",
                                        "name": "交易查询",
                                        "parentId": null,
                                        "pgroup": "common",
                                        "pid": 4841,
                                        "roleid": null,
                                        "sort": 10,
                                        "state": 1,
                                        "sublist": [],
                                        "sysflag": "0033",
                                        "type": "1",
                                        "url": "http://ldh.qianmi.com/jiaoyiguanlib",
                                        "value": ""
                                    },
                                    {
                                        "breadcrumb": "",
                                        "className": "",
                                        "currentId": null,
                                        "currentName": "",
                                        "empIsshow": null,
                                        "expandId": null,
                                        "extClass": "",
                                        "id": 5302,
                                        "level": 2,
                                        "mark": "",
                                        "method": "get",
                                        "name": "交易记录",
                                        "parentId": null,
                                        "pgroup": "common",
                                        "pid": 4841,
                                        "roleid": null,
                                        "sort": 10,
                                        "state": 1,
                                        "sublist": [],
                                        "sysflag": "0033",
                                        "type": "1",
                                        "url": "http://ldh.qianmi.com/jiaoyiguanlib",
                                        "value": ""
                                    }
                                ],
                                "sysflag": "0033",
                                "type": "1",
                                "url": "http://ldh.qianmi.com/jiaoyiguanlib",
                                "value": ""
                            },
                            {
                                "breadcrumb": "",
                                "className": "",
                                "currentId": null,
                                "currentName": "",
                                "empIsshow": null,
                                "expandId": null,
                                "extClass": "",
                                "id": 4870,
                                "level": 2,
                                "mark": "",
                                "method": "get",
                                "name": "商品",
                                "parentId": null,
                                "pgroup": "common",
                                "pid": 4841,
                                "roleid": null,
                                "sort": 20,
                                "state": 1,
                                "sublist": [],
                                "sysflag": "0033",
                                "type": "1",
                                "url": "http://ldh.qianmi.com/shangpinguanlib",
                                "value": ""
                            },
                            {
                                "breadcrumb": "",
                                "className": "",
                                "currentId": null,
                                "currentName": "",
                                "empIsshow": null,
                                "expandId": null,
                                "extClass": "",
                                "id": 4883,
                                "level": 2,
                                "mark": "",
                                "method": "get",
                                "name": "营销",
                                "parentId": null,
                                "pgroup": "common",
                                "pid": 4841,
                                "roleid": null,
                                "sort": 30,
                                "state": 1,
                                "sublist": [],
                                "sysflag": "0033",
                                "type": "1",
                                "url": "http://ldh.qianmi.com/yingxiaoguanlib",
                                "value": ""
                            }
                        ],
                        "sysflag": "0031",
                        "type": "2",
                        "url": "http://ldh.qianmi.com/index",
                        "value": "b2b"
                    },
                    {
                        "breadcrumb": "",
                        "className": "qmshangcheng",
                        "currentId": null,
                        "currentName": "",
                        "empIsshow": null,
                        "expandId": null,
                        "extClass": "",
                        "id": 4723,
                        "level": 1,
                        "mark": "",
                        "method": "get",
                        "name": "云商城",
                        "parentId": null,
                        "pgroup": "b2c1",
                        "pid": 4539,
                        "roleid": null,
                        "sort": 20,
                        "state": 1,
                        "sublist": [
                            {
                                "breadcrumb": "0",
                                "className": "",
                                "currentId": null,
                                "currentName": "",
                                "empIsshow": null,
                                "expandId": null,
                                "extClass": "",
                                "id": 5175,
                                "level": 2,
                                "mark": "",
                                "method": "get",
                                "name": "首页",
                                "parentId": null,
                                "pgroup": "common",
                                "pid": 4723,
                                "roleid": null,
                                "sort": 0,
                                "state": 1,
                                "sublist": [],
                                "sysflag": "0032",
                                "type": "2",
                                "url": "http://kkd.qianmi.com/home",
                                "value": ""
                            },
                            {
                                "breadcrumb": "",
                                "className": "",
                                "currentId": null,
                                "currentName": "",
                                "empIsshow": null,
                                "expandId": null,
                                "extClass": "",
                                "id": 4724,
                                "level": 2,
                                "mark": "",
                                "method": "get",
                                "name": "交易",
                                "parentId": null,
                                "pgroup": "common",
                                "pid": 4723,
                                "roleid": null,
                                "sort": 10,
                                "state": 1,
                                "sublist": [],
                                "sysflag": "0032",
                                "type": "1",
                                "url": "http://kkd.qianmi.com/jiaoyiguanlic",
                                "value": ""
                            },
                            {
                                "breadcrumb": "",
                                "className": "",
                                "currentId": null,
                                "currentName": "",
                                "empIsshow": null,
                                "expandId": null,
                                "extClass": "",
                                "id": 4748,
                                "level": 2,
                                "mark": "",
                                "method": "get",
                                "name": "商品",
                                "parentId": null,
                                "pgroup": "common",
                                "pid": 4723,
                                "roleid": null,
                                "sort": 20,
                                "state": 1,
                                "sublist": [],
                                "sysflag": "0032",
                                "type": "1",
                                "url": "http://kkd.qianmi.com/shangpinguanlic",
                                "value": ""
                            },
                            {
                                "breadcrumb": "",
                                "className": "",
                                "currentId": null,
                                "currentName": "",
                                "empIsshow": null,
                                "expandId": null,
                                "extClass": "",
                                "id": 4763,
                                "level": 2,
                                "mark": "",
                                "method": "get",
                                "name": "营销",
                                "parentId": null,
                                "pgroup": "common",
                                "pid": 4723,
                                "roleid": null,
                                "sort": 30,
                                "state": 1,
                                "sublist": [],
                                "sysflag": "0032",
                                "type": "1",
                                "url": "http://kkd.qianmi.com/yingxiaoguanlic",
                                "value": ""
                            },
                            {
                                "breadcrumb": "",
                                "className": "",
                                "currentId": null,
                                "currentName": "",
                                "empIsshow": null,
                                "expandId": null,
                                "extClass": "",
                                "id": 4835,
                                "level": 2,
                                "mark": "",
                                "method": "get",
                                "name": "设置",
                                "parentId": null,
                                "pgroup": "common",
                                "pid": 4723,
                                "roleid": null,
                                "sort": 70,
                                "state": 1,
                                "sublist": [],
                                "sysflag": "0032",
                                "type": "1",
                                "url": "http://kkd.qianmi.com/yingyongshezhic",
                                "value": ""
                            }
                        ],
                        "sysflag": "0031",
                        "type": "1",
                        "url": "http://kkd.qianmi.com/index",
                        "value": "b2c"
                    },
                    {
                        "breadcrumb": "",
                        "className": "suishoumai",
                        "currentId": null,
                        "currentName": "",
                        "empIsshow": null,
                        "expandId": null,
                        "extClass": "",
                        "id": 5019,
                        "level": 1,
                        "mark": "",
                        "method": "get",
                        "name": "云小店",
                        "parentId": null,
                        "pgroup": "ssm1",
                        "pid": 4539,
                        "roleid": null,
                        "sort": 30,
                        "state": 1,
                        "sublist": [],
                        "sysflag": "0031",
                        "type": "2",
                        "url": "http://yxd.qianmi.com/#/",
                        "value": "ssm"
                    }
                ],
                "sysflag": "0031",
                "type": "1",
                "url": "",
                "value": "products"
            },
            {
                "breadcrumb": "",
                "className": "",
                "currentId": null,
                "currentName": "",
                "empIsshow": null,
                "expandId": null,
                "extClass": "",
                "id": 4545,
                "level": 0,
                "mark": "",
                "method": "get",
                "name": "管理中心",
                "parentId": null,
                "pgroup": "common",
                "pid": 0,
                "roleid": null,
                "sort": 1,
                "state": 1,
                "sublist": [
                    {
                        "breadcrumb": "",
                        "className": "gouwu",
                        "currentId": null,
                        "currentName": "",
                        "empIsshow": null,
                        "expandId": null,
                        "extClass": "",
                        "id": 4546,
                        "level": 1,
                        "mark": "",
                        "method": "get",
                        "name": "商品",
                        "parentId": null,
                        "pgroup": "common",
                        "pid": 4545,
                        "roleid": null,
                        "sort": 10,
                        "state": 1,
                        "sublist": [],
                        "sysflag": "0031",
                        "type": "1",
                        "url": "http://app.qianmi.com/wares",
                        "value": ""
                    },
                    {
                        "breadcrumb": "",
                        "className": "shangjiaqun",
                        "currentId": null,
                        "currentName": "",
                        "empIsshow": null,
                        "expandId": null,
                        "extClass": "",
                        "id": 4595,
                        "level": 1,
                        "mark": "",
                        "method": "get",
                        "name": "会员",
                        "parentId": null,
                        "pgroup": "common",
                        "pid": 4545,
                        "roleid": null,
                        "sort": 20,
                        "state": 1,
                        "sublist": [],
                        "sysflag": "0031",
                        "type": "2",
                        "url": "http://crm.qianmi.com/index",
                        "value": ""
                    },
                    {
                        "breadcrumb": "",
                        "className": "shezhi",
                        "currentId": null,
                        "currentName": "",
                        "empIsshow": null,
                        "expandId": null,
                        "extClass": "",
                        "id": 4701,
                        "level": 1,
                        "mark": "",
                        "method": "get",
                        "name": "系统",
                        "parentId": null,
                        "pgroup": "common",
                        "pid": 4545,
                        "roleid": null,
                        "sort": 70,
                        "state": 1,
                        "sublist": [],
                        "sysflag": "0031",
                        "type": "1",
                        "url": "http://app.qianmi.com/setting",
                        "value": ""
                    }
                ],
                "sysflag": "0031",
                "type": "1",
                "url": "",
                "value": "management"
            }
        ]


    return treeData;
}