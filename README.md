# HomeCure Healthcare Website

A complete, multi-page healthcare website for **HomeCure Healthcare** — a home medical care service based in Kanpur, Uttar Pradesh.

## 📁 Project Structure

```
homecure-healthcare/
├── index.html          ← Home Page
├── about.html          ← About Us
├── services.html       ← Our Services  
├── equipment-rental.html ← Equipment Rental
├── careers.html        ← Careers / Jobs
├── blog.html           ← Blog / Health Tips
├── contact.html        ← Contact Us
├── css/
│   └── style.css       ← Main stylesheet
├── js/
│   └── main.js         ← JavaScript
├── images/             ← All page images
├── package.json        ← Dev/deployment scripts
└── netlify.toml        ← Netlify config
```

## 🚀 Running Locally

Open any HTML file directly in your browser, OR use a local server:

```bash
# Option 1: Use VS Code Live Server extension (recommended)
# Right-click index.html → Open with Live Server

# Option 2: Use npx serve
npx serve . -p 3000
# Then visit: http://localhost:3000

# Option 3: Use Python
python -m http.server 3000
# Then visit: http://localhost:3000
```

## 🌐 Deploying to Netlify (Recommended — FREE)

### Method 1: Drag & Drop (Easiest)
1. Go to https://netlify.com and sign up (free)
2. Go to your dashboard → **Sites**
3. Drag the entire `homecure-healthcare` folder into the deploy zone
4. Your site is live instantly! 🎉

### Method 2: Netlify CLI
```bash
npm install -g netlify-cli
netlify login
netlify deploy --dir=. --prod
```

## 🌐 Deploying to Vercel (Also FREE)

### Method 1: Vercel Dashboard
1. Go to https://vercel.com and sign up
2. Click **Add New Project**
3. Import from GitHub or drag your folder
4. Click Deploy

### Method 2: Vercel CLI
```bash
npm install -g vercel
vercel --prod
```

## 🌐 Deploying to GitHub Pages (FREE)

1. Create a GitHub account at https://github.com
2. Create a new repository
3. Upload all files in this folder
4. Go to Settings → Pages → Deploy from main branch
5. Your site will be live at `https://yourusername.github.io/repo-name`

## 📞 Contact Info in Website
- **Phone:** +91 81234 56789
- **Email:** homecurehealthcare@gmail.com
- **Location:** 117/36, Swaroop Nagar, Kanpur, UP - 208002

To update contact info, search and replace these values in all HTML files.

## 🎨 Design System
- **Primary Color:** #1a3a6b (Navy Blue)
- **Accent Color:** #27a854 (Green)
- **Font:** Inter (Google Fonts)
- **Responsive:** Yes - Mobile, Tablet, Desktop
