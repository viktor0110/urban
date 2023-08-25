import page from '../node_modules/page/page.mjs';
import { decorateContext } from '../services/viewsService.js'
import { renderHome } from '../controllers/homePage.js';

export  function app() {
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
}


