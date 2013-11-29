var handler = StripeCheckout.configure({
  key: $("#stripe_key").data('key'),
  image: '/assets/square-image.png',
  token: function(token, args) {
    $("#payment_token").val(token.id)
    maskLoad()
    $(".destination").submit()
  }
});

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