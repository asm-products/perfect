class Perfect.Models.Postcard extends Backbone.Model
  paramRoot: 'postcard'
  defaults: {}

class Perfect.Collections.PostcardsCollection extends Backbone.Collection
  model: Perfect.Models.Postcard
  url: '/postcards'