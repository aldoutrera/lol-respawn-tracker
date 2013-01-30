(function(){

  var formatMinutes = '', formatSeconds = '';

  // The timmers for the monsters
  var timers = {
    // 5 minutes
    'campBuff': 300000,
    // 6 minutes
    'dragon': 360000,
    // 7 minutes
    'baron': 420000
  };

  var monster_timer_pool = {
    'monster-1': [],
    'monster-2': [],
    'monster-3': [],
    'monster-4': [],
    'monster-5': [],
    'monster-6': []
  };

  $('.monster').click(function(){
    var $this       = $(this);
    var $monster_id = $(this).attr('data-id');
    var campBuff    = Date.now() + timers[$this.attr('data-type')];

    // We verify if this monster has already a timer
    if (monster_timer_pool[$monster_id].length !== 0) {
      // It has already a timer, lets clear it
      $.each(monster_timer_pool[$monster_id], function(i, timerId){
        window.clearInterval(timerId);
      });
      // Now that the timers has been stopped, lets clear the pool
      monster_timer_pool[$monster_id] = [];
      // Lets clear the element
      $this.find('.timer').empty();
      // Lets stop
      return false;
    }

    var timerId =
      countdown(
        campBuff,
        function(ts) {
          formatMinutes = String("00" + ts.minutes).slice(-2);
          formatSeconds = String("00" + ts.seconds).slice(-2);
          $this.find('.timer').html(formatMinutes + ':' + formatSeconds);
          // We verify if the timer has ran out
          if (ts.minutes === 0 && ts.seconds === 0){
            // We clear the timer interval once the timer has reached 0
            window.clearInterval(timerId);
            // We clear the timer from the timers_pool
            monster_timer_pool[$monster_id] = [];
          }
        },
        countdown.MINUTES|countdown.SECONDS);

    // We add this timer to the monster pool
    // this would be helpful to reset timers and stuff
    monster_timer_pool[$monster_id].push(timerId);

  });


})(window.jQuery);
