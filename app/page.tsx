"use client";

import Image from "next/image";
import { TransparentOnNoHoverAppBarWithAnimation } from "./components/SemitransparentAppBar";
import styles from "./page.module.css";

export default function ProductPage() {
  return (
    <div>
      <TransparentOnNoHoverAppBarWithAnimation></TransparentOnNoHoverAppBarWithAnimation>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "90vh",
          overflow: "hidden",
        }}
      >
        <Image
          src="/images/kitty.jpg"
          alt="Kitty pic"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
      <div className={styles.productPage}></div>
    </div>
  );
}
