import React from 'react'
import  styles from './Prizes.module.css'
import Image from "next/image";

import seprator from '../../../public/Images/Separator.png'
import Svg from '../../../public/Images/SVG.png'

const Prizes = () => {
  return (
    <div className={styles["prizes-section"]}>
        <p>Discover Our Latest Prizes</p>
        <h1>Find Out the Latest Competition Prizes</h1>
        <Image src={seprator} alt="" />

        <div className={styles["prize-main"]}>

            <div className={styles["prize-upper"]}>
                <div className={styles["upper-left"]}>
                    <div className={styles["settle"]}>
                    <Image src={Svg} alt="" />
                        <h5 className={styles['h5-head']}>Runners-Up</h5>
                    </div>
                   
                    <p>40 runners-up will be awarded partial scholarships of 75% to study their chosen subject with Immerse.</p>
                </div>
                <div className={styles["upper-middle"]}>
                <div className={styles["settle"]}>
                    <Image src={Svg} alt="" />
                        <h5 className={styles['h5-head']}>1st Place</h5>
                    </div>
                    <p>10 winners will receive a 100% scholarship for their exceptional work. Take a look at previous essay competition winners</p>
                
                </div>
                <div className={styles["upper-right"]}>
                <div className={styles["settle"]}>
                    <Image src={Svg} alt="" />
                        <h5 className={styles['h5-head']}>Runners-Up</h5>
                    </div>
                    <p>The last category of 150 entrants receive partial scholarships worth 50%.</p>
                
                </div>
                
            </div>

            <div className={styles["prize-down"]}>
                <h5 className={styles['h5-head']}>Merit Awards</h5>
                <p>Any student who submits a full-length essay, but doesn’t receive a scholarship, will be eligible for the option of a £1000 award for our residential programmes, a £500 award for our Online Research Programmes, or a our Online Research Programmes.</p>
            </div>

        </div>

        <button className={styles['prize-button']}>Explore More</button>
    </div>
  )
}

export default Prizes