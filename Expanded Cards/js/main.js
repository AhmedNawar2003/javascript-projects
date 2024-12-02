// var exploreWorld = document.getElementById("exploreWorld");
// var wildForest = document.getElementById("wildForest");
// var sunnyBeach = document.getElementById("sunnyBeach");
// var cityWinter = document.getElementById("cityWinter");
// var MountainCloud = document.getElementById("MountainCloud");
// var world = document.getElementById("world");
// var forest = document.getElementById("forest");
// var beach = document.getElementById("beach");
// var winter = document.getElementById("winter");
// var cloud = document.getElementById("cloud");
// wildForest.addEventListener("click", function () {
//   wildForest.classList.remove("active");
//   forest.classList.remove("d-none");
//   world.classList.add("d-none");
//   beach.classList.add("d-none");
//   winter.classList.add("d-none");
//   cloud.classList.add("d-none");
//   exploreWorld.classList.add("active");
//   sunnyBeach.classList.add("active");
//   cityWinter.classList.add("active");
//   MountainCloud.classList.add("active");
// });
// sunnyBeach.addEventListener("click", function () {
//   sunnyBeach.classList.remove("active");
//   sunnyBeach.classList.remove("d-none");
//   beach.classList.remove("d-none");
//   world.classList.add("d-none");
//   winter.classList.add("d-none");
//   forest.classList.add("d-none");
//   cloud.classList.add("d-none");
//   exploreWorld.classList.add("active");
//   wildForest.classList.add("active");
//   cityWinter.classList.add("active");
//   MountainCloud.classList.add("active");
// });
// exploreWorld.addEventListener("click", function () {
//   exploreWorld.classList.remove("active");
//   wildForest.classList.add("active");
//   forest.classList.add("d-none");
//   beach.classList.add("d-none");
//   winter.classList.add("d-none");
//   cloud.classList.add("d-none");
//   world.classList.remove("d-none");
//   sunnyBeach.classList.add("active");
//   cityWinter.classList.add("active");
//   MountainCloud.classList.add("active");
// });
// cityWinter.addEventListener("click", function () {
//   cityWinter.classList.remove("active");
//   exploreWorld.classList.add("active");
//   wildForest.classList.add("active");
//   forest.classList.add("d-none");
//   beach.classList.add("d-none");
//   world.classList.add("d-none");
//   cloud.classList.add("d-none");
//   winter.classList.remove("d-none");
//   sunnyBeach.classList.add("active");
//   MountainCloud.classList.add("active");
// });
// MountainCloud.addEventListener("click", function () {
//   MountainCloud.classList.remove("active");
//   exploreWorld.classList.add("active");
//   wildForest.classList.add("active");
//   forest.classList.add("d-none");
//   beach.classList.add("d-none");
//   world.classList.add("d-none");
//   winter.classList.add("d-none");
//   cloud.classList.remove("d-none");
//   sunnyBeach.classList.add("active");
//   cityWinter.classList.add("active");
// });

// Here's another way instead of repeating
var buttons = {
  exploreWorld: {
    button: document.getElementById("exploreWorld"),
    content: document.getElementById("world"),
  },
  wildForest: {
    button: document.getElementById("wildForest"),
    content: document.getElementById("forest"),
  },
  sunnyBeach: {
    button: document.getElementById("sunnyBeach"),
    content: document.getElementById("beach"),
  },
  cityWinter: {
    button: document.getElementById("cityWinter"),
    content: document.getElementById("winter"),
  },
  MountainCloud: {
    button: document.getElementById("MountainCloud"),
    content: document.getElementById("cloud"),
  },
};

var allContents = [
  buttons.exploreWorld.content,
  buttons.wildForest.content,
  buttons.sunnyBeach.content,
  buttons.cityWinter.content,
  buttons.MountainCloud.content,
];
var allButtons = [
  buttons.exploreWorld.button,
  buttons.wildForest.button,
  buttons.sunnyBeach.button,
  buttons.cityWinter.button,
  buttons.MountainCloud.button,
];

function showSection(selectedButtonKey) {
  allContents.forEach((content) => content.classList.add("d-none"));

  allButtons.forEach((button) => button.classList.add("active"));

  buttons[selectedButtonKey].content.classList.remove("d-none");

  buttons[selectedButtonKey].button.classList.remove("active");

  for (let key in buttons) {
    if (key !== selectedButtonKey) {
      buttons[key].button.classList.add("active");
    }
  }
}

buttons.wildForest.button.addEventListener("click", function () {
  showSection("wildForest");
});

buttons.sunnyBeach.button.addEventListener("click", function () {
  showSection("sunnyBeach");
});

buttons.exploreWorld.button.addEventListener("click", function () {
  showSection("exploreWorld");
});

buttons.cityWinter.button.addEventListener("click", function () {
  showSection("cityWinter");
});

buttons.MountainCloud.button.addEventListener("click", function () {
  showSection("MountainCloud");
});
