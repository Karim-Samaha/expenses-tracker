# 💸 Expenses Tracker (Client-Side App)

This is a **client-side expenses tracker** built using **React** on **Vite**. The app is containerized and designed with a **feature-based structure**. It integrates with an open-source currency API and uses infinite scroll pagination for a seamless user experience.

---

## 📦 Architecture & Structure

- **Framework**: [React](https://react.dev) + [Vite](https://vitejs.dev)
- **Structure**: Follows a feature-based folder structure. Each feature (e.g., expenses) has its own folder containing related components, services, and hooks.
- **Styling**: Tailwind CSS
- **Routing**: React Router
- **State**: React Hooks & React Context 


## 🌐 API Integration

Currency conversion is handled via the following open-source API:

> [https://open.er-api.com/v6/latest/USD](https://open.er-api.com/v6/latest/USD)

The expenses data is expected to be fetched from a paginated API endpoint, where the client triggers requests based on the page count.

---

## 🔄 Pagination Strategy

Pagination is handled using **infinite scroll**, triggered by `IntersectionObserver`. When the user scrolls to the bottom, a `loadMore()` function increases the page count and triggers a new API call.

## 🐋 Running the Project 
cd .docker && docker compose up --build (Recommended)

 or
 
 (Node.js >= 20.12.0)
 # Install dependencies
 npm install

# Start the development server
npm run dev

# Run tests
npm run test

# Build the project
npm run build

# Serve the build
npm run preview


🖼️ UI Screenshots
https://dribbble.com/shots/24276232-Expense-Tracker-App

⚖️ Trade-offs & Assumptions
- The app was developed based on static screenshots only — no Figma or UX documentation was provided.

- As a result, fonts and icons may not match the intended design exactly.

- The UI is mobile-first; while it works on desktop, the desktop experience is not UX-optimized.

- Pagination uses an infinite scroll strategy, but preserving previously fetched data requires extra handling on the frontend, since the backend paginates will be skiping data based on the page number sent.

- File upload is implemented but not persisted in local storage, as in a real-world scenario, the file would typically be uploaded to a storage service (e.g., AWS S3), and only the file path or URL would be stored as a string reference.



🐞 Known Bugs / Unimplemented Features

- Desktop UX is not ideal: The layout doesn't break but the experience is not UX-optimized.

- Design accuracy: Fonts and icons may be mismatched due to design limitations.







