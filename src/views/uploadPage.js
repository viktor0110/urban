import { html } from '../../node_modules/lit-html/lit-html.js';
import { upload } from '../data/uploadApi.js';
import { uploadHandler } from '../services/data.js';
import { checkAdmin, getUser } from '../services/util.js';

const user = getUser();

export async function renderUploadPage(ctx) {
        checkAdmin(ctx);

        ctx.render(uploadTemplate(uploadHandler(onUpload)));
  
        async function onUpload(data) {
            await upload(user, data);
            ctx.page.redirect('/gallery');
        }
}

const uploadTemplate = (handler) => html`
<section id="uploadPage" class="uploadPage">
    <form @submit=${handler} class="uploadForm" enctype='multipart/form-data'>
        <div>
            <label for="photo">Photo:</label>
            <input class="input-photo" id="files" name="photo" type="file">
        </div>
        <button class="btn" type="submit">Upload</button>
    </form>
</section>
`;


