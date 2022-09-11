import { useEffect, useState } from 'react'
import {
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faPython,
    faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SelfPortrait from '../../assets/images/portrait.jpeg'
import './index.scss'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')


    return (
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p> 
                        A Full-Stack Developer with a background in Human Resources and Marketing.
                        Looking for an opportunity to work with the latest technologies on challenging and diverse projects.
                    </p>
                    <p align="LEFT">
                        In my spare time, I enjoy playing basketball, volleyball, and support Seattle sports!
                    </p>
                    <img height={'300px'} width={'300px'}src={SelfPortrait} />
                </div>
                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faPython} color="#DD0031" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default About