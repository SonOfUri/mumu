const navbarToggle = document.querySelector(".navbar-toggle");
const navbarLinks = document.querySelector(".center-menu");

navbarToggle.addEventListener("click", () => {
  navbarToggle.classList.toggle("active");
  navbarLinks.classList.toggle("active");
});

const btn1 = document.querySelector(".btn1");
const dp = document.querySelector(".dp");
const dd1 = document.querySelector(".dd1");
const dd2 = document.querySelector(".dd2");
const dd3 = document.querySelector(".dd3");
const body = document.querySelector(".body");

btn1.addEventListener("click", () => {
  btn1.classList.toggle("active");
  dp.classList.toggle("active");
});

dd1.addEventListener("click", () => {
    dp.classList.remove("active");
    navbarLinks.classList.remove("active");
    navbarToggle.classList.remove("active");
  });

  dd2.addEventListener("click", () => {
    dp.classList.remove("active");
    navbarLinks.classList.remove("active");
    navbarToggle.classList.remove("active");
  });

  dd3.addEventListener("click", () => {
    dp.classList.remove("active");
    navbarLinks.classList.remove("active");
    navbarToggle.classList.remove("active");
  });
  body.addEventListener("click", () => {
    dp.classList.remove("active");
    navbarLinks.classList.remove("active");
    navbarToggle.classList.remove("active");
  });


const navbarToggle1 = document.querySelector(".play");
const navbarLinks1 = document.querySelector(".card");

navbarToggle1.addEventListener("click", () => {
//   navbarToggle1.classList.toggle("active");
  navbarLinks1.classList.toggle("active");
});

const navbarToggle2 = document.querySelector(".play");
const navbarLinks2 = document.querySelector(".card1");

navbarToggle2.addEventListener("click", () => {
//   navbarToggle1.classList.toggle("active");
  navbarLinks2.classList.toggle("active");
});

const navbarToggle3 = document.querySelector(".play");
const navbarLinks3 = document.querySelector(".container");

navbarToggle3.addEventListener("click", () => {
//   navbarToggle1.classList.toggle("active");
  navbarLinks3.classList.toggle("active");
});


var coll = document.getElementsByClassName("qn");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

const fq = document.querySelector(".fq");
const landingpage = document.querySelector(".landing-page");
const btn4 = document.querySelector(".btn4");
const close = document.querySelector(".close");
const faq = document.querySelector(".faq");
const hm1 = document.querySelector(".hm1");
// const hm2 = document.querySelector(".hm2");
const hm3 = document.querySelector(".hm3");
const hm4 = document.querySelector(".hm4");
const hm5 = document.querySelector(".hm5");

btn4.addEventListener("click", () => {
    close.classList.toggle("active");
});

fq.addEventListener("click", () => {
    landingpage.classList.add("active");
    faq.classList.add("active");
    navbarLinks.classList.remove("active");
    navbarToggle.classList.remove("active");
});

hm1.addEventListener("click", () => {
    landingpage.classList.remove("active");
    faq.classList.remove("active");
    navbarLinks.classList.remove("active");
    navbarToggle.classList.remove("active");
});

// hm2.addEventListener("click", () => {
//     landingpage.classList.remove("active");
//     faq.classList.remove("active");
//     navbarLinks.classList.remove("active");
//     navbarToggle.classList.remove("active");
// });

hm3.addEventListener("click", () => {
    landingpage.classList.remove("active");
    faq.classList.remove("active");
    navbarLinks.classList.remove("active");
    navbarToggle.classList.remove("active");
});

hm4.addEventListener("click", () => {
    landingpage.classList.remove("active");
    faq.classList.remove("active");
    navbarLinks.classList.remove("active");
    navbarToggle.classList.remove("active");
});

hm5.addEventListener("click", () => {
    landingpage.classList.remove("active");
    faq.classList.remove("active");
    navbarLinks.classList.remove("active");
    navbarToggle.classList.remove("active");
});

// first-one

document.addEventListener("DOMContentLoaded", function () {
  const animationSection = document.getElementById("animation-section");
  const ani1 = document.getElementById("ani1");
  const animationClass = "animation-target";

  function checkIfInView() {
      const windowHeight = window.innerHeight;
      const sectionTop = animationSection.getBoundingClientRect().top;

      if (sectionTop < windowHeight) {
          ani1.classList.add(animationClass);
          // Remove the event listener if you want the animation to trigger only once
          window.removeEventListener("scroll", checkIfInView);
      }
  }

  window.addEventListener("scroll", checkIfInView);
});

// second one

document.addEventListener("DOMContentLoaded", function () {
  const animationSection1 = document.getElementById("animation-section1");
  const ani2 = document.getElementById("ani2");
  const animationClass = "animation-target1";

  function checkIfInView1() {
      const windowHeight = window.innerHeight;
      const sectionTop = animationSection1.getBoundingClientRect().top;

      if (sectionTop < windowHeight) {
          ani2.classList.add(animationClass);
          // Remove the event listener if you want the animation to trigger only once
          window.removeEventListener("scroll", checkIfInView1);
      }
  }

  window.addEventListener("scroll", checkIfInView1);
});

// third one

document.addEventListener("DOMContentLoaded", function () {
  const animationSection2 = document.getElementById("animation-section2");
  const ani3 = document.getElementById("ani3");
  const animationClass = "animation-target3";

  function checkIfInView2() {
      const windowHeight = window.innerHeight;
      const sectionTop = animationSection2.getBoundingClientRect().top;

      if (sectionTop < windowHeight) {
          ani3.classList.add(animationClass);
          // Remove the event listener if you want the animation to trigger only once
          window.removeEventListener("scroll", checkIfInView2);
      }
  }

  window.addEventListener("scroll", checkIfInView2);
});

