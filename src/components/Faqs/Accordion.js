import React from 'react'
import { useState } from 'react';
import styles from './Faqs.module.css'


const Accordion = ({title,content}) => {

    const [active, setActive] = useState(false);

  return (
    <div className={styles["accordion-item"]}>
        
        <div className={styles["accordion-title"]} onClick={() => setActive(!active)}>
            <div>{title}</div>
            <div>{active ? '-' : '+'}</div>
        </div>

        {active && <div className={styles["accordion-content"]}> {content} </div> }
        

    </div>
  )
}

export default Accordion;