# next-js-w-uireact
Example project with Next JS using @UiReact library

# @UiReact Info

This is an example project fully configured with [Next.js](https://nextjs.org), [Styled components](https://styled-components.com) and [@UiReact](https://uireact.io) library working propertly.

## Theme Switcher

You can use your appearance settings to change the theme or implement your own theme provider to change themes in the UI.

![Theme appearance](./public/theme-selector.gif)

## Styling

Important file to mention is `global.css` this file imports the styles from the @UiReact dependencies. You will need to add each CSS file here as needed when installing a new package.

If you create and want to use your own theme style variables, make sure you delete: 

```
/* DELETE THIS IMPORT IF YOU WILL PROVIDE YOUR OWN THEME VARIABLES */
@import url(../node_modules/@uireact/foundation/dist/index.css);

```

Also, the font family variable is declared by NextJS when importing the google font from next/font/google, you can check this in the file `src/app/layout.tsx`. If you use another font make sure to use the same CSS variable so all packages picks up the correct font.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


# Next JS README Info

This NextJS implementation was bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
