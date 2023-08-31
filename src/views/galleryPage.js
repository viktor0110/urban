import { html } from '../../node_modules/lit-html/lit-html.js';
import { closeFullImg, openFullImg } from '../services/galleryService.js';

export async function renderGalleryPage(ctx) {
    ctx.render(galleryTemplate());
}

const galleryTemplate = () => html`
<section id="galleryPage" class="galleryPage">
    <div class="full-img" id="fullImgBox">
        <img src="../../src/assets/images/tattoos/1.jpg" alt="no-img" id="fullImg">
        <span @click=${closeFullImg}>X</span>
    </div>
    <div class="img-gallery">
        <img @click=${openFullImg} src="../../src/assets/images/tattoos/1.jpg" alt="no-img">
        <img @click=${openFullImg} src="../../src/assets/images/tattoos/2.jpg" alt="no-img" alt="no-img">
        <img @click=${openFullImg} src="../../src/assets/images/tattoos/3.jpg" alt="no-img" alt="no-img">
        <img @click=${openFullImg} src="../../src/assets/images/tattoos/4.jpg" alt="no-img" alt="no-img">
        <img @click=${openFullImg} src="../../src/assets/images/tattoos/5.jpg" alt="no-img" alt="no-img">
        <img @click=${openFullImg} src="../../src/assets/images/tattoos/6.jpg" alt="no-img" alt="no-img">
        <img @click=${openFullImg} src="../../src/assets/images/tattoos/7.jpg" alt="no-img" alt="no-img">
        <img @click=${openFullImg} src="../../src/assets/images/tattoos/8.jpg" alt="no-img" alt="no-img">
        <img @click=${openFullImg} src="../../src/assets/images/tattoos/9.jpg" alt="no-img" alt="no-img">
    </div>
</section>
`;
