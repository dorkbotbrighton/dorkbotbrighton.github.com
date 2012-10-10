$(window).load(function() {
    $('.slider').nivoSlider();
     // side bar
    $('#navbar').affix({
      offset: {
        top: function () { return $(window).width() <= 980 ? 155 : 225 }
      , bottom: 270
      }
    })
});
