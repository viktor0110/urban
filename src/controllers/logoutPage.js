async function logoutAction(ctx) {
    await logout();
    ctx.page.redirect('/');
  }