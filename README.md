# 🌐 Mega Menu UI Component

This project is a **sample implementation** of a dynamic **Mega Menu** component designed with an e-commerce management dashboard theme. The focus is on **optimization through modularization, structured data usage, and redundancy reduction** — making the codebase ideal for scalable and maintainable large-scale web applications.

---

## 🔗 Live Demo

👉 [View Live Project](https://mega-menu-two.vercel.app/)

---

## 🧩 Key Features

- **Dynamic Mega Menu** with hover-triggered multi-column dropdowns
- **E-commerce-Themed UI** sections like **Features**, **Resources**, and **Pricing**
- **Highly Modular Codebase** — HTML, CSS, and JavaScript files are cleanly separated
- **Optimized Through Structured Data** — Menus are dynamically populated using JSON-like arrays
- **Redundancy-Free Architecture** — One source of truth for all dropdown data prevents repetition
- **Scalable & Reusable Components** — Ideal for projects that require frequent UI updates or feature expansion

---

## ⚡ Optimization Highlights

- 🔁 **No Repetition in HTML:** All dropdown content is rendered using structured JS data, not hardcoded in HTML.
- 🧱 **Component-Based Design:** Each menu section (features, pricing, resources) is handled by its own script and dataset.
- 📁 **Centralized Data Management:** Data files like `featureData.js`, `pricing.js`, and `resourcesData.js` contain all content logic — making updates and debugging faster and more manageable.
- 🔄 **Easier Future Scaling:** Adding or removing menu sections only requires editing a data file, not rewriting UI logic.
- 🧩 **Reusable Rendering Logic:** Common functions and rendering logic are written once and reused across sections.

---

## 🖼️ Screenshots

### 💡 Landing Section
![Landing](./screenshots/img1.png)

### 🧮 Features Dropdown
![Features Dropdown](./screenshots/img2.png)

### 📊 Pricing Dropdown
![Pricing Dropdown](./screenshots/img3.png)

### 📚 Resources Dropdown
![Resources Dropdown](./screenshots/img4.png)

---

## 🗂️ Project Structure

<pre><code>## 🗂️ Project Structure 
  ``` mega-menu/ 
        ├── images/ # Contains all image assets used in the menu 
        ├── screenshots/ # Contains project screenshots for README
        ├── scripts/ # All JavaScript files for rendering dynamic content 
            ├── featureData.js # Data for the Features dropdown 
            ├── pricing.js # Data for the Pricing dropdown 
            ├── resourcesData.js # Data for the Resources dropdown  
            └── index.js # Main script handling rendering and events 
        ├── styles/ # Contains all CSS styles 
            └── styles.css 
        ├── index.html # Main HTML file 
            └── README.md # Project documentation 
  ``` </code></pre>

## 📌 Technologies Used

- HTML  
- CSS  
- JavaScript  
- Vercel (for deployment)  
