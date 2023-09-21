import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import { getTattoos, deleteTattoo } from '../data/endpoints.js';
import { closeFullImg, openFullImg } from '../services/galleryService.js';
import { getUser } from '../services/util.js';



export async function renderGalleryPage(ctx) {
    const tattoos = await getTattoos();
    const user = getUser();

    async function deleteHandler(e) {
        const id = e.target.parentElement.firstElementChild['data-id'];
        const imgFolderUrl = "../../src/assets/images/tattoos/";
        const src = imgFolderUrl + e.target.parentElement.firstElementChild.src.split('/')[7];
        e.currentTarget.parentElement.style.display = 'none';

        await deleteTattoo(id);
        ctx.page.redirect('/gallery');
      };

    ctx.render(galleryTemplate(tattoos, user, deleteHandler));
}

const galleryTemplate = (tattoos, user, deleteHandler) => html`
<section id="galleryPage" class="galleryPage">
    <div class="full-img" id="fullImgBox">
        <img src="" alt="no-img" id="fullImg">
        <span @click=${closeFullImg}>X</span>
        ${user && user._role == 'admin' ? html`
            <span @click=${deleteHandler} class="delete">Delete</span>` 
        : nothing }
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
<img @click=${openFullImg} src=${tattoo.imageUrl} alt="no-img" data-id="${tattoo._id}">
`;

