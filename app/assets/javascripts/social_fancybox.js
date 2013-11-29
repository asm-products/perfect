$(document).ready(function() {
  $(".fancybox").fancybox({
    maxWidth  : 800,
    maxHeight : 150,
    fitToView : false,
    width   : '70%',
    height    : '70%',
    autoSize  : false,
    closeClick  : false,
    openEffect  : 'none',
    closeEffect : 'none'
  });
  if($(".flash").text() == "Your postcard was created successfully. It should arrive in a few days!"){
    $(".fancybox").trigger('click');
  }
});