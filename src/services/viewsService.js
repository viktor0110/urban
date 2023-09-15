import { layoutTemplate } from '../views/layoutPage.js';
import { render } from '../../node_modules/lit-html/lit-html.js';

const root = document.getElementById('body');

export function decorateContext(ctx, next) {
    ctx.render = renderView;
    //only for testing
    ctx.user = 'admin';
    //should be request to DB -> users -> [types: 'admin'];
    next();
  };

export function renderView(content) {
  //only for testing , should be check function;
    // const user = undefined;
    const user = { username: 'admin'};
    render(layoutTemplate(user, content), root);
  };

