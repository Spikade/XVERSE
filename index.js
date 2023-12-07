export const images = [
  {
    path: "https://spikade.github.io/XVERSE/assets/imgs1/01.jpg",
    position: { top: "-5%", left: "5%" },
    speed: 0.08,
  },
  {
    path: "https://spikade.github.io/XVERSE/assets/imgs1/02.jpg",
    position: { top: "25%", left: "20%" },
    speed: 0.03,
  },
  {
    path: "https://spikade.github.io/XVERSE/assets/imgs1/03.jpg",
    position: { top: "60%", left: "40%" },
    speed: 0.065,
  },
  {
    path: "https://spikade.github.io/XVERSE/assets/imgs1/04.jpg",
    position: { top: "70%", left: "10%" },
    speed: 0.04,
  },
  {
    path: "https://spikade.github.io/XVERSE/assets/imgs1/05.jpg",
    position: { top: "-10%", left: "65%" },
    speed: 0.025,
  },
  {
    path: "https://spikade.github.io/XVERSE/assets/imgs1/06.jpg",
    position: { top: "10%", left: "85%" },
    speed: 0.05,
  },
  {
    path: "https://spikade.github.io/XVERSE/assets/imgs1/07.jpg",
    position: { top: "40%", left: "60%" },
    speed: 0.025,
  },
  {
    path: "https://spikade.github.io/XVERSE/assets/imgs1/08.jpg",
    position: { top: "80%", left: "70%" },
    speed: 0.1,
  },
  {
    path: "https://spikade.github.io/XVERSE/assets/imgs1/09.jpg",
    position: { top: "40%", left: "-5%" },
    speed: 0.065,
  },
];


const gallery = document.querySelector("#gallery");
const hero = document.querySelector(".hero-section");

images.forEach((item) => {
  const imageWrapper = document.createElement("div");
  imageWrapper.classList.add("image-wrapper");

  imageWrapper.style.top = item.position.top;
  imageWrapper.style.left = item.position.left;

  const img = document.createElement("img");
  img.src = item.path;
  imageWrapper.appendChild(img);

  gallery.appendChild(imageWrapper);
});

hero.addEventListener("mousemove", (e) => {
  gallery.querySelectorAll(".image-wrapper").forEach((image, index) => {
    const x = (e.clientX - window.innerWidth / 2) * images[index].speed;
    const y = (e.clientY - window.innerHeight / 2) * images[index].speed;

    gsap.to(image, { x, y, duration: 0.75 });
  });
});





var mySwiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
  initialSlide: 2,
  loop: true,
  rotate: true,
  mousewheel: {
    invert: false } });


    // nav bar button
    const body = document.querySelector("body"),
    sidebar = body.querySelector("nav"),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box");
  
  toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
  });
  
  searchBtn.addEventListener("click", () => {
    sidebar.classList.remove("close");
  });






  const slides = document.querySelectorAll("[data-slide]");
const buttons = document.querySelectorAll("[data-button]");

let currSlide = 0;
let maxSlide = slides.length - 1;

