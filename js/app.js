'use strict'

import './router.js'

import { getHttpCats, getHttpDogs } from './API/httpAPI.js'

const criarCard = (gato) => {

    const card = document.createElement('card-http')
    card.foto = gato.jpg
    card.http = gato.status_code
    card.status = gato.title

    return card
} 

const carregarCardsGatos = (codigo) => {
    const container = document.getElementById('card-container')
    const gatoHttp = getHttpCats(codigo)
    const cards = criarCard(gatoHttp)

    container.replaceChildren(...cards)
}

carregarCardsGatos(100)