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

$(document).ready(function(){
  $(".field").addClass('fl_wrap')
  $(".field label").addClass('fl_label')
  $(".field input[type='text']").addClass('fl_input')
  $('.FlowupLabels').FlowupLabels({
        feature_onInitLoad: false,
        class_focused:      'focused',
        class_populated:    'populated' 
  });
})

