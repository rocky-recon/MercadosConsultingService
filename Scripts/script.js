$(document).ready(function () {
  $(".nav-item a").on("click", (e) => {
    if ($(".active").length) {
      $($(".active")[0]).removeClass("active");
    }

    $($(e.target).parent()[0]).addClass("active");
  });
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
