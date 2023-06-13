"use client";

import { FC, useContext } from "react";
import styles from "../css/footer.module.css";
import { Context } from "@/states/States";

const Footer: FC<{}> = ({}) => {
  const { raleway, nunitoSans } = useContext(Context);
  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.footer}>
          <div className="maxWidth">
            <div className={styles.containers}>
              <div className={styles.section}>
                <p className={raleway?.className + " " + styles.head}>LOGO</p>
                <p className={nunitoSans?.className}>
                  256 Elizaberth Ave Str, Wellco, CA, 90025
                </p>
                <p className={nunitoSans?.className}>+012 (345) 678 99</p>
                <p className={nunitoSans?.className}>supportcoach@gmail.com </p>
              </div>
              <div className={styles.section}>
                <p className={raleway?.className + " " + styles.head}>
                  Our Coach
                </p>
                <p className={nunitoSans?.className}>
                  <i className="fa-solid fa-location"></i> Basic Life Coach
                </p>
                <p className={nunitoSans?.className}>Advance Helath Coach</p>
                <p className={nunitoSans?.className}>Advance Business Coach</p>
              </div>
              <div className={styles.section}>
                <p className={raleway?.className + " " + styles.head}>
                  Quick Links
                </p>
                <p className={nunitoSans?.className}>Latest Courses</p>
                <p className={nunitoSans?.className}>Mission & Vision</p>
                <p className={nunitoSans?.className}>Exclusive Advisors</p>
              </div>
              <div className={styles.section}></div>
            </div>
            <hr style={{ margin: "30px 0" }} />
            <div className={styles.bottom}>
              <p className={styles.terms + " " + nunitoSans?.className}>
                Terms of Use | Privacy Policy
              </p>
              <p className={styles.terms + " " + nunitoSans?.className}>
                2023 © All rights rerved by Logo
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
