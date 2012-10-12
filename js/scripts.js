$(window).load(function() {
    $('.slider').nivoSlider();
     // side bar
    $('#navbar').affix({
      offset: {
        top: function () { return $(window).width() <= 980 ? 474 : 522 }
      , bottom: 270
      }
    })
});
