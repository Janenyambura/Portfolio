import React from 'react'
import './Intro.css'
import bg from '../../assets/shop.jpeg'
import btnImg from '../../assets/hireme.png'
import { Link } from "react-scroll"  

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Jane</span><br />Website Designer</span>
            <p className='introPara'>I am a skilled web designer with experience in creating<br /> visually appealing and user friendly websites</p>
            <Link><button className='btn'><img src={btnImg} alt='hire me'className='btnImg'/>Hire me</button></Link>
        </div>
        <img src={bg} alt='profile' className='bg' />
    </section>

  )
}

export default Intro