// Design 01

const parallax = document.getElementById("parallax");

window.addEventListener("scroll", function ()
{
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset
  * 0.4 + "px";
})


// Design 02

const parallax = document.querySelectorAll(".parallax");

window.addEventListener("scroll", function()
{
  let offset = window.pageYOffset;
  parallax.forEach(function(prllx, i) {
  prllx.style.backgroundPositionY = (offset - prllx.offsetTop) * 0.4 + "px";
  })
})
