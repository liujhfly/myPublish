

$(function() {
    //上传文件\图片
    uploadFun ();
    //全局提示
    messageFun ();
    //折叠面板
    collapseFun ();
    //下拉菜单
    dropdownFun ();

});

function uploadFun() {

    //点击按钮弹出上传文件窗口
    $(".form-upload").on("click", ".btn",function() {
        $(this).parent().children("input").click();
    });

}

function messageFun() {

    //显示普通提示
    $("#btn-info").on("click",function() {
        $(".message-custom-content").attr("class", "message-custom-content message-info");
        $(".message-custom-content .qIcon").attr("class", "qIcon closeCircle");//普通提示图标
        $(".message-custom-content span").text("这是一条普通的提醒");
        $(".message").show().delay(1500).hide(0);
    });

    //显示成功提示
    $("#btn-success").on("click",function() {
        $(".message-custom-content").attr("class", "message-custom-content message-success");
        $(".message-custom-content .qIcon").attr("class", "qIcon closeCircle");//成功提示图标
        $(".message-custom-content span").text("这是一条成功提示");
        $(".message").show().delay(1500).hide(0);
    });

    //显示报错提示
    $("#btn-error").on("click",function() {
        $(".message-custom-content").attr("class", "message-custom-content message-error");
        $(".message-custom-content .qIcon").attr("class", "qIcon closeCircle");//报错提示图标
        $(".message-custom-content span").text("这是一条报错提示");
        $(".message").show().delay(1500).hide(0);
    });

    //显示警告提示
    $("#btn-warn").on("click",function() {
        $(".message-custom-content").attr("class", "message-custom-content message-warn");
        $(".message-custom-content .qIcon").attr("class", "qIcon closeCircle");//警告提示图标
        $(".message-custom-content span").text("这是一条警告提示");
        $(".message").show().delay(1500).hide(0);
    });

    //自定义时长提示
    $("#btn-duration").on("click",function() {
        $(".message-custom-content").attr("class", "message-custom-content message-success");
        $(".message-custom-content .qIcon").attr("class", "qIcon closeCircle");//成功提示图标
        $(".message-custom-content span").text("这是一条成功的提示,并将于10秒后消失");
        $(".message").show().delay(10000).hide(0);
    });

    //进行中
    $("#btn-loading").on("click",function() {
        $(".message-custom-content").attr("class", "message-custom-content message-loading");
        $(".message-custom-content .qIcon").attr("class", "qIcon time");//进行中图标
        $(".message-custom-content span").text("正在执行中...");
        $(".message").show().delay(2500).hide(0);
    });

}

function collapseFun() {

    //折叠面板
    $(".collapse-demo-basic").on("click", ".collapse-header",function() {
        $(this).toggleClass("collapse-header-active");
        $(this).next().slideToggle();
    });

    //手风琴
    $(".collapse-demo-accordion").on("click", ".collapse-header",function() {
        $(".collapse-demo-accordion .collapse-header").not($(this)).removeClass("collapse-header-active");
        $(this).toggleClass("collapse-header-active");
        $(".collapse-demo-accordion .collapse-content").not($(this).next()).slideUp();
        $(this).next().slideToggle();
    });

    //面板嵌套
    $(".collapse-demo-mix > .collapse > .collapse-item > .collapse-header").on("click",function() {
        $(".collapse-demo-mix > .collapse > .collapse-item > .collapse-header").not($(this)).removeClass("collapse-header-active");
        $(this).toggleClass('collapse-header-active');
        $(".collapse-demo-mix > .collapse > .collapse-item > .collapse-content").not($(this).next()).slideUp();
        $(this).next().slideToggle();
    });
    $(".collapse-demo-mix .collapse .collapse .collapse-item").on("click", ".collapse-header",function() {
        $(this).toggleClass("collapse-header-active");
        $(this).next().slideToggle();
    });

}

function dropdownFun() {

    //基本
    $(".dropdown-demo-basic .dropdown-link").bind("mouseover",function() {
        var w = $(this).width();
        $(this).next(".dropdown").css("min-width",w);
        $(this).next(".dropdown").stop(true, false).slideDown("fast");
    }).bind('mouseleave',function() {
        $(this).next(".dropdown").stop(true, false).slideUp("fast");
    });

    //分割线和不可用菜单
    $(".dropdown-demo-item .dropdown-link").bind("mouseover",function() {
        var w = $(this).width();
        $(this).next(".dropdown").css("min-width",w);
        $(this).next(".dropdown").stop(true, false).slideDown("fast");
    }).bind('mouseleave',function() {
        $(this).next(".dropdown").stop(true, false).slideUp("fast");
    });

    //点击触发
    $(".dropdown-demo-trigger").on("click", ".dropdown-link",function(e) {
        var w = $(this).width();
        $(this).next(".dropdown").css("min-width",w);
        $(this).next(".dropdown").slideToggle("fast");
        $(document).on("click", function(){
            $(".dropdown-demo-trigger .dropdown").slideUp("fast");
        });
        e.stopPropagation();
    });

    //鼠标移入,点击菜单
    $(".dropdown-demo-event .dropdown-link").bind("mouseover",function() {
        var w = $(this).width();
        $(this).next(".dropdown").css("min-width",w);
        $(this).next(".dropdown").stop(true, false).slideDown("fast");
    }).bind('mouseleave',function() {
        $(this).next(".dropdown").stop(true, false).slideUp("fast");
    });
    $(".dropdown-demo-event").on("click", ".dropdown-menu a",function() {
        $(this).parent().parent().parent(".dropdown").stop(true, false).slideUp("fast");
    });

    //功能按钮悬浮下拉
    $(".dropdown-demo-button .btn-group .btn").bind("mouseover",function() {
        var w1 = $(this).parent().width();
        var w2 = $(this).parent().next(".dropdown").width();
        $(this).parent().next(".dropdown").css({"left":w1,"margin-left":-w2}),
        $(this).parent().next(".dropdown").stop(true, false).slideDown("fast");
    }).bind('mouseleave',function() {
        $(this).parent().next(".dropdown").stop(true, false).slideUp("fast");
    });

    //多级菜单
    $(".dropdown-demo-sub-menu .dropdown-link").bind("mouseover",function() {
        var w = $(this).width();
        $(this).next(".dropdown").css("min-width",w);
        $(this).next(".dropdown").stop(true, false).slideDown("fast");
    }).bind('mouseleave',function() {
        $(this).next(".dropdown").stop(true, false).slideUp("fast");
    });

    //菜单悬浮移出
    $(".dropdown-demo .dropdown").bind("mouseover",function() {
        $(this).stop(true, false).slideDown();
    }).bind('mouseleave',function() {
        $(this).stop(true, false).slideUp();
    });
    //点击触发,菜单悬浮移出
    $(".dropdown-demo-trigger .dropdown").bind("mouseover",function() {
        $(this).stop(true, false).slideDown();
    }).bind('mouseleave',function() {
        $(this).stop(true, false).slideDown();
    });
}

