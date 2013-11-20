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
//= require lib/parallax.min
//= require_tree .

for(x=0;x<4;x++){
  parallax.add("page-"+x, $(".page-" + x))
}

parallax.background = $("body");
parallax.scaling = 0.4; //background moves 40% with the pages

$(document).ready( function(){
  $(".page").each( function(i, v){
    console.log($(window).height())
    console.log($(v).height())
    console.log(($(window).height()-$(v).height())/2)
    $(v).css('margin-top', ($(window).height()-$(v).height())/2)
  })
})
