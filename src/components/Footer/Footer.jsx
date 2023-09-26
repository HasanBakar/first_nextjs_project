import React from 'react';
import styles from "./footer.module.css";
import Image from "next/image";

function Footer() {
    return (
      <div className={styles.container}>
        <div>©2023 Hasan. All rights reserved.</div>
        <div className={styles.socials}>
          <Image src="/1.png" className={styles.icons} width={15} height={15} alt="facebook" />
          <Image src="/2.png" className={styles.icons} width={15} height={15} alt="Instagram" />
          <Image src="/3.png" className={styles.icons} width={15} height={15} alt="Twitter" />
          <Image src="/4.png" className={styles.icons} width={15} height={15} alt="Youtube" />
        </div>
      </div>
    );
}

export default Footer;