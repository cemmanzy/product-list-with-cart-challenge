# Product List with Cart

This is my solution to the [Product List with Cart challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-list-with-cart-5MmqLVAp_d).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:
- Add items to the cart and remove them
- Increase/decrease the number of items in the cart
- See an order confirmation modal when they click "Confirm Order"
- Reset their selections when they click "Start New Order"
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements

### Screenshot

![Desktop view](./screenshots/desktop.png)
![Mobile bottom bar](./screenshots/mobile-bar.png)
![Mobile cart sheet](./screenshots/mobile-sheet.png)
![Confirmation message](./screenshots/confirmation.png)

### Links

- Solution URL: https://github.com/cemmanzy/product-list-with-cart-challenge
- Live Site URL: https://product-list-with-cart-challenge-ma.vercel.app/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox & CSS Grid
- Mobile-first workflow
- React + Vite
- Tailwind CSS v4
- React Context + useReducer for cart state

### What I learned

- Managing cart state with Context and useReducer
- Responsive layout with Tailwind (desktop grid + mobile bottom sheet)
- Handling confirmation UI without full-page modal to avoid layout issues
- Debugging Chrome-specific repaint bugs with fixed elements
- Deploying to Vercel and updating README with live link

## Author

- Frontend Mentor - [@cemmanzy](https://www.frontendmentor.io/profile/cemmanzy)
- X (Twitter) - [@Manzyfi](https://x.com/Manzyfi)
