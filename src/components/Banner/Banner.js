import React from "react";
import styles from "./Banner.module.css";
import Image from "next/image";

import bannerImg from '../../../public/Images/banner-left.webp';
import bannerright from '../../../public/Images/banner-right.webp';

const Banner = () => {
  return (
    <div className={styles["banner-section"]}>
    
      <div className={styles["banner-left"]}>
        <Image
          className={styles["left-image"]}
          src={bannerImg}
          alt="Banner Left Illustration"
        />

        <p className={styles["banner-description"]}>
          I’m Scientist empowers young minds to explore AI, Machine Learning,
          and Deep Learning through exciting contests and interactive courses. 
          Join us to learn new skills, compete in exciting challenges, and win incredible prizes.
        </p>

        <div className={styles["left-inner"]}>
          <button className={styles["left-button"]}>Explore Now</button>
          <div className={styles["inner-inside"]}>
            <p className={styles["neon"]}>5000+</p>
            <p>Trusted Schools</p>
          </div>
        </div>
      </div>

      <div className={styles["banner-right"]}>
        <Image
          className={styles["right-image"]}
          src={bannerright}
          alt="Banner Right Illustration"
        />
      </div>
    </div>
  );
};

export default Banner;
