     const text = "Hi, I'm";
      let index = 0;
      const speed = 100;

      function typeEffect() {
        if (index < text.length) {
          document.getElementById("typingText").textContent +=
            text.charAt(index);
          index++;
          setTimeout(typeEffect, speed);
        }
      }

      typeEffect();

      const hamburger = document.getElementById("hamburger");
      const sidebar = document.getElementById("sidebar");

      hamburger.addEventListener("click", () => {
        sidebar.classList.toggle("sidebar_active");
        hamburger.classList.toggle("sidebar_hamburger_translate");
      });


      