// forth one

document.addEventListener("DOMContentLoaded", function () {
  const animationSection3 = document.getElementById("animation-section3");
  const ani4 = document.getElementById("ani4");
  const animationClass = "animation-target4";

  function checkIfInView3() {
      const windowHeight = window.innerHeight;
      const sectionTop = animationSection3.getBoundingClientRect().top;

      if (sectionTop < windowHeight) {
          ani4.classList.add(animationClass);
          // Remove the event listener if you want the animation to trigger only once
          window.removeEventListener("scroll", checkIfInView3);
      }
  }

  window.addEventListener("scroll", checkIfInView3);
});

// fivth one

document.addEventListener("DOMContentLoaded", function () {
  const animationSection4 = document.getElementById("animation-section4");
  const ani5 = document.getElementById("ani5");
  const animationClass = "animation-target5";

  function checkIfInView4() {
      const windowHeight = window.innerHeight;
      const sectionTop = animationSection4.getBoundingClientRect().top;

      if (sectionTop < windowHeight) {
          ani5.classList.add(animationClass);
          // Remove the event listener if you want the animation to trigger only once
          window.removeEventListener("scroll", checkIfInView4);
      }
  }

  window.addEventListener("scroll", checkIfInView4);
});

// sixth one

document.addEventListener("DOMContentLoaded", function () {
  const animationSection5 = document.getElementById("animation-section5");
  const ani6 = document.getElementById("ani6");
  const animationClass = "animation-target6";

  function checkIfInView5() {
      const windowHeight = window.innerHeight;
      const sectionTop = animationSection5.getBoundingClientRect().top;

      if (sectionTop < windowHeight) {
          ani6.classList.add(animationClass);
          // Remove the event listener if you want the animation to trigger only once
          window.removeEventListener("scroll", checkIfInView5);
      }
  }

  window.addEventListener("scroll", checkIfInView5);
});






// const drop = document.querySelector(".drop");
// const dropdown = document.querySelector(".dropdown-content");

// drop.addEventListener("click", () => {
//   drop.classList.toggle("active");
//   dropdown.classList.toggle("active");
// });


// var dropdowns = document.getElementsByClassName("dropdown");
// for (var i = 0; i < dropdowns.length; i++) {
//   dropdowns[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var dropdownContent = this.querySelector(".dropdown-content");
//     if (dropdownContent.style.display === "flex") {
//       dropdownContent.style.display = "none";
//     } else {
//       dropdownContent.style.display = "flex";
//     }
//   });
// }

const sliderContainer = document.querySelector('.slider-container');
const sliderContent = sliderContainer.querySelector('.slider-content');
const sliderItems = sliderContent.querySelector('.slider-items');
const sliderItem = sliderItems.querySelectorAll('.slider-item');

let slideTouched = false;
let currentMouseX = 0;
let lastMouseX = 0;
let lastSliderX = 0;
let moveTo = 0;

const runSlider = () => {

    const space = 30;
    const sliderSizes = onResize();
    const currentSlideIndex = sliderItem.length;
    const currentSlideDegree = 360 / currentSlideIndex;
    const translateZ = horizontalHeight(sliderSizes.w, currentSlideIndex, space);

    const height = calculateHeight(translateZ);

    sliderContainer.style.width = `${translateZ * 2 + space * currentSlideIndex}px`;
    sliderContainer.style.height = `${height}px`;

    sliderItem.forEach((item, i) => {
        item.style.transform = `rotateY(${currentSlideDegree * i}deg) translateZ(${translateZ}px)`;
    });

}

const onResize = () => {

    const boundingCarousel = sliderContent.getBoundingClientRect();

    const sliderSizes = {
        w: boundingCarousel.width,
        h: boundingCarousel.height
    };

    return sliderSizes;

}

const horizontalHeight = (sliderWidth, currentSlideIndex, space) => {
    return sliderWidth / 2 / Math.tan(Math.PI / currentSlideIndex) + space;
}

const calculateHeight = (translateZ) => {

    const t = Math.atan((90 * Math.PI) / 180 / 2);
    const height = 2 * t * translateZ;

    return height;

}

const updateMouseX = x => {

    currentMouseX = x;
    currentMouseX < lastMouseX ? moveTo -= 8 : moveTo += 8;

    lastMouseX = currentMouseX;

}

const updateSlider = () => {

    lastSliderX = 0.2 * (moveTo - lastSliderX) + lastSliderX;
    sliderItems.style.transform = `rotateY(${lastSliderX}deg)`;

    requestAnimationFrame(updateSlider);

}

const checkMousePosition = () => {

    sliderItems.addEventListener('mousedown', () => {
        slideTouched = true;
        sliderItems.style.cursor = "grabbing";
    });

    sliderItems.addEventListener('mouseup', () => {
        slideTouched = false;
        sliderItems.style.cursor = "grab";
    });

    sliderItems.addEventListener('mouseleave', () => {
        slideTouched = false;
    });

    sliderItems.addEventListener('mousemove', e => {
        slideTouched && updateMouseX(e.clientX);
    });

    sliderItems.addEventListener('touchstart', () => {
        slideTouched = true;
    });

    sliderItems.addEventListener('touchend', () => {
        slideTouched = false;
    });

    sliderItems.addEventListener('touchmove', e => {
        slideTouched && updateMouseX(e.touches[0].clientX);
    });

    updateSlider();
    runSlider();

}

checkMousePosition();
