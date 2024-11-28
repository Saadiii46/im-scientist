import React from 'react'
import styles from './Faqs.module.css'
import Image from "next/image";
import Accordion from './Accordion'

import seprator from '../../../public/Images/Separator.png'


import child1 from '../../../public/Images/child1.png'
import child2 from '../../../public/Images/child2.png'
import child3 from '../../../public/Images/child3.png'
import child4 from '../../../public/Images/child4.png'
import child5 from '../../../public/Images/child5.png'


const accordianData = [
    {
        title:'Who can participate in the I am Scientist contests?',
        content: `Any student from 3rd to 12th grade in Pakistan, whether as part of a school or independently, can join our contests.`
    },
    {
        title:'What subjects do the contests cover?',
        content: `Our contests focus on AI, Machine Learning, Deep Learning, Cybersecurity, and other tech-driven fields.`
    },
    {
        title:'How are winners rewarded?',
        content: `Winners receive cash prizes and medals, while runners-up also get medals to recognize their efforts.`
    },
    {
        title:'Can schools participate as organizations?',
        content: `Yes, schools can register as organizations, making it easy for students to participate collectively.`
    },
    {
        title:'How can I stay updated on contest dates?',
        content: `Keep checking our website for announcements, or subscribe to our newsletter for regular updates.`
    }
]

const Faqs = () => {
  return (
    <div className={styles["faq-section"]}>
        <p>FAQS</p>
        <h1>Frequently Asked Questions</h1>
        <span><img src={seprator} alt="" /></span>

        <div className={styles["faq-question"]}>
            {
                accordianData.map(({title,content}) => (
                    <Accordion title= {title} content = {content}/>
                ))
            }
        </div>

        <div className={styles["last-banner"]}>
            <span><Image src={child1} alt="" /></span>
            <span><Image src={child2} alt="" /></span>
            <span><Image src={child3} alt="" /></span>
            <span><Image src={child4} alt="" /></span>
            <span><Image src={child5} alt="" /></span>
        </div>
    </div>
  )
}

export default Faqs