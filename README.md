# Simple Stripe Store

A small full-stack Stripe checkout app built with React + Vite on the frontend and Express on the backend.

## Features

- Browse a simple product catalog with T-shirts, hoodies, and caps.
- View product images, names, and USD prices in responsive product cards.
- Start a secure, hosted Stripe Checkout session with the Buy Now button.
- Process one-time card payments through Stripe test mode.
- Return to dedicated success or cancellation pages after checkout.
- Keep frontend and backend communication separate with a Vite React app and Express API.

## Project Structure

- `Frontend/` – React app
- `Backend/` – Express API for Stripe checkout

## Prerequisites

Before running the app, make sure you have:

- Node.js 18+
- pnpm
- A Stripe account with a test secret key

## Step-by-Step Setup

### 1. Install frontend dependencies

```bash
cd Frontend
pnpm install
```

### 2. Install backend dependencies

```bash
cd ../Backend
pnpm install
```

### 3. Create backend environment file

Create a file named `.env` inside the `Backend` folder:

```env
STRIPE_SECRET_KEY=your_stripe_test_secret_key
CLIENT_URL=http://localhost:5173
```

> Use your Stripe test key, not a live secret key.

### 4. Start the backend server

```bash
cd Backend
pnpm run dev
```

The backend should run on:

```text
http://localhost:5000
```

### 5. Start the frontend app

Open a new terminal:

```bash
cd Frontend
pnpm run dev
```

The frontend should run on:

```text
http://localhost:5173
```

### 6. Open the app

Visit:

```text
http://localhost:5173
```

Click the product button to create a Stripe checkout session.

## Dependencies

### Frontend dependencies

- `axios` – HTTP requests to the backend
- `react` – UI library
- `react-dom` – React DOM rendering
- `react-router-dom` – client-side routing

### Backend dependencies

- `cors` – enable cross-origin requests
- `dotenv` – load `.env` values
- `express` – backend server
- `stripe` – Stripe SDK for checkout sessions

## DevDependencies

### Frontend devDependencies

- `@eslint/js`
- `@tailwindcss/vite`
- `@types/react`
- `@types/react-dom`
- `@vitejs/plugin-react`
- `eslint`
- `eslint-plugin-react-hooks`
- `eslint-plugin-react-refresh`
- `globals`
- `tailwindcss`
- `vite`

### Backend devDependencies

- `nodemon` – auto-restart server during development

## Testing Stripe Checkout

Use Stripe test card details:

- Card number: `4242 4242 4242 4242`
- Expiry: any future date
- CVC: any 3 digits

## Troubleshooting

- If checkout fails with a 500 error, verify `STRIPE_SECRET_KEY` is valid.
- If the browser blocks requests, ensure `CLIENT_URL` matches the frontend URL exactly.
- If images do not load, use a direct public HTTPS image URL.

## Notes

This project is intended for Stripe test-mode development. Do not use live Stripe keys in local development.
