import React, {useState, useEffect} from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { SiRedux } from 'react-icons/si';
import { FaHtml5, FaCss3, FaGitAlt, FaReact } from 'react-icons/fa';
import {IoLogoJavascript} from 'react-icons/io'
import Loader from 'react-loaders';


const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
        return setLetterClass('text-animate-hover')
        }, 3000)
      }, [])


  return (
    <>
    <div className='container about-page'>
        <div className='text-zone'>
        <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
        </h1>
        <p>
            I'm very ambitious front-end developer looking for a role in
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I'm quietly confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>
            If I need to define myself in one sentence that would be a family
            person, father of a beautiful daughter, a sports fanatic,
            photography enthusiast, and tech-obsessed!!!
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <SiRedux color="#5534A5" />
            </div>
            <div className="face2">
              <FaHtml5 color="#F06529" />
            </div>
            <div className="face3">
              <FaCss3 color="#28A4D9" />
            </div>
            <div className="face4">
              <FaReact color="#5ED4F4" />
            </div>
            <div className="face5">
              <IoLogoJavascript color="#EFD81D" />
            </div>
            <div className="face6">
              <FaGitAlt color="#EC4D28" />
            </div>
          </div>
        </div>
    </div>
    <Loader type='pacman' />
    </>
  )
}

export default About