# This is a manifest file that'll be compiled into application.js, which will include all the files
# listed below.
#
# Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
# or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
#
# It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
# compiled file.
#
# Read Sprockets README (https:#github.com/sstephenson/sprockets#sprockets-directives) for details
# about supported directives.
#
#= require jquery
#= require jquery_ujs
#= require jquery.ui.widget
#= require jquery.ui.mouse
#= require lib/jquery.ui.touch-punch
#= require jquery.ui.draggable
#= require lib/listen_for_change

#= require javascript_flash
#= require mask_loading

#= require select2
#= require underscore
#= require backbone
#= require hamlcoffee
#= require lib/jquery.FlowupLabels
#= require fancybox

#= require backbone/perfect

#= require_self

  #   Views = {
  #     postcard_select_view: function(){
  #       $(".page").fadeOut('500', function(){
  #         $("#image-select").fadeIn('500', function(){
  #           $("body").keydown(function(e){
  #             current = $(".all-cards").data('current')
  #             if(e.keyCode == 38){
  #               cardsUp()
  #             }else if(e.keyCode == 40){
  #               cardsDown()
  #             }
  #           })
  #         })
  #       })
  #     },
  #     options_view: function(){
  #       $(".page").fadeOut('500', function(){
  #         $("#options").fadeIn(600)
  #         $("#home").hide()
  #       })
  #     }
  #   }

  #   var imgInformation = {}
  #   $(document).ready(function(){
      

      
  #     $(".upload").change(function(){
  #       showThumbnail($(".upload")[0].files)
  #       $(".card-options").hide()
  #       $(".card-image-select").fadeIn('500')
  #       $thumbnail = $("#thumbnail")
  #       $thumbnail.draggable({
  #         drag: function(){imgInformation = imageInformation($("#thumbnail img"), $(".card-image-select"));}
  #       })
  #       $t = $("#thumbnail img")
  #       $(".toolbar").show()
  #       $t.load(function(){
  #         wh = calculateAspectRatioFit($(this), 600, 400)
  #         $(this).width(wh.width).height(wh.height)
  #         js_flash('Drag your image to fit into the postcard frame. Use the zoom buttons to resize it if desired.')
  #       })
  #     })


  #     $(".steal").click( function(){
  #       $("#options").fadeOut('400')
  #       Views.postcard_select_view()

  #     })
  #     
  #     $("#country").change(function(){
        
  #     })
  #     stateSelectTwo()
     
  #     $(".up").click(cardsUp)
  #     $(".down").click(cardsDown)
  #     $("#options .reverse, #image-select .reverse").click(function(){
  #       $("#home").fadeToggle(600)
  #       $("#options").hide()
  #     })
  #   })


  #   function stateSelectTwo(){
      
  #   }

  #   function imageInformation(elImg, elBoundingBox){

  #     var img = $(elImg)
  #     var bb = $(elBoundingBox)

  #     width = img.width()
  #     height = img.height()
  #     offsetTop = img.offset().top- bb.offset().top
  #     offsetLeft = img.offset().left- bb.offset().left

  #     return {
  #       width: width,
  #       height: height,
  #       offsetTop: offsetTop,
  #       offsetLeft: offsetLeft
  #     }
  #   }

  #   function calculateAspectRatioFit(el, maxWidth, maxHeight){
  #     var srcWidth = el.width()
  #     var srcHeight = el.height()
  #     var ratio = [maxWidth / srcWidth, maxHeight / srcHeight]

  #     ratio = Math.min(ratio[0], ratio[1])

  #     return {
  #       width: srcWidth * ratio,
  #       height: srcHeight * ratio
  #     }
  #   }

  #   function showThumbnail(files){
  #     for(var i=0;i<files.length;i++){
  #       var file = files[i]
  #       var imageType = /image.*/
  #       if(!file.type.match(imageType)){
  #         console.log("Not an Image");
  #         continue;
  #       }

  #       var image = document.createElement("img");
  #       // image.classList.add("")
  #       var thumbnail = document.getElementById("thumbnail");
  #       image.file = file;
  #       thumbnail.appendChild(image)

  #       var reader = new FileReader()
  #       reader.onload = (function(aImg){
  #         return function(e){
  #           aImg.src = e.target.result;
  #         };
  #       }(image))
  #       var ret = reader.readAsDataURL(file);
  #       var canvas = document.createElement("canvas");
  #       ctx = canvas.getContext("2d");
  #       image.onload= function(){
  #         ctx.drawImage(image,100,100)
  #       }
  #     }
  #   }

  #   function parseImgUrl(key){
  #     return "https://s3.amazonaws.com/post-perfect/" + key.substr(0, key.length-4) + ".png?AWSAccessKeyId=" + $(".aws").data('key')
  #   }

  #   function current_val(current, length, sign){
  #     if(sign == "+"){
  #       if(current == length-1){
  #         return 0
  #       }else{
  #         return current + 1
  #       }
  #     }else{
  #       if(current == 0){
  #         return length - 1
  #       }else{
  #         return current - 1
  #       }
  #     }
  #   }

  #   function cardsUp(){
  #     cards = $(".all-cards").data('cards').split(", ")
  #     current = current_val($(".all-cards").data('current'), cards.length, "+")
  #     card = cards[current]
  #     $(".all-cards").attr('src', parseImgUrl(card))
  #     $(".all-cards").data('current', current)
  #     setPostcard(parseImgUrl(card))
  #   }

  #   function cardsDown(){
  #     cards = $(".all-cards").data('cards').split(", ")
  #     current = current_val($(".all-cards").data('current'), cards.length, "-")
  #     card = cards[current]
  #     $(".all-cards").attr('src', parseImgUrl(card))
  #     $(".all-cards").data('current', current)
  #     setPostcard(parseImgUrl(card))
  #   }

  #   function setPostcard(card){
  #     $(".postcard").data('card', card)
  #   }
  # }
