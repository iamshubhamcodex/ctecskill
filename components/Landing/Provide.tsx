"use client";

import Image from "next/image";
import styles from "../../css/landing/provide.module.css";
import { useContext } from "react";
import { Context } from "@/states/States";

export default function Provide() {
  const { raleway, nunitoSans } = useContext(Context);

  return (
    <div className="maxWidth">
      <div className={styles.provide}>
        <div className={styles.left}>
          <Image
            alt="We Provide"
            width={600}
            height={650}
            src="/assets/provide.png"
          />
        </div>
        <div className={styles.right}>
          <p className={styles.top + " " + nunitoSans?.className}>
            WHAT WE PROVIDE
          </p>
          <h2 className={raleway?.className}>We Care About Your Life Better</h2>
          <span>
            Forging relationships between multi to national corporations,
            governments and global NGOs begins.
          </span>
          <div className={styles.item}>
            <Image
              src="/assets/icons/education.png"
              width={50}
              height={50}
              alt="master"
            />
            <div className={styles.det}>
              <h3 className={raleway?.className}>Master Certified Coach</h3>
              <p className={styles.detP + " " + nunitoSans?.className}>
                Our purpose is to build solutions that remove barriers
                preventing people.
              </p>
            </div>
          </div>
          <div className={styles.item}>
            <Image
              src="/assets/icons/scholarship.png"
              width={50}
              height={50}
              alt="master"
            />
            <div className={styles.det}>
              <h3 className={raleway?.className}>
                Coach Certification Program
              </h3>
              <p className={styles.detP + " " + nunitoSans?.className}>
                Coach Certification Program Learning and Growth. We’re building
                a learning organization, so you not only develop.
              </p>
            </div>
          </div>
          <button>About Us</button>
        </div>
      </div>
    </div>
  );
}
