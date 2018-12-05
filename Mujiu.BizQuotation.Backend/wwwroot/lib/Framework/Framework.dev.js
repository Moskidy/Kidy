'use strict';
// ==============================================================================
// 框架全局对象
// ==============================================================================
var _muFramework_ = {
    // ==========================================================================
    // 变量设置
    // ==========================================================================
    _muSetting_: {
        _iCssZIndex_: 10000//页面元素的Zindex值，堆放顺序，通过_muGetCssZIndex_获取，不可直接访问
        , _muGetCssZIndex_: function () {
            var setting = _muFramework_._muSetting_;
            return setting._iCssZIndex_++;
        }
        , _sTabViewTabItemIconPrefix_: 'mu-icon-16-'//标签栏标签图标类名前缀
        , _iTabViewAllowedMaxTabOpenedCount_: 5 //允许打开的最大选项卡数量
        , _iAnimationTransitionTime_: 200//动画过度时间
        , _sLoadingText_: '请稍候...'
        // ======================================================================
        // 初始化变量，可从外部接受参数
        // ======================================================================
        , _muInitialize_: function (options) {
        }
    }
    // ==========================================================================
    // 页面DOM元素快捷引用
    // ==========================================================================
    , _muDom_: {
        _muHtmlTag_: null//Html标签
        , _muBodyTag_: null//Body标签
        , _muWrapper_: null//整体包裹器
        , _muHeader_: null//头部包裹器
        , _muBody_: null//身体包裹器
        , _muSideBar_: null//侧栏包裹器
        , _muMainMenu_: null//主菜单包裹器
        , _muTabView_: null//内容包裹器
        , _muLoading_: null//加载包裹器
        , _muInitialize_: function () {
            var dom = _muFramework_._muDom_;
            dom._muHtmlTag_ = $('#MuHtmlTag');
            dom._muBodyTag_ = $('#MuBodyTag');
            dom._muWrapper_ = $('#MuWrapper');
            dom._muHeaderWrapper_ = $('#MuHeader');
            dom._muBodyWrapper_ = $('#MuBody');
            dom._muSideBar_ = $('#MuSideBar');
            dom._muMainMenu_ = $('#MuMainMenu');
            dom._muTabView_ = $('#MuTabView');
            dom._muLoading_ = $('#MuLoading');
        }
    }
    // ==========================================================================
    // UI控件，最小的UI单元
    // ==========================================================================
    , _muUiControl_: {
        // ======================================================================
        // 文字 Text
        // ======================================================================
        _muUiControlText_: function (options) {
            var $text = $('<span class="mu-text">' + text + '</span>');
            return $text;
        }
        // ======================================================================
        // 图标 Icon
        // ======================================================================
        , _muUiControlIcon_: function (options) {
            var defaults = {
                id: ''
                , clsss: ''
                , title: ''
            };
            options = $.extend(defaults, options);

            var $icon = $('<i class="mu-icon"></i>');

            if (options.id) {
                $icon.attr('id', options.id);
            }
            if (options.class) {
                $icon.addClass(options.class);
            }
            if (options.title) {
                $icon.attr('title', options.title);
            }

            return $icon;
        }
        // ======================================================================
        // 按钮 Button
        // ======================================================================
        , _muUiControlButton_: function (className) {
            var btnClassName = className || 'btn-primary';
            var $button = $('<button type="button" class="mu-button btn ' + btnClassName + '"></button>');
            return $button;
        }
        // ======================================================================
        // 水平分隔线 Hr
        // ======================================================================
        , _muUiControlHr_: function () {
            var $hr = $('<div class="mu-hr"></div>');
            return $hr;
        }
        // ======================================================================
        // 加载动画层 Loading
        // ======================================================================
        , _muUiControlLoading_: function () {
            var $loading = $('<div class="loadingIcon"><i></i></div>');
            return $loading;
        }
        // ======================================================================
        // 透明遮罩层 Mask
        // ======================================================================
        , _muUiControlMask_: function () {
            var setting = _muFramework_._muSetting_;

            var $mask = $('<div class="mu-mask"></div>')._muGetZIndex_();
            return $mask;
        }
        // ======================================================================
        // 边框 Border
        // ======================================================================
        , _muUiControlBorder_: function (options) {
            var defaults = {
                id: ''
                , clsss: ''
            };
            options = $.extend(defaults, options);

            var $border = $('<div class="mu-border"></div>');

            if (options.id) {
                $border.attr('id', options.id);
            }
            if (options.class) {
                $border.addClass(options.class);
            }

            return $border;
        }
        // ======================================================================
        // 框架结构 Iframe
        // ======================================================================
        , _muUiControlIframe_: function (options) {
            var defaults = {
                id: ''
                , clsss: ''
                , src: ''
            };
            options = $.extend(defaults, options);

            var $border = $('<iframe class="mu-iframe"></iframe>');

            if (options.id) {
                $border.attr('id', options.id);
            }
            if (options.class) {
                $border.addClass(options.class);
            }

            if (options.src) {
                $border.attr('src', options.src);
            }

            return $border;
        }
    }
    // ==========================================================================
    // UI组件，由UI控件组合而成
    // ==========================================================================
    , _muUiComponent_: {
        // ======================================================================
        // 信息框 Alert
        // ======================================================================
        _muUiAlert_: function (options) { }
        // ======================================================================
        // 询问框 Confirm
        // ======================================================================
        , _muUiConfirm_: function (options) { }
        // ======================================================================
        // 消息框 Message，可自动关闭
        // ======================================================================
        , _muUiMessage_: function (options) { }
        // ======================================================================
        // 弹出提示框 Popup
        // ======================================================================
        , _muUiPopup_: function (options) { }
        // ======================================================================
        // 标签视图 TabView
        // ======================================================================
        , _muUiTabView_: {
            // ==================================================================
            // 添加标签项
            // ==================================================================
            _addTabItem_: function (options) {
                var setting = _muFramework_._muSetting_;
                var member = _muFramework_._muUiComponent_._muUiTabView_._member_;
                var tvComponent = _muFramework_._muUiComponent_._muUiTabView_;

                var defaults = {
                    id: ''
                    , text: ''
                    , icon: 'list'
                    , src: ''
                    , isIframe: false
                    , isClosable: true
                };
                options = $.extend(defaults, options);

                if ($._muIsInArray_(member._aOpendTabs_, options.id)) {
                    if (member._sFocusTabId_ === options.id) {
                        alert('标签已打开');
                    } else {
                        tvComponent._focusTabItem_(options.id);
                    }
                } else {
                    if (member._aOpendTabs_.length >= setting._iTabViewAllowedMaxTabOpenedCount_) {
                        alert('打开最大数限制');
                    }
                    else {
                        tvComponent._createTabItem_(options);
                    }
                }
            }
            // ==================================================================
            // 聚焦标签项
            // ==================================================================
            , _focusTabItem_: function (tabId) {
                var control = _muFramework_._muUiControl_;
                var setting = _muFramework_._muSetting_;
                var ui = _muFramework_._muUiComponent_;
                var tvComponent = _muFramework_._muUiComponent_._muUiTabView_._component_;
                var member = _muFramework_._muUiComponent_._muUiTabView_._member_;

                tvComponent._tabViewTabBarTagGroupInnerWrapper_.find('#Tab_TabBar_' + tabId).addClass('on').siblings().removeClass('on');
                tvComponent._tabViewContentViewWrapper_.find('#Tab_Content_' + tabId).show().addClass('on').siblings().removeClass('on').hide();
                member._sFocusTabId_ = tabId;
            }
            // ==================================================================
            // 关闭标签项
            // ==================================================================
            , _closeTabItem_: function (tabId) {
                var control = _muFramework_._muUiControl_;
                var setting = _muFramework_._muSetting_;
                var ui = _muFramework_._muUiComponent_;
                var tvComponent = _muFramework_._muUiComponent_._muUiTabView_._component_;
                var member = _muFramework_._muUiComponent_._muUiTabView_._member_;

                //移除标签和内容
                tvComponent._tabViewTabBarTagGroupInnerWrapper_.find('#Tab_TabBar_' + tabId).remove();
                tvComponent._tabViewContentViewWrapper_.find('#Tab_Content_' + tabId).remove();

                //从打开列表中移除相应项
                var tabIndex = 0;
                for (var i = 0, len = member._aOpendTabs_.length; i < len; i++) {
                    var item = member._aOpendTabs_[i];
                    if (item.id === tabId && item.isClosable === true) {
                        member._aOpendTabs_.splice(i, 1);
                        tabIndex = i;
                        break;
                    }
                }
                if (tabId === member._sFocusTabId_) {
                    if (tabIndex === member._aOpendTabs_.length) {
                        tabIndex--;
                    }
                    ui._muUiTabView_._focusTabItem_(member._aOpendTabs_[tabIndex].id);
                }
            }
            // ==================================================================
            // 刷新标签项
            // ==================================================================
            , _refreshTabItem_: function (tabId) { }
            // ==================================================================
            // 创建标签项
            // ==================================================================
            , _createTabItem_: function (options) {
                var control = _muFramework_._muUiControl_;
                var setting = _muFramework_._muSetting_;
                var ui = _muFramework_._muUiComponent_;
                var tvComponent = _muFramework_._muUiComponent_._muUiTabView_._component_;
                var member = _muFramework_._muUiComponent_._muUiTabView_._member_;

                //构建标签
                var $tabItemWrapper = control._muUiControlBorder_({
                    id: 'Tab_TabBar_' + options.id
                    , class: 'mu-tvtb-item-wrapper'
                });
                var $icon = control._muUiControlIcon_({
                    class: 'mu-tvtb-item-icon ' + setting._sTabViewTabItemIconPrefix_ + options.icon
                });
                var $text = control._muUiControlText_(options.text);
                var $closeIcon = control._muUiControlIcon_({
                    class: 'mu-tvtb-item-closeIcon ' + setting._sTabViewTabItemIconPrefix_ + 'tabViewTagOpitionClose'
                    , title: '关闭该标签页'
                });
                $tabItemWrapper.append($icon).append($text);

                if (options.isClosable) {
                    $tabItemWrapper.append($closeIcon);
                    $closeIcon.click(function (e) {
                        e.stopPropagation();
                        ui._muUiTabView_._closeTabItem_(options.id);
                    });
                }

                tvComponent._tabViewTabBarTagGroupInnerWrapper_.append($tabItemWrapper);

                $tabItemWrapper
                    //单击聚焦
                    .click(function (e) {
                        if (e.which === 1) {
                            ui._muUiTabView_._focusTabItem_(options.id);
                        }
                    })
                    //右键菜单
                    .mouseup(function (e) {
                    });

                //构建内容
                if (options.isIframe) {
                    //Iframe
                    var $iframe = control._muUiControlIframe_({
                        id: 'Tab_Content_' + options.id
                        , class: 'mu-iframe-tvc'
                        , src: options.src
                    })._muGetZIndex_();
                    tvComponent._tabViewContentViewWrapper_.append($iframe);
                } else {
                    //单页面
                    var $panelPage = control._muUiControlBorder_({
                        id: 'Tab_Content_' + options.id
                        , class: 'mu-page-tvc'
                    })._muGetZIndex_();
                    tvComponent._tabViewContentViewWrapper_.append($panelPage);
                    _muFramework_._muHttp_._muHttpGet_({
                        url: options.src
                        , dataType: 'html'
                        , mask: true
                        , loadingTxt: '页面加载中，请稍候...'
                        , done: function (htmlText) {
                            $panelPage.append(htmlText);
                        }
                    });
                }

                //添加至成员变量中
                member._aOpendTabs_.push(options);
                ui._muUiTabView_._focusTabItem_(options.id);
            }
            // ==================================================================
            // 关闭所有标签项
            // ==================================================================
            , _closeAllTabItems_: function () { }
            // ==================================================================
            // 关闭左侧标签项
            // ==================================================================
            , _closeLeftTabItems_: function (tabId) { }
            // ==================================================================
            // 关闭右侧标签项
            // ==================================================================
            , _closeRightTabItems_: function (tabId) { }
            // ==================================================================
            // 关闭其它标签项
            // ==================================================================
            , _closeOtherTabItems_: function (tabId) { }
            // ==================================================================
            // TabView组件
            // ==================================================================
            , _component_: {
                _tabViewWrapper_: null//整体包裹器
                , _tabViewTabBarWrapper_: null//标签栏包裹器
                , _tabViewTabBarTagGroupWrapper_: null//标签栏标签组包裹器
                , _tabViewTabBarTagGroupInnerWrapper_: null//标签栏标签组内层包裹器
                , _tabViewTabBarOptionWrapper_: null//标签栏选项栏包裹器
                , _tabViewContentViewWrapper_: null//标签内容试图包裹器
                , _muInitialize_: function () {
                    var control = _muFramework_._muUiControl_;
                    this._tabViewWrapper_ = control._muUiControlBorder_({
                        id: 'MuTabViewWrapper'
                    });
                    this._tabViewTabBarWrapper_ = control._muUiControlBorder_({
                        id: 'MuTabViewTabBarWrapper'
                    });
                    this._tabViewTabBarTagGroupWrapper_ = control._muUiControlBorder_({
                        id: 'MuTabViewTabBarTagGroupWrapper'
                    });
                    this._tabViewTabBarTagGroupInnerWrapper_ = control._muUiControlBorder_({
                        id: 'MuTabViewTabBarTagGroupInnerWrapper'
                    });
                    this._tabViewTabBarOptionWrapper_ = control._muUiControlBorder_({
                        id: 'MuTabViewTabBarOptionWrapper'
                    });
                    this._tabViewContentViewWrapper_ = control._muUiControlBorder_({
                        id: 'MuTabViewContentViewWrapper'
                    });
                    this._tabViewWrapper_
                        .append(this._tabViewTabBarWrapper_
                            .append(this._tabViewTabBarTagGroupWrapper_
                                .append(this._tabViewTabBarTagGroupInnerWrapper_)
                            )
                            .append(this._tabViewTabBarOptionWrapper_)
                            .contextmenu(function () {
                                //屏蔽右键
                                return false;
                            })
                        )
                        .append(this._tabViewContentViewWrapper_);
                    var $optionIcon = control
                        ._muUiControlIcon_({
                            id: 'MuTvtbbOptionIcon'
                            , class: 'mu-icon-24-list'
                        });
                    this._tabViewTabBarOptionWrapper_
                        .append($optionIcon)
                        .attr('title', '已打开标签页列表')
                        .click(function () {
                            alert(4);
                        });
                }
            }
            // ==================================================================
            // TabView成员变量
            // ==================================================================
            , _member_: {
                _aOpendTabs_: []//已打开标签列表
                , _sFocusTabId_: ''//当前聚焦的标签页Id
            }
            // ==================================================================
            // 初始化方法
            // ==================================================================
            , _muInitialize_: function () {
                var dom = _muFramework_._muDom_;
                this._component_._muInitialize_();
                dom._muContentWrapper_.append(this._component_._tabViewWrapper_);
            }
        }
        // ======================================================================
        // 主菜单 MainMenu
        // ======================================================================
        , _muUiMainMenu_: {
            // ==================================================================
            // 初始化方法
            // ==================================================================
            _muInitialize_: function (jsonData) {
                var dom = _muFramework_._muDom_;
                //dom._muMainMenu_.empty();
                if (jsonData == null || jsonData.length == 0) {
                    return;
                }

                for (var i = 0, len = jsonData.length; i < len; i++) {
                    var $firstNode = $('<div class="mu-mainMenu"><div class="mu-mainMenu-bar"><i class= "mu-icon mu-icon-16-folder"></i><span class="mu-text">' + jsonData[i].title + '</span></div ></div >');
                    dom._muMainMenu_.append($firstNode);
                }

            }
        }
        // ======================================================================
        // 上下文菜单 ContextMenu
        // ======================================================================
        , _muUiContextMenu_: function () { }
        // ======================================================================
        // 上下文菜单项 ContextMenuItem
        // ======================================================================
        , _muUiContextMenuItem_: function (options) { }
        // ======================================================================
        // 加载面板 LoadingPanel
        // ======================================================================
        , _muUiLoadingPanel_: function (options) {
            var control = _muFramework_._muUiControl_;
            var setting = _muFramework_._muSetting_;
            var ui = _muFramework_._muUiComponent_;

            var defaults = {
                id: ''
                , clsss: ''
                , text: ''
            };
            options = $.extend(defaults, options);

            var $wrapper = control._muUiControlBorder_({
                id: options.id
                , class: options.class
            }).addClass('mu-loadingPanel');

            var $loadingIcon = control._muUiControlLoading_();
            var $text = control._muUiControlText_(options.text);

            $wrapper.append($loadingIcon);

            if (options.text) {
                $loadingIcon.css({
                    'margin-right': '10px'
                });
                $wrapper.append($text);
            }

            return $wrapper;
        }
    }
    // ==========================================================================
    // Ajax请求快捷方式
    // ==========================================================================
    , _muHttp_: {
        // ======================================================================
        // Ajax请求
        // ======================================================================
        _muHttpAjax_: function (options) {
            var control = _muFramework_._muUiControl_;
            var setting = _muFramework_._muSetting_;
            var ui = _muFramework_._muUiComponent_;
            var dom = _muFramework_._muDom_;

            var defaults = {
                url: null//访问路径
                , type: 'POST'//访问方式POST或者GET
                , dataType: 'json'//返回数据格式
                , data: null//提交数据
                , mask: false//是否需要全屏遮罩层
                , loadingTxt: setting._sLoadingText_//全屏遮罩层加载文字
                , done: null//Http请求成功时的回调
                , fail: null//Http请求失败时的回调
                , always: null//始终执行的回调
            };
            options = $.extend(defaults, options);

            var $mask = null;
            var $loadingPanel = null;
            var showLoadingIntervalId = 0;

            //需要添加遮罩层
            if (options.mask) {
                $mask = control._muUiControlMask_();
                $loadingPanel = ui._muUiLoadingPanel_({
                    text: options.loadingTxt
                })._muGetZIndex_().css({ opacity: 0 });
                dom._muBodyTag_.append($mask).append($loadingPanel);
                showLoadingIntervalId = setTimeout(showLoadingMask, 1000);
            }

            $.ajax({
                url: options.url
                , type: options.type
                , timeout: setting._iHttpAjaxTimeout_
                , dataType: options.dataType
                , data: options.data
                , cache: false
            })
                .done(function (data) {
                    if (options.done) {
                        options.done(data);
                    }
                })
                .fail(function (data) {
                    if (options.fail) {
                        var errorMessage = '请求失败，请稍候重试';
                        if (data.statusText === 'timeout') {
                            errorMessage = '请求超时，请重试';
                        } else if (data.statusText === 'error') {
                            if (data.status === 404) {
                                errorMessage = '你请求的资源不存在';
                            } else if (data.status === 500) {
                                errorMessage = '服务器发生错误，请稍候重试';
                            }
                        }
                        options.fail(errorMessage);
                    }
                })
                .always(function () {
                    if (options.always) {
                        options.always();
                    }
                    if ($mask) {
                        $mask._muFadeOut_(setting._iAnimationTransitionTime_);
                    }
                    if ($loadingPanel) {
                        $loadingPanel._muFadeOut_(setting._iAnimationTransitionTime_);
                    }
                    if (showLoadingIntervalId > 0) {
                        clearTimeout(showLoadingIntervalId);
                    }
                });
            function showLoadingMask() {
                $loadingPanel
                    .css({ 'margin-left': -($loadingPanel.outerWidth() / 2) })
                    .animate({ 'opacity': 1 });
                $mask.animate({ 'opacity': 0.7 });
            }
        }
        // ======================================================================
        // Post请求
        // ======================================================================
        , _muHttpPost_: function (options) {
            options.type = 'POST';
            _muFramework_._muHttp_._muHttpAjax_(options);
        }
        // ======================================================================
        // Get请求
        // ======================================================================
        , _muHttpGet_: function (options) {
            options.type = 'GET';
            _muFramework_._muHttp_._muHttpAjax_(options);
        }
    }
    // ==========================================================================
    // 帮助方法
    // ==========================================================================
    , _muHelper_: {}
    // ==========================================================================
    // 整体初始化
    // ==========================================================================
    , _muInitialize_: function (options) {
        var dom = _muFramework_._muDom_;
        var setting = _muFramework_._muSetting_;
        var component = _muFramework_._muUiComponent_;

        dom._muInitialize_();
        setting._muInitialize_(options);
        _muFramework_._muHttp_._muHttpPost_({
            url: '/Framework/GetMainMenu/',
            done: function (jsonData) {
                if (jsonData.isSuccess) {
                    component._muUiMainMenu_._muInitialize_(jsonData.dataList);
                    return;
                }
                alert(jsonData.message)
            },
            always: function () {
                dom._muLoading_._muFadeOut_();
            }
        });
        //component._muUiTabView_._muInitialize_();
        //component._muUiTabView_._addTabItem_({
        //    id: 'MuMyHomePage'
        //    , icon: 'desktop'
        //    , text: '我的首页'
        //    , isIframe: true
        //    , isClosable: false
        //    , src: '/Framework/Test/'
        //});

    }
};

