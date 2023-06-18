import Image from "next/image";
import styles from "../../css/blogs/blogContainer.module.css";
import { Nunito_Sans, Raleway } from "next/font/google";

const raleway = Raleway({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});
const nunitoSans = Nunito_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function BlogContaier() {
  return (
    <div className={styles.blogContainer}>
      <div className={styles.blog}>
        <Image src={"/assets/blog1.jpg"} alt="Blog1" width={300} height={200} />
        <div className={styles.det}>
          <div className={styles.top}>
            <p className={styles.by + " " + nunitoSans.className}>By Admin</p>
            <p className={styles.date + " " + nunitoSans.className}>
              June 1, 2021
            </p>
          </div>
          <h3 className={styles.title + " " + raleway.className}>
            Smashing Podcast Episode Luca Mezzalira Front
          </h3>
          <p className={styles.desc + " " + nunitoSans.className}>
            But must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and will…
          </p>
          <button className={nunitoSans.className}>READ MORE &nbsp;&gt;</button>
        </div>
      </div>
      <div className={styles.blog}>
        <Image src={"/assets/blog1.jpg"} alt="Blog1" width={300} height={200} />
        <div className={styles.det}>
          <div className={styles.top}>
            <p className={styles.by + " " + nunitoSans.className}>By Admin</p>
            <p className={styles.date + " " + nunitoSans.className}>
              June 1, 2021
            </p>
          </div>
          <h3 className={styles.title + " " + raleway.className}>
            Smashing Podcast Episode Luca Mezzalira Front
          </h3>
          <p className={styles.desc + " " + nunitoSans.className}>
            But must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and will…
          </p>
          <button className={nunitoSans.className}>READ MORE &nbsp;&gt;</button>
        </div>
      </div>
      <div className={styles.blog}>
        <Image src={"/assets/blog1.jpg"} alt="Blog1" width={300} height={200} />
        <div className={styles.det}>
          <div className={styles.top}>
            <p className={styles.by + " " + nunitoSans.className}>By Admin</p>
            <p className={styles.date + " " + nunitoSans.className}>
              June 1, 2021
            </p>
          </div>
          <h3 className={styles.title + " " + raleway.className}>
            Smashing Podcast Episode Luca Mezzalira Front
          </h3>
          <p className={styles.desc + " " + nunitoSans.className}>
            But must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and will…
          </p>
          <button className={nunitoSans.className}>READ MORE &nbsp;&gt;</button>
        </div>
      </div>
      <div className={styles.blog}>
        <Image src={"/assets/blog1.jpg"} alt="Blog1" width={300} height={200} />
        <div className={styles.det}>
          <div className={styles.top}>
            <p className={styles.by + " " + nunitoSans.className}>By Admin</p>
            <p className={styles.date + " " + nunitoSans.className}>
              June 1, 2021
            </p>
          </div>
          <h3 className={styles.title + " " + raleway.className}>
            Smashing Podcast Episode Luca Mezzalira Front
          </h3>
          <p className={styles.desc + " " + nunitoSans.className}>
            But must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and will…
          </p>
          <button className={nunitoSans.className}>READ MORE &nbsp;&gt;</button>
        </div>
      </div>
      <div className={styles.blog}>
        <Image src={"/assets/blog1.jpg"} alt="Blog1" width={300} height={200} />
        <div className={styles.det}>
          <div className={styles.top}>
            <p className={styles.by + " " + nunitoSans.className}>By Admin</p>
            <p className={styles.date + " " + nunitoSans.className}>
              June 1, 2021
            </p>
          </div>
          <h3 className={styles.title + " " + raleway.className}>
            Smashing Podcast Episode Luca Mezzalira Front
          </h3>
          <p className={styles.desc + " " + nunitoSans.className}>
            But must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and will…
          </p>
          <button className={nunitoSans.className}>READ MORE &nbsp;&gt;</button>
        </div>
      </div>
    </div>
  );
}
