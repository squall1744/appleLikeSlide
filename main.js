let $button = $('#button li')
let $image= $('#image')
let $window = $('.window')
let n = 0



for(let i=0; i<$button.length; i++) {
  $($button[i]).on('click', e => {
    slide(e.currentTarget)
  })
}

let clock = AutoSlide()

stopSlide()





function slide(node) {
  let index = $(node).index()
  $image.css({
    transform: `translateX(${index * -100}%)`
  })
  $(node).addClass('active').siblings('.active').removeClass('active')
  n = index
}

function AutoSlide() {
  return setInterval(() => {
    $button.eq(n%$button.length).trigger('click')
    n += 1
  },2000)
}

function stopSlide() {
  $window.on('mouseenter', () => {
    clearInterval(clock)
  })
  
  $window.on('mouseleave', () => {
    clock = AutoSlide()
  })
}
