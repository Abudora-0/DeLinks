# DeLinks

A clean, minimal URL shortener that lets you create custom short links instantly. No account required.

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=flat-square&logo=mongodb&logoColor=white)](https://www.mongodb.com/atlas)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Deployed on Netlify](https://img.shields.io/badge/Deployed_on-Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white)](https://delinks-0.netlify.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

**Live demo:** [delinks-0.netlify.app](https://delinks-0.netlify.app)

---

## About

DeLinks takes any long URL and turns it into a short, shareable link with a custom alias of your choice. Built with Next.js and MongoDB, links are persisted in the cloud and redirect instantly when visited. No signups, no premium tiers. Just paste, alias, and share.

`Free Forever` `No Signup` `Custom Aliases` `Instant Redirects` `Cloud Persisted`

---

## Features

- **Instant generation**: create a short link in under a second
- **Custom aliases**: choose your own memorable short URL instead of random characters
- **No account needed**: zero friction, no signup required
- **Redirect engine**: visiting a short link redirects to the original URL instantly
- **Free forever**: no usage limits or hidden tiers
- **Persistent storage**: all links saved to MongoDB Atlas

---

## Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 16 | Full-stack React framework |
| React 19 | UI library |
| MongoDB Atlas | Cloud database for storing links |
| Tailwind CSS | Styling |
| Netlify | Hosting and deployment |

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/Abudora-0/DeLinks.git
cd DeLinks

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Add your MONGODB_URI and NEXT_PUBLIC_HOST

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

## Environment Variables

```env
MONGODB_URI=your_mongodb_connection_string
NEXT_PUBLIC_HOST=http://localhost:3000/
```

---

## License

MIT License. See [LICENSE](LICENSE) for details.
