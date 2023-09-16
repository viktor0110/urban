import { logout } from "../data/auth.js";


export async function renderLogoutPage(ctx) {
    if(ctx.user) {
      await logout();
    } 
    ctx.page.redirect('/');
  }