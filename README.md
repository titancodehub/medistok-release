# Medistok Landing Page & Release Distribution

Landing page for Medistok - Aplikasi manajemen apotek offline-first untuk Indonesia.

**Live Site:** https://medistok.titancodehub.com
**Fallback:** https://titancodehub.github.io/medistok-release/

---

## 🚀 Quick Start: Creating Your First Release

Read **[MANUAL-RELEASE.md](./MANUAL-RELEASE.md)** for step-by-step instructions.

### TL;DR:

1. Build 2 Windows installers: `Medistok-Setup-x64.exe` & `Medistok-Setup-x86.exe`
2. Go to https://github.com/titancodehub/medistok-release/releases
3. Click "Draft a new release"
4. Tag: `v1.0.0`, upload files, publish
5. Landing page automatically distributes your files!

---

## 📦 What's Included

- **Landing page** - Marketing site with auto-download buttons
- **GitHub Releases integration** - Automatic binary distribution
- **Contact info** - WhatsApp & Email links
- **Legal disclaimers** - Safe, honest copy

---

## 🔧 Contact Information

Current settings (in `src/config/release.ts`):

- **WhatsApp:** +62 851 2274 7981
- **Email:** halomedistok@gmail.com

To update, edit `src/config/release.ts` and push to GitHub.

---

## 📖 Documentation

- **[MANUAL-RELEASE.md](./MANUAL-RELEASE.md)** - How to upload binaries (start here!)
- **[RELEASES.md](./RELEASES.md)** - Advanced release management
- **[QUICKSTART.md](./QUICKSTART.md)** - General overview

---

## 🌐 Download Links Structure

After you publish your first release, these URLs will work:

```
# 64-bit Windows (recommended)
https://github.com/titancodehub/medistok-release/releases/latest/download/Medistok-Setup-x64.exe

# 32-bit Windows
https://github.com/titancodehub/medistok-release/releases/latest/download/Medistok-Setup-x86.exe

# Latest release page
https://github.com/titancodehub/medistok-release/releases/latest
```

The `/latest/` URLs **automatically redirect to newest version**.

---

## 🛠️ Development

### Install dependencies
```bash
npm install
```

### Run dev server
```bash
npm run dev
```

### Build for production
```bash
npm run build
```

### Deploy to GitHub Pages
Push to `release` branch - GitHub Actions will auto-deploy.

---

## 📂 Project Structure

```
medistok-release/
├── src/
│   ├── components/      # React components
│   ├── config/
│   │   └── release.ts   # ⚙️ UPDATE THIS: Contact info & download links
│   └── ...
├── .github/workflows/
│   ├── deploy.yml       # Auto-deploy landing page
│   └── release.yml      # (Optional) Auto-create releases
├── MANUAL-RELEASE.md    # 📖 Start here!
├── RELEASES.md          # Advanced release guide
└── README.md            # This file
```

---

## ✅ Pre-Launch Checklist

Before releasing:

- [ ] Update contact info in `src/config/release.ts`
- [ ] Build landing page (`npm run build`)
- [ ] Deploy to GitHub Pages (push to `release` branch)
- [ ] Test landing page
- [ ] Create first release (see MANUAL-RELEASE.md)
- [ ] Test download buttons work
- [ ] Test WhatsApp & Email links work

---

## 🔒 Legal & Safety

All copy has been reviewed for legal safety:
- ✅ No absolute promises ("selamanya" removed)
- ✅ Clear disclaimers about update policy
- ✅ Honest, verifiable claims only
- ✅ Proper licensing language

---

## 📞 Support

- **Email:** halomedistok@gmail.com
- **WhatsApp:** +62 851 2274 7981
- **GitHub Issues:** https://github.com/titancodehub/medistok-release/issues

---

## 📄 License

© 2026 Medistok. All rights reserved.
