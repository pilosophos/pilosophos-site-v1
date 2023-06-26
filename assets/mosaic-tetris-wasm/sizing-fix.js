/**
 * This crap fixes a weird display bug that happens with the controls definition list
 * when the right-floating mosaic tetris demo's height extends into the same
 * vertical area as the definition list.
 * Forcing the definition list to be 100% minus the width of the demo fixes it.
 */
(function() {
  const demoWidth = document.getElementById("demo").offsetWidth;
  const controls = document.getElementById("controls");
  controls.style.width = `calc(100% - ${demoWidth}px`;
  controls.style.display = "inline-block";
})();