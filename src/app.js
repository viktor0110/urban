import { render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';

import { renderHome } from './controllers/homePage.js';
import { layoutTemplate } from './controllers/layout.js';

const root = document.getElementById('body');


page(decorateContext);
page('/index.html', '/');
page('/', renderHome);
// page('/login', renderLogin);
// page('/register', renderRegister);
// page('/logout', logoutAction);
// page('/create', renderCreate);
// page('/details/:id', renderDetails);
// page('/edit/:id', renderEdit);
// page('/dashboard', renderDashboard);

page.start();

function decorateContext(ctx, next) {
  ctx.render = renderView;
  next();
}

function renderView(content) {
  const user = undefined;
  //getUser();
  render(layoutTemplate(user, content), root);
}


