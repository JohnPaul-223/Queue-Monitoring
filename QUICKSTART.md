# Quick Start Guide

## ✅ Your Repository is Now on GitHub!

**Repository URL**: https://github.com/JohnPaul-223/Queue-Monitoring

---

## 🚀 Deploy to Vercel (3 Simple Steps)

### Step 1: Sign in to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" or "Log In"
3. Choose "Continue with GitHub"
4. Authorize Vercel to access your GitHub account

### Step 2: Import Your Project
1. Click the **"Add New..."** button (top right)
2. Select **"Project"**
3. Find and select **"Queue-Monitoring"** from your repository list
4. Click **"Import"**

### Step 3: Deploy
1. Leave all settings as default:
   - **Framework Preset**: Other
   - **Root Directory**: ./
   - **Build Command**: (leave empty)
   - **Output Directory**: (leave empty)
2. Click **"Deploy"**
3. Wait 30-60 seconds for deployment to complete
4. Click the preview link to view your live site!

Your app will be available at: `https://queue-monitoring.vercel.app` (or similar)

---

## 📱 What You Get

- ✅ **Live URL**: Accessible from anywhere
- ✅ **HTTPS**: Secure by default
- ✅ **Auto-deploy**: Updates automatically when you push to GitHub
- ✅ **Free hosting**: No credit card required
- ✅ **Global CDN**: Fast worldwide access

---

## ⚙️ Configuration Needed

### Important: API Connectivity

The wallboard needs to connect to your Deltapath PBX. You have two options:

#### Option A: Configure PBX CORS (Easiest)
1. Add your Vercel domain to PBX CORS whitelist
2. Update the API endpoint in `index.html` to your PBX URL
3. Push changes to GitHub (auto-deploys to Vercel)

#### Option B: Use Serverless Proxy (Most Secure)
See `VERCEL_DEPLOYMENT.md` for detailed instructions on setting up a serverless API proxy.

---

## 🔧 Making Updates

1. Edit files locally
2. Commit changes: `git add . && git commit -m "Your message"`
3. Push to GitHub: `git push`
4. Vercel automatically redeploys (takes ~30 seconds)

---

## 📚 Documentation

- **Full Deployment Guide**: See `VERCEL_DEPLOYMENT.md`
- **Project README**: See `README.md`
- **GitHub Repo**: https://github.com/JohnPaul-223/Queue-Monitoring
- **Vercel Docs**: https://vercel.com/docs

---

## 🆘 Need Help?

**Common Issues:**

1. **"Cannot connect to PBX"**
   - Check PBX CORS settings
   - Verify PBX URL in code
   - Consider using serverless proxy

2. **"Deployment failed"**
   - Check Vercel build logs
   - Ensure all files are on GitHub

3. **"Page not loading"**
   - Clear browser cache
   - Check browser console for errors
   - Verify deployment completed successfully

---

## 🎉 You're All Set!

Your queue monitoring system is now:
- ✅ Backed up on GitHub
- ✅ Ready to deploy to Vercel
- ✅ Accessible from anywhere with an internet connection

**Next Steps:**
1. Deploy to Vercel (follow steps above)
2. Configure API connectivity
3. Share the URL with your team!
