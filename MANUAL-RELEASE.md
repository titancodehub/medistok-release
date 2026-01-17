# Manual Release Guide - Medistok

## Quick Start: Upload Your 2 Binary Files

### Step 1: Prepare Your Files

Build your 2 Windows installer files. The landing page expects these exact names:

```
Medistok-Setup-x64.exe    (64-bit Windows installer)
Medistok-Setup-x86.exe    (32-bit Windows installer)
```

**OR if you have portable version:**

```
Medistok-Setup-x64.exe    (64-bit installer)
Medistok-Portable.zip     (Portable version)
```

> **Important:** File names must match exactly! The landing page uses these names to generate download links.

---

### Step 2: Go to GitHub Releases

1. Open your browser and go to:
   ```
   https://github.com/titancodehub/medistok-release/releases
   ```

2. Click the **"Draft a new release"** button (top right)

---

### Step 3: Create the Release

1. **Choose a tag**: Click "Choose a tag" dropdown
   - Type: `v1.0.0` (or your version number)
   - Click "Create new tag: v1.0.0 on publish"

2. **Release title**: Type `Medistok v1.0.0`

3. **Describe this release**: Add your release notes. Example:

   ```markdown
   ## Medistok v1.0.0 - Rilis Pertama

   ### Fitur Utama
   - ✅ Point of Sale (POS) lengkap
   - ✅ Manajemen inventori & stok
   - ✅ Dashboard analitik real-time
   - ✅ Mode offline penuh
   - ✅ Laporan Excel/PDF

   ### Download
   - **Windows 64-bit**: Untuk komputer Windows modern (rekomendasi)
   - **Windows 32-bit**: Untuk komputer Windows lama

   ### Instalasi
   1. Download installer sesuai sistem Anda
   2. Jalankan file .exe
   3. Ikuti wizard instalasi
   4. Mulai gunakan Medistok!

   ### Catatan
   - Minimum: Windows 7 SP1
   - Rekomendasi: Windows 10/11
   ```

4. **Attach binaries**:
   - Drag and drop your 2 files OR click "Attach binaries by dropping them here or selecting them"
   - Upload:
     - `Medistok-Setup-x64.exe`
     - `Medistok-Setup-x86.exe` (or `Medistok-Portable.zip`)

5. **✅ Check "Set as the latest release"** (very important!)

6. Click **"Publish release"**

---

### Step 4: Test the Download

After publishing, test your download links:

1. **Visit your landing page:**
   ```
   https://titancodehub.github.io/medistok-release/
   ```

2. **Click "Coba Medistok Sekarang"**
   - Should automatically download the correct installer based on your system

3. **Verify download links directly:**
   - 64-bit: https://github.com/titancodehub/medistok-release/releases/latest/download/Medistok-Setup-x64.exe
   - 32-bit: https://github.com/titancodehub/medistok-release/releases/latest/download/Medistok-Setup-x86.exe

✅ **Done!** Your landing page now distributes your binary files.

---

## Updating to a New Version (e.g., v1.0.1)

### Quick Update Process:

1. Build your new version files (same names)
2. Go to: https://github.com/titancodehub/medistok-release/releases
3. Click **"Draft a new release"**
4. Tag: `v1.0.1` (increment version)
5. Title: `Medistok v1.0.1`
6. Upload your 2 new files
7. ✅ Check "Set as the latest release"
8. Publish

**The landing page will automatically use the new version** - no code changes needed!

---

## Version Numbering Guide

Use [Semantic Versioning](https://semver.org/):

- `v1.0.0` → `v1.0.1` - Bug fixes
- `v1.0.0` → `v1.1.0` - New features
- `v1.0.0` → `v2.0.0` - Major changes

Examples:
- Fixed crash on startup: `v1.0.0` → `v1.0.1`
- Added export feature: `v1.0.0` → `v1.1.0`
- Redesigned UI: `v1.0.0` → `v2.0.0`

---

## Updating Config Version (Optional)

To show the current version on your landing page:

1. Edit `src/config/release.ts`:
   ```typescript
   export const CURRENT_VERSION = 'v1.0.1'; // Update this
   ```

2. Commit and push:
   ```bash
   git add src/config/release.ts
   git commit -m "Update version to v1.0.1"
   git push
   ```

3. GitHub Pages will auto-deploy

---

## Download Link Structure

Your download links will always be:

```
https://github.com/titancodehub/medistok-release/releases/latest/download/[FILENAME]
```

Where `[FILENAME]` is:
- `Medistok-Setup-x64.exe`
- `Medistok-Setup-x86.exe`
- `Medistok-Portable.zip` (if you have it)

The `/latest/` part **automatically redirects to the newest release** - that's why you don't need to update the landing page!

---

## Troubleshooting

### ❌ "404 Not Found" when clicking download button

**Cause:** No release published yet, or file names don't match

**Fix:**
1. Check you published a release (not draft)
2. Verify file names are exactly:
   - `Medistok-Setup-x64.exe`
   - `Medistok-Setup-x86.exe`

### ❌ Wrong installer downloads (32-bit on 64-bit system)

**Cause:** Browser detection issue

**Fix:** This is rare. The system detects Windows architecture automatically. Users can manually choose from the releases page.

### ❌ WhatsApp link doesn't work

**Cause:** Contact info not updated

**Fix:**
```bash
# Already set to: +62 851 2274 7981
# Already set to: halomedistok@gmail.com
# Should work now!
```

---

## Checklist for First Release

- [ ] Build your 2 Windows installers
- [ ] Name them exactly: `Medistok-Setup-x64.exe` and `Medistok-Setup-x86.exe`
- [ ] Go to GitHub Releases
- [ ] Create tag `v1.0.0`
- [ ] Upload both files
- [ ] ✅ Check "Set as the latest release"
- [ ] Publish
- [ ] Test download from landing page
- [ ] ✅ Confirmed download works!

---

## Need Help?

- **GitHub Releases Docs**: https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository
- **Issues**: https://github.com/titancodehub/medistok-release/issues
