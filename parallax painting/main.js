$(window).scroll(function(){
  var scroll = $(window).scrollTop();
  $('.layerOne img').css({
    width: (100 + scroll/10) + '%',
    top: (0 + scroll * -0.1) + 'px'
  })
})

$(window).scroll(function(){
  var scroll = $(window).scrollTop();
  $('.layerTwo img').css({
    width: (100 + scroll/40) + '%',
    top: (0 + scroll * -0.1) + 'px'
  })
})

$(window).scroll(function(){
  var scroll = $(window).scrollTop();
  $('.layerThree img').css({
    width: (100 + scroll/60) + '%',
    top: (0 + scroll * -0.05) + 'px'
  })
})

$(window).scroll(function(){
  var scroll = $(window).scrollTop();
  $('.layerFour img').css({
    width: (100 + scroll/80) + '%',
    top: (0 + scroll * -0.04) + 'px'
  })
})

