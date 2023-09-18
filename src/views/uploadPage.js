import { html } from '../../node_modules/lit-html/lit-html.js';
import { createTattoo } from '../data/endpoints.js';
import { createSubmitHandler } from '../services/data.js';
import { checkAdmin } from '../services/util.js';

export async function renderUploadPage(ctx) {
        checkAdmin(ctx);

        ctx.render(uploadTemplate(createSubmitHandler(onUpload)));
  
        async function onUpload(data) {
            if(data.photo.size == 0) {
                return alert('Img file is required !');
            }
            // SHOULD BE NEXT NUMBER OF PHOTO IN STATIC FOLDER => data.photo.name);
            await createTattoo(data);
            ctx.page.redirect('/');
        }
}

const uploadTemplate = (handler) => html`
<section id="uploadPage" class="uploadPage">
    <form @submit=${handler} class="uploadForm" enctype='multipart/form-data'>
        <div>
            <label for="photo">Photo:</label>
            <input class="input-photo" id="photo" name="photo" type="file">
        </div>
        <button class="btn" type="submit">Upload</button>
    </form>
</section>
`;


