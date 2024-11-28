import React from 'react'
import  styles from './GetStarted.module.css'
import Image from "next/image";

import arrow from '../../../public/Images/right-arrow.png'

import elipse1 from '../../../public/Images/Ellipse 1.png'
import elipse2 from '../../../public/Images/Ellipse 2.png'
import rectangle from '../../../public/Images/Rectangle 1.png'
import leftrectangle from '../../../public/Images/leftRectangle.png'

const GetStarted = () => {
  return (
    <div className={styles["section-started"]}>
        <div className={styles["left"]}>
            <div className={styles["left-upper"]}>
                <Image src={elipse2} alt="" />
            </div>
            <div className={styles["left-down"]}>
                <Image src={leftrectangle} alt="" />
                <Image src={elipse1} alt="" />
            </div>
        </div>

        <div className={styles["center"]}>
            <h2 className='h2-head'>"Test Your Limits—Sign Up for Remote Competitions and Rise to the Top!"</h2>
            <p>Build your own online tests and assessments with AI Scientist for free</p>
            <button>Get Started For Free <Image src={arrow} alt="" /></button>
        </div>

        <div className={styles["right"]}>
            
            <div className={styles["left-down"]}>
                <Image src={elipse1} alt="" />
                <Image src={rectangle} alt="" />
            </div>
            <div className={styles["left-upper"]}>
                <Image src={elipse2} alt="" />
            </div>
        </div>
    </div>
  )
}

export default GetStarted