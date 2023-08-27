import { decorateContext } from '../services/viewsService.js'
import { renderContactPage } from '../views/contactPage.js';
import { renderGalleryPage } from '../views/galleryPage.js';
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
    page('/contact', renderContactPage);
    page('/gallery', renderGalleryPage)
    // page('/create', renderCreate);
    // page('/details/:id', renderDetails);
    // page('/edit/:id', renderEdit);
    // page('/dashboard', renderDashboard);

    page.start();
}


