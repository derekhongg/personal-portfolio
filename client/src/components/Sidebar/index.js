import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import D from '../../assets/images/logo1.png'
import DH from '../../assets/images/logo2.png'
import Logo from '../../assets/images/DH.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser, faSuitcase } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);

    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={Logo} alt="Derek Hong Logo" />
            </Link>
            <nav className={showNav ? 'mobile-show' : ''}>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink
                    exact="true"
                    activeclassname="active"
                    className="about-link"
                    to="/about"
                >
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink
                    activeclassname="active"
                    className="portfolio-link"
                    to="/portfolio"
                    onClick={() => setShowNav(false)}
                >
                    <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
                </NavLink>
                <NavLink
                    exact="true"
                    activeclassname="active"
                    className="contact-page"
                    to="/contact"
                >
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
            </nav>
        </div>
    )
}

export default Sidebar