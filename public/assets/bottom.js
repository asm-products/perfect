function run_card(e){amount="US"==e.models[0].attributes["address[country]"]?200:300,handler.open({name:"postperfect.co",description:"1 postcard",amount:amount})}!function(e,t,a,n,o,s,r){e.GoogleAnalyticsObject=o,e[o]=e[o]||function(){(e[o].q=e[o].q||[]).push(arguments)},e[o].l=1*new Date,s=t.createElement(a),r=t.getElementsByTagName(a)[0],s.async=1,s.src=n,r.parentNode.insertBefore(s,r)}(window,document,"script","//www.google-analytics.com/analytics.js","ga"),ga("create","UA-45980938-1","postperfect.co"),ga("send","pageview");var handler=StripeCheckout.configure({key:$("#stripe_key").data("key"),image:"/assets/square-image.png",token:function(e){$("form").append("<input type='hidden' value='"+e.id+"' name='payment_token'>"),maskLoad(),$("form").submit()},panelLabel:"Send Postcard"});