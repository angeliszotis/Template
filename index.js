import { router } from './core/router.js';
import { renderNavbar } from './components/navbar.js';

const app = document.getElementById('app');

function renderPage(content) {
    app.innerHTML = '';
    app.appendChild(renderNavbar());
    app.appendChild(content);
}

window.addEventListener('DOMContentLoaded', () => {
    router.init(renderPage);
});