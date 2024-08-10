# Personal Portfolio

- Automatically changes theme based on device `Dark Mode` setting
- Fully Responsive Design - Adapts to different viewports
- Implemented XML like component abstaction for data on `./world/workshop.tsx`
- Implemented JSON file reading for data on `./world/skills.tsx`

## 🍻 Getting Started

Step 1: Clone the project, cd into it and install dependencies

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

- Next.js - Bundler
- React - UI Library
- Tailwind CSS - CSS Framework
- Flowbite - Tailwind Component Library

| Library                 | Description             |
| ----------------------- | ----------------------- |
| fortawesome/fontawesome | SVG Icon Library        |
| gmrchk/blobity          | Kinet based cursor blob |
| greensock/gsap          | Animation Framework     |
| pacocoursey/next-themes | NextJS Theme Provider   |

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
