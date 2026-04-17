# PRODIGY_WD_02
Modern Stopwatch Web App
A sleek, responsive, and high-precision stopwatch application built with vanilla JavaScript, HTML, and CSS. This project features a "Glassmorphism" UI design and provides essential timing functionalities including lap recording and state-persistent controls.

🚀 Features
High Precision Timing: Tracks minutes, seconds, and milliseconds with real-time updates.

Lap Recording: Allows users to capture specific time intervals. Laps are prepended to the list for immediate visibility of the most recent record.

Dynamic UI States: * Start: Begins the timer and enables Pause/Lap buttons.

Pause: Freezes the timer while retaining the current elapsed time.

Reset: Clears all data, including the recorded lap history, and returns the display to zero.

Modern Aesthetics: Features a dark-mode, glass-morphic interface with a blurred background, vibrant neon accents, and tabular-numeric fonts for better readability.

Fully Responsive: Designed with CSS Grid and Flexbox to ensure a centered, stable layout across different screen sizes.

🛠️ Technical Breakdown
1. Frontend (HTML/CSS)
HTML: Structured with semantic tags and a clean container-card architecture.

CSS: * Uses Backdrop-filter for the frosted glass effect.

Linear Gradients for a deep, professional background.

Tabular-nums font variant to prevent the "shaking" effect of numbers during rapid millisecond updates.

2. Logic (JavaScript)
Date.now() Implementation: Instead of simple counters, the app uses system timestamps (Date.now()) to ensure timing accuracy remains consistent even if the browser's main thread is momentarily delayed.

State Management: A custom showButton() function manages the disabled attributes of buttons, preventing illogical user actions (like lapping while the timer is stopped).

DOM Manipulation: Efficiently creates and injects lap list items into the UI dynamically.

📁 Project Structure
index.html: The core structure and entry point.

style.css: All styling, including the dark theme and button animations.

script.js: The engine handling the time calculations, interval management, and lap logic.

🖥️ How to Use
Clone the repository.

Open index.html in any modern web browser.

Hit Start to begin tracking!
