
// This is for the first animation
// const element = document.getElementById("para");
// let start;

// function step(timestamp) {
//   if (start === undefined) {
//     start = timestamp; 
//   }
// //   to get the last performed animation timesptamp use performance.now()
//   const elapsed = timestamp - start;

//   // Math.min() is used here to make sure the element stops at exactly 200px
//   const shift = Math.min(0.1 * elapsed, 400);
//   element.style.transform = `translateX(${shift}px)`;
//   if (shift < 400) {
//     requestAnimationFrame(step);
//   }
// }

// requestAnimationFrame(step);



// This is for the scroll animation
// const reveals = document.querySelectorAll(".reveal");

// const observer = new IntersectionObserver(
//   entries => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add("active");
//       } else {
//         entry.target.classList.remove("active");
//       }
//     });
//   },
//   {
//     threshold: 0.2
//   }
// );

// reveals.forEach(el => observer.observe(el));


// prellex effect animation
// const section = document.querySelector(".parallax");
// const bg = document.querySelector(".parallax-bg");

// function clamp(min, max, value) {
//   return Math.min(Math.max(value, min), max);
// }

// function updateParallax() {
//   const rect = section.getBoundingClientRect();

//   // progress: 0 → 1 while section moves through viewport
//   const progress = clamp(
//     0,
//     1,
//     1 - rect.top / window.innerHeight
//   );

//   // BIG movement so it's visible
//   const movement = (progress - 0.5) * 300;

//   bg.style.transform = `translate3d(0, ${movement}px, 0)`;
// }

// let ticking = false;

// window.addEventListener("scroll", () => {
//   if (!ticking) {
//     requestAnimationFrame(() => {
//       updateParallax();
//       ticking = false;
//     });
//     ticking = true;
//   }
// });

// // run once on load
// updateParallax();


// Javascript Math
const section = document.querySelector(".horizontal");
const inner = document.querySelector(".horizontal-inner");

function clamp(min, max, value) {
  return Math.min(Math.max(value, min), max);
}

function updateHorizontalScroll() {
  const rect = section.getBoundingClientRect();

  const scrollLength = section.offsetHeight - window.innerHeight;

  const progress = clamp(
    0,
    1,
    -rect.top / scrollLength
  );

  const maxTranslate = inner.scrollWidth - window.innerWidth;

  inner.style.transform = `translateX(${-progress * maxTranslate}px)`;
}

window.addEventListener("scroll", updateHorizontalScroll);
updateHorizontalScroll();



