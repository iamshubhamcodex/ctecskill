"use client";

import { Context } from "@/states/States";
import styles from "@/css/course/first.module.css";
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
    <section className={styles.courseGrid}>
      <div className={styles.course}>
        <Image
          src="/assets/course1.jpg"
          alt="Course1"
          width={370}
          height={250}
        />
        <div className={styles.det}>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="1em"
              height="1em"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              ></path>
            </svg>
          </span>
          <p className={styles.tag}>HEALTH</p>
          <p className={styles.title + " " + raleway?.className}>
            How to Read & Understand Diet & Health Research
          </p>
          <div className={styles.by}>
            <Image
              src="/assets/admin.jpg"
              alt="Course1"
              width={36}
              height={36}
            />
            <div className={styles.name}>Admin</div>
          </div>
        </div>
      </div>
      <div className={styles.course}>
        <Image
          src="/assets/course1.jpg"
          alt="Course1"
          width={370}
          height={250}
        />
        <div className={styles.det}>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="1em"
              height="1em"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              ></path>
            </svg>
          </span>
          <p className={styles.tag}>HEALTH</p>
          <p className={styles.title + " " + raleway?.className}>
            How to Read & Understand Diet & Health Research
          </p>
          <div className={styles.by}>
            <Image
              src="/assets/admin.jpg"
              alt="Course1"
              width={36}
              height={36}
            />
            <div className={styles.name}>Admin</div>
          </div>
        </div>
      </div>
      <div className={styles.course}>
        <Image
          src="/assets/course1.jpg"
          alt="Course1"
          width={370}
          height={250}
        />
        <div className={styles.det}>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="1em"
              height="1em"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              ></path>
            </svg>
          </span>
          <p className={styles.tag}>HEALTH</p>
          <p className={styles.title + " " + raleway?.className}>
            How to Read & Understand Diet & Health Research
          </p>
          <div className={styles.by}>
            <Image
              src="/assets/admin.jpg"
              alt="Course1"
              width={36}
              height={36}
            />
            <div className={styles.name}>Admin</div>
          </div>
        </div>
      </div>
      <div className={styles.course}>
        <Image
          src="/assets/course1.jpg"
          alt="Course1"
          width={370}
          height={250}
        />
        <div className={styles.det}>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="1em"
              height="1em"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              ></path>
            </svg>
          </span>
          <p className={styles.tag}>HEALTH</p>
          <p className={styles.title + " " + raleway?.className}>
            How to Read & Understand Diet & Health Research
          </p>
          <div className={styles.by}>
            <Image
              src="/assets/admin.jpg"
              alt="Course1"
              width={36}
              height={36}
            />
            <div className={styles.name}>Admin</div>
          </div>
        </div>
      </div>
      <div className={styles.course}>
        <Image
          src="/assets/course1.jpg"
          alt="Course1"
          width={370}
          height={250}
        />
        <div className={styles.det}>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="1em"
              height="1em"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              ></path>
            </svg>
          </span>
          <p className={styles.tag}>HEALTH</p>
          <p className={styles.title + " " + raleway?.className}>
            How to Read & Understand Diet & Health Research
          </p>
          <div className={styles.by}>
            <Image
              src="/assets/admin.jpg"
              alt="Course1"
              width={36}
              height={36}
            />
            <div className={styles.name}>Admin</div>
          </div>
        </div>
      </div>
      <div className={styles.course}>
        <Image
          src="/assets/course1.jpg"
          alt="Course1"
          width={370}
          height={250}
        />
        <div className={styles.det}>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="1em"
              height="1em"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              ></path>
            </svg>
          </span>
          <p className={styles.tag}>HEALTH</p>
          <p className={styles.title + " " + raleway?.className}>
            How to Read & Understand Diet & Health Research
          </p>
          <div className={styles.by}>
            <Image
              src="/assets/admin.jpg"
              alt="Course1"
              width={36}
              height={36}
            />
            <div className={styles.name}>Admin</div>
          </div>
        </div>
      </div>
      <div className={styles.course}>
        <Image
          src="/assets/course1.jpg"
          alt="Course1"
          width={370}
          height={250}
        />
        <div className={styles.det}>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="1em"
              height="1em"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              ></path>
            </svg>
          </span>
          <p className={styles.tag}>HEALTH</p>
          <p className={styles.title + " " + raleway?.className}>
            How to Read & Understand Diet & Health Research
          </p>
          <div className={styles.by}>
            <Image
              src="/assets/admin.jpg"
              alt="Course1"
              width={36}
              height={36}
            />
            <div className={styles.name}>Admin</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default First;
