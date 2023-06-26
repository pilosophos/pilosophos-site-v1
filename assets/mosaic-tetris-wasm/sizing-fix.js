(function() {
  const demoWidth = document.getElementById("demo").offsetWidth;
  const controls = document.getElementById("controls");
  controls.style.width = `calc(100% - ${demoWidth}px`;
  controls.style.display = "inline-block";
})();