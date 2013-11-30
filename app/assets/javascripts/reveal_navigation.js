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

Reveal.addEventListener( 'slidechanged', function( event ) {
  paginate_card_arrows()
} );

// Navigation
$(".next").click( function(){
  Reveal.right();
})

$(".prev").click( function(){
  Reveal.left();
})

$(".next-page").click(function(){
  Reveal.down()
  paginate_card_arrows()
})

$(".previous-page").click(function(){
  Reveal.up()
  paginate_card_arrows()
})

function paginate_card_arrows(){
  if($(".card-section").length == (Reveal.getIndices().v + 1)){
    $(".next-page").hide()
    $(".previous-page").css('display', 'inline-block')
  }else if(1 == (Reveal.getIndices().v + 1)){
    $(".next-page").css('display', 'inline-block')
    $(".previous-page").hide()
  }else{
    $(".next-page").css('display', 'inline-block')
    $(".previous-page").css('display', 'inline-block')
  }
}