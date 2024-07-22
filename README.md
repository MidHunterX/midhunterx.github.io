# Personal Portfolio

## 🍻 Getting Started

Step 1: Clone the project, cd into it and install dependencies

```bash
git clone git@github.com:MidHunterX/portfolio
cd portfolio
npm install
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
- GSAP - Animation Framework

```
npm install @gsap/react
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

## 📔 NextJS Notes

### Project Stucture

#### ./ (Project Dir)

```sh
app/                - App Router
pages/              - Pages Router
public/             - Static assets to be served
next.config.js      - Configuration file for Next.js
package.json        - Project dependencies and scripts
instrumentation.ts  - OpenTelemetry and Instrumentation file
middleware.ts       - Next.js request middleware
.eslintrc.json      - Configuration file for ESLint
.gitignore          - Git files and folders to ignore
next-env.d.ts       - TypeScript declaration file for Next.js
tsconfig.json       - Configuration file for TypeScript
jsconfig.json       - Configuration file for JavaScript
```

#### app/ (App Router)

Global stuff here

```sh
layout.tsx          - Layout
page.tsx            - Page
loading.tsx         - Loading UI
not-found.tsx       - Not found UI
error.tsx           - Error UI
global-error.tsx    - Global error UI
route.js            - API endpoint
template.tsx        - Re-rendered layout
default.tsx         - Parallel route fallback page
```

#### pages/ (Pages Router)

Automatically creates url routes for each file inside this directory (https://website/filename)

```sh
_app.tsx            - Custom App
_document.tsx       - Custom Document
_error.tsx          - Custom Error Page
404.tsx             - 404 Error Page
500.tsx             - 500 Error Page
index.tsx           - Home page
folder/index.tsx    - Nested page
file.tsx            - Nested page
```

### Create NextJS React App

```
npx create-next-app@latest
```

```
Need to install the following packages:
create-next-app@14.1.4
Ok to proceed? (y)
✔ What is your project named? … portfolio
✔ Would you like to use TypeScript? … Yes
✔ Would you like to use ESLint? … Yes
✔ Would you like to use Tailwind CSS? … Yes
✔ Would you like to use `src/` directory? … No
✔ Would you like to use App Router? (recommended) … Yes
✔ Would you like to customize the default import alias (@/\*)? … No
```
