import { Nunito_Sans, Raleway } from "next/font/google";
import styles from "../../css/contact/contact.module.css";

const nunitoSans = Nunito_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});
const raleway = Raleway({
  weight: ["300", "500", "600", "700"],
  subsets: ["latin"],
});

export default function ContactForm() {
  return (
    <div className={styles.contact}>
      <p className={styles.top + " " + nunitoSans.className}>DROP A MESSAGE</p>
      <div className={styles.title + " " + raleway.className}>
        Have Any Question Let's <br />
        Started Talk
      </div>
      <div className={styles.form}>
        <div className={styles.row}>
          <div className={styles.input + " " + nunitoSans.className}>
            <input
              type="text"
              className={nunitoSans.className}
              placeholder="Your Name"
            />
          </div>
          <div className={styles.input + " " + nunitoSans.className}>
            <input
              type="text"
              className={nunitoSans.className}
              placeholder="Email"
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.input + " " + nunitoSans.className}>
            <input
              type="text"
              className={nunitoSans.className}
              placeholder="Mobile Number"
            />
          </div>
          <div className={styles.input + " " + nunitoSans.className}>
            <input
              type="text"
              className={nunitoSans.className}
              placeholder="Subject"
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.input}>
            <textarea
              placeholder="Message"
              cols={30}
              rows={10}
              className={nunitoSans.className}
            ></textarea>
          </div>
        </div>
        <button className={nunitoSans.className}>Send Message</button>
      </div>
    </div>
  );
}
