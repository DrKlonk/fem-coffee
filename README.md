# Frontend Mentor - Coffeeroasters subscription site solution

This is a solution to the [Coffeeroasters subscription site challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/coffeeroasters-subscription-site-5Fc26HVY6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
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

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site
- Make selections to create a coffee subscription and see an order summary modal of their choices

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [VueJS](https://vuejs.org/) - JS library

### What I learned

I revamped my Vue knowledge a bit. I also found out how to make the order form work without it being a form.

Responsive imagery:

- In about us, I use a global variable of window width to determine which image to show for the Commitment section. Funky, but works. It does have the values hard-coded in the template, which is a downside.

- I also used the `<picture>` with different `<source>` elements on that page for the quality statement. This seems to be more the standard and keeps it nice and concise. It also uses hard coded widths, though.

- In HeroImage, I use a background image based on media queries. It allows for passing of a class to the component, on which it decides which image to use. However, it does not make the component ignorant of the image used, which makes it not-so-flexible.

### Continued development

- The menu part on the desktop was a bit vague from the design and could use some usability improvement. Maybe really guide the user through the process, selecting and opening each step when the previous is completed.
- It would also be nice to actually do something with the order or at least show a confirmation message

### Useful resources

- [Sidebar menu](https://regenrek.com/posts/how-to-create-an-animated-vue-sidebar-menu-with-vue-observable/) - This helped me creating the slider menu. Works really well!
- [Modal](https://medium.com/notonlycss/how-to-build-a-modal-in-vue-js-b3db644afaeb) - Nice little modal component
- [ViewportWidth](https://www.npmjs.com/package/vue-window-size) - Awesome package to use the viewport width reponsively in all components

## Author

- Website - [JoranMinjon](https://www.joranminjon.com)
- Frontend Mentor - [@DrKlonk](https://www.frontendmentor.io/profile/DrKlonk)
