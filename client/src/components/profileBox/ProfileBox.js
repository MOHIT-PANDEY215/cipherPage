import React from 'react'
import Image from 'next/image'
import style from './Profile.module.css'

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
            <div className={`${style.detail} text-white`}>
              <div className={style.user}>
                <h2>Hello</h2>
                <h1>Mohit Pandey</h1>
                <h2>pandeymohit215@gmail.com</h2>
              </div>
              <div className={style.follower}>
                <span>0</span> Followers
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileBox
