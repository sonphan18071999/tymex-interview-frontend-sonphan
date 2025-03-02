## Getting Started

This is a [Next.js](https://nextjs.org) project bootstrapped
with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

- UI Library: Ant Design

```bash
- Use Node.JS 18 `nvm use 18`
- Install `node_module` with `npm i --legacy-peer-deps`

npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

=========================================================================

# 📁 Project Structure Overview

This project is built using **Next.js 15** with the **App Router**. The folder structure is well-organized, following a
modular and scalable approach.

## 🏗️ Project Directories

```
/public
    /assets
        /fonts
        /icons
        /images
/src
  ├── /app
  ├── /components
  ├── /contexts
  ├── /hooks
  ├── /models
  ├── /styles
```

## 📂 Detailed Explanation

### **1. `/public`**

- Contains static assets for images and icons and fonts.
- These assets are accessible via `@/assets/` in the browser.

#### 📁 **`/app`**

- Contains key files:
    - **`page.tsx`** → The root page (`/`).

#### 📁 **`/components`**

- Reusable UI components categorized into:
    - **`/commons`** → Common UI elements (buttons, modals, inputs, slider etc.).
    - **`/features`** → Feature-specific components.

#### 📁 **`/contexts`**

- Contains **React Context Providers** for global state management.

#### 📁 **`/hooks`**

- Custom React hooks for reusable logic.

#### 📁 **`/models`**

- Defines **TypeScript models** for application data.

#### 📁 **`/styles`**

- Organized **SCSS/CSS** files for styling:
    - **`common/`** → Global styles.
    - **`features/`** → Feature-specific styles.
    - **`pages/`** → Page-specific styles.
    - **`utils/`** → Utility styles (mixins, variables).

