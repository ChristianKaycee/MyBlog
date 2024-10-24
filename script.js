// let menu = document.querySelector(".menu");
// let sideBar = document.querySelector("header nav ul li ul");
// menu.addEventListener("click",()=>{
//   sideBar.classList.toggle("visible");
// })
// For image carousel
const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;
const totalImages = images.length;

// Update carousel to display the current image
function updateCarousel() {
  carouselImages.style.transform = `translateX(${-currentIndex * 100}%)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentIndex].classList.add('active');
}

// Move to the next image
nextBtn.addEventListener('click', () => {
    console.log("click");
  currentIndex = (currentIndex + 1) % totalImages;
  updateCarousel();
});

// Move to the previous image
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  updateCarousel();
});

// Dots navigation
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    updateCarousel();
  });
});

// Auto-slide every 5 seconds
setInterval(() => {
  currentIndex = (currentIndex + 1) % totalImages;
  updateCarousel();
}, 5000);

// For read more button
let readMoreBox = document.querySelectorAll(".read");
readMoreBox.forEach(readBox=>{
    readBox.addEventListener('click',event=>{
        const current = event.target;
        const isReadMoreBtn = current.className.includes('read-more');
        if (!isReadMoreBtn) return;
        const currenTxt = current.parentNode.querySelector('.more-info');
        currenTxt.classList.toggle('show');
        current.textContent = current.textContent.includes('Read More') ? "Read Less..." : "Read More...";
    })
})

// Show on Scroll
// Create the observer with a callback function
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Do something when the element is in view
        console.log(`${entry.target.id} is in view`);
        entry.target.classList.add('animate');
      } else {
        // Do something when the element is out of view
       //entry.target.classList.remove('animate');
       console.log("nothing");
      }
    });
  }, { threshold: 0.1 }); // Adjust threshold as needed
  
  // Select multiple elements
  const elementsToObserve = document.querySelectorAll('.observe');
  
  // Observe each element
  elementsToObserve.forEach(element => observer.observe(element));