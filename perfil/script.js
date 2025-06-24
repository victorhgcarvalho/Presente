window.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("startButton");
  const intro = document.getElementById("intro");
  const home = document.getElementById("home");

  button.addEventListener("click", () => {
    intro.style.opacity = "0";

    setTimeout(() => {
      intro.style.display = "none";
      home.classList.remove("hidden");
      home.classList.add("show");

      // Swiper init
      new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      });

      // Typewriter
      const message = "Bem-vindos à nossa história 💖";
      let i = 0;
      function typeText() {
        if (i < message.length) {
          document.getElementById("typewriter").innerHTML += message.charAt(i);
          i++;
          setTimeout(typeText, 80);
        }
      }
      typeText();

    }, 800);
  });

  // Corações flutuando
  const canvas = document.getElementById("heartCanvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let hearts = [];

  for (let i = 0; i < 20; i++) {
    hearts.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 20 + 10,
      speed: Math.random() * 1 + 0.5,
      opacity: Math.random() * 0.5 + 0.5
    });
  }

  function drawHearts() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hearts.forEach((h) => {
      ctx.globalAlpha = h.opacity;
      ctx.font = `${h.size}px Arial`;
      ctx.fillStyle = "#e63946";
      ctx.fillText("❤", h.x, h.y);
      h.y -= h.speed;
      if (h.y < -20) {
        h.y = canvas.height + 20;
        h.x = Math.random() * canvas.width;
      }
    });
    requestAnimationFrame(drawHearts);
  }

  drawHearts();
});
