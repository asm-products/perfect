// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require lib/parsley
//= require fancybox
//= require lib/jquery.FlowupLabels
//= require jquery.ui.draggable
// = require javascript_flash


$(document).ready(function(){
  $(".field").addClass('fl_wrap')
  $(".field label").addClass('fl_label')
  $(".field input[type='text']").addClass('fl_input')
  $('.FlowupLabels').FlowupLabels({
        feature_onInitLoad: false,
        class_focused:      'focused',
        class_populated:    'populated' 
  });
  $(".message").focus()
  $(".reverse").click(function(){
    $("#options").fadeToggle(600)
    $("#home").hide()
  })
  $(".upload").change(function(){
    showThumbnail($(".upload")[0].files)
    $(".card-options").hide()
    $(".card-image-select").fadeIn('500')
    $thumbnail = $("#thumbnail")
    $thumbnail.draggable()
    $t = $("#thumbnail img")
    $(".toolbar").show()
    $t.load(function(){
      wh = calculateAspectRatioFit($(this), 600, 400)
      $(this).width(wh.width).height(wh.height)
      js_flash('Drag your image to fit into the postcard frame. Use the zoom buttons to resize it if desired.')
    })
  })
  $(".message").one('keyup',function(){
    $('.reverse-wrapper').fadeIn('1000').children().css('display', 'inline-block')
    $(".logotype, .subheader").animate({'opacity':'.7'}, 200).animate({'opacity':'1'}, 200)
  })
  $(".zoom-in").click(function(){
    $t = $("#thumbnail img")
    wh = calculateAspectRatioFit($t, parseInt($t.css('width'))*1.1, parseInt($t.css('height'))*1.1)
    $t.width(wh.width).height(wh.height)
  })
  $(".zoom-out").click(function(){
    $t = $("#thumbnail img")
    wh = calculateAspectRatioFit($t, parseInt($t.css('width'))*.9, parseInt($t.css('height'))*.9)
    $t.width(wh.width).height(wh.height)
  })
})

function storeImgInformation(el){
  var img = $(el)
  width = img.width()
  height = img.height()


  return {
    width: width,
    height: height
  }
}

function calculateAspectRatioFit(el, maxWidth, maxHeight){
  var srcWidth = el.width()
  var srcHeight = el.height()
  console.log(srcWidth, srcHeight)
  var ratio = [maxWidth / srcWidth, maxHeight / srcHeight]
  ratio = Math.min(ratio[0], ratio[1])
  return {
    width: srcWidth * ratio,
    height: srcHeight * ratio
  }
}

function showThumbnail(files){
  for(var i=0;i<files.length;i++){
    var file = files[i]
    var imageType = /image.*/
    if(!file.type.match(imageType)){
      console.log("Not an Image");
      continue;
    }

    var image = document.createElement("img");
    // image.classList.add("")
    var thumbnail = document.getElementById("thumbnail");
    image.file = file;
    thumbnail.appendChild(image)

    var reader = new FileReader()
    reader.onload = (function(aImg){
      return function(e){
        aImg.src = e.target.result;
      };
    }(image))
    var ret = reader.readAsDataURL(file);
    var canvas = document.createElement("canvas");
    ctx = canvas.getContext("2d");
    image.onload= function(){
      ctx.drawImage(image,100,100)
    }
  }
}

