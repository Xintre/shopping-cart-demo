"use client";

import "swiper/css";

import * as React from "react";

import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { OpenInBrowser } from "@mui/icons-material";
import { Product } from "@/types";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import Typography from "@mui/material/Typography";
import { useCartStore } from "@/store/CartStore";
import { useState } from "react";

type ProductCardProps = {
  product: Product;
  banner?: boolean;
};

export default function ProductCard({ product, banner }: ProductCardProps) {
  const { addToCart } = useCartStore();
  const [selectedColor, setSelectedColor] = useState<Product["colors"][0]>(
    product.colors[0]
  );
  const [selectedSize, setSelectedSize] = useState<
    Product["availableSizes"][0]
  >(product.availableSizes[0]);

  return (
    <Card
      sx={{
        width: "20rem",
        height: "25rem",
        margin: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ flex: 1, flexShrink: 0 }}>
        <CardContent>
          <Typography variant="h5" component="div" noWrap>
            {product.name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {product.description}
          </Typography>
        </CardContent>
        {banner ? (
          <CardMedia
            sx={{ height: 140 }}
            image={product.images[0]}
            title={product.name}
          />
        ) : (
          <Swiper
            spaceBetween={11}
            slidesPerView={1}
            loop={true}
            centeredSlides={true}
            style={{ width: "90%" }}
          >
            {product.images.map((image, index) => (
              <SwiperSlide key={index}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: 200,
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    key={index}
                    src={image}
                    alt={product.id}
                    width={300}
                    height={200}
                  />
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </Box>

      <CardActions sx={{ justifyContent: "space-between", margin: "1rem" }}>
        {!banner && (
          <>
            <FormControl sx={{ minWidth: 120 }}>
              <InputLabel
                id="color-selector-label"
                sx={{ display: "flex", alignContent: "center" }}
              >
                Color
              </InputLabel>
              <Select
                labelId="color-selector-label"
                id="color-selector"
                value={selectedColor.id}
                label="Color"
                onChange={(event) => {
                  setSelectedColor(
                    product.colors.find(
                      (color) => color.id === event.target.value
                    )!
                  );
                }}
                size="small"
              >
                {product.colors.map((color, index) => (
                  <MenuItem key={index} value={color.id}>
                    {color.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ minWidth: 120 }}>
              <InputLabel
                id="size-selector-label"
                sx={{ display: "flex", alignContent: "center" }}
              >
                Size
              </InputLabel>
              <Select
                labelId="size-selector-label"
                id="size-selector"
                value={selectedSize}
                label="Size"
                onChange={(event) => {
                  setSelectedSize(event.target.value);
                }}
                size="small"
              >
                {product.availableSizes.map((size, index) => (
                  <MenuItem key={index} value={size}>
                    {size}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </>
        )}

        {banner ? (
          <Button endIcon={<OpenInBrowser />} variant="contained">
            GET IT NOW!
          </Button>
        ) : (
          <IconButton
            color="secondary"
            onClick={() => {
              addToCart(product);
            }}
          >
            <AddShoppingCartIcon />
          </IconButton>
        )}
      </CardActions>
    </Card>
  );
}
