(function(){
  var campBuff = Date.now() + 300000;

  var timerId =
    countdown(
      campBuff,
      function(ts) {
        $('.myBuff .timer').html(ts.toString());
      },
      countdown.MINUTES|countdown.SECONDS);

})(window.jQuery);
