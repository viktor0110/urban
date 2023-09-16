import { layoutTemplate } from '../views/layoutPage.js';
import { render } from '../../node_modules/lit-html/lit-html.js';
import { getUser } from './util.js';

const root = document.getElementById('body');

export function decorateContext(ctx, next) {
    ctx.render = renderView;
    ctx.user = getUser();
    next();
  };

export function renderView(content) {
    const user = getUser();
    render(layoutTemplate(user, content), root);
  };

