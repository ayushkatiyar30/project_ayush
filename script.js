let books = [];
let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

// Load books from JSON
fetch("books.json")
  .then(res => res.json())
  .then(data => {
    books = data;
    renderBooks(books);
    updateStats();
  })
  .catch(() => {
    document.getElementById("bookList").innerHTML =
      "<p>⚠️ Unable to load book data.</p>";
  });

// Search functionality
document.getElementById("searchInput").addEventListener("input", e => {
  const term = e.target.value.toLowerCase();
  const filtered = books.filter(
    b =>
      b.title.toLowerCase().includes(term) ||
      b.author.toLowerCase().includes(term)
  );
  renderBooks(filtered);
  updateStats(filtered.length);
});

// Render books to the page
function renderBooks(list) {
  const container = document.getElementById("bookList");
  container.innerHTML = "";

  list.forEach(book => {
    const isMarked = bookmarks.includes(book.id);
    const card = document.createElement("article");
    card.innerHTML = `
      <h3>${book.title}</h3>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Genre:</strong> ${book.genre}</p>
      <button onclick="toggleBookmark(${book.id})"
              aria-label="Bookmark ${book.title}">
        ${isMarked ? "⭐" : "☆"}
      </button>
    `;
    container.appendChild(card);
  });
}

// Toggle bookmark
function toggleBookmark(id) {
  if (bookmarks.includes(id)) {
    bookmarks = bookmarks.filter(b => b !== id);
  } else {
    bookmarks.push(id);
  }
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  renderBooks(books);
  updateStats();
}

// Stats display
function updateStats(total = books.length) {
  const statLine = `Total Books: ${total} | Bookmarked: ${bookmarks.length}`;
  document.getElementById("stats").textContent = statLine;
}

// Dark mode toggle
const body = document.body;
const themeToggle = document.getElementById("themeToggle");
let dark = localStorage.getItem("darkMode") === "true";
applyTheme();

themeToggle.addEventListener("click", () => {
  dark = !dark;
  localStorage.setItem("darkMode", dark);
  applyTheme();
});

function applyTheme() {
  body.classList.toggle("dark", dark);
  themeToggle.textContent = dark ? "☀️" : "🌙";
}
