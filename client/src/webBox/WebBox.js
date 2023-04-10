import React from 'react'
import style from './webBox.module.css'

const WebBox = () => {
  return (
    <>
    <div className={`${style.webLink} `}>
    <div className={`flex justify-between ${style.webHead} mb-2`}>
    <h2 className={`text-white uppercase text-lg`} >On the web</h2>
    <button className={`text-white ${style.edit}`}>Edit</button>
    </div>
    <div className={`${style.linkBox}`}>
        <div className={`${style.link}`}>

        </div>
    </div>
    </div>

    </>
  )
}

export default WebBox
