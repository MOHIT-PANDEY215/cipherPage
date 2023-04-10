import React from 'react'
import style from './main.module.css'
import Image from 'next/image'
import MyCalendarHeatmap from '../heatmap/MyCalendarHeatmap'
import ProfileBox from '../profileBox/ProfileBox'
import About from '../about/About'
import WebBox from '@/components/webBox/WebBox'

const MainComponent = () => {
  return (
    <>
    <ProfileBox/>
    <div className={style.content}>
    <About/>
    <div className={`${style.underline}`}></div>
    <MyCalendarHeatmap/>
    <div className={`${style.underline}`}></div>
    <WebBox/>
    </div>
    </>
  )
}

export default MainComponent
