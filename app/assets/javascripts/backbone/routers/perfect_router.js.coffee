class Perfect.Routers.PerfectRouter extends Backbone.Router
  initialize: (options) ->
    @el = $("#perfect")
    # @postcards = new Perfect.Collections.PostcardsCollection()
    # @postcards.reset options.postcards

  routes:
    "home"      : "index"
    "options"   : "options"
    "editor"    : "editor"

  index: ->
    @index_view ||= indexView
    @index_view.render()

  options: ->
    @options_view ||= new Perfect.Views.OptionsView(el: @el)
    @options_view.render()

  editor: (image) ->
    @editor_view ||= new Perfect.Views.EditorView(el: @el, image: image)
    @editor_view.render()