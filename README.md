# Personal Portfolio

> **`Responsive`**, `Optimized` and _`Aesthetic`_

## ✨ Features

- Shows Neutral Gray BG for Artworks @md as a hacky solution to [Hermann Grid Optical Illusion](https://en.wikipedia.org/wiki/Grid_illusion) problem.
- Shows custom thumbnail when sharing url on WhatsApp/Social Media using Open Graph Metadata Protocol
- Automatically changes theme based on device `Dark Mode` setting (stackoverflow does not seem to have this feature).
- SVG icons changes colors automatically based on selected theme.
- Fully Responsive Design - Adapts to different viewports
- Implemented XML like component abstaction for data on `./world/workshop.tsx`
- Implemented JSON file reading for data on `./world/skills.tsx`
- If [ prefers-reduced-motion ](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion) is set, cursor blob won't show kinetic effects.

## 🍻 Getting Started

Step 1: Clone the project, cd into it and install dependencies

Using **HTTPS**:

```bash
git clone https://github.com/MidHunterX/midhunterx.github.io
cd midhunterx.github.io
npm install --legacy-peer-deps
```

Using **SSH** (personal):

```bash
git clone git@github.com:MidHunterX/midhunterx.github.io
cd midhunterx.github.io
npm install --legacy-peer-deps
```

Step 2: Run the development server

```bash
npm run away
```

Step 3: Open [http://localhost:3000](http://localhost:3000) with your browser

Step 4: Profit?

## 💽 Technologies Used

| Framework/Library              | Description                |
| ------------------------------ | -------------------------- |
| Next.js                        | Bundler                    |
| React                          | UI Library                 |
| Tailwind CSS                   | CSS Framework              |
| @fortawesome/react-fontawesome | SVG Icon Library           |
| blobity                        | Kinet based cursor blob    |
| gsap                           | Animation Framework        |
| next-themes                    | NextJS Theme Provider      |
| @svgr/webpack                  | Custom SVG Type for TS     |
| @headlessui/react              | Headless Component Library |
| react-icon-cloud               | Interactive Word Cloud     |

### Headless Component Libraries

Headless components are fully functional UI elements like modal, buttons, popovers etc. but without styling. Let others maintain the functional part and you handle the styling part with complete freedom.

`Headless UI` components are well tested on multiple browsers, platforms, and devices and deals with edge cases that I never could or want to deal with myself: stuff like focus management, keyboard navigation, event listeners, accessibility attributes, valid markup and screen reader support.

Referenced Styled Component Libraries: Flowbite, MerakiUI, MagicUI

### PDF Previews

`react-pdf` a great package to fully render interactive PDF in a canvas. That being said, canvas are a bit hard to make it responsive especially if it should resize based on parent element which is near to impossible. And it has some bulk to it which I do not want in this project. It would be a good fit in a more document heavy project. So instead I converted image of PDF and placed it as there is only one PDF in my use case.

### Blobity

When trying to install blobity on newer nodejs, dependency errors `npm error code ETARGET` and `npm error notarget` prevents you from installing this package. Typical npm behaviour. In order to accomplish this installation task, you gotta do it by force >:D

```
npm install blobity --force --legacy-peer-deps
```

### Font Awesome

For some reason, react-fontawesome package does not support FontAwesome v5. So, this is the official React Component from the ![Official Documentation](https://docs.fontawesome.com/web/use-with/react).

```
npm i --save @fortawesome/fontawesome-svg-core
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
npm i --save @fortawesome/free-brands-svg-icons
npm i --save @fortawesome/react-fontawesome@latest
```

## Documentation Bookmarks

- [Animating FontAwesome Icons](https://docs.fontawesome.com/web/style/animate/)
- [Curated React Libraries List](https://github.com/brillout/awesome-react-components)
- Using `.dark` in TailwindCSS forces element and children to dark theme
- Pass additional props(atributes) into component

```tsx
type Props = {
  [key: string]: any;
};
export const Component = ({ ...rest }: Props) => <tag {...rest}> </tag>;
```

## Show Thumbnail when sharing though Social Media

It is done using [Open Graph](https://nextjs.org/docs/app/building-your-application/optimizing/metadata#merging). Open Graph is an internet protocol that was originally created by Facebook to standardize the use of metadata within a webpage to represent the content of a page.

- Step 1: Add the `openGraph` Metadata

```tsx
// layout.tsx
export const metadata: Metadata = {
  metadataBase: new URL("https://midhunterx.github.io"),
  openGraph: {
    title: "Mid Hunter's Developer Portfolio",
    description: "Crafting digital experiences with precision and artistry",
  },
};
```

- Step 2: Add a preview image named `opengraph-image.jpg` of size `1200x630` px right beside `layout.tsx`
- Step 3: Test preview using a chrome extension called `Social Share Preview`. It works even with localhost development.

Note: Change metadataBase URL to `http://localhost:3000` on development temporarily to see changes in localhost.
