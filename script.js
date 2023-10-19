const panels = document.querySelectorAll(".panel");
const circles = document.querySelectorAll(".circle");
const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const control = document.getElementById("control");
const photos = document.getElementById("photos");

let currentCircle = 1;

next.addEventListener("click", () => {
  currentCircle++;
  if (currentCircle > circles.length) {
    currentCircle = circles.length;
  }
  //   console.log(currentCircle);
  showCasing();
  updateProgress();
});
prev.addEventListener("click", () => {
  currentCircle--;
  if (currentCircle < 1) {
    currentCircle = 1;
  }
  //   console.log(currentCircle);
  showCasing();
  updateProgress();
});

function showCasing() {
  control.classList.add("show-casing");
  photos.classList.add("show-casing");
  setTimeout(function () {
    control.classList.remove("show-casing");
    photos.classList.remove("show-casing");
  }, 1000);
}

function updateProgress() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
  panels[currentCircle - 1].classList.add("active");
  circles.forEach((circle, idx) => {
    if (idx < currentCircle) {
      circle.classList.add("current");
    } else {
      circle.classList.remove("current");
    }
  });
  const currents = document.querySelectorAll(".current");
  //   console.log((currents.length - 1) / (circles.length - 1));
  progress.style.width =
    ((currents.length - 1) / (circles.length - 1)) * 100 + "%";
  if (currents.length === 1) {
    prev.disabled = true;
  } else if (currents.length === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
