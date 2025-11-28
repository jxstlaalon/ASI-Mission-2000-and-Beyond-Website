
````markdown
# ASI Mission 2000 and Beyond - Official Website

![Project Status](https://img.shields.io/badge/Status-Active-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

A fully responsive, multi-page static website developed for **ASI Mission 2000 and Beyond**, a registered mission group under the Inter-American Division of Seventh-day Adventists. This platform serves as a digital hub to showcase mission chapters, archive past projects, facilitate donations, and connect with volunteers.

## 📖 Table of Contents
- [Features](#-features)
- [Technologies Used](#-technologies-used)
- [Folder Structure](#-folder-structure)
- [Installation & Setup](#-installation--setup)
- [Usage Guide](#-usage-guide)
- [Credits](#-credits)

## 🚀 Features

* **Responsive Design:** A fluid layout built with custom CSS and Flexbox/Grid that adapts seamlessly to Desktops, Laptops, Tablets, and Mobile phones.
* **Dynamic Navigation:**
    * **Desktop:** Full horizontal navigation bar with a call-to-action button.
    * **Mobile:** Hamburger menu drawer with optimized touch targets.
    * **Active State:** Automatically highlights the current page link.
* **Interactive UI Components:**
    * **Hero Carousel:** Automated, fading image slider using Swiper.js.
    * **Testimonials:** Swipeable card slider for member stories.
    * **Animated Statistics:** Numbers (Baptisms, Missionaries) count up when scrolled into view.
* **Contact System:** Functional contact form UI with validation and a custom modal popup for user feedback.
* **Resource Management:** Dedicated section for downloading past mission reports (PDFs).
* **External Integrations:** Embedded Google Maps and Social Media linking.

## 🛠 Technologies Used

* **HTML5:** Semantic markup structure.
* **CSS3:** Custom stylesheet (`style.css`) handling 90% of the styling, layout, and media queries.
* **Tailwind CSS (CDN):** Used for utility classes (padding, margins, flex) specifically in the Contact page layout.
* **JavaScript (ES6):** Vanilla JS for DOM manipulation, navigation logic, and scroll animations.
* **Swiper.js:** Third-party library for responsive carousels.
* **Boxicons:** Icon library for social media, contact icons, and UI elements.

## 📂 Folder Structure

Ensure your project files are organized exactly as follows for all links and scripts to work correctly:

```text
/asi-mission-website
│
├── index.html          # Home Page (Hero, Stats, Testimonials)
├── about.html          # About Us (Founder info, History)
├── chapters.html       # Chapters (List of international teams)
├── pastprojects.html   # Projects (Archive of mission reports)
├── contact.html        # Contact (Form & Map)
├── donate.html         # Donate (Bank info & Payment links)
│
├── css/
│   └── style.css       # Main stylesheet (Media queries included)
│
├── js/
│   ├── home.js         # Main logic (Nav toggle, Carousel init, Counters)
│   └── contact.js      # Contact form logic & Modal handling
│
├── img/                # Image Assets
│   ├── logotrans.png
│   ├── Founder.jpg
│   ├── groupphoto.jpg
│   ├── chapters.jpg
│   ├── Barbados.jpg
│   ├── Belize.jpg
│   ├── ... (Other country images)
│
└── media/reports/            # PDF Downloads
    ├── Impact St. Vincent 2003.pdf
    ├── Impact Dominica 2004.pdf
    └── ... (Other PDF reports)
````

## 💻 Installation & Setup

Since this is a static website, no backend server or database installation is required.

1.  **Clone or Download** the repository to your local machine.
2.  **Add Assets:**
      * Place your images in the `/img` folder.
      * Place your PDF reports in the `/reports` folder.
3.  **Run the Project:**
      * **Option A:** Simply double-click `index.html` to open it in your browser.
      * **Option B (Recommended):** Use a local development server (like the "Live Server" extension in VS Code). This ensures all external scripts (Tailwind/Swiper) load correctly without potential CORS issues.

**Note:** An internet connection is required to load the CDN resources (Tailwind CSS, Boxicons, and Swiper JS).

## 🖱 Usage Guide

### 1\. Navigation Logic

The `js/home.js` file handles the navigation bar. It automatically checks the browser's URL path and adds the `.active` CSS class to the corresponding link in the navbar, highlighting it green.

### 2\. Mobile Menu

On screens smaller than **992px**, the desktop navigation hides, and a Hamburger icon appears. Clicking this toggles the mobile drawer via the `home.js` event listener.

### 3\. Modifying the Carousel

To add or remove images from the Home Page Hero Slider, open `js/home.js` and modify the `heroImages` array:

```javascript
const heroImages = [
    "/img/Barbados.jpg",
    "/img/NewImage.jpg" // Add path to your new image here
];
```

## 👥 Credits

  * **Development:** [Your Name]
  * **Organization:** ASI Mission 2000 and Beyond
  * **Icons:** [Boxicons](https://boxicons.com/)
  * **Carousel Library:** [Swiper.js](https://swiperjs.com/)

-----

*Called to God's Kingdom. For such a time as this.*

