import axios from 'axios'

const BASE_URL = 'https://rickandmortyapi.com/api'

const getCharacter = () => axios.get(`${BASE_URL}/character`)
const getEpisode = () => axios.get(`${BASE_URL}/episode`)
const getCharacterById = (id) => axios.get(`${BASE_URL}/character/${id}`)

export {
  getCharacter,
  getEpisode,
  getCharacterById
}
