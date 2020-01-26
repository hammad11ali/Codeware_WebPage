"use strict";

function count() {
  var message = document.getElementById("message");
  var counter = document.getElementById("textCount");
  var count = message.value.length;
  if (count == 100) {
    counter.innerHTML = "Max Limit Reached";
  } else if (count > 40) {
    counter.innerHTML = "Max: " + count + "/100";
  } else {
    counter.innerHTML = "Min: " + count + "/40";
  }
}

function submitForm() {
  var name = document.getElementById("fullname");
  var email = document.getElementById("email");
  var message = document.getElementById("message");
  var letters = /^[A-Za-z ]+$/;
  if (!name.value.match(letters)) {
    alert("Use only alphabets in Name");
    return false;
  }
  name.value = "";
  email.value = "";
  message.value = "";
  alert("Your Message has been submitted");
  return false;
}

jQuery(document).ready(function($) {
  /************** Background Polygon Drawing *********************/

  var canvas = document.createElement("canvas");
  canvas.width = 894;
  canvas.height = 854;
  if (canvas && canvas.getContext) {
    var ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.fillStyle = "#383e42";
      ctx.beginPath();
      ctx.moveTo(0, 470);
      ctx.lineTo(223, 82);
      ctx.lineTo(670, 82);
      ctx.lineTo(894, 470);
      ctx.lineTo(670, 854);
      ctx.lineTo(223, 854);
      ctx.fill();
    }
  }

  $("body").css({
    "background-image": "url(" + canvas.toDataURL("image/png") + ")"
  });
  $("body").css({ "background-repeat": "no-repeat" });
  $("body").css({ "background-position": "center top" });
  $(".overlay").hide();

  /************** Gallery Hover Effect *********************/
  $(".overlay").hide();

  $(".gallery-item, .team-item").hover(
    function() {
      $(this)
        .find(".overlay")
        .addClass("animated fadeIn")
        .show();
    },
    function() {
      $(this)
        .find(".overlay")
        .removeClass("animated fadeIn")
        .hide();
    }
  );
});
