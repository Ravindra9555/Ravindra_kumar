/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("sidebar1").style.top = "0";
  } else {
    document.getElementById("sidebar1").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}