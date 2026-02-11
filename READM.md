# 🎬 Stream Vibe - Ultimate Cinematic Experience

**Stream Vibe** is a high-performance web application built with **React** and **Vite**, designed to provide users with a seamless browsing experience for movies and TV shows. By leveraging the **TMDB API**, it delivers real-time media data through a sleek, professional interface.

---

## 🚀 Features & Highlights

- **Dynamic Trending Slider:** The home and media pages feature a trending section with an integrated auto-playing trailer for the currently focused item.
- **Unified Media Hub:** A combined Movies & Shows page that categorizes content intelligently.
- **Deep Dive Details:** Dedicated Movie and Show detail pages providing comprehensive information, metadata, and visuals.
- **Modular Architecture:** Built with scalability in mind using custom hooks and reusable components.
- **Vite-Powered:** Optimized for lightning-fast development and production builds.

---

## 🛠️ Tech Stack

- **Frontend:** React.js (Vite)
- **Styling:** CSS3 / Modern UI Design
- **Data Source:** [TMDB API](https://www.themoviedb.org)
- **Environment Management:** Secure API handling via `.env` files.

---

## 📂 Project Structure

```text
src/
├── assets/      # Static assets (images, icons)
├── components/  # Reusable UI components
├── data/        # Static data & constants
├── hooks/       # Custom React hooks (API fetching, etc.)
├── pages/       # Page-level components
├── utils/       # Helper functions
├── App.jsx      # Main application logic
└── main.jsx     # Entry point
```

## 🚦 Application Routes

# Application Routes Status

    ✅ [Home] --> Live (Main landing page with featured conte
    ✅ [Movies & Shows] --> Live (Integrated media browsing with unified categori
    ✅ [Movie Details] --> Live (In-depth movie information and traile
    ✅ [Show Details] --> Live (Detailed TV series information and metada
    ✅ [Support] --> Live (User assistance and contact pa
    ✅ [Subscription] --> Live (Plan overview and pricing detai
    🚧 [Search] --> Dev (Advanced search and filtering - Under Development)

Note: Some UI sections like the Hero Section, Features & Comparison, and certain micro-interactions are currently being polished in the under-development phase.

# 🔧 Installation & Setup

1. Clone the repo:

   ```bash
   git clone https://github.com
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Environment Variables:
   Create a .env file in the root directory and add your TMDB Access Token:

   ```bash
   VITE_TMDB_ACCESS_TOKEN=your_read_access_token_here
   ```

4. Run the project:

   ```bash
   npm run dev
   ```

## 🚧 Roadmap

- Implementation of Search functionality.
- Enhancing the Hero section UI.
- Completing the Features & Comparison comparison tables.
- Adding User Authentication (Future Scope).

## Developed with ❤️ by Mustafa Sayed (ME)
