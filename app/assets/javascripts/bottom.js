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

$(".next").click( function(){
  Reveal.next();
})

$(".card").click( function(e){
  $(".card").removeClass('selected')
  $(e.currentTarget).addClass('selected')
  $("textarea.message").focus()
  Reveal.next();
})