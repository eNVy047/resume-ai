# 🧠 AI Resume Builder - Next.js 15 Full-Stack SaaS

Welcome to the **AI Resume Builder**, a professional SaaS application built using **Next.js 15**, **Stripe**, **PostgreSQL**, and **OpenAI's ChatGPT API**. Effortlessly create and manage your resumes with drag-and-drop simplicity, AI autofill, and professional templates.



<p align="center">
  <a href="https://www.buymeacoffee.com/narayanverma" target="_blank">
    <img src="https://img.shields.io/badge/-Buy%20me%20a%20coffee-FFDD00?logo=buy-me-a-coffee&logoColor=black&style=for-the-badge" alt="Buy Me A Coffee" />
  </a>
</p>


---

## 🚀 Features

- ✍️ AI-powered resume autofill using ChatGPT API
- 📝 Multi-step form with dynamic fields via `React Hook Form` and `useFieldArray`
- 🧲 Drag-and-drop resume builder with `dnd-kit`
- 💳 Tiered subscription plans via Stripe Checkout
- 📱 Fully responsive design using Tailwind CSS and Shadcn UI
- 📤 File uploads using Vercel Blob Storage
- 💾 Auto-save functionality to prevent data loss
- 🌐 Persistent state through URL parameters
- 🖨️ Save or print as PDF using `react-to-print`
- 🔐 Auth and subscription-protected routes

---

## 🛠 Tech Stack

- **Frontend**: Next.js 15, TypeScript, Tailwind CSS, Shadcn UI
- **Backend**: PostgreSQL, Prisma, Stripe Webhooks, Vercel Blob
- **AI**: ChatGPT (OpenAI API)
- **Tools**: React Hook Form, dnd-kit, react-to-print

---

## 📦 Installation & Setup

### 🔹 Step 1: Clone the Repository

```bash
git clone https://github.com/eNVy047/resume-ai.git
cd resume-ai
```

```bash
npm install
```
### Make .env file and add all this.
```bash
# Clerk Auth
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
NEXT_PUBLIC_CLERK_SIGN_UP_URL="/sign-up"

# Base URL
NEXT_PUBLIC_BASE_URL=http://localhost:3000
NODE_ENV="development"

# Vercel Blob
BLOB_READ_WRITE_TOKEN=your_vercel_blob_rw_token

# OpenAI
OPENAI_API_KEY=your_openai_api_key

# PostgreSQL (NeonDB)
DATABASE_URL=your_postgres_database_url
DATABASE_URL_UNPOOLED=your_postgres_unpooled_url

PGHOST=your_postgres_host
PGHOST_UNPOOLED=your_postgres_host_unpooled
PGUSER=your_postgres_user
PGDATABASE=your_postgres_db
PGPASSWORD=your_postgres_password

POSTGRES_URL=your_postgres_url
POSTGRES_URL_NON_POOLING=your_postgres_url_non_pooling
POSTGRES_USER=your_postgres_user
POSTGRES_HOST=your_postgres_host
POSTGRES_PASSWORD=your_postgres_password
POSTGRES_DATABASE=your_postgres_db
POSTGRES_URL_NO_SSL=your_postgres_url_no_ssl
POSTGRES_PRISMA_URL=your_postgres_prisma_url

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
NEXT_PUBLIC_STRIPE_PRICE_ID_PRO_MONTHLY=your_price_id_pro
NEXT_PUBLIC_STRIPE_PRICE_ID_PRO_PLUS_MONTHLY=your_price_id_pro_plus
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret

```
```bash
npx prisma db push
```

```bash
npx prisma studio
```

```bash
npm run dev
```


### 📫 Connect with me

<p align="left">
  <a href="mailto:narayan7154@gmail.com">
    <img align="center" src="https://img.shields.io/badge/-Email-D14836?logo=gmail&logoColor=white&style=flat" />
  </a>
  <a href="https://www.linkedin.com/in/narayanverma/" target="_blank">
    <img align="center" src="https://img.shields.io/badge/-LinkedIn-0077B5?logo=linkedin&style=flat" />
  </a>
  <a href="https://www.instagram.com/narayan_.v/" target="_blank">
    <img align="center" src="https://img.shields.io/badge/-Instagram-E4405F?logo=instagram&logoColor=white&style=flat" />
  </a>
  <a href="https://narayanverma.vercel.app" target="_blank">
    <img align="center" src="https://img.shields.io/badge/-Portfolio-24292E?logo=githubpages&style=flat" />
  </a>
</p>

### ☕ Support Me

If you like my work and want to support me, you can buy me a coffee!  
[![Buy Me a Coffee](https://img.shields.io/badge/-Buy%20me%20a%20coffee-FFDD00?logo=buy-me-a-coffee&logoColor=black&style=flat)](https://www.buymeacoffee.com/narayanverma)

### 📄 License
This project is open-source. You’re free to use, share, and modify it for personal and commercial projects.
Let me know if you’d like me to generate a `CONTRIBUTING.md` or `vercel.json` for deployment next!
