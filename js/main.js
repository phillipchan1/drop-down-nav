$(document).ready(function() {
  var $dropdownHover = $(".dropdown-hover");
  $(".menu-dropdown").on("mouseover", function(e) {
    // console.log(e);
    var $dropdownContent = $(this).find(".dropdown-content");

    var dropdownContentPosition = $dropdownContent.offset();
    var dropdownHeight = $dropdownContent.height();
    var dropdownWidth = $dropdownContent.width();
    var padding = 15;

    $dropdownHover.animate(
      {
        left: dropdownContentPosition.left,
        height: dropdownHeight + padding,
        width: dropdownWidth + padding,
        top: dropdownContentPosition.top,
        opacity: 1
      },
      150
    );
  });

  $("nav").on("mouseleave", function(e) {
    $dropdownHover.animate(
      {
        opacity: 0
      },
      150
    );
  });
});
