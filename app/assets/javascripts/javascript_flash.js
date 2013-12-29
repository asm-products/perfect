function js_flash(msg, type, delay){
  if(typeof(type)==='undefined') type='notice';
  if(typeof(delay)==='undefined') delay=10000;
  if(type == 'notice'){
    klass = "notice"
  }else{
    klass = "alert"
  }
  if($(".flash.notice").length == 0){
    $(".flash-wrapper").append("<div class='flash notice'/>")
  }
  $(".flash.notice").html(msg).addClass(klass).parent().addClass(klass).slideDown()
  setTimeout(function(){$(".flash.js").parent().fadeOut(3000)}, 10000)
  return true
}

//Hide the flash after ten seconds
setTimeout(function(){$(".flash").parent().fadeOut(3000)}, 10000)

$(document).ready( function(){
  $(".flash-wrapper").click( function(e){
    $(e.currentTarget).fadeOut('1000')
  })
  if($(".flash-wrapper > .flash").text() != ""){
    delay = 8000
    if($(".flash-wrapper > .flash").hasClass('notice')){
      klass = "notice"
    }else{
      klass = "alert"
    }
    $(".flash-wrapper").addClass(klass).slideDown()
    setTimeout(function(delay){$(".flash.js").parent().fadeOut(delay/4)}, delay)
  }
  
})
  