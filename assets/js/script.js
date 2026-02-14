document.addEventListener("DOMContentLoaded", () => {
  // ================= Intro Video =================
  const intro = document.querySelector(".intro");
  const site = document.getElementById("site");
  const playBtn = document.getElementById("playVideoBtn");
  const video = document.getElementById("introVideo");

  if (video && playBtn && intro && site) {
    video.play();
    video.loop = true;
    video.muted = true;

    playBtn.addEventListener("click", () => {
      playBtn.style.display = "none";
      video.classList.add("zoom-move");

      setTimeout(() => {
        intro.style.display = "none";
        site.style.display = "block";
        document.body.style.overflow = "auto";

        site.style.opacity = "0";
        setTimeout(() => {
          site.style.transition = "opacity 1s ease";
          site.style.opacity = "1";
        }, 50);
      }, 2000);
    });
  }

  // ================= Navbar Hamburger Toggle =================
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const closeMenu = document.querySelector(".close-menu");
const cartFixed = document.querySelector(".cart-fixed");

hamburger.addEventListener("click", () => {
  navLinks.classList.add("active");
  cartFixed.style.display = "none"; 
});

closeMenu.addEventListener("click", () => {
  navLinks.classList.remove("active");
  cartFixed.style.display = "block"; 
});

// Optional: click outside menu closes it
document.addEventListener("click", (e) => {
  if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
    navLinks.classList.remove("active");
    cartFixed.style.display = "block"; 
  }
});

  // ================= Slider =================
const track = document.querySelector(".slider-track");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;
const gap = 10;

function updateSlider() {
  const slideWidth = slides[0].getBoundingClientRect().width + gap;
  track.style.transform = `translate3d(-${index * slideWidth}px, 0, 0)`;
}

nextBtn.addEventListener("click", () => {
  if (index < slides.length - 1) {
    index++;
    updateSlider();
  }
});

prevBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
    updateSlider();
  }
});


  // ================= Open Card Page =================
  function openCardPage(imageSrc) {
    window.location.href = "card.html?img=" + encodeURIComponent(imageSrc);
  }

  slides.forEach(img => {
    img.addEventListener("click", () => {
      openCardPage(img.src);
    });
  });
});
