import { decorateContext } from '../services/viewsService.js'
import { renderHomePage } from '../views/homePage.js';
import { renderLoginPage } from '../views/loginPage.js';
import { renderLogoutPage } from '../views/logoutPage.js';
import { renderRegisterPage } from '../views/registerPage.js';

export function app(page) {
    page(decorateContext);
    page('/index.html', '/');
    page('/', renderHomePage);
    page('/login', renderLoginPage);
    page('/logout', renderLogoutPage);
    page('/register', renderRegisterPage);
    // page('/create', renderCreate);
    // page('/details/:id', renderDetails);
    // page('/edit/:id', renderEdit);
    // page('/dashboard', renderDashboard);

    page.start();
}


