function js_flash(msg, type, delay){
  if(typeof(type)==='undefined') type='notice';
  if(typeof(delay)==='undefined') delay=8000;
  if(type == 'notice'){
    klass = "notice"
  }else{
    klass = "alert"
  }
  $(".flash.js").html(msg).parent().addClass(klass).slideDown()
  setTimeout(function(delay){$(".flash.js").parent().fadeOut(delay/4)}, delay)
}

//Hide the flash after ten seconds
setTimeout(function(){delay = 10000; $(".flash").parent().fadeOut(delay/4)}, delay)

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
  