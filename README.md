# DevNotes - Your Code Second Brain 🚀

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com)
[![Supabase Backend](https://img.shields.io/badge/Supabase-PostgreSQL-green?style=for-the-badge&logo=supabase)](https://supabase.com)
[![PWA Ready](https://img.shields.io/badge/PWA-Ready-blue?style=for-the-badge&logo=pwa)](https://web.dev/progressive-web-apps/)
[![Next.js 14](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

## 🌐 Live Application
**👉 https://dev-notes-ruby.vercel.app/**

---

## 📖 Overview

A modern, developer-focused note-taking application designed specifically for code snippets, programming tips, and technical resources. Features a beautiful masonry layout, real-time search, and seamless Supabase integration with PWA capabilities for offline access.

![DevNotes Screenshot](public/notas.png)

---

## ✨ Key Features

### 💻 **Developer-Centric Tools**
- **🔄 Code Syntax Highlighting** - Automatic language detection and formatting
- **🏷️ Smart Tag System** - Color-coded organization by technologies and categories
- **⚡ Real-time Search** - Instant filtering across titles, content, and tags
- **📝 Markdown Support** - Rich text formatting with code block support

### 🎨 **Modern UX/UI**
- **📐 Masonry Layout** - Pinterest-style responsive grid
- **🔮 Glassmorphism Design** - Modern translucent UI elements
- **🎬 Smooth Animations** - Framer Motion powered transitions
- **📱 Mobile-First** - Responsive design with floating action button

### 🔗 **Advanced Integrations**
- **🗄️ Supabase Backend** - Real-time PostgreSQL database
- **📲 PWA Ready** - Installable progressive web app
- **🚀 Vercel Deployment** - Automatic CI/CD from GitHub
- **🛡️ TypeScript** - Full type safety and better developer experience

---

## 🛠️ Technology Stack

### **Frontend & Framework**
| Technology | Purpose | Version |
|------------|---------|---------|
| ![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js) | React Framework & SSR | 14.0+ |
| ![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=flat-square&logo=typescript) | Type Safety & DX | 5.0+ |
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3+-blue?style=flat-square&logo=tailwindcss) | Utility-First Styling | 3.3+ |
| ![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.0+-black?style=flat-square&logo=framer) | Animations & Interactions | 10.0+ |

### **Backend & Database**
| Technology | Purpose | Version |
|------------|---------|---------|
| ![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-green?style=flat-square&logo=supabase) | PostgreSQL Database & Auth | Latest |
| ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15+-blue?style=flat-square&logo=postgresql) | Production Database | 15+ |
| ![React Hot Toast](https://img.shields.io/badge/React_Hot_Toast-Latest-orange?style=flat-square) | Notifications | Latest |

---

## 📁 Project Architecture

```
DevNotes/
├── 🗂️ src/
│   ├── 🏠 app/
│   │   ├── layout.tsx              # Root layout with metadata
│   │   ├── page.tsx                # Main application page
│   │   └── globals.css             # Global styles and Tailwind
│   ├── 🧩 components/
│   │   ├── CreatePostForm.tsx      # Note creation with validation
│   │   ├── EditPostModal.tsx       # Inline editing interface
│   │   ├── Header.tsx              # Search and navigation
│   │   ├── PostCard.tsx            # Individual note display
│   │   └── TagInput.tsx            # Tag management component
│   └── 🔧 lib/
│       ├── supabase.ts             # Supabase client configuration
│       ├── supabase-api.ts         # Database operations
│       └── types.ts                # TypeScript definitions
├── 📄 public/
│   ├── manifest.json               # PWA configuration
│   ├── icon-192x192.png           # App icons
│   └── icon-512x512.png           # App icons
└── ⚙️ Configuration Files
    ├── next.config.ts              # Next.js + PWA settings
    ├── tsconfig.json               # TypeScript configuration
    └── package.json                # Dependencies and scripts
```

---

## 🗃️ Database Schema

### **Posts Table**
```sql
CREATE TABLE posts (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  author TEXT DEFAULT 'Anonymous',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  likes INTEGER DEFAULT 0,
  tags TEXT[]
);
```

### **Key Features:**
- ✅ **Full CRUD Operations** - Create, read, update, delete snippets
- ✅ **Array Fields** - Efficient tag storage and querying
- ✅ **Automatic Timestamps** - Created_at for sorting and insights
- ✅ **Scalable Design** - Ready for user authentication

---

## 🎯 Core Components

| Component | Purpose | Key Features |
|-----------|---------|--------------|
| **📄 Main Application** | Central state management | Real-time insights, search system, optimistic updates |
| **🧩 CreatePostForm** | Note creation interface | Smart validation, tag management, sticky positioning |
| **📊 PostCard** | Individual note display | Code highlighting, interactive actions, responsive design |
| **🔍 Header** | Navigation and search | Glassmorphism design, instant search, brand identity |

---

## 🚀 Quick Start

### **Prerequisites**
- Node.js 18+
- Supabase account
- GitHub account

### **Local Development**
```bash
# Clone the repository
git clone https://github.com/MarceloAdan73/DevNotes.git

# Navigate to project directory
cd DevNotes

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

### **Environment Variables**
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### **Production Deployment**
```bash
# Create production build
npm run build

# Start production server
npm start
```

---

## 📈 Performance Metrics

| Metric | Result | Description |
|--------|--------|-------------|
| ⚡ **Load Time** | Sub-second | Optimized Next.js rendering |
| 📱 **Mobile Score** | 100% | Perfect mobile responsiveness |
| 🔍 **Search Speed** | Instant | Client-side filtering |
| 🎨 **Animations** | 60fps | Smooth Framer Motion transitions |

---

## 🛡️ Code Quality

- ✅ **Full TypeScript Coverage** - Complete type safety
- ✅ **ESLint Configuration** - Code quality enforcement
- ✅ **Responsive Components** - Mobile-first design
- ✅ **Accessibility Ready** - Semantic HTML and ARIA labels

---

## 🌟 Deployment Features

### **Vercel Integration**
- 🔄 **Automatic Builds** - Triggered by GitHub pushes
- 🌍 **Global CDN** - Fast worldwide access
- 🔒 **SSL Certificate** - Automatic HTTPS
- ⚙️ **Environment Variables** - Secure configuration

### **PWA Capabilities**
- 📲 **Installable** - Add to home screen
- 🔌 **Offline Ready** - Service worker caching
- 🎯 **App-like Experience** - Fullscreen and standalone modes

---

## 👨‍💻 Author

**Marcelo Adan** 
- 🔗 GitHub: [@MarceloAdan73](https://github.com/MarceloAdan73)
- 🌐 Live App: [dev-notes-ruby.vercel.app](https://dev-notes-ruby.vercel.app/)
- 📂 Repository: [DevNotes](https://github.com/MarceloAdan73/DevNotes)

---

## 🙏 Acknowledgments

- **Next.js Team** - For the incredible React framework
- **Supabase** - For the amazing backend-as-a-service
- **Vercel** - For seamless deployment experience
- **Tailwind CSS** - For the utility-first CSS framework
- **Framer Motion** - For beautiful animations

---

<div align="center">

**⭐ If you find this project helpful, please consider giving it a star!**

*Built with ❤️ using Next.js, Supabase, and modern web technologies.*

</div>
