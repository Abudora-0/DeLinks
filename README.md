# DeLinks — URL Shortener

**Live Demo:** https://delinks-0.netlify.app

A clean, minimal URL shortener that lets you create custom short links instantly — no account required.

---

## About

DeLinks takes any long URL and turns it into a short, shareable link with a custom alias of your choice. Built with Next.js and MongoDB, links are persisted in the cloud and redirect instantly when visited. No signups, no premium tiers — just paste, alias, and share.

---

## Features

- **Instant generation** — create a short link in under a second
- **Custom aliases** — choose your own memorable short URL instead of random characters
- **No account needed** — zero friction, no signup required
- **Redirect engine** — visiting a short link redirects to the original URL instantly
- **Free forever** — no usage limits or hidden tiers
- **Persistent storage** — all links saved to MongoDB Atlas

---

## Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 16 | Full-stack React framework |
| MongoDB Atlas | Cloud database for storing links |
| Tailwind CSS | Styling |

---

## Getting Started

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Add your MONGODB_URI and NEXT_PUBLIC_HOST

# Start development server
npm run dev
```

---

## Environment Variables

```env
MONGODB_URI=your_mongodb_connection_string
NEXT_PUBLIC_HOST=http://localhost:3000/
```
