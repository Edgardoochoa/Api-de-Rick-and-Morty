import { NavLink } from 'react-router-dom'
import image from '../img/image1.jpg'
import './Header.css'

const Headers = () => {
  const LinkIsActive = (isActive) => {
    return isActive ? 'nav-link active' : 'nav-link'
  }

  return (
    <>

      <nav className='navbar'>
        <div className='container'>
          <NavLink className='navbar-brand' to='/'>
            <img src={image} alt='Bootstrap' className='headers-img' />
          </NavLink>
          <ul className='nav nav-pills'>
            <li className='nav-item'>
              <NavLink
                to='/'
                className={({ isActive }) => LinkIsActive(isActive)}
                aria-current='page'
              >Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/EpisodeList'
                className={({ isActive }) => LinkIsActive(isActive)}
              >Episode
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

    </>
  )
}
export default Headers
