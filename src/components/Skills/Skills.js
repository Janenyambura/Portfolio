import React from 'react'
import './Skills.css' 
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'

const Skills = () => {
  return (
    <section id= 'skills'>
        <span className='skillTitle'>What I do </span>
        <span className='skillDesc'> I am a skilled and passionate web designer with vast experience in creating visually appealing and user friendly websites.I have a strong understanding of design and a keen eye for detail.I am proeffecient in html,css, javascript and react library,also in design software such as figma and adobe photoshop. </span>
        <div className='skillBars'> 
            <div className='skillBar'> 
                <img src={UIDesign} alt='UIDesign' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>UI/UXDesign</h2>
                     <p></p>
                 </div>
            </div>
            <div className='skillBar'>
                <img src={WebDesign} alt='WebDesign' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>WebDesign</h2>
                     <p></p>
                 </div>
            </div>
            <div className='skillBar'>
                <img src={AppDesign} alt='AppDesign' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>AppDesign</h2>
                     <p></p>
                 </div>
            </div>
        </div>
    </section>  
  )
}

export default Skills