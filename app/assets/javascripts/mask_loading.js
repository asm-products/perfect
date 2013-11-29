function maskLoad(){
  $('body').prepend('<div class="loading-mask"><div class="processing-message">Processing<br><br><i class="fa fa-spinner fa-spin"></i></div></div>')
  $(".processing-message").css('top', $(document).height()/2)
}

function unmaskLoad(){
  $(".loading-mask").remove()
}