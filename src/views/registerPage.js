import { html } from '../../node_modules/lit-html/lit-html.js';
import { register } from '../data/auth.js';
import { createSubmitHandler } from '../services/data.js';
import { checkUser } from '../services/util.js';

export async function renderRegisterPage(ctx) {
    checkUser(ctx);
    ctx.render(registerTemplate(createSubmitHandler(onRegister)));

    async function onRegister(data) {
        if(!data.email || !data.password || !data.repeatPassword || !data.name || !data.phone) {
            return alert('All fields are required');
        }
        if(data.password !== data.repeatPassword) {
            return alert('Passwords do not match');
        }
        await register(data.email, data.password, data.name, data.phone);
        ctx.page.redirect('/')
    }
}

const registerTemplate = (handler) => html`
<section id="registerPage" class="registerPage">
    <form @submit=${handler} class="registerForm">
        <div class="on-dark">
            <label for="email">Email:</label>
            <input id="email" name="email" type="text" placeholder="viktor@abv.bg" value="">
        </div>
        
        <div class="on-dark">
            <label for="password">Password:</label>
            <input id="password" name="password" type="password" placeholder="********" value="">
        </div>

        <div class="on-dark">
            <label for="repeatPassword">Repeat Password:</label>
            <input id="repeatPassword" name="repeatPassword" type="password" placeholder="********" value="">
        </div>

        <div class="on-dark">
            <label for="name">Name:</label>
            <input id="name" name="name" type="text" placeholder="Viktor Stefanov" value="">
        </div>

        <div class="on-dark">
            <label for="phone">Phone:</label>
            <input id="phone" name="phone" type="number" placeholder="+359886003010" value="">
        </div>

        <br>
        <br>
        <button class="btn" type="submit">Sign up</button>
        <br>
        <br>
        <br>
        <p class="field">
            <span>Sign in <a class="log-btn" href="/login">here</a></span>
        </p>
    </form>
</section>
`;