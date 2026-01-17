# DNS Setup Guide - Custom Domain

## Your Custom Domain: `medistok.titancodehub.com`

This guide will help you configure DNS settings to point your custom domain to GitHub Pages.

---

## Step 1: Configure DNS at Your Domain Provider

Go to your DNS provider (where you manage `titancodehub.com`) and add a CNAME record.

### DNS Record to Add:

| Type | Name/Host | Value/Points to | TTL |
|------|-----------|-----------------|-----|
| **CNAME** | `medistok` | `titancodehub.github.io` | 3600 (or Auto) |

### Examples by Provider:

**Cloudflare:**
1. Go to DNS → Records
2. Click "Add record"
3. Type: CNAME
4. Name: `medistok`
5. Target: `titancodehub.github.io`
6. Proxy status: DNS only (gray cloud) or Proxied (orange cloud) - both work
7. Save

**Namecheap:**
1. Go to Advanced DNS
2. Click "Add New Record"
3. Type: CNAME Record
4. Host: `medistok`
5. Value: `titancodehub.github.io`
6. Save

**GoDaddy:**
1. Go to DNS Management
2. Add → CNAME
3. Name: `medistok`
4. Value: `titancodehub.github.io`
5. Save

**Google Domains / Cloudflare / Other:**
- Same pattern: Add CNAME record
- Host/Name: `medistok`
- Points to: `titancodehub.github.io`

---

## Step 2: Configure GitHub Pages Settings

1. **Go to your repository settings:**
   ```
   https://github.com/titancodehub/medistok-release/settings/pages
   ```

2. **Under "Custom domain":**
   - Enter: `medistok.titancodehub.com`
   - Click **Save**

3. **Wait a few minutes**, then:
   - ✅ Check **"Enforce HTTPS"** (recommended for security)

---

## Step 3: Deploy Your Site

The CNAME file is already created in `public/CNAME`. Now deploy:

```bash
# Commit the changes
git add public/CNAME vite.config.ts
git commit -m "Add custom domain: medistok.titancodehub.com"

# Push to trigger deployment
git push origin release
```

**Note:** GitHub Actions will automatically deploy to GitHub Pages.

---

## Step 4: Test Your Domain

### Wait for DNS propagation (usually 5-30 minutes, max 24 hours)

**Check if DNS is working:**
```bash
# On Mac/Linux
nslookup medistok.titancodehub.com

# Should return: titancodehub.github.io
```

**Visit your site:**
```
http://medistok.titancodehub.com
```

After HTTPS is enabled (may take a few minutes):
```
https://medistok.titancodehub.com
```

---

## Troubleshooting

### ❌ "Domain's DNS record could not be retrieved" (GitHub Pages settings)

**Cause:** DNS not propagated yet or CNAME record not set correctly

**Fix:**
1. Wait 10-30 minutes for DNS propagation
2. Check CNAME record is correct:
   - Name: `medistok`
   - Points to: `titancodehub.github.io`
3. Try again

---

### ❌ Site shows 404 after custom domain setup

**Cause:** Base path still set to `/medistok-release/` instead of `/`

**Fix:** Already fixed! `vite.config.ts` now has `base: '/'`

---

### ❌ "Not secure" warning in browser

**Cause:** HTTPS not enabled yet

**Fix:**
1. Wait a few minutes after DNS propagation
2. GitHub will automatically provision SSL certificate
3. Check "Enforce HTTPS" in GitHub Pages settings

---

### ❌ Old URL still works (titancodehub.github.io/medistok-release/)

**Cause:** Normal! Both URLs work until you enforce HTTPS on custom domain

**Fix:** Not a problem. Once HTTPS is enforced on custom domain, old URL will redirect automatically.

---

## DNS Propagation Check

Use these tools to check if your DNS is working globally:

- https://www.whatsmydns.net/#CNAME/medistok.titancodehub.com
- https://dnschecker.org/#CNAME/medistok.titancodehub.com

Look for results showing: `titancodehub.github.io`

---

## Summary Checklist

- [ ] Add CNAME record at DNS provider
  - Type: CNAME
  - Name: `medistok`
  - Points to: `titancodehub.github.io`
- [ ] Configure GitHub Pages settings
  - Custom domain: `medistok.titancodehub.com`
  - Save
- [ ] Commit and push changes (CNAME file + vite.config.ts)
- [ ] Wait 10-30 minutes for DNS propagation
- [ ] Test: http://medistok.titancodehub.com
- [ ] Enable HTTPS in GitHub Pages settings
- [ ] Test: https://medistok.titancodehub.com
- [ ] ✅ Done!

---

## Final URLs

After setup, your site will be available at:

- **Primary:** https://medistok.titancodehub.com
- **Fallback:** https://titancodehub.github.io/medistok-release/ (redirects to custom domain)

---

## Need Help?

- **GitHub Docs:** https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
- **Email:** halomedistok@gmail.com
- **WhatsApp:** +62 851 2274 7981
