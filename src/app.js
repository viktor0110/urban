import { app } from './config/routes.js';
import page from '../../node_modules/page/page.mjs';

(async function startApplication() {
    app(page);
})();