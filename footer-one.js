class FooterOne extends HTMLElement{
    render() {
        this.innerHTML = `
            <div class="notification has-text-centered">
                <strong>Forecast Data by: </strong> <a  target="_blank" href="https://www.theweathernetwork.com/ca">BMKG (Richmond B.C)</a>.
            </div>
        `;
    }

    connectedCallback() {
        this.render();
    }

    disconnectedCallback() {
        this.innerHTML = ``;
    }
}

customElements.define("footer-one", FooterOne);