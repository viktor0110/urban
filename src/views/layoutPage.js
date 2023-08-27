import { html } from '../../node_modules/lit-html/lit-html.js';

export const layoutTemplate = (user, content) => html`
<header class="header">
       <nav class="nav-bar"> 
            <div class="nav-bar__main">
                <div class="nav-bar__main--left">
                    <div class="nav-bar__main--left--home" id="home"><a href="/">HOME</a></div>
                    <div class="nav-bar__main--left--gallery" id="gallery"><a href="/gallery">GALLERY</a></div>
                </div>
                <div class="nav-bar__main--middle">
                    <div class="nav-bar__main--middle--logo"><img class="nav-bar__main--middle--logo--img" id="logo" src="./src/static/images/logo new 2023 transperant cutted.png" alt="no-img"></div>
                </div>
                <div class="nav-bar__main--right">
                    <div class="nav-bar__main--right--booking" id="booking"><a href="/booking">BOOKING</a></div>
                    <div class="nav-bar__main--right--contact" id="contact"><a href="/contact">CONTACT</a></div>
                </div>
            </div>
            <div class="nav-bar__end hero" id="user-btns">
                <i @click=${toggleMenu} class="fa-regular fa-user user-pic"></i>

                <div class="sub-menu-wrap" id="subMenu">
                  <div class="sub-menu">
                    <div class="user-info">
                      <h3>username</h3>
                    </div>
                    <hr>
                    <a href="/login" class="sub-menu-link">
                      <p>Login</p>
                    </a>
                    <a href="/register" class="sub-menu-link">
                      <p>Register</p>
                    </a>
                    <a href="/logout" class="sub-menu-link">
                      <p>Logout</p>
                    </a>
                  </div>
                </div>
            </div>
</nav>
</header>
<main class="main" id="main">
        <div class="main__content" id="content">${content}</div>
</main>
<footer class="footer">
  <div class="links">
    <a class="links__instagram" href="https://www.instagram.com/urban.tattoo.sofia/"><i id="instagram" class="fa-brands fa-instagram links__instagram--icon" ></i></a>
    <a class="links__facebook" href="https://www.facebook.com/urban.tattoo.sofia/"><i id="facebook" class="fa-brands fa-square-facebook links__facebook--icon"></i></a>
    <a class="links__google" href="https://g.page/r/CbxBJYKl-n-wEB0"><i  id="google" class="fa-brands fa-square-google-plus links__google--icon"></i></a>
  </div>
  <div class="copyright">
    © 2023 Copyright:
    <a class="copyright__author" href="https://www.linkedin.com/in/viktor-stefanov-953047263/">Viktor Stefanov</a>
  </div>
    </footer>
`;



function toggleMenu() {
  let subMenu = document.getElementById('subMenu');
  subMenu.classList.toggle("open-menu");
}
