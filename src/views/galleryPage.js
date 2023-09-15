import { html } from '../../node_modules/lit-html/lit-html.js';
import { getTattoos } from '../data/endpoints.js';
import { closeFullImg, openFullImg } from '../services/galleryService.js';

export async function renderGalleryPage(ctx) {
    const tattoos = await getTattoos();
    ctx.render(galleryTemplate(tattoos));
}

const galleryTemplate = (tattoos) => html`
<section id="galleryPage" class="galleryPage">
    <div class="full-img" id="fullImgBox">
        <img src="../../src/assets/images/tattoos/1.jpg" alt="no-img" id="fullImg">
        <span @click=${closeFullImg}>X</span>
    </div>
    <div class="img-gallery">
    
        ${tattoos.length > 0 ? html`${tattoos.map(tattoo => tatooTemplate(tattoo))}` 
        : html`<div>
        <p >There is no tattoos added yet !</p>
        </div>`}

    </div>
</section>
`;

const tatooTemplate = (tattoo) => html`
<img @click=${openFullImg} src=${tattoo.imageUrl} alt="no-img">
`;


{/* <img @click=${openFullImg} src="../../src/assets/images/tattoos/1.jpg" alt="no-img">
<img @click=${openFullImg} src="../../src/assets/images/tattoos/2.jpg" alt="no-img" alt="no-img">
<img @click=${openFullImg} src="../../src/assets/images/tattoos/3.jpg" alt="no-img" alt="no-img">
<img @click=${openFullImg} src="../../src/assets/images/tattoos/4.jpg" alt="no-img" alt="no-img">
<img @click=${openFullImg} src="../../src/assets/images/tattoos/5.jpg" alt="no-img" alt="no-img">
<img @click=${openFullImg} src="../../src/assets/images/tattoos/6.jpg" alt="no-img" alt="no-img">
<img @click=${openFullImg} src="../../src/assets/images/tattoos/7.jpg" alt="no-img" alt="no-img">
<img @click=${openFullImg} src="../../src/assets/images/tattoos/8.jpg" alt="no-img" alt="no-img">
<img @click=${openFullImg} src="../../src/assets/images/tattoos/9.jpg" alt="no-img" alt="no-img"> */}