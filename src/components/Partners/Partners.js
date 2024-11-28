import React from 'react'
import  styles from './Partners.module.css'
import Image from "next/image";

import partner1 from '../../../public/Images/partner1.png'
import partner2 from '../../../public/Images/partner2.png'
import partner3 from '../../../public/Images/partner3.png'
import partner4 from '../../../public/Images/partner4.png'
import partner5 from '../../../public/Images/partner5.png'
import partner6 from '../../../public/Images/partner6.png'
import partner7 from '../../../public/Images/partner7.png'
import partner8 from '../../../public/Images/partner8.png'
import partner9 from '../../../public/Images/partner9.png'
import partner10 from '../../../public/Images/partner10.png'
import partner11 from '../../../public/Images/partner11.png'

const Partners = () => {
  return (
    <div className={styles["partner-section"]}>
        <h1>Our Country Partenrs</h1>
        <div className={styles["partner-main"]}>

            <div className={styles["main-row1"]}>
                <Image src={partner1} alt="1" />
                <Image src={partner2} alt="2" />
                <Image src={partner3} alt="3" />
                <Image src={partner4} alt="4" />
                <Image src={partner5} alt="5" />
                <Image src={partner6} alt="6" />
            </div>

            <div className={styles["mainrow2"]}>
                <Image src={partner7} alt="6" />
                <Image src={partner8} alt="7" />
                <Image src={partner9} alt="8" />
                <Image src={partner10} alt="5" />
                <Image src={partner11} alt="4" />
                <Image src={partner2} alt="2" />
                <Image src={partner1} alt="2" />

            </div>

        </div>
    </div>
  )
}

export default Partners