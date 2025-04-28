"use client";

import * as React from "react";

import { useEffect, useState } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Colors } from "../styles/colors";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export function TransparentOnNoHoverAppBarWithAnimation() {
  const [hovered, setHovered] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // we want to listen for scroll only on-mount

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        style={{ background: "transparent", boxShadow: "none" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Toolbar
          variant="dense"
          sx={{
            justifyContent: "space-between",
            backgroundColor: hovered ? Colors.WHITE : "transparent",
          }}
        >
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2, color: Colors.BLACK }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              position: "absolute",
              top: scrolled ? "10%" : "100%",
              left: "50%",
              transform: "translateX(-50%)",
              fontFamily: "var(--font-playfair)",
              fontSize: scrolled ? "1.5rem" : "6rem",
              transition: "all 0.5s ease",
            }}
            color={Colors.BLACK}
          >
            Zoowood
          </Typography>
          <Button
            sx={{ color: Colors.BLACK, fontFamily: "var(--font-playfair)" }}
          >
            Chart
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
