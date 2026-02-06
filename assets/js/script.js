// Intro Video + Logo Reveal
const intro = document.querySelector(".intro");
const logoReveal = document.querySelector(".logo-reveal");
const site = document.getElementById("site");
const playBtn = document.getElementById("playVideoBtn");
const video = document.getElementById("introVideo");

playBtn.addEventListener("click", () => {
  video.style.opacity = "1";  
  video.style.transform = "scale(1)"; 
  video.play().catch(err => console.log(err));
  playBtn.style.display = "none";

  setTimeout(() => {
    video.style.transform = "scale(5)";
  }, 1000); 

  video.addEventListener("ended", () => {
    intro.style.transition = "opacity 0.8s ease";
    intro.style.opacity = 0;
    setTimeout(() => {
      intro.style.display = "none";
      logoReveal.classList.add("active");

      setTimeout(() => {
        logoReveal.style.opacity = 0;
        setTimeout(() => {
          logoReveal.style.display = "none";
          site.style.display = "block";
          document.body.style.overflow = "auto";
        },1000);
      },2000);
    },500);
  });
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
