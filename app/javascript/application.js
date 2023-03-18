// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails

//= require jquery
//= require jquery_ujs
//= require semantic-ui
//= require_tree .

$(function() {
    $('.ui.dropdown').dropdown();
})

$('.message .close')
  .on('click', function() {
    $(this)
      .closest('.message')
      .transition('fade')
    ;
  })
;
import "channels"

function scroll_bottom() {
  if ($('#message_content').length < 0) {
    return;
  }

  $('#message_content').scrollTop($('#message_content')[0].scrollHeight);
}

scroll_bottom();