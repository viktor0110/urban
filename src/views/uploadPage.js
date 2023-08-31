import { html } from '../../node_modules/lit-html/lit-html.js';
import { createSubmitHandler } from '../services/data.js';

export async function renderUploadPage(ctx) {
    //should be checker from DB
    if(ctx.user == 'admin') {
        ctx.render(uploadTemplate(createSubmitHandler(onUpload)));
    } else {
        ctx.page.redirect('/');
    }

    async function onUpload(data) {
        console.log(data.photo.size);
        // await upload(data.photo);
        // ctx.page.redirect('/')
    }
}

const uploadTemplate = (handler) => html`
<section id="uploadPage" class="uploadPage">
    <form @submit=${handler} class="uploadForm">
        <div>
            <label for="photo">Photo:</label>
            <input class="input-photo" id="photo" name="photo" type="file">
        </div>
        <button class="btn" type="submit">Upload</button>
    </form>
</section>
`;


