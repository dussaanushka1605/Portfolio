# Deployment Guide - Portfolio Project

## 📋 Pre-Deployment Checklist

✅ **Frontend Ready:**
- [x] All dependencies installed
- [x] Build command configured (`npm run build`)
- [x] Netlify configuration file created (`netlify.toml`)
- [x] SPA redirects configured (`public/_redirects`)
- [x] No merge conflicts
- [x] Unused files removed

✅ **Backend Ready:**
- [x] Basic structure in place
- [x] Render configuration file created (`render.yaml`)
- [x] Package.json configured

---

## 🚀 Frontend Deployment (Netlify)

### Step 1: Connect Repository
1. Go to [Netlify](https://www.netlify.com/) and sign in
2. Click **"Add new site"** → **"Import an existing project"**
3. Connect your GitHub account
4. Select repository: `dussaanushka1605/Portfolio`

### Step 2: Configure Build Settings
**Base directory:** `frontend`

**Build command:**
```bash
npm install && npm run build
```

**Publish directory:**
```
frontend/dist
```

### Step 3: Environment Variables (if needed)
Currently, no environment variables are required for the frontend. If you add any in the future:
- Go to **Site settings** → **Environment variables**
- Add variables like:
  - `VITE_API_URL` (if you add a backend API)
  - `VITE_ANALYTICS_ID` (for analytics)

### Step 4: Deploy
- Click **"Deploy site"**
- Netlify will automatically build and deploy your site
- Your site will be available at: `https://your-site-name.netlify.app`

### Step 5: Custom Domain (Optional)
1. Go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Follow the DNS configuration instructions

---

## 🔧 Backend Deployment (Render)

### Step 1: Connect Repository
1. Go to [Render](https://render.com/) and sign in
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub account
4. Select repository: `dussaanushka1605/Portfolio`

### Step 2: Configure Service Settings
**Name:** `portfolio-backend`

**Root Directory:** `backend`

**Environment:** `Node`

**Build Command:**
```bash
npm install
```

**Start Command:**
```bash
npm start
```

**Node Version:** `18` (or latest LTS)

### Step 3: Environment Variables
Since the backend is currently empty, no environment variables are needed yet. When you implement the backend, you might need:

```env
NODE_ENV=production
PORT=10000
DATABASE_URL=your_database_url
JWT_SECRET=your_jwt_secret
API_KEY=your_api_key
```

**To add environment variables:**
1. Go to **Environment** tab in Render dashboard
2. Click **"Add Environment Variable"**
3. Add key-value pairs

### Step 4: Deploy
- Click **"Create Web Service"**
- Render will build and deploy your backend
- Your backend will be available at: `https://portfolio-backend.onrender.com`

### Step 5: Health Check (When Backend is Implemented)
Once you add backend code, update `render.yaml`:
```yaml
healthCheckPath: /health
```

---

## 📝 Build Commands Summary

### Frontend (Netlify)
```bash
# Build command (runs automatically on Netlify)
cd frontend
npm install
npm run build

# Output directory
frontend/dist
```

### Backend (Render)
```bash
# Build command (runs automatically on Render)
cd backend
npm install

# Start command
npm start
```

---

## 🔍 Verification Steps

### After Frontend Deployment:
1. ✅ Visit your Netlify URL
2. ✅ Check all pages load correctly
3. ✅ Test dark/light theme toggle
4. ✅ Test language switching (English, Hindi, Marathi)
5. ✅ Test voice assistant (English only)
6. ✅ Verify all links work (Resume, Certificates)
7. ✅ Check mobile responsiveness
8. ✅ Test smooth scrolling navigation

### After Backend Deployment:
1. ✅ Check service is running
2. ✅ Verify health endpoint (when implemented)
3. ✅ Test API endpoints (when implemented)

---

## 🐛 Troubleshooting

### Frontend Issues:
- **Build fails:** Check Netlify build logs
- **404 on refresh:** Ensure `_redirects` file is in `public/` folder
- **Assets not loading:** Verify `base` path in `vite.config.ts` if using subdirectory

### Backend Issues:
- **Service won't start:** Check `package.json` start script
- **Build timeout:** Increase build timeout in Render settings
- **Environment variables:** Ensure all required variables are set

---

## 📚 Additional Resources

- [Netlify Documentation](https://docs.netlify.com/)
- [Render Documentation](https://render.com/docs)
- [Vite Build Configuration](https://vitejs.dev/config/build-options.html)

---

## 🎯 Quick Reference

| Platform | Service | URL Pattern |
|----------|---------|-------------|
| Frontend | Netlify | `https://your-site-name.netlify.app` |
| Backend | Render | `https://portfolio-backend.onrender.com` |

---

**Last Updated:** 2025-01-28
**Project:** Anushka Dussa Portfolio

