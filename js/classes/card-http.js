'use strict'

class card extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' })
        this.foto = null
        this.http = 'httpCode'
        this.status = 'status'
        this.cor = '#fff'
    }


    static get observedAttributes() {
        return ['titulo', 'http', 'status', 'cor']
    }

    attributeChangedCallback(Attributes, oldValue, newValue) {
        this[Attributes] = newValue
    }

    connectedCallback() {
        this.shadow.appendChild(this.component())
        this.shadow.appendChild(this.styles())
    }

    component() {
        
        const card = document.createElement('div')
        card.classList.add('card')

        const foto = document.createElement('img')
        foto.classList.add('http-image')

        const http = document.createElement('span')
        http.classList.add('http-name')
        http.textContent = this.http

        const status = document.createElement('span')
        status.classList.add('http-status')
        status.textContent = this.status

        card.append(http, foto, http, status)

        return card
    }

    styles() {
        const css = document.createElement('style')
        css.textContent = `
        .card {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 10px;
            height: 279px;
            width: 308px;
            background-color: #fff;
            border-radius: 10px;
            cursor: pointer;
        }
        
        .http-image {
            height: 100%;
            width: 80%;
            background-image: url(${this.foto});
            background-size: cover;
            background-position: center;
        }
        
        .http-name {
            font-weight: 700;
            font-size: 1.3rem;
        }
        
        .http-status {
            font-weight: 700;
            font-size: 1rem;
        }
        `
        return css
    }
}

customElements.define('card-http', card)