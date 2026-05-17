// LOADING SCREEN
window.addEventListener("load", () => {
  const loadingScreen = document.getElementById("loading-screen");

  setTimeout(() => {
    loadingScreen.classList.add("hidden");
  }, 1000);
});

// FILTERING
const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    galleryItems.forEach((item) => {
      const category = item.dataset.category;

      if (filter === "all" || category === filter) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

// LIGHTBOX
const galleryImages = document.querySelectorAll(".gallery-image");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeLightbox = document.getElementById("close-lightbox");

galleryImages.forEach((image) => {
  image.addEventListener("click", () => {
    lightbox.classList.remove("hidden");
    lightbox.classList.add("flex");

    lightboxImage.src = image.src;
  });
});

closeLightbox.addEventListener("click", () => {
  lightbox.classList.add("hidden");
  lightbox.classList.remove("flex");
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.classList.add("hidden");
    lightbox.classList.remove("flex");
  }
});

// CATEGORY COUNTERS
const allCount = galleryItems.length;

const natureCount = document.querySelectorAll(
  '[data-category="Nature"]',
).length;

const peopleCount = document.querySelectorAll(
  '[data-category="People"]',
).length;

const abstractCount = document.querySelectorAll(
  '[data-category="Abstract"]',
).length;

document.getElementById("all-count").innerText = allCount;
document.getElementById("nature-count").innerText = natureCount;
document.getElementById("people-count").innerText = peopleCount;
document.getElementById("abstract-count").innerText = abstractCount;

// AUTO GALLERY FROM FOLDER STRUCTURE
// Example future structure:
//
// images/
//   nature/
//   people/
//   abstract/
//
// This can later be automated with a backend
// or JSON file generation.
