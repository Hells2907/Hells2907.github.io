// Gallery Slideshow
const gallerySections = document.querySelectorAll('.gallery-section');

gallerySections.forEach((section) => {
  const images = section.querySelectorAll('.gallery img');
  let currentImageIndex = 0;

  const showImage = () => {
    images.forEach((image) => {
      image.style.display = 'none';
    });
    images[currentImageIndex].style.display = 'block';
  };

  const nextImage = () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage();
  };

  const prevImage = () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage();
  };

  // Initially show the first image
  showImage();

  // Automatically change images every few seconds (adjust as needed)
  setInterval(nextImage, 3000); // Change image every 3 seconds

  // Optional: Add event listeners for next and previous buttons
  const nextButton = section.querySelector('.next-button');
  const prevButton = section.querySelector('.prev-button');

  nextButton.addEventListener('click', nextImage);
  prevButton.addEventListener('click', prevImage);
});

// Gallery box click functionality
const galleryBoxes = document.querySelectorAll('.gallery-box');

galleryBoxes.forEach((box) => {
  box.addEventListener('click', () => {
    const sectionId = box.getAttribute('data-section');
    const sectionToShow = document.getElementById(sectionId);
    gallerySections.forEach((section) => {
      section.style.display = 'none';
    });
    sectionToShow.style.display = 'block';
  });
});
