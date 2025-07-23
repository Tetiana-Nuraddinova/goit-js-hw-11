import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captoionDelay: 250,
});

export function createGallery(images) {
    const markup = images.map(image =>
        ` <li class="gallery-item">
        <a href="${image.largeImageURL}">
        <img class="gallery-img" src="${image.webformatURL}" alt="${image.tags}" width="360" height="200"/>
        </a>
        <div class="info">
        <p><b>Likes:</b> ${image.likes}</p>
        <p><b>Views:</b> ${image.views}</p>
        <p><b>Comments:</b> ${image.comments}</p>
        <p><b>Downloads:</b> ${image.downloads}</p>
        </div>
        </li>`
    ).join('');

    gallery.insertAdjacentHTML('beforeend', markup);
    lightbox.refresh();
}
export function clearGallery() {
    gallery.innerHTML = '';
    
}

export function showLoader() {
    loader.classList.add('is-visible');
    
}

export function hideLoader() {
    loader.classList.remove('is-visible')
}
