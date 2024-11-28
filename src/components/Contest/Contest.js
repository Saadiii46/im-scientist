import React from "react";
import styles from "./Contest.module.css";
import Image from "next/image";

import seprator from "../../../public/Images/Separator.png";

const Contest = () => {
  return (
    <div className={styles["contest"]}>
      {/* Contest Upper Section */}
      <div className={styles["contest-upper"]}>
        <p>Contest schedule</p>
        <h2>The National I Am Scientist System</h2>
        <span>
          <Image src={seprator} alt="Separator" />
        </span>
      </div>

      {/* Contest Types */}
      <div className={styles["contest-types"]}>
        {/* Contest Type 1 */}
        <div className={`${styles["contest-container"]} ${styles["contest-type1-border"]}`}>
          <h3 className={`${styles["contest-title"]} ${styles["contest-type1-color"]}`}>General</h3>
          <h4 className={styles["contest-subtitle"]}>ANNOUNCEMENTS</h4>
          <div className={styles["contest-content"]}>
            {/* Registration Dates */}
            <div className={styles["contest-item"]}>
              <div className={`${styles["contest-icon-container"]} ${styles["contest-type1-border"]}`}>
                <div className={`${styles["contest-icon-top"]} ${styles["contest-type1-border"]}`}>
                  <div className={`${styles["contest-dot"]} ${styles["contest-type1-background"]}`}></div>
                  <div className={`${styles["contest-dot"]} ${styles["contest-type1-background"]}`}></div>
                  <div className={`${styles["contest-bar-left"]} ${styles["contest-type1-background"]}`}></div>
                  <div className={`${styles["contest-bar-right"]} ${styles["contest-type1-background"]}`}></div>
                </div>
                <div className={styles["contest-icon-date"]}>
                  <span className={styles["contest-date"]}>18</span>
                  <span className={styles["contest-month"]}>NOV</span>
                </div>
              </div>
              <div className={styles["contest-item-details"]}>
                <h5 className={styles["contest-item-title"]}>General Announcement</h5>
                <p className={`${styles["contest-item-dates"]} ${styles["contest-type1-background"]}`}>Nov 18, 2024 - Dec 24, 2024</p>
              </div>
            </div>

            {/* Registration Confirmation */}
            <div className={styles["contest-item"]}>
              <div className={styles["contest-item-details"]}>
                <h5 className={styles["contest-item-title"]}>Registration Confirmation</h5>
                <p className={`${styles["contest-item-dates"]} ${styles["contest-type1-background"]}`}>Dec 1, 2024 - Dec 20, 2024</p>
              </div>
              <div className={`${styles["contest-icon-container"]} ${styles["contest-type1-border"]}`}>
                <div className={`${styles["contest-icon-top"]} ${styles["contest-type1-border"]}`}>
                  <div className={`${styles["contest-dot"]} ${styles["contest-type1-background"]}`}></div>
                  <div className={`${styles["contest-dot"]} ${styles["contest-type1-background"]}`}></div>
                  <div className={`${styles["contest-bar-left"]} ${styles["contest-type1-background"]}`}></div>
                  <div className={`${styles["contest-bar-right"]} ${styles["contest-type1-background"]}`}></div>
                </div>
                <div className={styles["contest-icon-date"]}>
                  <span className={styles["contest-date"]}>1</span>
                  <span className={styles["contest-month"]}>DEC</span>
                </div>
              </div>
            </div>

            {/* Contest Dates */}
            <div className={styles["contest-item"]}>
              <div className={`${styles["contest-icon-container"]} ${styles["contest-type1-border"]}`}>
                <div className={`${styles["contest-icon-top"]} ${styles["contest-type1-border"]}`}>
                  <div className={`${styles["contest-dot"]} ${styles["contest-type1-background"]}`}></div>
                  <div className={`${styles["contest-dot"]} ${styles["contest-type1-background"]}`}></div>
                  <div className={`${styles["contest-bar-left"]} ${styles["contest-type1-background"]}`}></div>
                  <div className={`${styles["contest-bar-right"]} ${styles["contest-type1-background"]}`}></div>
                </div>
                <div className={styles["contest-icon-date"]}>
                  <span className={styles["contest-date"]}>24</span>
                  <span className={styles["contest-month"]}>JAN</span>
                </div>
              </div>
              <div className={styles["contest-item-details"]}>
                <h5 className={styles["contest-item-title"]}>Contest Results</h5>
                <p className={`${styles["contest-item-dates"]} ${styles["contest-type1-background"]}`}>Jan 24, 2025 - Jan 25, 2025</p>
              </div>
            </div>
          </div>
          <a>
            <button className={styles["contest-button"]}>Enroll Now</button>
          </a>
        </div>

         {/* Contest Type 2 */}
         <div className={`${styles["contest-container"]} ${styles["contest-type2-border"]}`}>
          <h3 className={`${styles["contest-title"]} ${styles["contest-type2-color"]}`}>Admissions</h3>
          <h4 className={styles["contest-subtitle"]}>ANNOUNCEMENTS</h4>
          <div className={styles["contest-content"]}>
            {/* Registration Dates */}
            <div className={styles["contest-item"]}>
              <div className={`${styles["contest-icon-container"]} ${styles["contest-type2-border"]}`}>
                <div className={`${styles["contest-icon-top"]} ${styles["contest-type2-border"]}`}>
                  <div className={`${styles["contest-dot"]} ${styles["contest-type2-background"]}`}></div>
                  <div className={`${styles["contest-dot"]} ${styles["contest-type2-background"]}`}></div>
                  <div className={`${styles["contest-bar-left"]} ${styles["contest-type2-background"]}`}></div>
                  <div className={`${styles["contest-bar-right"]} ${styles["contest-type2-background"]}`}></div>
                </div>
                <div className={styles["contest-icon-date"]}>
                  <span className={styles["contest-date"]}>18</span>
                  <span className={styles["contest-month"]}>NOV</span>
                </div>
              </div>
              <div className={styles["contest-item-details"]}>
                <h5 className={styles["contest-item-title"]}>General Announcement</h5>
                <p className={`${styles["contest-item-dates"]} ${styles["contest-type2-background"]}`}>Nov 18, 2024 - Dec 24, 2024</p>
              </div>
            </div>

            {/* Registration Confirmation */}
            <div className={styles["contest-item"]}>
              <div className={styles["contest-item-details"]}>
                <h5 className={styles["contest-item-title"]}>Registration Confirmation</h5>
                <p className={`${styles["contest-item-dates"]} ${styles["contest-type2-background"]}`}>Dec 1, 2024 - Dec 20, 2024</p>
              </div>
              <div className={`${styles["contest-icon-container"]} ${styles["contest-type2-border"]}`}>
                <div className={`${styles["contest-icon-top"]} ${styles["contest-type2-border"]}`}>
                  <div className={`${styles["contest-dot"]} ${styles["contest-type2-background"]}`}></div>
                  <div className={`${styles["contest-dot"]} ${styles["contest-type2-background"]}`}></div>
                  <div className={`${styles["contest-bar-left"]} ${styles["contest-type2-background"]}`}></div>
                  <div className={`${styles["contest-bar-right"]} ${styles["contest-type2-background"]}`}></div>
                </div>
                <div className={styles["contest-icon-date"]}>
                  <span className={styles["contest-date"]}>1</span>
                  <span className={styles["contest-month"]}>DEC</span>
                </div>
              </div>
            </div>

            {/* Contest Dates */}
            <div className={styles["contest-item"]}>
              <div className={`${styles["contest-icon-container"]} ${styles["contest-type2-border"]}`}>
                <div className={`${styles["contest-icon-top"]} ${styles["contest-tytype2pe1-border"]}`}>
                  <div className={`${styles["contest-dot"]} ${styles["contest-type2-background"]}`}></div>
                  <div className={`${styles["contest-dot"]} ${styles["contest-type2-background"]}`}></div>
                  <div className={`${styles["contest-bar-left"]} ${styles["contest-type2-background"]}`}></div>
                  <div className={`${styles["contest-bar-right"]} ${styles["contest-type2-background"]}`}></div>
                </div>
                <div className={styles["contest-icon-date"]}>
                  <span className={styles["contest-date"]}>24</span>
                  <span className={styles["contest-month"]}>JAN</span>
                </div>
              </div>
              <div className={styles["contest-item-details"]}>
                <h5 className={styles["contest-item-title"]}>Contest Results</h5>
                <p className={`${styles["contest-item-dates"]} ${styles["contest-type2-background"]}`}>Jan 24, 2025 - Jan 25, 2025</p>
              </div>
            </div>
          </div>
          <a>
            <button className={styles["contest-button"]}>Enroll Now</button>
          </a>
        </div>

           {/* Contest Type 3 */}
        <div className={`${styles["contest-container"]} ${styles["contest-type3-border"]}`}>
          <h3 className={`${styles["contest-title"]} ${styles["contest-type3-color"]}`}>Course</h3>
          <h4 className={styles["contest-subtitle"]}>ANNOUNCEMENTS</h4>
          <div className={styles["contest-content"]}>
            {/* Registration Dates */}
            <div className={styles["contest-item"]}>
              <div className={`${styles["contest-icon-container"]} ${styles["contest-type3-border"]}`}>
                <div className={`${styles["contest-icon-top"]} ${styles["contest-type3-border"]}`}>
                  <div className={`${styles["contest-dot"]} ${styles["contest-type3-background"]}`}></div>
                  <div className={`${styles["contest-dot"]} ${styles["contest-type3-background"]}`}></div>
                  <div className={`${styles["contest-bar-left"]} ${styles["contest-type3-background"]}`}></div>
                  <div className={`${styles["contest-bar-right"]} ${styles["contest-type3-background"]}`}></div>
                </div>
                <div className={styles["contest-icon-date"]}>
                  <span className={styles["contest-date"]}>18</span>
                  <span className={styles["contest-month"]}>NOV</span>
                </div>
              </div>
              <div className={styles["contest-item-details"]}>
                <h5 className={styles["contest-item-title"]}>General Announcement</h5>
                <p className={`${styles["contest-item-dates"]} ${styles["contest-type3-background"]}`}>Nov 18, 2024 - Dec 24, 2024</p>
              </div>
            </div>

            {/* Registration Confirmation */}
            <div className={styles["contest-item"]}>
              <div className={styles["contest-item-details"]}>
                <h5 className={styles["contest-item-title"]}>Registration Confirmation</h5>
                <p className={`${styles["contest-item-dates"]} ${styles["contest-type3-background"]}`}>Dec 1, 2024 - Dec 20, 2024</p>
              </div>
              <div className={`${styles["contest-icon-container"]} ${styles["contest-type3-border"]}`}>
                <div className={`${styles["contest-icon-top"]} ${styles["contest-type3-border"]}`}>
                  <div className={`${styles["contest-dot"]} ${styles["contest-type3-background"]}`}></div>
                  <div className={`${styles["contest-dot"]} ${styles["contest-type3-background"]}`}></div>
                  <div className={`${styles["contest-bar-left"]} ${styles["contest-type3-background"]}`}></div>
                  <div className={`${styles["contest-bar-right"]} ${styles["contest-type3-background"]}`}></div>
                </div>
                <div className={styles["contest-icon-date"]}>
                  <span className={styles["contest-date"]}>1</span>
                  <span className={styles["contest-month"]}>DEC</span>
                </div>
              </div>
            </div>

            {/* Contest Dates */}
            <div className={styles["contest-item"]}>
              <div className={`${styles["contest-icon-container"]} ${styles["contest-type3-border"]}`}>
                <div className={`${styles["contest-icon-top"]} ${styles["contest-type3-border"]}`}>
                  <div className={`${styles["contest-dot"]} ${styles["contest-type3-background"]}`}></div>
                  <div className={`${styles["contest-dot"]} ${styles["contest-type3-background"]}`}></div>
                  <div className={`${styles["contest-bar-left"]} ${styles["contest-type3-background"]}`}></div>
                  <div className={`${styles["contest-bar-right"]} ${styles["contest-type3-background"]}`}></div>
                </div>
                <div className={styles["contest-icon-date"]}>
                  <span className={styles["contest-date"]}>24</span>
                  <span className={styles["contest-month"]}>JAN</span>
                </div>
              </div>
              <div className={styles["contest-item-details"]}>
                <h5 className={styles["contest-item-title"]}>Contest Results</h5>
                <p className={`${styles["contest-item-dates"]} ${styles["contest-type3-background"]}`}>Jan 24, 2025 - Jan 25, 2025</p>
              </div>
            </div>
          </div>
          <a>
            <button className={styles["contest-button"]}>Enroll Now</button>
          </a>
        </div>
        
      </div>
    </div>
  );
};

export default Contest;
