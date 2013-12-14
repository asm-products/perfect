var handler = StripeCheckout.configure({
  key: $("#stripe_key").data('key'),
  image: '/assets/square-image.png',
  token: function(token, args) {
    $("form").append("<input type='hidden' value='"+token.id+"' name='payment_token'>")
    maskLoad()
    $("form").submit()
  },
  panelLabel: "Send Postcard"

});

function run_card(postcards){
  amount = postcards.models[0].attributes["address[country]"] == "US" ? 200 : 300
  handler.open({
    name: 'postperfect.co',
    description: '1 postcard',
    amount: amount
  });
}