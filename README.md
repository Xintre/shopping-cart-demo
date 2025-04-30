![CI](https://github.com/xintre/shopping-cart-demo/actions/workflows/ci.yml/badge.svg)
![CD](https://github.com/xintre/shopping-cart-demo/actions/workflows/cd.yml/badge.svg)

# Shoppping Cart Demo

> [!NOTE]  
> Try it out at 🎉 https://shopping-cart-demo-nine.vercel.app/ 🎉 (deployed automatically by CD workflow).

This is a [Next.js](https://nextjs.org) Shopping Cart Demo SPA (Single-Page App) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) which is responsible for:
- displaying a carousel of trending products
- displaying all products and their variants in a carousel
- adding products to the cart with choses color and size
- displaying all products added to cart
- adding one, removing one and removing all products of the same variant from the cart

## Table of Contents
- [Shoppping Cart Demo](#shoppping-cart-demo)
  - [Table of Contents](#table-of-contents)
  - [Screenshots 📸](#screenshots-)
  - [Getting Started](#getting-started)
  - [Routes](#routes)
  - [Tech stack \& POC](#tech-stack--poc)
    - [Languages \& frameworks](#languages--frameworks)
    - [Libraries](#libraries)
    - [Tooling](#tooling)
  - [CI / CD \& branches](#ci--cd--branches)


## Screenshots 📸

<details>
  <summary>Shopping Cart page - displaying products and picking variants</summary>
    <img style="width:300px" src="./images/products page.png">
    <img style="width:300px" src="./images/all product display.png">
    <img style="width:300px" src="./images/carousel with trending products.png">
    <img style="width:300px" src="./images/carousel with product versions.png">
    <img style="width:300px" src="./images/color dropdown.png">
    <img style="width:300px" src="./images/size dropdown.png">
    <img style="width:300px" src="./images/displaying sum of products.png">
</details>
<details>
  <summary>Cart page - listing & managing products in cart</summary>
    <img style="width:300px" src="./images/list of items in cart.png">
</details>

## Getting Started

Install dependencies with: 
```bash
yarn
```

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load fonts [Inconsolata](https://fonts.google.com/specimen/Inconsolata) and [Playfair](https://fonts.google.com/specimen/Playfair) for Vercel.

## Routes

The app offers the following routes:
-   `/` - products screen, choosing variants & adding to cart
-   `/cart` - cart screen, showing all products added to the cart

## Tech stack & POC

- [Next.js](https://nextjs.org) opposed to React Routing for eary out-of-the-box routing
- [zustand](https://zustand-demo.pmnd.rs/) opposed to React's Context API for easy state management without provider

### Languages & frameworks

-   [Next.js](https://nextjs.org) - React framework
-   [React](https://reactjs.org) - JavaScript library for building user interfaces
-   [TypeScript](https://www.typescriptlang.org) - JavaScript superset


### Libraries

- `@mui/material` - Material-UI components
- `@mui/icons-material` - Material-UI icons
- `@mui/lab` - Material-UI for experimental component: Mansonry
- `@mui/material-next-js` - Material-UI integration with Next.js
- `immer` - for immutable state of Cart
- `lodash` - utility library
- `swiper` - for carousels
- `zustand` - for easy state management

### Tooling

- GH Actions for CI & CD
- `eslint` & `prettier` for code linting and formatting
- `lefthook` for pre-commit & pre-push hooks

## CI / CD & branches

The repository is configured to run the CI workflow on every push to any branch.

CD will be run when a push to the [`main`](https://github.com/Xintre/shopping-cart-demo/tree/main) branch is done. The development work flow would be to:
- push / merge any changes possibly within multiple commits to the [`develop`](https://github.com/Xintre/shopping-cart-demo/tree/develop) branch (CI will be run)
- merge the develop branch to [`main`](https://github.com/Xintre/shopping-cart-demo/tree/main) branch (CI & CD will be run to deploy the website to Vercel's servers)
- the deployment will be available on https://shopping-cart-demo-xintre.vercel.app/
