import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getCharacterById } from '../services/apiServices'
import '../styles/Detail.css'

const Details = () => {
  const [detailCharacter, setDetailCharacter] = useState([])
  const [loading, setLoading] = useState(true)
  const { id } = useParams()

  console.log(detailCharacter)

  useEffect(() => {
    const characterDetails = async () => {
      try {
        const response = await getCharacterById(id)
        if (response.status === 200) {
          setDetailCharacter(response.data)
          setLoading(false)
        }
      } catch (error) {
        console.log(error)
      }
    }
    characterDetails()
  }, [id])

  if (loading) {
    return <h1>loading</h1>
  }

  return (
    <>

      <div className='container-card'>

        <div>
          <img className='container-img' src={detailCharacter.image} alt={detailCharacter.name} />
          <h3>{detailCharacter.name}</h3>
          <h5>{detailCharacter.species}</h5>
          <h5>{detailCharacter.gender}</h5>

        </div>
      </div>

    </>
  )
}
export default Details
