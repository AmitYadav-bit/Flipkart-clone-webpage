# Flipkart Clone Webpage

A static, self-contained clone of the Flipkart e-commerce homepage — built with plain HTML, CSS, and JavaScript. No build tools or server required.

## 🖥️ How to Preview / Where to Check This

### Option 1 — Open directly in your browser (easiest)
1. Download or clone this repository.
2. Locate the file **`index.html`** in the project folder.
3. Double-click `index.html` — it will open in your default web browser.

### Option 2 — Clone and open via terminal
```bash
git clone https://github.com/AmitYadav-bit/Flipkart-clone-webpage.git
cd Flipkart-clone-webpage
# On macOS:
open index.html
# On Linux:
xdg-open index.html
# On Windows:
start index.html
```

### Option 3 — Use VS Code Live Server (recommended for development)
1. Install [VS Code](https://code.visualstudio.com/) and the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).
2. Open the project folder in VS Code.
3. Right-click `index.html` → **"Open with Live Server"**.
4. The page opens at `http://127.0.0.1:5500`.

### Option 4 — Use Python's built-in HTTP server
```bash
cd Flipkart-clone-webpage
python3 -m http.server 8080
# Then open http://localhost:8080 in your browser
```

## 📁 Project Structure

```
Flipkart-clone-webpage/
├── index.html   ← Main webpage (open this in your browser)
├── style.css    ← All styling (Flipkart colors, layout, responsive)
└── script.js    ← Interactivity (slider, cart, search, login modal)
```

## ✨ Features

- **Sticky header** — Logo, search bar, Login button, Cart counter
- **Category navigation** — Horizontal scrollable bar (Grocery → Two Wheelers)
- **Auto-playing banner slider** — 4 slides, pauses on hover, dot navigation
- **Deals of the Day** — Horizontal scroll row with prices and discounts
- **Offer banners** — Fashion Week, Home & Kitchen, Fresh & Organic
- **Top Picks for You** — Product grid with star ratings and Add to Cart
- **Shop by Category** — 8 category cards
- **Login modal** — Two-panel slide-in form
- **Toast notifications** — Feedback on cart, search, and interactions
- **Fully offline** — All images are inline SVG; no internet required

## 🌐 Live Demo

After opening `index.html` you should see a page that looks like this:

| Section | Description |
|---|---|
| Blue header | Flipkart logo, search bar, Login, Cart |
| Category bar | Icons + labels for each product category |
| Banner slider | 4 coloured promotional slides |
| Deals row | 8 products with prices scrollable horizontally |
| Product grid | 5-column grid with ratings and Add to Cart |
| Footer | Links, social media, address, payment icons |