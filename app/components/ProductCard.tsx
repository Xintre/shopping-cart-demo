import * as React from "react";

import {
  Box,
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
import Typography from "@mui/material/Typography";
import { useState } from "react";

type ProductCardProps = {
  product: {
    name: string;
    description: string;
    price: number;
    colors: { id: string; name: string; image: string }[];
    images: string[];
  };
};

export default function ProductCard({ product }: ProductCardProps) {
  const [selectedColorId, setSelectedColorId] = useState<string>("");

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
        <Box sx={{}}>
          <CardMedia
            sx={{ height: 140 }}
            image={product.images[0]}
            title={product.name}
          />
        </Box>
      </Box>

      <CardActions sx={{ justifyContent: "space-between", margin: "1rem" }}>
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
            value={selectedColorId}
            label="Color"
            onChange={() => {}}
            size="small"
          >
            {product.colors.map((color, index) => (
              <MenuItem key={index} value={color.id}>
                {color.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <IconButton
          color="primary"
          disabled={!selectedColorId}
          onClick={() => {}}
        >
          <AddShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
