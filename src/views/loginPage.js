import { html } from '../../node_modules/lit-html/lit-html.js';
import { createSubmitHandler } from '../services/data.js';
import { login } from '../data/auth.js';

export async function renderLoginPage (ctx) {
    ctx.render(loginTemplate(createSubmitHandler(onLogin)));

    async function onLogin (data) {
        if(!data.email || !data.password) {
            return alert('All fields are required');
        }

        await login(data.email, data.password);
        ctx.page.redirect('/')
    };
}

const loginTemplate = (handler) => html`
<section id="loginPage" class="loginPage">
    <form @submit=${handler} class="loginForm">
        <div>
            <label for="email">Email:</label>
            <input id="email" name="email" type="text" placeholder="viktor@abv.bg" value="">
        </div>

        <div>
            <label for="password">Password:</label>
            <input id="password" name="password" type="password" placeholder="********" value="">
        </div>
        <br>
        <button class="btn" type="submit">Sign in</button>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <p class="field">
            <span>Sign up <a class="reg-btn" href="/register">here</a></span>
        </p>
    </form>
</section>
`;