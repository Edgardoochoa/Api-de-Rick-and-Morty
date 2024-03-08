import { useEffect, useState } from 'react'
import { getEpisode } from '../services/apiServices'
import image from '../img/image.jpg'
import '../styles/Episode.css'

const Episode = () => {
  const [episodes, setEpisodes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchEpisode = async () => {
      try {
        const response = await getEpisode()
        if (response.status === 200) {
          setEpisodes(response.data.results)
          setLoading(false)
          console.log(response.data.results)
        }
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchEpisode()
  }, [])

  if (loading) {
    return <h1>loading</h1>
  }

  return (
    <>
      <div className='container-episode'>

        {episodes.map(episode => (
          <div key={episode.id}>
            <img src={image} alt={episode.name} />
            <h4>{episode.name}</h4>
            <h5>{episode.id}</h5>
          </div>
        ))}

      </div>
    </>
  )
}
export default Episode
