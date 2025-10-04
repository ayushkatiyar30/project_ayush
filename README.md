# Library Search Lite — Smart Book Browser

**Author:** Ayush Katiyar, Ashutosh Giri  
**Dept-Year:** Computer Science and Engineering 2028  
**Event:** WEB Development Challenge 2025  

---

## Project Overview
Library Search Lite is a single-page web application that allows students to:
- Search books by title or author in real-time.
- Bookmark and unbookmark favorite books (saved in localStorage).
- Toggle between light and dark mode, with preference remembered.
- View a stats line showing total books and number of bookmarks.

The project is fully responsive, keyboard-friendly, and built using **plain HTML, CSS, and JavaScript**, with data loaded from `books.json`.

---

## Features Implemented
1. **Search Filter** – Filters book list instantly as the user types.  
2. **Bookmark / Unbookmark** – Click ⭐ to save favorites locally; persists after page reload.  
3. **Dark Mode Toggle** – Switch between light and dark theme; saved using localStorage.  
4. **Stats Line** – Shows total books and number of bookmarked books.  
5. **Responsive & Accessible Design** – Works on mobile, tablet, and desktop; keyboard focus visible; semantic headings used.

---

## Instructions to Run
1. Open `index.html` in VS Code.  
2. Use **Live Server** extension for real-time preview (recommended).  
3. Search for books, toggle bookmarks, and switch dark mode to explore functionality.

---

## Tools & Acknowledgement
- Built with: HTML, CSS, JavaScript  
- AI Assistance: ChatGPT (GPT-5) was used only for layout and feature planning; **all code implemented by us**.  
- No external frameworks or templates used.

---

## JSON Data
Books data is stored in `books.json` (10 sample items).  
The app dynamically loads and renders the book list.

---

## Notes
- Fully responsive: 360px to 1440px widths tested.  
- All interactions (search, bookmark, dark mode) tested; no console errors.  
- Accessibility implemented: aria-labels, keyboard navigation, semantic headings.