/* 
* @Author: 蒙奇·D·路飞
* @Date:   2014-10-01 12:10:06
* @Last Modified by:   蒙奇·D·路飞
* @Last Modified time: 2014-10-23 14:00:53
*/

/*var inins=true;
function fsub(){
    $("form[class='archive-list']")[0].submit();
}
function fsub2(){
    var box=$("form[class='archive-list'] input").val();
    box=encodeURIComponent(box);
    $("#bdcs input").val(box);
    $("#bdcs")[0].submit();
}
*/
function swftype(){
    var swfstr=encodeURIComponent($('#search2').val());
    window.open("http://lufeiblog.github.io/search/swiftypesearch.html#stq="+swfstr+"&stp=1",'_blank');
}
$(function() {
    


    //搜索的弹出页面-搜索方式
/*    $('form.archive-list').append('<div id="sousuo"><a href="javascript:void(0);" onclick="fsub2()">百度搜索</a><a href="javascript:void(0);" onclick="fsub()">谷歌搜索</a></div>');
    $('#sousuo').hide();
    //$('#sousuo').css("background","black");
    $('.archive-list input[type="search"]').focusin(function() {
        //console.log("获取焦点");
        $('#sousuo').show();
    }).focusout(function() {
        //console.log("失去焦点");
        if (inins) {$('#sousuo').hide();};

    });
    $("#sousuo").mouseover(function () {
        inins=false;
    }).mouseout(function () {
        inins=true; 
    });
    $("#sousuo a").click(function () {
        src=$('.archive-list input[type="search"]').val();
        src="http://www.baidu.com/s?q1="+src+"&q6=github.io";
        $(this).attr("href",src);
        $('#sousuo').hide();
    });*/

        $("input:radio").change(function(){
            if($("input:checked").val()=='谷歌'){
                $("#ggcs").attr('action','/search/index.html');
                $("#ggcs").attr('onsubmit','');
                $("#search2").attr('name','q');
                $("#search").attr('name','');
                $("#search2").focus();
            }else if($("input:checked").val()=='百度'){
                $("#ggcs").attr('action','/search/baidusearch.html');
                $("#ggcs").attr('onsubmit',"$('#search').val(encodeURIComponent($('#search2').val()))");
                $("#search2").attr('name','');
                $("#search").attr('name','q');
                $("#search2").focus();
            }else{
                //$("#ggcs").attr('action','/search/baidusearch.html');
                //var swfstr=encodeURIComponent($('#search2').val());
                $("#ggcs").attr('onsubmit',"swftype();return false");
                $("#search2").attr('name','');
                $("#search").attr('name','q');
                $("#search2").focus();
            }
        })

    //3D标签的引用flash地址,用绝对地址,记得改即可
        var so = new SWFObject("/tagcloud/tagcloud.swf", "tagcloud", "180", "200", "7", "#ffffff");
        // uncomment next line to enable transparency
        so.addParam("wmode", "transparent");
        so.addVariable("tcolor", "0x333333");
        so.addVariable("mode", "tags");
        so.addVariable("distr", "true");
        so.addVariable("tspeed", "150");
        function trim(str) 
        { 
            str=str.replace(/\"/g, "\'");
            str=str.replace(/NaN/g, "10");
        return str.replace(/(^\s*)|(\s*$)/g, ""); 
        }
        console.log("欢迎来到路飞的One Piece博客~~");
        var tagbox="<tags>"+trim($("#taglist").html())+"</tags>";
        //nimab=$("#taglist").html();
        /*var tagpox="<tags><a href='http://www.google.com' style='font-size: 20pt;' color='0xff0000' hicolor='0x00cc00'>Google</a><a href='http://www.baidu.com' style='12'>Baidu</a><a href='http://www.sina.com.cn' style='16'>Sina</a><a href='http://www.apple.com.cn' style='14'>Apple</a><a href='http://wsi.gucas.ac.cn' style='12'>WSI</a><a href='http://www.bit.edu.cn' style='12'>BIT</a><a href='http://www.sony.com.cn' style='9'>SONY</a><a href='http://www.gucas.ac.cn' style='10'>GUCAS</a><a href='http://www.sohu.com.cn' style='10'>Sohu</a><a href='http://www.renren.com' style='12'>renren</a><a href='http://www.qq.com' style='12'>QQ</a></tags>";*/
        so.addVariable("tagcloud", tagbox);
        so.write("taglist");
        var pox=function (a){
        if($('.fancybox-close').attr("title")){
            var de=a.wheelDelta||a.detail;
            if(de>0){
            $("a[title='Previous']").click();
            }else{
            $("a[title='Next']").click();
            }
        }

        };
        if(document.addEventListener){ 
        document.addEventListener('DOMMouseScroll',pox,false); 
        };
        document.onmousewheel=pox;

});