const updateCarousel = (number = 0) => {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${(index - number) * 100}%)`;
  });
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    button.dataset.button == "next" ? ++currSlide : --currSlide;

    if (currSlide > maxSlide) {
      currSlide = 0;
    } else if (currSlide < 0) {
      currSlide = maxSlide;
    }

    updateCarousel(currSlide);
  });
});

updateCarousel();


const cardsContainer = document.querySelector(".container");

cardsContainer.addEventListener("click", (e) => {
  const target = e.target.closest(".card");

  if (!target) return;

  cardsContainer.querySelectorAll(".card").forEach((card) => {
    card.classList.remove("active");
  });

  target.classList.add("active");
});





document.addEventListener("scroll", function () {
  var scrollanimation = document.getElementById("scrollanimation");
  var position = scrollanimation.getBoundingClientRect();

  // If the div is partially in view, add the "appear" class
  if (position.top < window.innerHeight && position.bottom >= 0) {
    scrollanimation.classList.add("appear");
  } else {
    scrollanimation.classList.remove("appear");
  }
});
document.addEventListener("scroll", function () {
  var scrollanimation = document.getElementById("scrolltext");
  var position = scrollanimation.getBoundingClientRect();

  // If the div is partially in view, add the "appear" class
  if (position.top < window.innerHeight && position.bottom >= 0) {
    scrollanimation.classList.add("appear");
  } else {
    scrollanimation.classList.remove("appear");
  }
});


document.addEventListener("scroll", function () {
  var scrollmarvel = document.getElementById("scrollmarvel");
  var position = scrollmarvel.getBoundingClientRect();

  // If the div is partially in view, add the "appear" class
  if (position.top < window.innerHeight && position.bottom >= 0) {
    scrollmarvel.classList.add("appear");
  } else {
    scrollmarvel.classList.remove("appear");
  }
});
document.addEventListener("scroll", function () {
  var scrollmarveltext = document.getElementById("scrollmarveltext");
  var position = scrollmarveltext.getBoundingClientRect();

  // If the text is partially in view, add the "appear" class
  if (position.top < window.innerHeight && position.bottom >= 0) {
    scrollmarveltext.classList.add("appear");
  } else {
    scrollmarveltext.classList.remove("appear");
  }
});


document.addEventListener("scroll", function () {
  var scrollvillains = document.getElementById("scrollvillains");
  var position = scrollvillains.getBoundingClientRect();

  // If the content is in view, add the "appear" class
  if (position.top < window.innerHeight && position.bottom >= 0) {
    scrollvillains.classList.add("appear");
  } else {
    scrollvillains.classList.remove("appear");
  }
});







document.addEventListener("DOMContentLoaded", function () {
  // Function to handle scrolling to a section with an offset
  function scrollToSection(sectionId, offsetRem) {
     const sectionLink = document.querySelector(`a[href="#${sectionId}"]`);
     sectionLink.addEventListener("click", function (event) {
       event.preventDefault(); // Prevent default behavior of the link
 
       // Check if the target section is the "Contact" section or "Home"
       const isContactSection = sectionId === "contact";
       const isHomeSection = sectionId === "home";
 
       // Scroll to the target section with the specified offset
       const targetSection = document.getElementById("scrolltext"); // Change "scrolltext" to the actual ID of your section
       if (targetSection) {
         let offset;
         if (isContactSection) {
           offset = document.body.scrollHeight; // Scroll to the bottom for the "Contact" section
         } else if (isHomeSection) {
           offset = 0; // Scroll to the top for the "Home" section
         } else {
           offset = offsetRem * parseFloat(getComputedStyle(document.documentElement).fontSize); // Convert rem to pixels
         }
 
         // Calculate the target scroll position
         const targetScrollPosition = isContactSection || isHomeSection ? offset : targetSection.offsetTop - offset;
 
         // Scroll to the target position
         window.scroll({
           top: targetScrollPosition,
           left: 0,
           behavior: "smooth",
         });
       }
     });
  }
 
  // Use the function for the "About" section with an offset of 35rem
  scrollToSection("about", 34.2);
 
  // Use the function for the "Home" section to scroll to the top
  scrollToSection("home", null);
 
  // Use the function for the "Contact" section to scroll to the bottom
  scrollToSection("contact", null);
 
  // You can add more sections/buttons as needed
  scrollToSection("characters", -43);
  scrollToSection("marvel", -3);
 });





 document.getElementById('exploreBtn').addEventListener('click', function() {
  const element = document.getElementById('scrolltext');
  const rect = element.getBoundingClientRect();
  const position = rect.top + window.pageYOffset - 34.4 * 16;
  window.scrollTo({top: position, behavior: 'smooth'});
});




const angle = 20;

const lerp = (start, end, amount) => {
    return (1 - amount) * start + amount * end;
};

const remap = (value, oldMax, newMax) => {
    const newValue = ((value + oldMax) * (newMax * 2)) / (oldMax * 2) - newMax;
    return Math.min(Math.max(newValue, -newMax), newMax);
};

document.addEventListener("DOMContentLoaded", () => {
    const hoverAreaExtension = 10; // Adjust this value to change the hover area extension
    const cards = document.querySelectorAll(".cardlast");

    cards.forEach((card) => {
        card.addEventListener("mousemove", (event) => {
            const rect = card.getBoundingClientRect();
            const extendedRect = {
                top: rect.top - hoverAreaExtension,
                left: rect.left - hoverAreaExtension,
                right: rect.right + hoverAreaExtension,
                bottom: rect.bottom + hoverAreaExtension,
                width: rect.width + 2 * hoverAreaExtension,
                height: rect.height + 2 * hoverAreaExtension,
            };

            const centerX = extendedRect.left + extendedRect.width / 2;
            const centerY = extendedRect.top + extendedRect.height / 2;
            const posX = centerX - event.clientX;
            const posY = centerY - event.clientY;
            const distance = Math.sqrt(posX ** 2 + posY ** 2);
            const x = remap(posX, extendedRect.width / 2, angle);
            const y = remap(posY, extendedRect.height / 2, angle);
            const transitionSpeed = Math.min(0.1 + distance * 0.002, 0.3);
            card.style.setProperty("--rotateX", `${y}deg`);
            card.style.setProperty("--rotateY", `${-x}deg`);
            card.style.transition = `transform ${transitionSpeed}s ease-out`;
        });

        card.addEventListener("mouseout", () => {
            card.style.transition = "transform 0.5s ease-in-out";
            card.style.setProperty("--rotateX", "0deg");
            card.style.setProperty("--rotateY", "0deg");
        });
    });

    const update = () => {
        cards.forEach((card) => {
            let currentX = parseFloat(getComputedStyle(card).getPropertyValue("--rotateY"));
            let currentY = parseFloat(getComputedStyle(card).getPropertyValue("--rotateX"));
            if (isNaN(currentX)) currentX = 0;
            if (isNaN(currentY)) currentY = 0;
            const x = lerp(currentX, parseFloat(card.style.getPropertyValue("--rotateY")), 0.1);
            const y = lerp(currentY, parseFloat(card.style.getPropertyValue("--rotateX")), 0.1);
            card.style.setProperty("--rotateY", `${x}deg`);
            card.style.setProperty("--rotateX", `${y}deg`);
        });
    };

    setInterval(update, 1000 / 60);
});
