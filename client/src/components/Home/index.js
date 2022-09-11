import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/dLogo.png'
import './index.scss'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['e', 'r', 'e', 'k'];
    const jobArray = [
        'f',
        'u',
        'l',
        'l',
        '-',
        's',
        't',
        'a',
        'c',
        'k',
        ' ',
        'd',
        'e',
        'v',
        'e',
        'l',
        'o',
        'p',
        'e',
        'r',
        '.',
    ];

    // useEffect(() => {
    //     return setTimeout(() => {
    //         console.log("error here")
    //         setLetterClass('text-animate-hover')
    //     }, 3000)
    // }, [])

    return (
        <>
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i, </span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <img className='home-logo' src={LogoTitle} alt="developer" />
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={nameArray}
                        idx={15}
                    />
                    <br />
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={jobArray}
                        idx={22}
                    />
                </h1>
                <h2>Full-Stack Developer</h2>
                <Link to="/contact" className='flat-button'>Contact Me</Link>
            </div>
        </div>
        <Loader type="pacman"/>
        </>
    )
}

export default Home