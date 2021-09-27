jQuery(window).bind("scroll", function () {
  scrolled = jQuery(window).scrollTop();
  weight1 = 0.15;
  weight2 = 0.2;
  weight3 = 0.3;
  jQuery(".parallax1").css("top", 200 - scrolled * weight1 + "px");
  jQuery(".parallax2").css("top", 200 - scrolled * weight2 + "px");
  jQuery(".parallax3").css("top", 200 - scrolled * weight3 + "px");
});
