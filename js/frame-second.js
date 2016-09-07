/**
 * Created by zqy on 16/4/7.
 */


HTMLElement.prototype.getElementById = function (id) {
    var childList = this.children;
    for (var i = 0; i < childList.length; i++) {
        if (childList[i].id == id) {
            return childList[i];
        } else {
            var node = childList[i].getElementById(id);
            if (node) {
                return node;
            }
        }
    }
};

HTMLElement.prototype.addClass = function addClass(cls) {
    var obj_class = this.className,//获取 class 内容.
        blank = (obj_class != '') ? ' ' : '';//判断获取到的 class 是否为空, 如果不为空在前面加个'空格'.
    added = obj_class + blank + cls;//组合原来的 class 和需要添加的 class.
    this.className = added;//替换原来的 class.
}

HTMLElement.prototype.removeClass = function (cls) {
    var obj_class = ' ' + this.className + ' ';//获取 class 内容, 并在首尾各加一个空格. ex) 'abc        bcd' -> ' abc        bcd '
    obj_class = obj_class.replace(/(\s+)/gi, ' '),//将多余的空字符替换成一个空格. ex) ' abc        bcd ' -> ' abc bcd '
        removed = obj_class.replace(' ' + cls + ' ', ' ');//在原来的 class 替换掉首尾加了空格的 class. ex) ' abc bcd ' -> 'bcd '
    removed = removed.replace(/(^\s+)|(\s+$)/g, '');//去掉首尾空格. ex) 'bcd ' -> 'bcd'
    this.className = removed;//替换原来的 class.
    return;

    //var regExp = new RegExp(cls+"","g");//class="abc asabc asd"
    //this.className = this.className.replace(regExp,"");
}

HTMLElement.prototype.hasClass = function (cls) {
    return this.className.indexOf(cls) != -1;
}

HTMLElement.prototype.findPrent = function (type, cls) {
    var str = '';
    if (type) {
        switch (type) {
            case 'tag':
                str = this.parentNode.tagName;
                break;
            case 'className':
                str = this.parentNode.className;
                break;
            case 'id':
                str = this.parentNode.id;
                break;
            default :
                return 'notFound';
        }
    } else {
        return 'notFound';
    }

    if (this.parentNode.nodeType == 9) {
        return 'notFound';
    } else if (str == cls) {
        return this.parentNode;
    } else {
        var node = this.parentNode.findPrent(type, cls);
        if (node) {
            return node;
        } else {
            return 'notFound';
        }
    }
}

/*穿梭框*/
function Transfer(obj, setting) {
    var _this = this;
    this.obj = obj;
    this.dataList = setting.dataList || [];
    this.nodeList = [];
    this._transfer_ltr = obj.getElementById('transfer_ltr');
    this._transfer_rtl = obj.getElementById('transfer_rtl');
    this._listBodyLeft = obj.getElementsByClassName('transfer-list-body')[0];
    this._listBodyRight = obj.getElementsByClassName('transfer-list-body')[1];
    this.listNodeTxt = function (listTxt) {
        return '<span class="checkbox">' +
            '<input class="input-checkbox" type="checkbox" value="1">' +
            '<span class="style-checkbox"></span>' +
            '</span>' +
            '<div class="list-area">' + listTxt + '</div>';
    };
    /*初始化*/
    this.render(this.dataList);
    btnState();

    /*左移*/
    this._transfer_ltr.onclick = function () {
        _this.move(0);
        btnState();
    };
    /*右移*/
    this._transfer_rtl.onclick = function () {
        _this.move(1);
        btnState();
    };

    /*复选框设置*/
    var inputs = obj.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].type == "checkbox") {
            setCheckbox(inputs[i]);
            inputs[i]._checked = false;
        }
    }

    function setCheckbox(o) {
        if (o.type == 'checkbox') {
            o.__defineSetter__("_checked", function (val) {
                this.checked = val;
                this.findPrent('tag', 'LI').className = this.checked ? 'selected' : '';
            });
            o.__defineGetter__("_checked", function () {
                return this.checked;
            });
            o.onchange = function () {
                this.findPrent('tag', 'LI').className = this.checked ? 'selected' : '';
                btnState();
            }
            o.findPrent('tag', 'LI').onclick = function (e) {
                if (e.target.tagName == 'INPUT') {
                    e.stopPropagation();
                } else {
                    o.click();
                }
            }
        }
    }

    function btnState() {
        _this._transfer_ltr.className = selectedNone(0) ? 'btn disabled' : 'btn';
        _this._transfer_rtl.className = selectedNone(1) ? 'btn disabled' : 'btn';

        function selectedNone(index) {
            for (var i = 0; i < _this.nodeList.length; i++) {
                if (_this.dataList[i].flag == index && _this.nodeList[i].hasClass('selected')) {
                    return false;
                    break;
                } else {
                    continue;
                }
            }
            return true;
        }
    }
}

