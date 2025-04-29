"use client";

import "swiper/css";

import { Container, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";

import Image from "next/image";
import { Masonry } from "@mui/lab";
import { Product } from "../types";
import ProductCard from "../components/ProductCard";
import _ from "lodash";
import styles from "./page.module.css";

export default function ProductPage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Failed to load products", error));
  }, []);

  return (
    <div>
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
          style={{
            objectFit: "cover",
            display: "flex",
            justifyContent: "center",
          }}
          priority
        />
      </div>
      <div className={styles.productPage}>
        <Typography
          variant="h2"
          sx={{ textAlign: "center", paddingTop: 5, paddingBottom: 5 }}
        >
          Trending products
        </Typography>
        <Swiper
          spaceBetween={10}
          slidesPerView={3}
          loop={true}
          centeredSlides={false}
          style={{ width: "90%" }}
        >
          {_.sampleSize(products, 4).map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard key={product.id} product={product} banner />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={styles.productPage}>
        <Typography
          variant="h2"
          sx={{ textAlign: "center", paddingTop: 5, paddingBottom: 5 }}
        >
          All products
        </Typography>
        <Container maxWidth="xl">
          <Masonry columns={3} spacing={2}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </Masonry>
        </Container>
      </div>
    </div>
  );
}
