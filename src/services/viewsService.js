import { layoutTemplate } from '../views/layoutPage.js';
import { render } from '../../node_modules/lit-html/lit-html.js';

const root = document.getElementById('body');

export function decorateContext(ctx, next) {
    ctx.render = renderView;
    next();
  };

export function renderView(content) {
    // const user = undefined;
    const user = { username: 'admin'};
    render(layoutTemplate(user, content), root);
  };

