// define o component navbar
class Navbar extends HTMLElement {
    
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="sidebar">
        
            <a href="./index.html"><i class="material-symbols-outlined">home</i>Home</a>
            <a href="./about.html">About</a>
            <a href="./form.html"><i class="material-symbols-outlined">contact_page</i>Contact</a>
        </div>
    `;
    }

    
};
customElements.define('navbar-component', Navbar);
