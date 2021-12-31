var component = {

    /**
     * 初始化
     */
    init : function () {
        //layui
        component.layui();
        //Header 以及 Total部分事件
        component.mySign();
    },

    /**
     * layui
     */
    layui : function () {
        //加载layui模块
        layui.use(['layer', 'form', 'element'], function () {
            var layer = layui.layer
                , form = layui.form
                , element = layui.element
            //layer.msg('Hello World');

        });
    },
  
    /**
     * 签名类效果
     */
    mySign : function () {

        //Img(monkey)
        var signImgTouch = function () {
            $(this).animate({borderRadius : 0}, 1000);
        };
        var signImgLeave = function () {
            $(this).animate({borderRadius : 93}, 1000);
        };
        $("#my-signImg").mouseenter(signImgTouch)
            .mouseleave(signImgLeave);

        //Title
        var signTitleTouch = function () {
            $(this).animate({marginLeft : 50}, 800);
        };
        var signTitleLeave = function () {
            $(this).animate({marginLeft : 0}, 800);
        };
        $("#my-signTitle").mouseenter(signTitleTouch)
            .mouseleave(signTitleLeave);
    }

};