import './Header.css'
// import avatar from '../../assets/avatar.svg'
import { useSelector } from 'react-redux'

const Navbar = ({ sidebarOpen, openSidebar }) => {
  const userLogin = useSelector((state) => state.userLogin)
  const { userCred } = userLogin
  return (
    <nav className='navbar'>
      <div className='nav_icon' onClick={() => openSidebar()}>
        <i className='fa fa-bars' aria-hidden='true'></i>
      </div>
      <p>Student Information System</p>
      {/* <div className='navbar__left'>
        <a href='#'>Subscribers</a>
        <a href='#'>Video Management</a>
        <a className='active_link' href='#'>
          Admin
        </a>
      </div>
       */}
      
      
    </nav>
  )
}

export default Navbar
