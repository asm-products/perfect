//Select a card
$(".card").click( function(e){
  $(".card").removeClass('selected')
  $(e.currentTarget).addClass('selected')
  $('.photo-chosen').val($(e.currentTarget).attr('src'))
  $("textarea.message").focus()
  Reveal.slide( 2, 0, 0);
})

//Submit your message
$(".where").click( function(){
  if($(".message").val() == ""){
    js_flash("You should write a message before you continue!")
  }else{
    $(".final-message").val($(".message").val())
    Reveal.next();
  }
})
