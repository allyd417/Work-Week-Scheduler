var past = 'past';
var present = 'present';
var future = 'future';
var saveBtn = $('.saveBtn');

function time() {
  var currentDay = dayjs().format('MMM DD, YYYY HH:mm:ss ');
  $('#currentDay').text(currentDay);
}
function currentTime() {
  var now = dayjs().hour();

  $(".time-block").each(function() {
    var timeSlot = parseInt($(this).data("hour"));
    if (timeSlot < now) {
      $(this).removeClass(present).removeClass(future).addClass(past);
    } else if (timeSlot === now) {
      $(this).removeClass(past).removeClass(future).addClass(present);
    } else {
      $(this).removeClass(past).removeClass(present).addClass(future);
    }
  });
}
function currentTime() {
  var now = dayjs().hour();

  $(".time-block").each(function() {
    var timeSlot = parseInt($(this).data("hour"));
    if (timeSlot < now) {
      $(this).removeClass(present).removeClass(future).addClass(past);
    } else if (timeSlot === now) {
      $(this).removeClass(past).removeClass(future).addClass(present);
    } else {
      $(this).removeClass(past).removeClass(present).addClass(future);
    }
  });
}

$(function() {
  $(".time-block").each(function() {
    var id = $(this).attr("id");
    $(this).find(".description").val(localStorage.getItem(id));
    $(this).data("hour", id.split("hour")[1]);
});

saveBtn.on('click', function() {
  var toDo = $(this).siblings(".description").val();
  var when = $(this).parent().attr('id');
  localStorage.setItem(when, toDo);
});

currentTime();
  setInterval(time, 1000);
});
