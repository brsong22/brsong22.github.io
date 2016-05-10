(function() {
  var delay = false;

  $(document).on('mousewheel DOMMouseScroll', function(event) {
    event.preventDefault();
    if(delay) return;

    delay = true;
    setTimeout(function(){delay = false},500)

    var wheelScroll = event.originalEvent.wheelDelta || -event.originalEvent.detail;

    var spaces = document.getElementsByClassName('space');
    if(wheelScroll < 0) {
      for(var i = 0 ; i < spaces.length ; i++) {
        var t = spaces[i].getClientRects()[0].top;
        if(t >= 40) break;
      }
    }
    else {
      console.log('gt 0');
      for(var i = spaces.length-1 ; i >= 0 ; i--) {
        var t = spaces[i].getClientRects()[0].top;
        if(t < -20) break;
      }
    }
    $('.content').animate({
      scrollTop: spaces[i].offsetTop
    });
  });
})();