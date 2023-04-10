import React from 'react'
import style from './main.module.css'
import Image from 'next/image'

const MainComponent = () => {
  return (
    <main className={style.main}>
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
    </main>
  )
}

export default MainComponent
