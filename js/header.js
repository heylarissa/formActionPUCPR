// define o component navbar
class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div>
            <h4>Seja bem-vindo</h4>
        </div>
    `;
    }
};
customElements.define('header-component', Header);
