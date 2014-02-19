Perfect.Views ||= {}

class Perfect.Views.EditorView extends Backbone.View
  template : JST["backbone/templates/editor"]

  events :
    "click .zoom-in" : "zoom_in"
    "click .zoom-out" : "zoom_out"
    "click .looks-good" : "checkout"

  render : ->
    $(@el).html(@template())
    @show_thumbnail(postcards.models[0].attributes.image.files[0])
    @setup_stripe()
    @$discount_code = @$(".discount-code")

  show_thumbnail: (file) ->
    that = @
    if !file.type.match(/image.*/)
      js_flash("You need to upload a valid image file.")
      window.history.back();
    else
      image = document.createElement("img");
      image.file = file;
      document.getElementById("thumbnail").appendChild(image)
      reader = new FileReader()
      reader.onload = do (aImg = image) ->
        (e) ->
          aImg.src = e.target.result
      ret = reader.readAsDataURL(file);
      canvas = document.createElement("canvas");
      ctx = canvas.getContext("2d");
      image.onload= ()->
        ctx.drawImage(image,100,100)
      $(".card-image-select").fadeIn('500')
      @$thumbnail_container = $("#thumbnail")
      @$thumbnail = $("#thumbnail img")
      @postcard = postcards.models[0]
      $(".toolbar").show()
      @$thumbnail.draggable()
      @$thumbnail.load ()->
        wh = that.calculate_aspect_ratio_fit($(this), $(".card-image-select").width(), $(".card-image-select").height())
        $(this).width(wh.width).height(wh.height)
        js_flash('Drag your image to fit into the postcard frame. Use the zoom buttons to resize it if desired.')


  calculate_aspect_ratio_fit: (el, max_width, max_height) ->
    src_width = el.width()
    src_height = el.height()
    ratio = [max_width / src_width, max_height / src_height]
    ratio = Math.min(ratio[0], ratio[1])
    width: src_width * ratio
    height: src_height * ratio

  image_information: ->
    '[postcard]width': @$thumbnail.width()
    '[postcard]height': @$thumbnail.height()
    '[postcard]offset_top': @$thumbnail.offset().top - @$thumbnail_container.offset().top
    '[postcard]offset_left': @$thumbnail.offset().left - @$thumbnail_container.offset().left
    '[postcard]frame_width': $(".card-image-select").width()
    '[postcard]frame_height': $(".card-image-select").height()

  zoom_in: ->
    wh = @calculate_aspect_ratio_fit(@$thumbnail, parseInt(@$thumbnail.css("width")) * 1.1, parseInt(@$thumbnail.css("height")) * 1.1)
    @$thumbnail.width(wh.width).height wh.height

  zoom_out: ->
    $t = $("#thumbnail img")
    wh = @calculate_aspect_ratio_fit(@$thumbnail, parseInt(@$thumbnail.css("width")) * .9, parseInt(@$thumbnail.css("height")) * .9)
    @$thumbnail.width(wh.width).height wh.height


  checkout: ->
    that = @
    @check_discount_code(@$discount_code.val())
  
  send_card: ->
    that = @
    $("body").append('<form enctype="multipart/form-data" action="/make_postcard" method="POST" style="display: none"/>') if $("form").length == 0
    @$form = $("form")
    $.each @image_information(), (i, v)-> postcards.models[0].set i, v
    $.each postcards.models[0].attributes, (i, v)->
      if i == 'image' 
        that.$form.append(v)
      else if i == 'postcard[message]'
        that.$form.append("<textarea name='#{i}'>#{v}</textarea>")
      else
        that.$form.append("<input type='hidden' value='#{v}' name='#{i}'>")
    @$form.append("<input type='hidden' value='#{$('meta[name="csrf-token"]').attr("content")}' name='authenticity_token'>")
    @$form.append("<input type='hidden' value='#{@$discount_code.val()}' name='code'>")
    maskLoad()
    @$form.submit()

  setup_stripe: ->
    that = @
    @handler = StripeCheckout.configure
      key: $("#stripe_key").data("key")
      image: "/assets/square-image.png"
      token: (token, args) ->
        $("body").append('<form enctype="multipart/form-data" action="/make_postcard" method="POST" style="display: none"/>')
        $("form").append "<input type='hidden' value='" + token.id + "' name='payment_token'>"
        that.send_card()
      panelLabel: "Send Postcard"

  check_discount_code: (code) ->
    that = @
    if code != "" 
      $.post("/check_discount", {code: code.toUpperCase()}).done($.proxy((data)->
        that.run_card(data)
      ), that)
    else
      @run_card()

  run_card: (discount) ->
    that = @
    no_handler = false
    console.log(discount)
    if discount != undefined
      if $.isEmptyObject(discount) || discount.uses <= 0
        js_flash("Sorry, your discount code was invalid.")
        amount = if postcards.models[0].attributes["address[country]"] is "US" then 200 else 300
      else if discount.dtype == "cost"
        amount = if postcards.models[0].attributes["address[country]"] is "US" then 128 else 207
      else if discount.dtype == "percent"
        if discount.amount == 100
          no_handler = true
          @send_card()
        else
          amount = if postcards.models[0].attributes["address[country]"] is "US" then 200*(discount.amount/100) else 300*(discount.amount/100)
      
    else
      amount = if postcards.models[0].attributes["address[country]"] is "US" then 200 else 300
    if !no_handler
      @handler.open
        name: "postperfect.co"
        description: "1 postcard"
        amount: amount