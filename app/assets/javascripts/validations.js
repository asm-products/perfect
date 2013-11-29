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