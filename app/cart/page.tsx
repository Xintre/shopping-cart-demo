"use client";

import * as React from "react";

import { List, ListItem } from "@mui/material";

import ListItemText from "@mui/material/ListItemText";
import { TransparentOnNoHoverAppBarWithAnimation } from "../../components/SemitransparentAppBar";
import styles from "../page.module.css";
import { useCartStore } from "@/store/CartStore";

export default function Cart() {
  const { cart, removeFromCart, decrementInCart } = useCartStore();
  return (
    <div className={styles.productPage} style={{ height: "100%" }}>
      <TransparentOnNoHoverAppBarWithAnimation></TransparentOnNoHoverAppBarWithAnimation>
      <div
        className={styles.productPage}
        style={{ display: "flex", paddingTop: "20rem" }}
      >
        <List>
          {cart.map((item, index) => (
            <ListItem key={index}>
              <ListItemText primary={item.name} secondary={"Secondary text"} />
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
}
