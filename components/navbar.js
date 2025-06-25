export function renderNavbar() {
    const nav = document.createElement('nav');
    nav.innerHTML = `
        <a href="/" data-link>Home</a> |
        <a href="/about" data-link>About</a>
    `;
    return nav;
}