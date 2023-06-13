"use client";

import { ChevronRight } from "react-bootstrap-icons";
import styles from "@/css/landing/landing.module.css";
import { Raleway } from "next/font/google";
import Image from "next/image";
import { useContext } from "react";
import { Context } from "@/states/States";

export default function Landing() {
  const { poppins, raleway } = useContext(Context);

  return (
    <div className={styles.landingMain + " " + poppins?.className}>
      <div className={styles.bgCol}>6</div>
      <main>
        <div className="maxWidth row justify_between align_center">
          <div className={styles.left}>
            <h2>
              <span className={raleway?.className}>Modern Life</span> Coach
              School <br />
              Podcast
            </h2>
            <p className={raleway?.className}>
              We understand the importance of approaching each work integrally
              and believe in the power of simple.{" "}
            </p>
            <button className="row align-center justify-between">
              Contact Us <ChevronRight style={{ marginLeft: "10px" }} />
            </button>
          </div>
          <div className={styles.right}>
            <Image
              src="/assets/landing.png"
              height={450}
              width={450}
              alt="Landing Page Image"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
