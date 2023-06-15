"use client";

import { FC, useContext } from "react";
import styles from "@/css/about/second.module.css";
import Image from "next/image";
import { Context } from "@/states/States";

const Second: FC<{}> = ({}) => {
  let { nunitoSans } = useContext(Context);
  return (
    <>
      <div className={styles.conts}>
        <div className={styles.each}>
          <Image
            src={"/assets/icons/education.png"}
            alt="Icon"
            width={54}
            height={54}
          />
          <div className={styles.det}>
            <p className={styles.num + " " + nunitoSans?.className}>369</p>

            <p className={styles.tag + " " + nunitoSans?.className}>
              Popular Coach
            </p>
          </div>
        </div>
        <div className={styles.each}>
          <Image
            src={"/assets/icons/education.png"}
            alt="Icon"
            width={54}
            height={54}
          />
          <div className={styles.det}>
            <p className={styles.num + " " + nunitoSans?.className}>369</p>

            <p className={styles.tag + " " + nunitoSans?.className}>
              Popular Coach
            </p>
          </div>
        </div>
        <div className={styles.each}>
          <Image
            src={"/assets/icons/education.png"}
            alt="Icon"
            width={54}
            height={54}
          />
          <div className={styles.det}>
            <p className={styles.num + " " + nunitoSans?.className}>369</p>

            <p className={styles.tag + " " + nunitoSans?.className}>
              Popular Coach
            </p>
          </div>
        </div>
        <div className={styles.each}>
          <Image
            src={"/assets/icons/education.png"}
            alt="Icon"
            width={54}
            height={54}
          />
          <div className={styles.det}>
            <p className={styles.num + " " + nunitoSans?.className}>369</p>

            <p className={styles.tag + " " + nunitoSans?.className}>
              Popular Coach
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Second;
