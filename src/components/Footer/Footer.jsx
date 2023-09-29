import React from 'react';
import styles from "./footer.module.css";
import Image from "next/image";

function Footer() {
    return (
      <div className={styles.container}>
        <div>©2023 Hasan. All rights reserved.</div>
        <div className={styles.socials}>
          <Image src="/1.png" className={styles.icons} width={15} height={15} alt="facebook account" />
          <Image src="/2.png" className={styles.icons} width={15} height={15} alt="Instagram account" />
          <Image src="/3.png" className={styles.icons} width={15} height={15} alt="Twitter account" />
          <Image src="/4.png" className={styles.icons} width={15} height={15} alt="Youtube handle" />
        </div>
      </div>
    );
}

export default Footer;