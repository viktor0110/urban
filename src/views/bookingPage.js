import { html } from '../../node_modules/lit-html/lit-html.js';

export async function renderBookingPage(ctx) {
    ctx.render(bookingTemplate());
}

const bookingTemplate = () => html`
<section id="bookingPage">
<h1 class="message">TO DO WHEN LEARN REACT</h1>
<br>
<img src="../../src/assets/images/calendarView.jpg" alt="">
</section>
`;
