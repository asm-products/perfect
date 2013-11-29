function js_flash(msg){
  $(".flash.js").html(msg).slideDown()
  setTimeout(function(){$(".flash.js").slideUp()}, 5000)
}

//Hide the flash after five seconds
setTimeout(function(){$(".flash.notice").slideUp()}, 5000)

$(".flash").click( function(){
  $(".flash").slideUp()
})