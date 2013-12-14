Perfect.Views ||= {}

class Perfect.Views.OptionsView extends Backbone.View
  template : JST["backbone/templates/options"]

  events :
    "change .upload" : "show_image_editor"
    "change .upload-new" : "show_image_editor"

  render : ->
    $(@el).html(@template())
    # Prevent object not found error for file upload
    if postcards.models.length > 0
      $(".upload").wrap("<div class='upload-wrapper'/>")
      $(".upload").parent().html(postcards.models[0].attributes.image)
      $(".upload").unwrap()
      
  show_image_editor: (e) ->
    postcards.models[0].set('image', $(".upload")[0], {silent: true})
    window.location = "#editor"