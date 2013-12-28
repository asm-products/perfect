Perfect.Views ||= {}

class Perfect.Views.OptionsView extends Backbone.View
  template : JST["backbone/templates/options"]

  events :
    "change .upload" : "show_image_editor"
    "change .upload-new" : "show_image_editor"

  render : ->
    $(@el).html(@template())
    # Prevent object not found error for file upload
    $(".upload").replaceWith postcards.models[0].attributes.image if postcards.models.length > 0 && postcards.models[0].attributes.image
      

  show_image_editor: (e) ->
    postcards.models[0].set('image', $(".upload")[0], {silent: true})
    window.location = "#editor"