Transfer.prototype = {
    move: function (direction) {
        var list = this.nodeList;
        var directNode = (direction == 0 ? this._listBodyRight : this._listBodyLeft);
        for (var i = 0; i < list.length; i++) {
            if (this.dataList[i].flag == direction && list[i].hasClass('selected')) {
                var nodeList = directNode.getElementsByTagName('ul')[0];
                nodeList.insertBefore(list[i], nodeList.childNodes[0]);
                this.dataList[i].flag = (direction == 0 ? 1 : 0);
                list[i].getElementsByTagName('input')[0]._checked = false;
            }
        }
        var leftListNumber = 0;
        var RightListNumber = 0;
        for (var i = 0; i < this.dataList.length; i++) {
            if (this.dataList[i].flag == 0) {
                leftListNumber++
            }
            ;
            if (this.dataList[i].flag == 1) {
                RightListNumber++
            }
            ;
        }
        this.obj.getElementsByClassName('transfer-l-number')[0].innerHTML = leftListNumber;
        this.obj.getElementsByClassName('transfer-r-number')[0].innerHTML = RightListNumber;
    },
    render: function (dataList) {
        var _this = this;
        var nodeList = [];
        this._listBodyLeft.innerHTML = '';
        this._listBodyRight.innerHTML = '';
        var UL = document.createElement('ul');
        var UR = document.createElement('ul');
        for (var i = 0; i < dataList.length; i++) {
            dataList[i].flag = dataList[i].flag ? dataList[i].flag : 0;
            var _listNode = createListNode(_this, dataList[i]);
            if (dataList[i].flag == 0) {
                UL.appendChild(_listNode);
            } else if (dataList[i].flag == 1) {
                UR.appendChild(_listNode);
            }

        }
        this._listBodyLeft.appendChild(UL);
        this._listBodyRight.appendChild(UR);
        this.nodeList = nodeList;

        function createListNode(_this, data) {
            var _node = document.createElement('li');
            _node.innerHTML = _this.listNodeTxt(data.dataTxt);
            nodeList.push(_node);
            return _node;
        }
    }
}


/*徽标数*/
var __badge = document.getElementsByClassName('badge');

for (var i = 0; i < __badge.length; i++) {
    var countNumber = parseInt(__badge[i].getAttribute('count'));
    if (countNumber) {
        var _limited = parseInt(__badge[i].getAttribute('limited'));
        var _sup = document.createElement('sup');
        _sup.className = "badge-count";
        __badge[i].appendChild(_sup);
        if (_limited && countNumber > _limited) {
            _sup.innerHTML = _limited + '+';
        } else {
            _sup.innerHTML = __badge[i].getAttribute('count');
        }
    } else {
        __badge[i].addClass('dot');
    }
}

