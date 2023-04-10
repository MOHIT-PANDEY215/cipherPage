import React from 'react'
import style from './about.module.css'

const About = () => {
  return (
    <>
    <div className={`flex justify-between mb-2`}>
    <h2 className={`text-white uppercase text-lg`} >About me</h2>
    <button className={`text-white ${style.edit}`}>Edit</button>
    </div>
    <div className={`${style.text_box} mb-2`}>
    <textarea className={`${style.box}`} placeholder="Add something about you" name="" id="" cols="30" rows="4"></textarea>
    </div>
    </>
  )
}

export default About