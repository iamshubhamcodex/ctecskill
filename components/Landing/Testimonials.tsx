"use client";

import { FC, useContext } from "react";
import styles from "../../css/landing/testimonials.module.css";
import { Context } from "@/states/States";
import Image from "next/image";

const Testimonials: FC<{}> = ({}) => {
  const { raleway, nunitoSans } = useContext(Context);
  return (
    <div
      className=""
      style={{
        background:
          "linear-gradient(to bottom, transparent, #e4f1f7, transparent)",
      }}
    >
      <div className="maxWidth">
        <div className={styles.testimonial}>
          <div className={styles.top + " " + nunitoSans?.className}>
            OUR TESTIMONIALS
          </div>
          <h2 className={raleway?.className}>
            What’s Our Students Says <br /> <b>About Us</b>
          </h2>
          <div className={styles.containers}>
            <div className={styles.card1}>
              <div className={styles.first}>
                <div className={styles.img}>
                  <Image
                    src="/assets/peoples/first.jpg"
                    alt=""
                    width={64}
                    height={64}
                  />
                </div>
                <div className={styles.name}>
                  <p className={styles.top + " " + raleway?.className}>
                    Shubham Singh
                  </p>
                  <p className={styles.role + " " + nunitoSans?.className}>
                    Web Designer
                  </p>
                </div>
              </div>
              <div className={styles.review}>
                <p className={nunitoSans?.className}>
                  Great design, code quality, functional & simple backend, fast
                  help. This is one of the best themes we&apos;ve bought on
                  Envato.
                </p>
              </div>
            </div>
            <div className={styles.card1}>
              <div className={styles.first}>
                <div className={styles.img}>
                  <Image
                    src="/assets/peoples/second.jpg"
                    alt=""
                    width={64}
                    height={64}
                  />
                </div>
                <div className={styles.name}>
                  <p className={styles.top + " " + raleway?.className}>
                    Shubham Singh
                  </p>
                  <p className={styles.role + " " + nunitoSans?.className}>
                    Web Designer
                  </p>
                </div>
              </div>
              <div className={styles.review}>
                <p className={nunitoSans?.className}>
                  Great design, code quality, functional & simple backend, fast
                  help. This is one of the best themes we&apos;ve bought on
                  Envato.
                </p>
              </div>
            </div>
            <div className={styles.card1}>
              <div className={styles.first}>
                <div className={styles.img}>
                  <Image
                    src="/assets/peoples/third.jpg"
                    alt=""
                    width={64}
                    height={64}
                  />
                </div>
                <div className={styles.name}>
                  <p className={styles.top + " " + raleway?.className}>
                    Shubham Singh
                  </p>
                  <p className={styles.role + " " + nunitoSans?.className}>
                    Web Designer
                  </p>
                </div>
              </div>
              <div className={styles.review}>
                <p className={nunitoSans?.className}>
                  Great design, code quality, functional & simple backend, fast
                  help. This is one of the best themes we&apos;ve bought on
                  Envato.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
