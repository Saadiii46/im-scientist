import React from 'react'
import  styles from './News.module.css'
import Image from "next/image";

import seprator from '../../../public/Images/Separator-news.png'
import news1 from '../../../public/Images/news1.png'
import news2 from '../../../public/Images/news2.png'

const News = () => {
  return (
    <div className={styles["news-section"]}>

        <div className={styles["news-left"]}>
            <p>Discover Our Latest News</p>
            <h1>Find Out the Latest Competition News</h1>
            <Image src={seprator} alt="hi" />

            <div className={styles["left-main"]}>

                <div className={styles["main-cards"]}>
                    <Image src={news1} alt="news1" />
                    <p><span>June 6, 2025</span><span>Cometition, Cyber Security</span></p>
                    <p>Professor Albert joint research onmobile money in Tanzania</p>
                    <p>Read More</p>
                </div>

                <div className={styles["main-cards"]}>
                <Image src={news2} alt="news2" />
                    <p><span>June 6, 2016</span><span>Cometition, Machine Learning</span></p>
                    <p>A Global MBA for the nextgeneration of business leaders</p>
                    <p>Read More</p>
                </div>
            </div>
        </div>

        <div className={styles["news-right"]}>
            <h3>Upcoming Competetions<span><Image src={seprator} alt="" /></span></h3>
            <div className={styles["news-col"]}>
                <div className={styles["news-row"]}>
                    <div className={styles["date"]}>
                        <p className={styles['hard']}>07</p>
                        <p>JAN</p>
                        <Image src={seprator} alt="hi" />
                    </div>
                    <div className={styles["date-right"]}>
                        <p>AI And Machine Learning</p>
                        <p className='light'>7:00 am - 7:00 am <span>Remote</span></p>
                    </div>
                </div>
                
                <div className={styles["news-row"]}>
                    <div className={styles["date"]}>
                        <p className={styles['hard']}>07</p>
                        <p>JAN</p>
                        <Image src={seprator} alt="hi" />
                    </div>
                    <div className={styles["date-right"]}>
                        <p>AI And Machine Learning</p>
                        <p className={styles['light']}>7:00 am - 7:00 am <span>Remote</span></p>
                    </div>
                </div>

                <div className={styles["news-row"]}>
                    <div className={styles["date"]}>
                        <p className={styles['hard']}>07</p>
                        <p>JAN</p>
                        <Image src={seprator} alt="hi" />
                    </div>
                    <div className={styles["date-right"]}>
                        <p>AI And Machine Learning</p>
                        <p className={styles['light']}>7:00 am - 7:00 am <span>Remote</span></p>
                    </div>
                </div>
            </div>
            <p className={styles['connection']}>View All Cometitions</p>
        </div>

    </div>
  )
}

export default News