import { html, render } from '.../node_modules\lit-html\lit-html.js';

const main = document.getElementById('main');
const mainContent = document.getElementById('content');

export function galleryPage() {
    mainContent.style.display = 'none';

    

    let galleryContent = document.createElement('div');
    galleryContent.classList.add('main__gallery');
    galleryContent.innerHTML = `<!-- Modal gallery -->
    <section class="">
      <!-- Section: Images -->
      <section class="">
      <section class="">
      <div class="row">
        <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
          <div
            class="bg-image hover-overlay ripple shadow-1-strong rounded"
            data-ripple-color="light"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/screens/yt/screen-video-1.webp"
              class="w-100"
            />
            <a href="#!" data-mdb-toggle="modal" data-mdb-target="#exampleModal1">
              <div class="mask" style="background-color: rgba(251, 251, 251, 0.2);"></div>
            </a>
          </div>
        </div>
  
        <div class="col-lg-4 mb-4 mb-lg-0">
          <div
            class="bg-image hover-overlay ripple shadow-1-strong rounded"
            data-ripple-color="light"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/screens/yt/screen-video-2.webp"
              class="w-100"
            />
            <a href="#!" data-mdb-toggle="modal" data-mdb-target="#exampleModal2">
              <div class="mask" style="background-color: rgba(251, 251, 251, 0.2);"></div>
            </a>
          </div>
        </div>
  
        <div class="col-lg-4 mb-4 mb-lg-0">
          <div
            class="bg-image hover-overlay ripple shadow-1-strong rounded"
            data-ripple-color="light"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/screens/yt/screen-video-3.webp"
              class="w-100"
            />
            <a href="#!" data-mdb-toggle="modal" data-mdb-target="#exampleModal3">
              <div class="mask" style="background-color: rgba(251, 251, 251, 0.2);"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
      </section>
      <!-- Section: Modals -->
    </section>
    <!-- Modal gallery -->`;
    main.appendChild(galleryContent);
}