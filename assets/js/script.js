// Intro Video + Logo Reveal
const intro = document.querySelector(".intro");
const site = document.getElementById("site");
const playBtn = document.getElementById("playVideoBtn");
const video = document.getElementById("introVideo");

playBtn.addEventListener("click", () => {
  playBtn.style.display = "none";
  video.style.opacity = "1";
  video.play();

  // بعد 0.5 ثانية: زووم + حركة لفوق
  setTimeout(() => {
    video.classList.add("zoom-move");
  }, 500);

  // بعد 3.5 ثانية: الفيديو يختفي
  setTimeout(() => {
    video.style.opacity = "0";
  }, 3500);

  // بعد 4.3 ثانية: ندخل على الصفحة الرئيسية
  setTimeout(() => {
    intro.style.display = "none";
    site.style.display = "block";
    document.body.style.overflow = "auto";
  }, 4300);
});


const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const navItems = document.querySelectorAll(".nav-links li a");
navItems.forEach(item => {
  item.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

document.addEventListener("click", (e) => {
  if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
    navLinks.classList.remove("active");
  }
});


const buyBtns = document.querySelectorAll(".buy-btn");
buyBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const icon = document.createElement("i");
    icon.className = "fas fa-check";
    icon.style.position = "absolute";
    icon.style.fontSize = "1.5rem";
    icon.style.color = "#fff";
    icon.style.top = "50%";
    icon.style.left = "50%";
    icon.style.transform = "translate(-50%, -50%) scale(0)";
    icon.style.transition = "transform 0.4s ease, opacity 0.4s ease";
    btn.appendChild(icon);

    setTimeout(() => { icon.style.transform = "translate(-50%, -50%) scale(1)"; }, 10);
    setTimeout(() => { icon.style.opacity = "0"; }, 800);
    setTimeout(() => { btn.removeChild(icon); }, 1200);
  });
});

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(-${index * 100}%)`;
    dots[i].classList.toggle("active", i === index);
  });
}

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    currentIndex = i;
    showSlide(currentIndex);
  });
});

setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}, 4000);

showSlide(currentIndex);
