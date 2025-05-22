$(document).ready(() => {
  // Dark Mode Toggle
  const dark = document.querySelector(".input");
  dark.onclick = function () {
    document.documentElement.classList.toggle("bgdark");
  };

  // Loader
  // function hideLoader() {
  //   document.getElementById("loader-holder").classList.add("hide-loader");
  //   requestAnimationFrame(function () {
  //     window.scrollTo(0, 0);
  //   });
  // }

  // const hideLoader = document.getElementById('#loader-holder');

  // window.onload = function () {
  //   setTimeout(hideLoader, 1800);
  // };

  const hideLoader = document.getElementById("loader-holder");

  window.onload = () => {
    setTimeout(() => {
      hideLoader.style.display = "none";

      if (window.getComputedStyle(hideLoader).display === "none") {
        document.documentElement.classList.add("al");
      }
    }, 1800);
  };

  // Swapping
  function performSwapping() {
    const windowWidth = window.innerWidth;
    const socMed = document.querySelector(".sidebar-socials");
    const secCon = document.querySelector(".contact");
    const box = document.querySelector(".box");

    if (windowWidth <= 768) {
      secCon.insertAdjacentElement("afterend", socMed);
    } else {
      box.insertAdjacentElement("beforebegin", socMed);
    }
  }

  document.addEventListener("DOMContentLoaded", performSwapping);
  window.addEventListener("resize", performSwapping);

  // Bouncing Letters
  const bounceLetter = document.querySelectorAll(".hero-nm span");

  bounceLetter.forEach((span) => {
    span.addEventListener("mouseover", function () {
      this.classList.add("bounce");
      setTimeout(
        function () {
          this.classList.remove("bounce");
        }.bind(this),
        1000
      );
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const mouseEffect = document.getElementById("mouse-effect");
    const htmlElement = document.documentElement;

    const handleMousemove = (e) => {
      const { clientX: x, clientY: y } = e;

      mouseEffect.style.background = `
      radial-gradient(600px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%)
    `;
    };

    const updateMouseEffect = () => {
      if (
        window.innerWidth >= 1000 &&
        htmlElement.classList.contains("bgdark")
      ) {
        mouseEffect.style.display = "block";
        document.addEventListener("mousemove", handleMousemove);
      } else {
        mouseEffect.style.display = "none";
        document.removeEventListener("mousemove", handleMousemove);
      }
    };

    updateMouseEffect();

    window.addEventListener("resize", updateMouseEffect);
    const observer = new MutationObserver(updateMouseEffect);
    observer.observe(htmlElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
  });

  const links = document.querySelectorAll("a.inline_link, .soc_med a");
  links.forEach((link) => {
    if (link.host !== window.location.host) {
      link.setAttribute("rel", "noopener noreferrer");
      link.setAttribute("target", "_blank");
    }
  });
});
