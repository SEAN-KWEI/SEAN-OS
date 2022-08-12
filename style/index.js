var iconImage = document.querySelector("#lock");
var container = document.querySelector("body");

container.addEventListener("mousemove", function(event) {
	var xPosition = event.clientX - container.getBoundingClientRect().left - (iconImage.clientWidth / 2);
	var yPosition = event.clientY - container.getBoundingClientRect().top - (iconImage.clientHeight / 2);
	// in case of a wide border, the boarder-width needs to be considered in the formula above
	iconImage.style.left = xPosition + "px";
	iconImage.style.top = yPosition + "px";
	}
);

// fading in and out the loading
setTimeout(hideLoad, 5000);

function hideLoad() {
  let star = document.getElementById('key');
  let loadBar = document.getElementById('fill');
  star.style.opacity = '1';
  loadBar.style.opacity = '1';
}