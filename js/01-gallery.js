import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


function createGalleryItem(item) {
    const galleryItem = document.createElement('li');
    galleryItem.classList.add('gallery__item');
  
    const galleryLink = document.createElement('a');
    galleryLink.classList.add('gallery__link');
    galleryLink.href = item.original;
  
    const galleryImage = document.createElement('img');
    galleryImage.classList.add('gallery__image');
    galleryImage.src = item.preview;
    galleryImage.alt = item.description;
    galleryImage.setAttribute('data-source', item.original);
  
    galleryLink.appendChild(galleryImage);
    galleryItem.appendChild(galleryLink);
  
    return galleryItem;
}

function renderGallery() {
    const galleryContainer = document.querySelector('.gallery');
  
    const galleryElements = galleryItems.map(item => createGalleryItem(item));
  
    galleryContainer.append(...galleryElements);
}

renderGallery();

const galleryContainer = document.querySelector('.gallery');
  
galleryContainer.addEventListener('click', onGalleryContainerClick);

function onGalleryContainerClick(event) {
    event.preventDefault();
    const target = event.target;
  
    if (target.classList.contains('gallery__image')) {
        const largeImageUrl = target.dataset.source;
    
        console.log('Large Image URL:', largeImageUrl);
        
    
        const instance = basicLightbox.create(`
            <img src="${largeImageUrl}">
        `);
        
        instance.show();
    }
}