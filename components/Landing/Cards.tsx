"use client";

import Image from "next/image";
import styles from "../../css/landing/landingCard.module.css";
import { useContext } from "react";
import { Context } from "@/states/States";

export default function Cards() {
  const { raleway, nunitoSans } = useContext(Context);
  return (
    <div className="maxWidth">
      <div className={styles.cards}>
        <div className={styles.card}>
          <Image
            src="/assets/icons/creative.png"
            alt="Scholar"
            width={70}
            height={70}
          />
          <h2 className={raleway?.className}>Creative Minds</h2>
          <p className={nunitoSans?.className}>
            You not only develop your craft but your ability to partner.
          </p>
        </div>
        <div className={styles.card}>
          <Image
            src="/assets/icons/scholar.png"
            alt="Scholar"
            width={60}
            height={60}
          />
          <h2 className={raleway?.className}>Exclusive Tutors</h2>
          <p className={nunitoSans?.className}>
            We have a flexible, high trust environment that is focused.
          </p>
          <p className={styles.link + " " + nunitoSans?.className}>About Me</p>
        </div>
        <div className={styles.card}>
          <Image
            src="/assets/icons/video.png"
            alt="Scholar"
            width={45}
            height={45}
          />
          <h2 className={raleway?.className}>Video Tutorials</h2>
          <p className={nunitoSans?.className}>
            We understand the importance of approaching each work.
          </p>
          <p className={styles.link + " " + nunitoSans?.className}>Learn Now</p>
        </div>
        <div className={styles.card}>
          <Image
            src="/assets/icons/notes.png"
            alt="Scholar"
            width={45}
            height={45}
          />
          <h2 className={raleway?.className}>Lecture Notes</h2>
          <p className={nunitoSans?.className}>
            We not only have lectures but also notes along with the lectures for
            each topics.
          </p>
          <p className={styles.link + " " + nunitoSans?.className}>Get Notes</p>
        </div>
      </div>
    </div>
  );
}