/*走马灯*/
function Carousel(obj, setting) {
    var _this = obj;
    this.obj = obj;
    this.setting = setting ? setting : {autoplay: false, effect: "fade"};

    var _carousel_body = _this.getElementsByClassName('carousel-body')[0];
    var _carousel_body_items = _carousel_body.getElementsByClassName('carousel-body-item');
    var _point = _this.getElementsByClassName('carousel-points')[0];
    var _point_items = _point.getElementsByTagName('li');
    var _thisWidth = _this.clientWidth;

    /*尺寸,位置相关设置*/
    this.position(this.obj);
    var _This = this;
    $(window).resize(function () {
        _This.position(_This.obj)
    });


    /*滚动*/
    var interVal;
    var pointIndex = 0;

    var move = function () {
    };

    function Fade(_index) {
        $(_carousel_body_items).css({"position": 'absolute'});
        $(_carousel_body_items[0]).css({"z-index": 1});
        for (var i = 0; i < _carousel_body_items.length; i++) {
            if (i != _index) {
                $(_carousel_body_items[i]).animate({"opacity": 0}, 600);
            }
        }
        $(_carousel_body_items[_index]).animate({"opacity": 1}, 600);
        for (var i = 0; i < _carousel_body_items.length; i++) {
            _point_items[i].removeClass('cur');
        }
        _point_items[_index].addClass('cur');
    }

    function Slide(_index) {
        $(_carousel_body).animate({"margin-left": -_index * _thisWidth + 'px'}, 400);
        for (var i = 0; i < _carousel_body_items.length; i++) {
            _point_items[i].removeClass('cur');
        }
        _point_items[_index].addClass('cur');
    }

    if (this.setting.effect == "fade") {
        move = Fade;
    }
    if (this.setting.effect == "slide") {
        move = Slide;
    }

    if (this.setting.autoplay) {
        interVal = setInterval(function () {
            if (pointIndex == _carousel_body_items.length) {
                pointIndex = 0;
            }
            move(pointIndex);
            pointIndex++;

        }, 2000);
    }

    for (var m = 0; m < _point_items.length; m++) {
        (function (_index_) {
            var _this_ = _point_items[_index_];
            _this_.onclick = function () {
                console.log(_index_);
                move(_index_);
                pointIndex = _index_;
            }
        })(m);
    }
}

Carousel.prototype = {
    position: function (obj) {
        var _this = obj;
        var _carousel_body = _this.getElementsByClassName('carousel-body')[0];
        var _carousel_body_items = _carousel_body.getElementsByClassName('carousel-body-item');
        var _point = _this.getElementsByClassName('carousel-points')[0];

        var _thisWidth = _this.clientWidth;
        _carousel_body.style.width = _thisWidth * _carousel_body_items.length + 'px';
        for (var i = 0; i < _carousel_body_items.length; i++) {
            _carousel_body_items[i].style.width = _thisWidth + 'px';
        }
        _point.style.left = '50%';
        _point.style.marginLeft = -_point.clientWidth / 2 + 'px';
    }
}

/*全局展示通知提醒信息*/
function Notification(setting)
{

    /*消息创建*/
    var Notification = new CreateNotification(setting);

    /*信息推送*/
    var NotificationBox;
    if(document.getElementsByClassName('notification-box').length>0){
        NotificationBox = document.getElementsByClassName('notification-box')[0];
    }else {
        NotificationBox = document.createElement('div');
        NotificationBox.className = "notification-box";
        document.body.appendChild(NotificationBox);
    }
    NotificationBox.appendChild(Notification);
}

