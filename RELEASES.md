# Medistok Release Guide

## Release Structure

Binaries are distributed via **GitHub Releases**:
- URL: `https://github.com/titancodehub/medistok-release/releases`
- Latest release: `https://github.com/titancodehub/medistok-release/releases/latest`

## Download Links

### Direct Download URLs (Auto-redirect to latest version):

**Windows:**
```
https://github.com/titancodehub/medistok-release/releases/latest/download/Medistok-Setup-Windows.exe
```

**macOS:**
```
https://github.com/titancodehub/medistok-release/releases/latest/download/Medistok-Setup-macOS.dmg
```

**Linux:**
```
https://github.com/titancodehub/medistok-release/releases/latest/download/Medistok-Setup-Linux.AppImage
```

## Creating a New Release

### 1. Build your binary
Build the Medistok application for each platform.

### 2. Create Release via GitHub UI

1. Go to: https://github.com/titancodehub/medistok-release/releases
2. Click **"Draft a new release"**
3. Create a new tag (e.g., `v1.0.0`, `v1.0.1`, `v1.1.0`)
4. Release title: `Medistok v1.0.0`
5. Description: Add release notes, changelog, features
6. Attach binaries:
   - `Medistok-Setup-Windows.exe`
   - `Medistok-Setup-macOS.dmg`
   - `Medistok-Setup-Linux.AppImage`
7. Check **"Set as the latest release"**
8. Click **"Publish release"**

### 3. Create Release via GitHub CLI

```bash
# Install GitHub CLI: https://cli.github.com/

# Create release with binaries
gh release create v1.0.0 \
  --title "Medistok v1.0.0" \
  --notes "Release notes here" \
  ./Medistok-Setup-Windows.exe \
  ./Medistok-Setup-macOS.dmg \
  ./Medistok-Setup-Linux.AppImage
```

### 4. Automated Release (GitHub Actions)

See `.github/workflows/release.yml` for automated release workflow.

## Version Naming Convention

Use [Semantic Versioning](https://semver.org/):
- `v1.0.0` - Major release
- `v1.0.1` - Patch/bugfix
- `v1.1.0` - Minor update with new features
- `v2.0.0` - Major version with breaking changes

## Landing Page Integration

The landing page automatically links to:
- **"Coba Medistok Sekarang"** → Latest Windows release
- **"Lihat Demo"** → Demo/trial page
- **Trial button** → Trial download

Update `src/config/release.ts` to change download URLs.

## Notes

- GitHub Releases provides free CDN hosting
- Auto-generates checksums for each file
- Supports release notes and changelogs
- Users can download previous versions
- No repository size bloat