// ==============================================================================
// 暴露相应的方法
// ==============================================================================
var mu = {
    initialize: _muFramework_._muInitialize_
    , alert: _muFramework_._muUiComponent_._muUiAlert_
    , confirm: _muFramework_._muUiComponent_._muUiConfirm_
    , popup: _muFramework_._muUiComponent_._muUiPopup_
    , Message: _muFramework_._muUiComponent_._muUiMessage_
    , addTabItem: _muFramework_._muUiComponent_._muUiTabView_._addTabItem_
    , post: _muFramework_._muHttp_._muHttpPost_
    , get: _muFramework_._muHttp_._muHttpGet_
};

// ==================================================================================
// jquery的扩展方法
// ==================================================================================
(function ($) {
    // ==============================================================================
    // 实例扩展方方法
    // ==============================================================================
    $.fn.extend({
        // ==========================================================================
        // 元素消失后，将其从DOM树中删除掉
        // ==========================================================================
        _muFadeOut_: function (duration, callback) {
            var $this = $(this);

            $this.fadeOut(duration, function () {
                $this.remove();
                if (callback) {
                    callback();
                }
            });
        }
        // ==========================================================================
        // 给元素添加zIndex，并将其返回
        // ==========================================================================
        , _muGetZIndex_: function () {
            var setting = _muFramework_._muSetting_;
            var $this = $(this);
            $this.css({ 'z-index': setting._muGetCssZIndex_() });
            return $this;
        }
        // ==========================================================================
        // 鼠标进入元素，然后离开
        // 在second时间内回到元素中，则不执行callback
        // 否则执行callback
        // ==========================================================================
        , _muStayOn_: function (callback, second) {
            var $this = $(this);
            var iTimeoutId = 0;

            $this.on('mouseenter', function () {
                if (iTimeoutId > 0) {
                    clearTimeout(iTimeoutId);
                }
            }).on('mouseleave', function () {
                iTimeoutId = setTimeout(callback, second);
            });
            return $this;
        }
    });

    // ==============================================================================
    // 静态扩展方方法
    // ==============================================================================
    $.extend({
        // ==========================================================================
        // 判断value是否存在于数组中
        // ==========================================================================
        _isInArray_: function (arr, value) {
            var index = $.inArray(value, arr);
            if (index >= 0) {
                return true;
            }
            return false;
        }
        // ==========================================================================
        // 判断value是否存在于数组项的Id中(不通用)
        // ==========================================================================
        , _muIsInArray_: function (arr, value) {
            for (var i = 0, len = arr.length; i < len; i++) {
                if (arr[i].id === value) {
                    return true;
                }
            }
            return false;
        }
    });
})(jQuery); 