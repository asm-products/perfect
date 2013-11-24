//= require lib/reveal.min

Reveal.initialize({
  // Display controls in the bottom right corner
     controls: false,

     // Display a presentation progress bar
     progress: false,

     // Push each slide change to the browser history
     history: true,

     // Transition style
     transition: 'fade', // default/cube/page/concave/zoom/linear/fade/none

     // Transition speed
     transitionSpeed: 'default', // default/fast/slow

     // Transition style for full page backgrounds
     backgroundTransition: 'default' // default/linear/none
})


var handler = StripeCheckout.configure({
    key: $("#stripe_key").data('key'),
    image: '/assets/square-image.png',
    token: function(token, args) {
      $("#payment_token").val(token.id)
      maskLoad()
      $(".destination").submit()
    }
  });



$(".next").click( function(){
  Reveal.next();
})

$(".prev").click( function(){
  Reveal.prev();
})

$(".card").click( function(e){
  $(".card").removeClass('selected')
  $(e.currentTarget).addClass('selected')
  $('.photo-chosen').val($(e.currentTarget).attr('src'))
  $("textarea.message").focus()
  Reveal.next();
})

$(".where").click( function(){
  if($(".message").val() == ""){
    js_flash("You should write a message before you continue!")
  }else{
    $(".final-message").val($(".message").val())
    Reveal.next();
    
  }
})

function js_flash(msg){
  $(".flash.js").html(msg).slideDown()
  setTimeout(function(){$(".flash.js").slideUp()}, 5000)
}

setTimeout(function(){$(".flash.notice").slideUp()}, 5000)

$(".flash").click( function(){
  $(".flash").slideUp()
})


$(".purchase").click( function(e){
  e.preventDefault()
  if(allOptionsComplete()){
    if($("#country").val() == "US"){
      amount = 200
    }else{
      amount = 300
    }
    handler.open({
      name: 'postperfect.co',
      description: '1 postcard',
      amount: amount,
      email: $("#email").val()
    });
  }
})

function allOptionsComplete(){
  complete = false
  if(!cardChosen()){
    Reveal.slide( 1, 0, undefined );
    js_flash("Don't forget to choose a card.")
  } else if(!messageWritten()){
    Reveal.slide( 2, 0, undefined );
    js_flash("Don't forget to write a message.")
  } else if(!addressFormComplete()){
    js_flash("Make sure you're done with the address form before submitting your postcard.")
  }else{
    complete = true
  }
  return complete
}

function cardChosen(){
  chosen = false
  $(".card").each( function(i,v){
    if($(v).hasClass('selected')){
      chosen = true
    }
  })
  return chosen
}

function messageWritten(){
  written = false
  if($(".message").val() != ""){
    written = true
  }
  return written
}

function addressFormComplete(){
  return $(".destination")[0].checkValidity()
}


function maskLoad(){
  $('body').prepend('<div class="loading-mask"><div class="processing-message">Processing<br><br><i class="fa fa-spinner fa-spin"></i></div></div>')
  $(".processing-message").css('top', $(document).height()/2)
}

function unmaskLoad(){
  $(".loading-mask").remove()
}
