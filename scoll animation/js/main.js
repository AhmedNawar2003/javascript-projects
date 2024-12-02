let boxes = document.querySelectorAll(".content");
window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  let triggerBottom = window.innerHeight * 0.8;
  boxes.forEach((box) => {
    let boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
