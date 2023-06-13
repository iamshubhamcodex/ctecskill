"use client";

import { Context } from "@/states/States";
import styles from "@/css/about/first.module.css";
import Image from "next/image";
import { FC, useContext } from "react";
import { Nunito_Sans, Raleway } from "next/font/google";

const raleway = Raleway({
  weight: ["300", "500", "600", "700"],
  subsets: ["latin"],
});
const nunitoSans = Nunito_Sans({
  weight: ["300", "500", "600", "700"],
  subsets: ["latin"],
});

const First: FC<{}> = ({}) => {
  return (
    <section className={styles.first}>
      <Image src="/assets/about1.jpg" alt="First" width={300} height={300} />
      <div className={styles.right}>
        <p className={nunitoSans?.className + " " + styles.top}>ABOUT US</p>
        <h2 className={raleway?.className + " " + styles.head}>
          We Care About Your Life For Better Future
        </h2>
        <p className={nunitoSans?.className + " " + styles.para}>
          We understand the importance of approaching each work integrally and
          believe in the power of simple and easy communication and this is at
          the heart.
        </p>
        <div className={styles.itemCons}>
          <div className={styles.item}>
            <p className={styles.icon}>icon</p>
            <div className={styles.det}>
              <p className={raleway?.className + " " + styles.name}>
                Master Coach
              </p>
              <p className={nunitoSans?.className + " " + styles.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </div>
          </div>
          <div className={styles.item}>
            <p className={styles.icon}>icon</p>
            <div className={styles.det}>
              <p className={raleway?.className + " " + styles.name}>
                Professional Advisors
              </p>
              <p className={nunitoSans?.className + " " + styles.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </div>
          </div>
          <div className={styles.item}>
            <p className={styles.icon}>icon</p>
            <div className={styles.det}>
              <p className={raleway?.className + " " + styles.name}>
                Master Coach
              </p>
              <p className={nunitoSans?.className + " " + styles.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </div>
          </div>
          <div className={styles.item}>
            <p className={styles.icon}>icon</p>
            <div className={styles.det}>
              <p className={raleway?.className + " " + styles.name}>
                Master Coach
              </p>
              <p className={nunitoSans?.className + " " + styles.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </div>
          </div>
        </div>
        <button>See Courses</button>
      </div>
    </section>
  );
};

export default First;
