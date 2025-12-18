# IEEE ISSATM CS Frontend Documentation

> Comprehensive documentation of the frontend architecture, styling system, components, and patterns.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
   - [Core Framework & Language](#core-framework--language)
   - [Tooling & Build](#tooling--build)
   - [Libraries Used in the UI](#libraries-used-in-the-ui)
3. [Project Structure](#project-structure)
   - [Top-Level Files](#top-level-files)
   - [`src` Structure](#src-structure)
   - [Path Aliases](#path-aliases)
4. [Routing & Pages](#routing--pages)
   - [App Router & Layout](#app-router--layout)
   - [Pages Overview](#pages-overview)
5. [Styling System](#styling-system)
   - [Tailwind Configuration](#tailwind-configuration)
   - [Color System](#color-system)
   - [Typography](#typography)
   - [Global CSS (`globals.css`)](#global-css-globalscss)
   - [SCSS Modules](#scss-modules)
   - [Additional CSS (`team_card.css`)](#additional-css-team_cardcss)
6. [Core Layout & Shared Components](#core-layout--shared-components)
   - [`RootLayout`](#rootlayout)
   - [`Navbar`](#navbar)
   - [`Header` & Slide-in Navigation](#header--slide-in-navigation)
   - [`Footer`](#footer)
7. [Page-Level UI & Components](#page-level-ui--components)
   - [Home Page (`/`)](#home-page-)
   - [Mission Section](#mission-section)
   - [FAQ Section](#faq-section)
   - [About Page (`/about`)](#about-page-about)
   - [Team Page (`/team`)](#team-page-team)
   - [Events Listing (`/events`)](#events-listing-events)
   - [Event Detail (`/events/[slug]`)](#event-detail-eventsslug)
   - [Blogs Page (`/blogs`)](#blogs-page-blogs)
   - [Not Found Page](#not-found-page)
   - [Image Slider Component](#image-slider-component)
8. [Animations & Interactions](#animations--interactions)
   - [Framer Motion](#framer-motion)
   - [CSS & Tailwind Transitions](#css--tailwind-transitions)
   - [Custom Keyframe Animations](#custom-keyframe-animations)
9. [Data & State Management](#data--state-management)
10. [Development Workflow](#development-workflow)
    - [Scripts](#scripts)
    - [Running & Building](#running--building)
11. [How to Extend the Frontend](#how-to-extend-the-frontend)
    - [Adding a New Page](#adding-a-new-page)
    - [Adding a New Section to the Home Page](#adding-a-new-section-to-the-home-page)
    - [Adding a New Event](#adding-a-new-event)
    - [Adding a New Team Member](#adding-a-new-team-member)
    - [Adding a New FAQ Item](#adding-a-new-faq-item)
12. [Conventions & Best Practices](#conventions--best-practices)

---

## 1. Project Overview

This project is a **Next.js 14** site for the **IEEE ISSATM Computer Society (CS)**, built with **TypeScript**, **Tailwind CSS**, and a set of specialized UI libraries. The design is a dark theme with bold IEEE-branded yellow/orange accents, animated sections, and responsive layouts.

Key characteristics:

- Dark UI with strong yellow/orange brand colors.
- App Router-based structure (`src/app`).
- Utility-first styling via Tailwind, with a small number of SCSS modules for advanced navigation UI.
- Animated sections using Framer Motion and various hover/interactivity patterns.
- Static data-driven events and team information.

---

## 2. Tech Stack

### 2.1 Core Framework & Language

- **Next.js**: `^14.0.2`
  - Uses the **App Router** (`src/app` directory).
  - `output: 'export'` for static export.
  - `images.unoptimized: true` to allow `next export` with `next/image`.

- **React**: `^18.2.0`
  - Functional components only.
  - Client components are explicitly marked with `'use client'` where hooks or browser APIs are used.

- **TypeScript**: `^5.1.6`
  - Strict mode enabled (`"strict": true`).
  - `noUncheckedIndexedAccess: true` for safer indexed access.

### 2.2 Tooling & Build

- **Tailwind CSS**: `^3.3.3`
- **PostCSS**: `postcss`, `autoprefixer`.
- **ESLint + TypeScript ESLint** for linting.
- **Prettier** + `prettier-plugin-tailwindcss` for auto-formatting and sorting Tailwind classes.

### 2.3 Libraries Used in the UI

- **UI/Animation Libraries**
  - `framer-motion`: Section entrance animations, navigation animations, animated path (curve) in sidebar.
  - `next-nprogress-bar`: Top loading progress bar on navigation.
  - `aos` (installed, not clearly wired in the inspected code; some `data-aos` attributes are present).

- **Icons**
  - `@fortawesome/react-fontawesome` + `@fortawesome/free-brands-svg-icons`, `@fortawesome/free-regular-svg-icons`, `@fortawesome/free-solid-svg-icons`.
  - `react-icons`: `Ai*` icons (navigation), `BsChevronCompactLeft/Right`, `RxDotFilled`, `Fa*` event icons.

- **Media & Effects**
  - `react-countup`: Animated counters in the Mission section.
  - `react-player`: Installed but not obviously used in inspected components (may be for future use).

- **PWA**
  - `next-pwa`: Present, allowing future/progressive enhancement to PWA behavior.

---

## 3. Project Structure

### 3.1 Top-Level Files

Key files in the project root:

- `package.json` – Scripts and dependencies.
- `next.config.mjs` – Next.js configuration.
- `tailwind.config.ts` – Tailwind theme and content configuration.
- `postcss.config.cjs` – PostCSS plugins (Tailwind, Autoprefixer).
- `tsconfig.json` – TypeScript configuration (including path aliases).
- `src/` – All application source code.
- `public/` – Static assets (videos, HTML, images, favicon, etc.).

### 3.2 `src` Structure

- `src/app/`
  - Next.js App Router entry and all route segments.
  - Key files:
    - `layout.tsx` – Global layout (HTML structure, navbar, footer, metadata).
    - `page.tsx` – Home page.
    - `about/page.tsx` – About page.
    - `team/page.tsx` – Team page.
    - `events/page.tsx` – Events listing.
    - `events/[slug]/page.tsx` – Event detail page.
    - `blogs/page.tsx` – Blogs placeholder.
    - `wip/page.tsx` – Work-in-progress page (not detailed here).
    - `not-found.tsx` – Custom 404 page.
  - `app/components/` – Shared UI components (navbar, header, footer, mission, FAQ, team cards, image slider, etc.).
  - `app/assets/` – Local image assets (e.g., logos).
  - `app/data/` – Static data for events, teams, accordion items, etc.

- `src/styles/`
  - `globals.css` – Global styles and Tailwind layer imports.

### 3.3 Path Aliases

Defined in `tsconfig.json`:

```jsonc
"baseUrl": ".",
"paths": {
  "~/*": ["./src/*"]
}
```

This allows imports like:

```ts
import Navbar from "~/app/components/navbar";
import "~/styles/globals.css";
```

instead of long relative paths.

---

## 4. Routing & Pages

### 4.1 App Router & Layout

- The App Router uses `src/app/layout.tsx` as the root layout.
- `RootLayout` wraps all pages with:
  - A global `<html lang="en">` and `<body>`.
  - `<Navbar />` at the top and `<Footer />` at the bottom of the `children` content.
  - A global dark background (`bg-black`) and white text (`text-white`).
  - Global font setup (Poppins via Next font).

### 4.2 Pages Overview

Main routes (files in `src/app`):

- `/` – `page.tsx` – Home page with video hero, scroll indicator, Mission and FAQ sections.
- `/about` – `about/page.tsx` – About the IEEE CS chapter.
- `/team` – `team/page.tsx` – Team sections (Executive Committee, Website Team, "Could You Be Next?").
- `/events` – `events/page.tsx` – Events listing with Completed/Upcoming tabs.
- `/events/[slug]` – `events/[slug]/page.tsx` – Event detail with hero banner and optional gallery.
- `/blogs` – `blogs/page.tsx` – Placeholder page showing "Blogs".
- `/wip` – `wip/page.tsx` – Work in progress page.
- `not-found.tsx` – Custom 404 page (used automatically by Next.js).

---

## 5. Styling System

### 5.1 Tailwind Configuration

Defined in `tailwind.config.ts`:

```ts
import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        ieeeorange: "#FFC72C",
        ieeeyellow: "#FFA300",
        ieeegray: "white",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
```

Key points:

- **Content**: Tailwind scans all `*.tsx` files under `src/`.
- **Colors**:
  - `ieeeorange` – Highlight color.
  - `ieeeyellow` – Primary accent color.
  - `ieeegray` – Mapped to white (semantic naming for text color).
- **Font family**:
  - `font-sans` uses `--font-sans` (Poppins, set by Next font) and falls back to default sans stack.

### 5.2 Color System

Custom semantic colors used throughout the UI:

- `text-ieeeyellow`, `bg-ieeeyellow`, `border-ieeeyellow` – Section headings, active nav states, CTA buttons, icons.
- `text-ieeeorange`, `bg-ieeeorange` – Accentuates important text, used on 404 page and some CTAs.
- `text-ieeegray` – White, used to give semantic meaning to white text.

Hex colors seen directly:

- `#000000` – Global background and various sections (`bg-[#000000]`).
- `#292929` – Dark card backgrounds with `bg-opacity-30` for glass-like panels.
- `#181818`/`#222` – Used in gradients (event detail and event cards).

### 5.3 Typography

- Base font: **Poppins** (imported via `next/font/google` in `layout.tsx`).
- Font classes:
  - `font-bold`, `font-semibold`, `font-extrabold`, `font-medium` for emphasis.
- Text sizes:
  - Section titles: `text-5xl`, `text-6xl`, `text-9xl` (404 code).
  - Sub-headings: `text-3xl`, `text-2xl`.
  - Body text: `text-base`, `text-lg`.
  - Cards & labels: `text-xl`, `lg:text-2xl`.

### 5.4 Global CSS (`globals.css`)

Located at `src/styles/globals.css`:

- Imports Tailwind layers:

  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```

- **Lenis-related classes** (for smooth scrolling):
  - `html.lenis { height: auto; }`
  - `.lenis.lenis-smooth { scroll-behavior: auto; }`
  - `.lenis.lenis-smooth [data-lenis-prevent] { overscroll-behavior: contain; }`
  - `.lenis.lenis-stopped { overflow: hidden; }`
  - `.lenis.lenis-scrolling iframe { pointer-events: none; }`

- **Scrollbar customization (WebKit)**:

  ```css
  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background-color: #000000; }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #FFA300;
  }
  ```

- **Text selection color**:

  ```css
  ::selection {
    background: #FFA300;
    color: #f8f8f2;
  }
  ```

- **Parallax background** (used in the footer):

  ```css
  #parallax {
    background-color: #000000;
    background-image: url("data:image/svg+xml,...");
  }
  ```

  Provides a subtle, tiled SVG pattern over black.

- **Event gallery media helper**:

  ```css
  .event-gallery-media { position: relative; width: 100%; aspect-ratio: 16/9; overflow: hidden; }
  .event-gallery-media > img,
  .event-gallery-media > video {
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    object-fit: cover;
    border-radius: 0.75rem;
  }
  ```

### 5.5 SCSS Modules

There are multiple SCSS modules used primarily for the header navigation system:

- `src/app/components/header/style.module.scss`
  - Styles the header container and the burger button (circle, centered lines).
  - Defines `.burger` pseudo-elements and `.burgerActive` state with rotations to form an "X".

- `src/app/components/header/nav/style.module.scss`
  - Defines `.menu` as a full-height, fixed-position overlay.
  - Inner `.body` uses large padding and flex column layout.
  - `.nav` is a vertical stack of large text links with a header label, margin, and gap.

- Additional SCSS modules:
  - `header/nav/Curve/style.module.scss` – used in `Curve` component (SVG curve styling).
  - `header/nav/Footer/style.module.scss` – used for the bottom footer area inside the sidebar.
  - `header/nav/Link/style.module.scss` – used to style individual links with animated indicators.

These modules provide structure and decoration on top of Tailwind utility classes.

### 5.6 Additional CSS (`team_card.css`)

`src/app/components/team_card.css` provides custom animated borders:

- `.animated-border`
  - `border: 4px solid #FFA300;`
  - `animation: spin 2s linear infinite;`
  - No border-radius; pointer-events disabled.

- `.glow-animated-border`
  - Positioned absolutely around a card (`top: -8px`, `left: -8px`), larger than the card via `calc(100% + 16px)`.
  - Uses a `conic-gradient` blending `#FFA300` and light yellow.
  - `animation: glow-spin 2s linear infinite;`
  - `box-shadow: 0 0 24px 8px #FFA30044;`

These can be applied to team cards for a rotating glowing frame effect.

---

## 6. Core Layout & Shared Components

### 6.1 `RootLayout`

File: `src/app/layout.tsx`

Responsibilities:

- Imports global styles and fonts.
- Defines Next.js `metadata` (SEO, Open Graph, keywords, canonical URL, icons).
- Wraps all pages in a consistent HTML and body structure.
- Injects global `Navbar` and `Footer`.

Key structure (simplified):

```tsx
<html lang="en">
  <Head> ... </Head>
  <body className={`font-sans bg-black ${poppins.variable}`}>
    <Navbar />
    <div className="bg-black overflow-hidden text-white">
      {children}
      <Footer />
    </div>
  </body>
</html>
```

### 6.2 `Navbar`

File: `src/app/components/navbar.tsx`

- Client component.
- Sticky at the top, slightly translucent dark background:
  - `w-full bg-[#292929] bg-opacity-30 max-h-20 z-20 sticky top-0`.
- Inner layout:
  - `flex flex-row items-center justify-between mx-auto px-4 lg:px-8`.
- Left side: IEEE CS logo (`next/image`) with responsive width (`w-[160px] lg:w-48`).
- Right side: `Header` component which controls the slide-in navigation.

### 6.3 `Header` & Slide-in Navigation

#### `Header`

File: `src/app/components/header/index.tsx`

- Client component, maintains `isActive` state for the sidebar.
- Renders a small 40x40 button with inline-styled burger bars.
- Clicking the button toggles `isActive`, which controls whether `Nav` is rendered.
- Uses `AnimatePresence` (Framer Motion) so the sidebar animates in/out.

#### `Nav`

File: `src/app/components/header/nav/index.tsx`

- Slide-in sidebar navigation overlay.
- Uses `menuSlide` animation variants with `framer-motion`.
- Detects current route via `usePathname()` to highlight active items.
- Features:
  - Fullscreen overlay: `fixed inset-0 z-50 flex justify-end`.
  - Semi-transparent dark backdrop: `bg-black/40 backdrop-blur-sm`.
  - Sidebar panel:
    - `w-[90vw] max-w-xs md:max-w-sm h-full bg-white/10 backdrop-blur-xl shadow-2xl border-l border-white/20 flex flex-col justify-between overflow-y-auto`.
  - Close button: top-right, `text-ieeeyellow text-3xl`.
  - Navigation items:
    - Configured via `navItems` array with titles, icons, and `href`s.
    - Internal links use `<NextLink>`, external uses `<a target="_blank">`.
    - Active link style:
      - `bg-ieeeyellow/20 border-l-4 border-ieeeyellow text-ieeeyellow shadow`.
    - Inactive link style:
      - `hover:bg-ieeeyellow/10 text-white`.
    - Animated active indicator bar using `motion.span` with `layoutId`.
  - `Footer` and `Curve` components included at the bottom and behind the edge.

#### `Curve`

File: `src/app/components/header/nav/Curve/index.tsx`

- Uses `window.innerHeight` to compute SVG paths for a curved border.
- Animated `motion.path` transitions between `initialPath` and `targetPath` via Framer Motion.
- Styled with `styles.svgCurve` from its SCSS module.

### 6.4 `Footer`

File: `src/app/components/footer.tsx`

- Client component.
- Background uses `id="parallax"`, picking up the global tiled SVG pattern.
- Layout:
  - `bottom-0 mb-0 w-full z-20 min-h-96 text-white bg-fixed`.
  - Inner container: `flex justify-around gap-8 flex-wrap px-4 md:flex-row flex-col`.
- Content sections:
  - **Socials**: Links to LinkedIn, Instagram, Facebook with FontAwesome icons and arrow icons.
  - **Contact Us**: Tel and email links.
  - **Links**: External references (ISSATM, IEEE, IEEE Computer Society, membership links).
  - **Address**: Physical address text.
  - Large centered logo image at the bottom.

---

## 7. Page-Level UI & Components

### 7.1 Home Page (`/`)

File: `src/app/page.tsx`

Sections:

1. **Progress Bar**
   - `AppProgressBar` from `next-nprogress-bar`, configured with:
     - `height="4px"`, `color="#FFA300"`, `options={{ showSpinner: false }}`.

2. **Hero Video**
   - Full-screen section: `h-screen w-screen overflow-hidden relative`.
   - Video plays `cs-microchip.mp4` from `/public`.
   - Height/width dynamically set using `window.innerHeight`, `innerWidth`, and navbar height.
   - State `playing` controls when the navbar and scroll indicator fade in.

3. **Scroll Indicator**
   - `id="scrollmark"`, faded in/out with `playing` state.
   - Contains rotated "Scroll" text (`-rotate-90`) and a bouncing circle with a down arrow using `motion-safe:animate-bounce`.

4. **Content Sections**
   - Dark background container `bg-black`.
   - `Mission` and `Faq` components rendered sequentially.

### 7.2 Mission Section

File: `src/app/components/mission.tsx`

- `motion.div` container for fade-in from below.
- Layout:
  - `max-w-7xl mx-auto px-4 lg:px-8` wrappers.
- Title:
  - `text-5xl text-center font-bold text-ieeeyellow`.
- Description text centered with call-to-action link in `text-ieeeorange`.
- Stats cards row:
  - `flex bg-[#292929] bg-opacity-30 ... rounded-lg text-center py-8 my-8 max-w-7xl`.
  - Each stat uses `CountUp` to animate a number and labels with white bold text.

### 7.3 FAQ Section

File: `src/app/components/faq.tsx`

- Outer `motion.section` with the same fade-in animation pattern.
- Title: `lg:text-5xl text-4xl text-center text-ieeeyellow font-semibold`.
- Data-driven content using `AccordionData` (question/answer pairs).
- Each accordion item (`AccordionItem` component):
  - Card container:
    - `single-faq max-w-7xl mx-auto mt-4 rounded-lg w-full bg-[#292929] bg-opacity-30 ... p-4 sm:p-8`.
  - Button:
    - `display: flex; text-left;` with `userSelect: 'none'` and `WebkitTapHighlightColor: 'transparent'`.
  - Right-hand icon area:
    - Small yellow rectangle with an SVG arrow that rotates `180deg` for open state.
  - Collapsible content:
    - `transition-all duration-1000 ease-in-out overflow-hidden`.
    - Uses `max-h-0` / `max-h-screen` toggling.

### 7.4 About Page (`/about`)

File: `src/app/about/page.tsx`

- `AppProgressBar` at top as on other pages.
- `motion.div` container for entrance animation.
- Title section:
  - `text-5xl text-center font-bold text-ieeeyellow` + subtle divider line.
- Content layout:
  - `flex flex-col md:flex-row`.
  - Left: big logo image with drop shadow, centered.
  - Right: text content with multiple paragraphs describing the IEEE Computer Society and IEEE ISSATM CS.
  - Uses `md:w-[70%] md:mx-16 mx-8 text-center md:text-left` for responsive alignment.

### 7.5 Team Page (`/team`)

File: `src/app/team/page.tsx`

- `AppProgressBar` at top.
- Sections:
  1. **Team Heading & Executive Committee**
     - Title: `text-5xl text-center font-bold text-ieeeyellow`.
     - Subtitle: `text-3xl text-center font-semibold text-ieeeyellow`.
     - `ECTeamCard` grid: `grid md:grid-cols-3 grid-cols-1 gap-16`.

  2. **Website Team**
     - Similar structure with `WebTeamCard` grid.

  3. **"Could You Be Next?"**
     - Centered title and horizontal divider.
     - `CCTeamCard` grid.

#### Team Card Components

File: `src/app/components/team_card.tsx`

- Three exported components: `ECTeamCard`, `WebTeamCard`, `CCTeamCard`.
- Card layout:
  - Wrapper: `relative flex justify-center items-center mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl aspect-square`.
  - Inner image container with `overflow-hidden` and `transition duration-500`.
  - `next/image` with `object-cover w-full h-full`.
  - Hover overlay at bottom with social links and icons.
- Text block:
  - `my-4` with name and position centered.

### 7.6 Events Listing (`/events`)

File: `src/app/events/page.tsx`

- Page wrapper:
  - `min-h-screen bg-black py-20 px-4 md:px-40`.
- Title & subtitle in `text-ieeeyellow`.
- Tabs:
  - `COMPLETED` / `UPCOMING` buttons.
  - Active tab: `text-ieeeyellow border-ieeeyellow` with `border-b-2`.
  - Inactive: `text-white border-transparent hover:text-ieeeyellow`.
- Events grid:
  - `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16`.
  - Card styling:
    - `border-2 border-ieeeyellow/40`, gradient background, `rounded-3xl`, `shadow-xl`.
    - Hover: slight scale and stronger shadow.
  - Images:
    - Contained inside a black background wrapper with `rounded-xl` and `overflow-hidden`.
  - CTA button:
    - Full width yellow button with `rounded-full`, `hover:bg-yellow-400`.

### 7.7 Event Detail (`/events/[slug]`)

File: `src/app/events/[slug]/page.tsx`

- Uses `generateStaticParams()` to statically generate pages for each event using `eventsData`.
- Layout:
  - Background gradient: `bg-gradient-to-br from-black via-[#181818] to-[#222]`.
  - Centered card with translucent background and blur effect.
- Banner:
  - `next/image` with `fill` and `object-cover`, gradient overlay, title and metadata overlaid at bottom.
  - Date and venue chips with `FaCalendarAlt` and `FaMapMarkerAlt` icons in yellow.
- Description section:
  - `bg-white/5`, `rounded-b-3xl`, `text-lg text-white` with a `text-ieeeyellow` label.
- Optional gallery:
  - Shown only if `event.isGallery` and `event.gallery` exist.
  - Grid of image/video cards:
    - Each card uses `group` classes for hover scaling.
    - Videos show a large yellow play icon overlay.

### 7.8 Blogs Page (`/blogs`)

File: `src/app/blogs/page.tsx`

- Minimal placeholder:
  - Returns a simple "Blogs" text inside a fragment.

### 7.9 Not Found Page

File: `src/app/not-found.tsx`

- Full-screen 404 page with:
  - Title: `ERROR!!` in white.
  - Large `404` in `text-9xl font-bold text-ieeeorange`.
  - Explanation text in `text-xl lg:text-3xl`.
  - "GO HOME" button styled with a yellow/orange border and background, linking to `/`.

### 7.10 Image Slider Component

File: `src/app/components/imagegallery/image.tsx`

- Client component implementing a simple image slider.
- Data: local `slides` array of image URLs (Unsplash).
- Layout:
  - Container: `max-w-7xl aspect-square h-[720px] w-full m-auto py-4 mb-8 px-4 relative group`.
  - Slide: background-image on a `div` with `bg-center bg-cover`.
  - Navigation:
    - Left/right arrows: `BsChevronCompactLeft/Right` inside a round dark overlay, shown on hover (`group-hover:block`).
    - Dots row: `RxDotFilled` icons clickable to jump to a slide.

---

## 8. Animations & Interactions

### 8.1 Framer Motion

Used in multiple components:

- `Mission`, `FAQ`, `About`, `Team` page sections:
  - Animate in via `initial={{ opacity: 0, y: 50 or 75 }}` and `whileInView={{ opacity: 1, y: 0 }}`.
- `Nav` (sidebar):
  - Uses `menuSlide` variants for slide-in/out of the sidebar.
  - `motion.span` with `layoutId` to create a smooth active indicator bar for links.
- `Curve`:
  - `motion.path` animates between two computed `d` path values (curved vs. straight) for the sidebar edge.

### 8.2 CSS & Tailwind Transitions

Patterns used heavily across the app:

- `transition`, `transition-colors`, `transition-transform`, `transition-all`.
- Durations: `duration-200`, `duration-250`, `duration-300`, `duration-500`, `duration-1000`.
- Easing: often `ease-in-out`.
- Examples:
  - FAQ accordion expanding/collapsing (`max-h-0` → `max-h-screen`).
  - Event cards scaling up slightly on hover.
  - Team card overlays fading in on hover.
  - Navigation link background and border color transitions.

### 8.3 Custom Keyframe Animations

From `team_card.css`:

- `@keyframes spin` and `glow-spin` animate rotating borders and glow around team cards.
- Can be attached by adding `.animated-border` or `.glow-animated-border` around card content.

---

## 9. Data & State Management

- **State management** is purely local within components using React hooks:
  - `useState` for toggling nav, FAQ items, image slider index, events tab, hero video playing state, etc.
  - `useEffect` for DOM interactions (e.g., computing navbar height, window size, event listeners for ESC key & outside click).

- **Data** is static and imported from files in `src/app/data/`:
  - `AccordionData` – FAQ questions and answers.
  - `ECTeamData`, `CCTeamData`, `WebTeamData` – team member metadata.
  - `eventsData` – events list with fields like `id`, `title`, `description`, `dateAndTime`, `venue`, images, gallery items, and flags like `completed`, `isGallery`.

- **Static generation**:
  - `generateStaticParams()` in `events/[slug]/page.tsx` creates one page per event id.
  - Works seamlessly with Next.js static export.

---

## 10. Development Workflow

### 10.1 Scripts

From `package.json`:

```jsonc
"scripts": {
  "build": "next build",
  "postbuild": "rmdir /s /q dist && ren out dist",
  "dev": "next dev",
  "lint": "next lint"
}
```

- `npm run dev` – Start development server.
- `npm run build` – Build the Next.js app (static export behavior controlled by `next.config.mjs`).
- `npm run lint` – Run Next.js/ESLint checks.

### 10.2 Running & Building

1. **Install dependencies** (once):

   ```bash
   npm install
   ```

2. **Start dev server**:

   ```bash
   npm run dev
   ```

   Then open the URL shown in the terminal (usually `http://localhost:3000`).

3. **Build for production**:

   ```bash
   npm run build
   ```

   - `next.config.mjs` enables `output: 'export'`, which is compatible with static hosting.

4. **Static output**:
   - After build + export, output will be under `out/` (later renamed to `dist` via `postbuild` script on Windows). Adjust or remove the `postbuild` step for non-Windows environments if needed.

---

## 11. How to Extend the Frontend

### 11.1 Adding a New Page

1. Create a new folder under `src/app` matching the route path. Example for `/contact`:

   ```bash
   src/app/contact/page.tsx
   ```

2. Implement a React component as default export:

   ```tsx
   export default function Page() {
     return (
       <div className="min-h-screen bg-black text-white px-4 py-12">
         <h1 className="text-4xl font-bold text-ieeeyellow mb-4">Contact</h1>
         {/* page content */}
       </div>
     );
   }
   ```

3. To add it to the sidebar nav, extend the `navItems` array in `src/app/components/header/nav/index.tsx`.

### 11.2 Adding a New Section to the Home Page

1. Create a new component under `src/app/components/` (e.g., `highlights.tsx`).
2. Use the existing patterns:
   - Wrap section with `motion.div` (if you want entrance animation).
   - Use `max-w-7xl mx-auto px-4 lg:px-8` for horizontal layout.
   - Use Tailwind typography and color tokens (`text-ieeeyellow`, `bg-[#292929] bg-opacity-30`, etc.).
3. Import and render the component in `src/app/page.tsx` below the existing sections.

### 11.3 Adding a New Event

1. Locate `eventsData` in `src/app/data/eventdata.ts` (or similar).
2. Add a new event object with unique `id` and required fields. Ensure:
   - `id` is unique and numeric.
   - `completed` and `isGallery` flags are set correctly.
   - `imageUrl` points to a valid image (local or remote).
3. The `events` page will automatically include it and the dynamic `[slug]` route will be generated by `generateStaticParams()`.

### 11.4 Adding a New Team Member

1. Choose the target team data file:
   - `ECTeamData` – Executive Committee.
   - `WebTeamData` – Website team.
   - `CCTeamData` – "Could You Be Next?" group.
2. Add a new object matching the `TeamMember` interface shape (name, image URL, position, social flags and URLs).
3. The `Team` page will automatically render the new member in the appropriate grid.

### 11.5 Adding a New FAQ Item

1. Open `AccordionData` in `src/app/data/AccordianData.ts`.
2. Append a new item with `accordionQuestion` and `accordionAnswer`.
3. The `FAQ` component automatically maps over this array and displays all items.

---

## 12. Conventions & Best Practices

- **Styling**
  - Prefer Tailwind utility classes for layout, spacing, colors, and typography.
  - Use custom color tokens (`ieeeyellow`, `ieeeorange`, `ieeegray`) instead of hard-coded hex values when possible.
  - Leverage `max-w-7xl mx-auto px-4 lg:px-8` for consistent horizontal layout.

- **Components**
  - Keep shared UI elements in `src/app/components/`.
  - Use client components (`'use client'`) only where necessary (hooks, DOM, window access).
  - Avoid direct DOM manipulation if possible; use refs and state. (Current code uses `document.querySelector` for navbar opacity on video end.)

- **Animations**
  - Use Framer Motion for complex animations or entrance transitions.
  - Use Tailwind transitions for simple hover and state changes.

- **Data**
  - Keep static configuration/data in `src/app/data/` to allow easy editing without touching components.
  - When adding new entities (events, FAQs, team members), follow the existing data shape.

- **Accessibility & UX**
  - Sidebar navigation includes keyboard ESC handling and outside-click closing.
  - Use descriptive alt texts for images.
  - Buttons and links use clear text + icons where appropriate.

This documentation should give you or any new contributor a clear, detailed view of how the frontend is organized, styled, and extended. Adjust or expand sections as the project evolves.
