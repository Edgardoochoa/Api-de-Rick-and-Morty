import { Routes, Route } from 'react-router-dom'
import { ApiDetails, EpisodeList, Home } from '../pages/index'

const RoutesIndex = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/EpisodeList' element={<EpisodeList />} />
        <Route path='/ApiDetails/:id' element={<ApiDetails />} />
      </Routes>
    </>
  )
}
export default RoutesIndex
