import { HomePage } from '../pages/home.js';
import { AboutPage } from '../pages/about.js';

const routes = {
    '/': HomePage,
    '/about': AboutPage
};

export const router = {
    init(renderPage) {
        window.onpopstate = () => this.route(renderPage);
        document.body.addEventListener('click', (e) => {
            if (e.target.matches('[data-link]')) {
                e.preventDefault();
                history.pushState(null, '', e.target.href);
                this.route(renderPage);
            }
        });
        this.route(renderPage);
    },

    route(renderPage) {
        const path = window.location.pathname;
        const view = routes[path] || (() => document.createTextNode('Page not found'));
        renderPage(view());
    }
};