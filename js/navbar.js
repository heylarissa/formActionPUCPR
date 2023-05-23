// define o component navbar
class Navbar extends HTMLElement {
    constructor(open) {
        super();
        this.open = open;
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

    openNav() {
        document.getElementById("sidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    }
    closeNav() {
        document.getElementById("sidebar").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    }
    moveNav() {
        this.open = !this.open;
        if (this.open){
            this.openNav()
        }
        else {
            this.closeNav()
        }
    }
    
};
customElements.define('navbar-component', Navbar);
var nav = new Navbar(false);

