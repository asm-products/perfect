function js_flash(msg, type){
  if(typeof(type)==='undefined') type='notice';
  if(type == 'notice'){
    klass = "notice"
  }else{
    klass = "alert"
  }
  $(".flash.js").html(msg).parent().addClass(klass).slideDown()
  setTimeout(function(){$(".flash.js").parent().fadeOut('1000')}, 8000)
}

//Hide the flash after five seconds
setTimeout(function(){$(".flash").parent().fadeOut('1000')}, 8000)

$(document).ready( function(){
  $(".flash-wrapper").click( function(e){
    $(e.currentTarget).fadeOut('1000')
  })
})
  