const contentElement = document.getElementById('content');
const galleryBtn = document.getElementById('gallery');

import { galleryPage } from './galleryPage.js';



galleryBtn.addEventListener('click', (e) => {
    galleryPage();
} )