function CreateNotification(setting)
{
    var _this_ = this;
    var classType;
    var type = setting.type||null;
    var message = setting.message||{title:"",description:""};
    if(!setting.duration && typeof setting.duration != "undefined" && setting.duration != 0){}else {
        var duration = setting.duration*1000||4500;
    }

    switch (type) {
        case 'success':
            classType = 'nf-success';
            break;
        case 'info':
            classType = 'nf-info';
            break;
        case 'warn':
            classType = 'nf-warn';
            break;
        case 'error':
            classType = 'nf-error';
            break;
        default:
            classType = '';
    }
    var _close = document.createElement('div');
    _close.className = "notification-close";
    _close.innerHTML = '<i class="qIcon close"></i>';

    var _notification = document.createElement('div');
    this.DOM = _notification;
    _notification.className = "notification "+classType;
    var template = '<div class="notification-body clearfix">' +
        '<div class="notification-icon"><i class="qIcon"></i></div>' +
        '<div class="message-area">' +
        '<div class="message-area-title">' + message.title + '</div>' +
        '<div class="message-area-cont">' + message.description + '</div>' +
        '</div>' +
        '</div>';
    _notification.innerHTML = template;
    _notification.appendChild(_close);

    /*关闭*/
    _close.onclick = function(){
        _this_.DOM.remove();
    }

    /*自动关闭*/
    if(!setting.duration && typeof setting.duration != "undefined" && setting.duration != 0){}else {
        setTimeout(function(){_close.click();},duration);
    }

    return _notification;
}
CreateNotification.prototype = {
    onClose:function(){

    }
}

/*tag标签*/
var Tags = function(obj,dataList){
    this.obj = obj;
    this.dataList = dataList;
    var _tag_box = document.createElement('div');
    _tag_box.className = "tag-box";
    this._tag_box = this.obj.getElementsByClassName('tag-box')[0]||_tag_box;
    this.render(dataList);
}
Tags.prototype = {
    delete:function(){

    },
    add:function(data){
        var tagNew = this.creatTag(data,this.dataList.size+1);
        this._tag_box.appendChild(tagNew);
        this.dataList.push(data);
    },
    render:function(dataList){
        var _tagList = [];

        for(var i=0;i<dataList.length;i++){
            var _tag = this.creatTag(dataList[i],i);
            _tagList.push(_tag);
            this._tag_box.appendChild(_tag);
        }
        this.obj.appendChild(this._tag_box);
    },
    creatTag:function(data,index){
        var name = data.name||'';
        var href = data.href||"javascript:void(0);";
        var _closer = document.createElement('span');
        _closer.innerHTML = '<span><i class="qIcon close"></i></span>';
        var tmp = '<a href="' +
            href +
            '" target="_blank"><span>' +
            name +
            '</span></a>';
        var _tag = document.createElement('div');
        var _tagColor = " ";
        data.color = data.color||'';
        switch (data.color){
            case "blue": _tagColor += "tag-blue";break;
            case "green": _tagColor += "tag-green";break;
            case "yellow": _tagColor += "tag-yellow";break;
            case "red": _tagColor += "tag-red";break;
            default:_tagColor = "";
        }
        _tag.className = "tag" + _tagColor;
        _tag.innerHTML = tmp;
        if(data.deletable){
            _tag.appendChild(_closer);
        }

        /*绑定删除*/
        var __this = this;
        _closer.onclick = function(){
            _tag.remove();
            __this.dataList.splice(index,1);
        }
        return(_tag);
    }
}

/*affix固钉*/
var __affix = document.getElementsByClassName('affix');
var _staticTop = [];
var _offset = [];
for(var i=0;i<__affix.length;i++){
    _staticTop.push(getAbsPoint(__affix[i]).y);
    _offset.push(parseInt(__affix[i].getAttribute('offset'))||0);
}

console.log(_staticTop,_offset);

document.body.onscroll = function(){
    for(var i=0;i<__affix.length;i++){
        if(_staticTop[i] - document.body.scrollTop<=_offset[i]){
            __affix[i].style.position = "fixed";
            __affix[i].style.top = _offset[i]+"px";
            __affix[i].style.zIndex = 999;
        }else {
            __affix[i].style.position = "relative";
            __affix[i].style.top = 0;
            __affix[i].style.zIndex = 0;
        }
    }
}

/*获取元素到页面顶端,左边距离*/
function getAbsPoint (dom){
    var x = dom.offsetLeft;
    var y = dom.offsetTop;
    while(dom = dom.offsetParent){
        x += dom.offsetLeft;
        y += dom.offsetTop;
    }
    return {"x": x, "y": y};
}
