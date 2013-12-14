class Perfect.Routers.PostcardsRouter extends Backbone.Router
  initialize: (options) ->
    @postcards = new Perfect.Collections.PostcardsCollection()
    @postcards.reset options.postcards

  routes:
    "new"      : "newPostcard"
    "index"    : "index"
    ":id/edit" : "edit"
    ":id"      : "show"
    ".*"        : "index"

  newPostcard: ->
    @view = new Perfect.Views.Postcards.NewView(collection: @postcards)
    $("#postcards").html(@view.render().el)

  index: ->
    @view = new Perfect.Views.Postcards.IndexView(postcards: @postcards)
    $("#postcards").html(@view.render().el)

  show: (id) ->
    postcard = @postcards.get(id)

    @view = new Perfect.Views.Postcards.ShowView(model: postcard)
    $("#postcards").html(@view.render().el)

  edit: (id) ->
    postcard = @postcards.get(id)

    @view = new Perfect.Views.Postcards.EditView(model: postcard)
    $("#postcards").html(@view.render().el)
