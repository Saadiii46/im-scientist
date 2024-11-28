import React from 'react'
import  styles from './Popular.module.css'
import Image from "next/image";

import seprator from '../../../public/Images/Separator-gradient.png'

import new1 from '../../../public/Images/course1.png'
import new2 from '../../../public/Images/course2.png'
import new3 from '../../../public/Images/course3.png'


const Popular = () => {
  return (
    <div className={styles["section-popular"]}>
        <div className={styles["popular-upper"]}>
            <p>Popular Courses</p><br/>
            <h2>Discover Your Perfect Course</h2>
            <span><Image src={seprator} alt="" /></span>
        </div>

        <div className={styles["left-popular"]}>

                <div className={styles["popular-cards"]}>
                    <Image src={new1} alt="news" />
                    <p>Become A Machine Learning - Master</p>
                    <p><span>12 hours  </span><span>45 Students</span><span>16 Lessons</span></p>
                    <button>Register Now</button>
                </div>

                <div className={styles["popular-cards"]}>
                <Image src={new2} alt="news2" />
                    <p>Deep Learning for Beginners – Master Deep Learning</p>
                    <p><span>15 hours</span><span>98 Students</span><span>12 Lessons</span></p>
                    <button>Register Now</button>
                </div>

                <div className={styles["popular-cards"]}>
                <Image src={new3} alt="news2" />
                    <p>The Complete AI Science Course 2024</p>
                <p><span>23 hours  </span><span>23 Students</span><span>19 Lessons</span></p>
                <button>Register Now</button>
                </div>
            </div>
        <button>Explore More</button>
    </div>
  )
}

export default Popular