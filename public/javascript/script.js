(function($){
  $(document).ready(function(){
    // 这里开始
    var pathName = location.pathname

    // 导航栏激活状态
    $("nav a[href='" + pathName + "']").addClass('active');

    // 变色
    if (pathName.length> 1)
      var bak_clor ='back_' + pathName.slice(1)
      $('.back_purple').addClass(bak_clor)


    //  这里结束
  })
})(jQuery)
