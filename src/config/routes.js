import { decorateContext } from '../services/viewsService.js'
import { renderHome } from '../controllers/homePage.js';
import { renderLogin } from '../controllers/loginPage.js';
import { renderLogout } from '../controllers/logoutPage.js';

export  function app(page) {
    page(decorateContext);
    page('/index.html', '/');
    page('/', renderHome);
    page('/login', renderLogin);
    page('/logout', renderLogout);
    // page('/login', renderLogin);
    // page('/register', renderRegister);
    // page('/logout', logoutAction);
    // page('/create', renderCreate);
    // page('/details/:id', renderDetails);
    // page('/edit/:id', renderEdit);
    // page('/dashboard', renderDashboard);

    page.start();
}


