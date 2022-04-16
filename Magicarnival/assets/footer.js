const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `

<link rel="stylesheet" href="styles/styleHome.css">

<nav class="footers">
    © 2022 Copyright&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;Magicarnival&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;All Rights Reserved
</nav>
`
class Footer extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(footerTemplate.content);
    }
}

customElements.define('footer-component', Footer);