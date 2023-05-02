'use strict'

export const getHttpDogs = async (codigo) => {

    const url = `https://http.dog/${codigo}.json`
    const response = await fetch(url)
    const data = await response.json()

    return data
}

export const getHttpCats = async (codigo) => {

    const url = `https://httpcats.com/${codigo}.json`
    const response = await fetch(url)
    const data = await response.json()

    return data
}

