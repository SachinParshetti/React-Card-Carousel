# 🧠 Naresh IT Courses Carousel – React Project

This project is a modern React-based UI that displays a carousel of featured images and dynamically loaded course cards using data from a local JSON file. It uses **Bootstrap Carousel**, **React Slick Slider**, and **Axios** for fetching course data.

---

## 🌐 Live Demo

🔗 [Click here to view the live site](https://sachinparshetti.github.io/React-Card-Carousel/)

> Replace the URL above with your actual Netlify/Vercel link.

---

## 📸 UI Preview

### 🖼 Hero Section with Carousel + Course Cards

![Hero Section Preview](image.png)

---

## 📁 Project Structure

project-root/
├── public/
│ ├── images/ # Carousel images (carousel1.jpg, etc.)
│ ├── cards.json # Course data in JSON format
├── src/
│ ├── NareshItCarts/
│ │ ├── HeroSection.jsx # Hero section with carousel and courses
│ │ ├── herosection.css # Custom styles
│ │ ├── Header.jsx # Header component
│ │ ├── header.css # Header styles
│ │ └── NareshItPage.jsx # Page combining everything
│ ├── App.jsx
│ └── app.css
├── screenshots/
│ └── hero-preview.png # UI preview screenshot
├── README.md
├── package.json
└── vite.config.js

yaml
Copy
Edit

---

## 🚀 Features

- 🎠 Bootstrap Carousel for featured banners
- 🎓 Dynamic course card slider using React Slick
- ⚡ Fetch course data from local JSON (simulates API)
- 🧠 Responsive layout (mobile/tablet/desktop)
- 💻 Clean structure using React Hooks & functional components

---

## 📦 Technologies Used

- React.js
- Vite
- Axios
- React Slick (`react-slick`)
- Bootstrap 5
- HTML/CSS

---

## 🔧 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/SachinParashetti/nareshit-carousel.git
   cd nareshit-carousel
Install dependencies

bash
Copy
Edit
npm install
Start the development server

bash
Copy
Edit
npm run dev
Open in browser
Visit http://localhost:5173

🧪 Sample cards.json Format
json
Copy
Edit
[
  {
    "title": "Full Stack Web Development",
    "image": "/images/fullstack.jpg",
    "rating": 5,
    "date": "2025-08-01",
    "faculty": "Mr. Naresh",
    "duration": "3 Months"
  }
]
Make sure this file is saved inside the public/ folder as cards.json.



## 🧑‍💻 Author

**Sachin Parashetti**  

[![GitHub](https://img.shields.io/badge/GitHub-%2312100E.svg?style=flat&logo=github&logoColor=white)](https://github.com/SachinParshetti)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/sachin-parashetti-99b255259)
[![Gmail](https://img.shields.io/badge/Email-D14836?style=flat&logo=gmail&logoColor=white)](mailto:sachinparshettisp@gmail.com)
