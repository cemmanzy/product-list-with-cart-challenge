# Frontend Mentor - Product list with cart solution

This is a solution to the [Product list with cart challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-list-with-cart-5MmqLVAp_d). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Add items to the cart and remove them
- Increase/decrease the number of items in the cart
- See an order confirmation modal when they click "Confirm Order"
- Reset their selections when they click "Start New Order"
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

**Desktop view (with cart & confirmation message)**

![Desktop screenshot](./screenshots/desktop.png)

**Mobile view (bottom cart bar + sheet open)**

![Mobile screenshot](./screenshots/mobile.png)

**Confirmation message**

![Confirmation screenshot](./screenshots/confirmation.png)

(Add your own screenshots here — take them in browser dev tools at 1440px, 768px, 375px widths)

### Links

- Solution URL:https://github.com/cemmanzy/product-list-with-cart-challenge
- Live Site URL: [Add your Vercel/Netlify live link here](https://your-project-name.vercel.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox & CSS Grid
- Mobile-first workflow
- [React](https://react.dev/) - JS library
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS v4](https://tailwindcss.com/) - For styles
- React Context + useReducer - For cart state management

### What I learned

- How to manage global state cleanly with Context + useReducer for a shopping cart (add, remove, quantity update)
- Implementing responsive layouts with Tailwind (desktop grid + mobile bottom bar/sheet)
- Handling modals/confirmation messages without causing layout shift or browser repaint bugs (especially in Chrome)
- Using public/assets for static images and correct path handling in Vite
- Adding hover, focus, and active states for better accessibility and UX

### Continued development

- Add localStorage to persist cart across page reloads
- Improve accessibility (ARIA labels, keyboard navigation for cart sheet)
- Add unit tests with Vitest + React Testing Library
- Explore Framer Motion for smoother animations (sheet slide-up, confirmation fade)

### Useful resources

- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs) — helped a lot with CSS-first setup
- [React Context Docs](https://react.dev/reference/react/useContext) — great for understanding cart state
- [Vite Asset Handling](https://vitejs.dev/guide/assets.html) — solved public vs src assets confusion
- [Frontend Mentor Community](https://www.frontendmentor.io/community) — asked questions in #help channel

## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter / X - [@Manzyfi](https://x.com/Manzyfi)

**Note:** Feel free to add your real name/website if you want, or keep it minimal.
