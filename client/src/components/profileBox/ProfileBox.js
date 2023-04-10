import React from 'react'
import Image from 'next/image'
import style from './Profile.module.css'
import MyCalendarHeatmap from '../heatmap/MyCalendarHeatmap'


const ProfileBox = () => {
  return (
    <div className={style.main}>
      <div className={style.back}>
        <div className={style.content}>
            <div className={style.profile}>
                <div className={style.profile_box}>
                <Image
                src="/cipher_logo.png"
                width={40}
                height={40}
                />
                </div>
                <div className={style.pencil}>
                    <Image
                    src="/pencil.svg"
                    width={20}
                    height={20}
                    />
                </div>
            </div>
            <div className={style.detail}>
            </div>
        </div>
      </div>
        {/* <MyCalendarHeatmap/> */}
    </div>
  )
}

export default ProfileBox
