import { html } from '../../node_modules/lit-html/lit-html.js';
import { createSubmitHandler } from '../services/user.js';

export async function renderLogin (ctx) {
    ctx.render(loginTemplate(createSubmitHandler(onLogin)));

    async function onLogin (data) {
        // if(!data.email || !data.password) {
        //     return alert('All fields are required');
        // }

        // await login(data.email, data.password);
        // ctx.page.redirect('/')
    };
}

const loginTemplate = (handler) => html`
<section id="loginPage">
<form @submit=${handler} class="loginForm">
    <img src="./images/logo.png" alt="logo" />
    <h2>Login</h2>

    <div>
        <label for="email">Email:</label>
        <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
    </div>

    <div>
        <label for="password">Password:</label>
        <input id="password" name="password" type="password" placeholder="********" value="">
    </div>

    <button class="btn" type="submit">Login</button>

    <p class="field">
        <span>If you don't have profile click <a href="/register">here</a></span>
    </p>
</form>
</section>`;