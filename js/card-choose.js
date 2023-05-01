'use strict'

class card extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' })
        this.titulo = 'Titulo'
        this.cor = '#fff'
        this.href = null
    }

    static get observedAttributes() {
        return ['titulo', 'cor']
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

        const titulo = document.createElement('h1')
        titulo.classList.add('title')
        titulo.textContent = this.titulo

        card.append(titulo)

        return card
    }

    styles() {
        const css = document.createElement('style')
        css.textContent = `
                .card {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100px;
                    width: 400px;
                    background-color: ${this.cor};
                    border-radius: 10px;
                }
        `

        return css
    }
}

customElements.define('card-choose', card)