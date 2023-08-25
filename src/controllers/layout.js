import { html } from '../../node_modules/lit-html/lit-html.js';

export const layoutTemplate = (user, content) => html`
<header class="header">
       <nav class="nav-bar"> 
            <div class="nav-bar__main">
                <div class="nav-bar__main--left">
                    <div class="nav-bar__main--left--home" id="home">HOME</div>
                    <div class="nav-bar__main--left--gallery" id="gallery">GALLERY</div>
                </div>
                <div class="nav-bar__main--middle">
                    <div class="nav-bar__main--middle--logo"><img class="nav-bar__main--middle--logo--img" id="logo" src="./src/static/images/logo new 2023 transperant cutted.png" alt=""></div>
                </div>
                <div class="nav-bar__main--right">
                    <div class="nav-bar__main--right--booking" id="booking">BOOKING</div>
                    <div class="nav-bar__main--right--contact" id="contact">CONTACT</div>
                </div>
            </div>
            <div class="nav-bar__end" id="user-btns">
                <button class="nav-bar__main--login" id="login">Login</button>
                <button class="nav-bar__main--register" id="register">Register</button>
                <button class="nav-bar__main--logout" id="logout">Logout</button>
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