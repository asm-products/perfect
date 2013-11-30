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
    amount = calculate_amount()
    if($("#discount").val() != ""){
      $.get('/check_discount', {discount: $("#discount").val()}
      ).done(function(data){
        if(!$.isEmptyObject(data)){
          amount = apply_discount(data, amount)
          run_card(amount)
          js_flash('Discount code ' + data.code + ' applied!')
        }else{
          $("#discount").val('')
          js_flash('Discount code invalid.')
        }
      })
    }else{
      run_card(amount)
    }

  }
})

function run_card(amount){
  handler.open({
    name: 'postperfect.co',
    description: '1 postcard',
    amount: amount,
    email: $("#email").val()
  });
}

function calculate_amount(){
  if($("#country").val() == "US"){
    return 200
  }else{
    return 300
  }
}

function apply_discount(object, price){
  if(object.dtype == 'percent'){
    return parseFloat(price)*(parseFloat(1-(object.amount/100)))
  }
}