var counter = document.querySelector("#counter");
var blurryLoading = document.querySelector(".blurryLoading");
var blurValue = 10;
let id = setInterval(function () {
  if (counter.innerHTML == 0) {
    clearInterval(id);
    counter.style.opacity = 0;
    if (blurValue == 0) blurryLoading.style.filter = `blur(${blurValue}px)`;
  } else {
    counter.innerHTML -= 1;
    counter.style.opacity = 1;
    blurValue -= 0.1;
    blurryLoading.style.filter = `blur(${blurValue}px)`;
  }
}, 25);

