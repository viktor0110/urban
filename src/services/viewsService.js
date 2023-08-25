import { layoutTemplate } from '../controllers/layout.js';
import { render } from '../node_modules/lit-html/lit-html.js';

const root = document.getElementById('body');

export function decorateContext(ctx, next) {
    ctx.render = renderView;
    next();
  };

export function renderView(content) {
    const user = undefined;
    //getUser();
    render(layoutTemplate(user, content), root);
  };