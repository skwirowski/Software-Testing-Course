$(document).ready(function() {
  $(".random-div-paragraph").click(function() {
    $(this).hide();
  });

  $(".random-div-paragraph").mouseenter(function() {
    $(this).fadeOut();
  });

  $(".random-div-paragraph").mouseleave(function() {
    $(this).fadeIn();
  });

  $("input").focus(function() {
    $(this).css("background-color", "lightcoral");
  });

  $("input").focusout(function() {
    $(this).css("background-color", "#ffffff");
  });

  $("#div-one").on({
    mouseenter: function() {
      $(this).css("background", "lightblue");
    },
    mouseleave: function() {
      $(this).css("background", "lightgreen");
    },
    click: function() {
      $(this).css("background", "lightcoral");
    }
  });

  $("#div-two-button").click(function() {
    $("span").toggle();
  });

  $("#div-three-fadeIn-button").click(function() {
    $("#div-three-1").fadeIn();
    $("#div-three-2").fadeIn("slow");
    $("#div-three-3").fadeIn(3000);
  });

  $("#div-three-fadeOut-button").click(function() {
    $("#div-three-1").fadeOut();
    $("#div-three-2").fadeOut("slow");
    $("#div-three-3").fadeOut(3000);
  });

  $("#div-four-button-1").click(function() {
    alert("This is paragraph text content: " + $("#div-four-paragraph").text());
  });

  $("#div-four-button-2").click(function() {
    alert("This is paragraph HTML content: " + $("#div-four-paragraph").html());
  });

  $("#div-four-button-3").click(function() {
    alert("Read carefully: " + $("#div-four-button-1").val());
  });

  $("#div-five-button-1").click(function() {
    $("body").remove();
  });
  $("#div-five-button-2").click(function() {
    $("body").empty();
  });
});
