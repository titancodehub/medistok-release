# Medistok Release - Quick Start Guide

Your landing page is now configured to link directly to your GitHub Releases!

## 🎯 What's Been Set Up

### 1. **Release Configuration** (`src/config/release.ts`)
Central config file for all download links and versions.

**Update this file when:**
- You release a new version (change `CURRENT_VERSION`)
- You want to change WhatsApp/Email contact info
- You need to modify download URLs

### 2. **Download Links Active**
All CTA buttons now link to GitHub Releases:

- **Hero "Coba Medistok Sekarang"** → Auto-detects OS, downloads appropriate installer
- **Hero "Lihat Demo"** → Links to latest release page
- **Pricing "Coba Medistok Sekarang"** → Same as Hero
- **Pricing "Mulai Trial Gratis"** → Downloads Windows installer (configurable)
- **Pricing "Jadwalkan Demo"** → Links to demo/release page

### 3. **GitHub Actions Workflow** (`.github/workflows/release.yml`)
Automates release creation when you push a version tag.

### 4. **Documentation** (`RELEASES.md`)
Complete guide for creating and managing releases.

---

## 📦 How to Create Your First Release

### Option 1: Manual (Recommended for first release)

1. **Build your Medistok application** for each platform:
   - Windows: `Medistok-Setup-Windows.exe`
   - macOS: `Medistok-Setup-macOS.dmg`
   - Linux: `Medistok-Setup-Linux.AppImage`

2. **Go to GitHub:**
   ```
   https://github.com/titancodehub/medistok-release/releases
   ```

3. **Click "Draft a new release"**

4. **Create tag:** `v1.0.0` (or your version)

5. **Release title:** `Medistok v1.0.0`

6. **Description:** Add your release notes

7. **Upload binaries:** Drag and drop your installers

8. **Check "Set as the latest release"**

9. **Click "Publish release"**

✅ **Done!** Your landing page will now download these files.

### Option 2: Using GitHub CLI

```bash
# Install GitHub CLI: https://cli.github.com/

# Create release with binaries
gh release create v1.0.0 \
  --title "Medistok v1.0.0" \
  --notes "First release of Medistok offline-first POS" \
  ./Medistok-Setup-Windows.exe \
  ./Medistok-Setup-macOS.dmg \
  ./Medistok-Setup-Linux.AppImage
```

### Option 3: Automated with GitHub Actions

```bash
# Create and push a tag
git tag v1.0.0
git push origin v1.0.0

# GitHub Actions will automatically create a draft release
# Then go to GitHub and upload binaries manually
```

---

## 🔄 Updating Version on Landing Page

1. **Edit `src/config/release.ts`:**
   ```typescript
   export const CURRENT_VERSION = 'v1.0.1'; // Update this
   ```

2. **Commit and push:**
   ```bash
   git add src/config/release.ts
   git commit -m "Update version to v1.0.1"
   git push
   ```

3. **Deploy landing page** (GitHub Pages will auto-deploy)

---

## 🌐 Testing Your Setup

Before creating a real release, test the URLs:

1. **Check current download link:**
   ```
   https://github.com/titancodehub/medistok-release/releases/latest
   ```

2. **Visit your landing page:**
   ```
   https://titancodehub.github.io/medistok-release/
   ```

3. **Click "Coba Medistok Sekarang"** - should redirect to releases page

4. **After publishing first release** - button will download installer directly

---

## 📝 Important Notes

1. **Binary Naming:**
   Your binaries MUST be named exactly:
   - `Medistok-Setup-Windows.exe`
   - `Medistok-Setup-macOS.dmg`
   - `Medistok-Setup-Linux.AppImage`

   Or update the names in `src/config/release.ts`

2. **Contact Info:**
   Update these in `src/config/release.ts`:
   - `WHATSAPP_NUMBER` (currently placeholder)
   - `CONTACT_EMAIL` (currently placeholder)

3. **First Release:**
   Until you publish your first release, the download buttons will redirect to the releases page (empty initially).

---

## 🚀 Next Steps

1. ✅ **Build your Medistok application**
2. ✅ **Create your first GitHub release** (v1.0.0)
3. ✅ **Test download from landing page**
4. ✅ **Update contact info in config**
5. ✅ **Deploy to GitHub Pages**

---

## 🆘 Troubleshooting

**Q: Download link shows 404**
A: You haven't published a release yet, or binary names don't match config

**Q: Wrong OS installer downloads**
A: Check platform detection in `release.ts` → `getAutomaticDownloadLink()`

**Q: Contact links don't work**
A: Update `WHATSAPP_NUMBER` and `CONTACT_EMAIL` in `src/config/release.ts`

**Q: Want to change binary names?**
A: Update `DOWNLOAD_LINKS` in `src/config/release.ts`

---

For more details, see **RELEASES.md**
