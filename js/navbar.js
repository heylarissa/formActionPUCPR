// define o component navbar
class Navbar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {

        this.innerHTML = `
        <div class="sidebar">
            <i class="material-symbols-outlined">menu</i>
            <i class="material-symbols-outlined">home</i>
            <i class="material-symbols-outlined">contact_page</i> 

        </div>
    `;
    }
};
customElements.define('navbar-component', Navbar);
