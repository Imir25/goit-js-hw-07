import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

function createGalleryMarkup(items) {
    return items
      .map(
        ({ preview, original, description }) => `
        <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </li>
      `
      )
      .join('');
  }
  const galleryContainer = document.querySelector('#galleryContainer');
  const galleryMarkup = createGalleryMarkup(galleryItems);
  
  galleryContainer.innerHTML = galleryMarkup;
  
  const galleryImages = galleryContainer.querySelectorAll('.gallery__image');
  
  galleryImages.forEach((image) => {
    image.addEventListener('click', (event) => {
      event.preventDefault();
  
      const largeImageUrl = event.target.dataset.source;
  
      const instance = basicLightbox.create(`
        <img src="${largeImageUrl}">
      `);
  
      instance.show();
    });
  });
