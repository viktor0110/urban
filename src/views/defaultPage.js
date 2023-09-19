import { html } from '../../node_modules/lit-html/lit-html.js';

export async function renderDefaultPage(ctx) {
    ctx.render(defaultTemplate());
}

const defaultTemplate = () => html`
<section id="defaultPage" class="defaultPage">
<h1>404</h1>
<h2>Page not found</h2>
</section>
`;
