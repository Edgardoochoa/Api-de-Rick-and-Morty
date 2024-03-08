import { useEffect, useState } from 'react'
import { getCharacter } from '../services/apiServices'
import { Link } from 'react-router-dom'
import '../styles/ApiCard.css'

const ApiCard = () => {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

  const feschcharacters = characters.filter(character => {
    return character.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

  const handleInputChange = (e) => {
    e.preventDefault()
    setSearchTerm(e.target.value)
  }

  useEffect(() => {
    const fetchCracters = async () => {
      try {
        const response = await getCharacter()
        if (response.status === 200) {
          setCharacters(response.data.results)
          setLoading(false)
        }
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchCracters()
  }, [])

  if (loading) {
    return <h1>loading</h1>
  }

  return (
    <>
      <div className='input'>
        <h3>Buscar Personaje</h3>
        <input placeholder='Buscar Peliculas' type='text' value={searchTerm} onChange={handleInputChange} />
      </div>

      <div className='container'>

        {feschcharacters.map(character => (
          <div key={character.id}>
            <img src={character.image} alt={character.name} />
            <h4>{character.name}</h4>
            <Link to={`/ApiDetails/${character.id}`}>
              <button className='boton'>Details</button>
            </Link>
          </div>
        ))}

      </div>
    </>
  )
}
export default ApiCard
