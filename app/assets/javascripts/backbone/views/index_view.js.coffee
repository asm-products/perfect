Perfect.Views ||= {}

class Perfect.Views.IndexView extends Backbone.View
  template : JST["backbone/templates/index"]

  events :
    "click .message"  : "message_click"
    "click .pick-front" : "save_postcard"
    "submit form"       : "show_next_click"
    "change input" : "trigger_focus"
    "click .fl_label" : "trigger_focus_on_label"

  initialize: (options) ->
    @states = @options.states
    @countries = @options.countries

  render : ->
    $(@el).html(@template(states: @states, countries: @countries))
    @setup_initial_message() if $(".message").val() == ""
    @country_select_two()
    @state_select_two()
    @flow_up_labels()
    $(".pick-front").fadeIn('900') if $("input").first().val() != ""
    $("form").listenForChange()

  setup_initial_message: ->
    that = @
    message_1 = "Hey Mom!\n\nI'm having an amazing time here in Paris. The food is great, if a bit buttery. You and Dad would absolutely love the Arc de triomphe, the delicious La Coupole, and of course the Eiffel Tower. Au revoir! \n\nSally"
    message_2 = "Hi Sally,\n\nYour Dad and I are quite jealous of this Eurotrip that you're on. We're so happy that you're having a great time though! The view from the Eiffel Tower looks wonderful. All of our love to you and John,\n\nMom and Dad"
    message_3 = "Brad:\n\nIt was a pleasure meeting up last week in LA. I'm excited to discuss further possibilities for a potential partnership between ACME and RANDOM Corp. Happy Holidays!\n\nWilly Wonka"
    init_message = "Start by typing your message here, like so!"
    @messages = [message_1, message_2, message_3]
    if $("textarea").val() == ""  
      $("textarea").val(init_message)
      setTimeout ()-> 
        that.setup_textarea_preview(that.messages)
      , 3000

  setup_textarea_preview: (messages) ->
    $("textarea").fadeOut('1000', ()-> $(this).val(messages[parseInt(Math.random()*3)]).hide().fadeIn('2000'))


  country_select_two: ->
    that = @
    $("#country").select2(dropdownAutoWidth: true).change(->
      $("#s2id_country a.select2-choice .select2-chosen").text $(this).val()
      $("#s2id_state").load "/subregion_options?parent_region=" + $(this).val(), ->
        $(this).children(":first").unwrap()
        # that.state_select_two()
    ).trigger "change"

  state_select_two: ->
    $("#state").select2(dropdownAutoWidth: true).change(->
      $("#s2id_state a.select2-choice .select2-chosen").text $(this).val()
    ).trigger "change"

  flow_up_labels: ->
    $(".field").addClass('fl_wrap')
    $(".field label").addClass('fl_label')
    $(".field input[type='text'], .field input[type='tel']").addClass('fl_input')
    ($.each postcards.models[0].attributes, (i, v)-> $("[name='#{i}']").val(v).parent().addClass('populated')) if postcards && postcards.models[0]
    $('.FlowupLabels').FlowupLabels
      feature_onInitLoad: true
      class_focused:      'focused'
      class_populated:    'populated' 


  save_postcard: (e) ->
    that = @
    if $("form")[0].checkValidity() && $("textarea")[0].checkValidity() && @messages.indexOf($("textarea").val()) == -1
      @postcard ||= new Perfect.Models.Postcard
      $("input, textarea, select").each (i, v)->
        that.postcard.set $(v).attr('name'), $(v).val()
      postcards.push @postcard
    else
      e.preventDefault()
      js_flash("Whoops! Make sure you've filled out everything.")

  message_click: ->
    data = $("textarea").val()
    $('textarea').focus().val('').val(data).removeClass('placeholder')
    $(".pick-front").fadeIn('900')
    if $("textarea").val() != "" && !@message_keydown_activated
      $("textarea").val("")
      @message_keydown_activated  = true

  show_next_click: ->
    $(".pick-front").click()


  trigger_focus: (e) ->
    $(e.currentTarget).focus()

  trigger_focus_on_label: (e) ->
    $(e.currentTarget).next().focus()