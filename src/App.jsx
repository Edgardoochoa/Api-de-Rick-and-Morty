import { BrowserRouter } from 'react-router-dom'
import RoutesIndex from './routes/RoutesIndex'
import Headers from './components/Headers'
import './App.css'

function App () {
  return (
    <>
      <BrowserRouter>
        <Headers />
        <RoutesIndex />
      </BrowserRouter>
    </>
  )
}

export default App
