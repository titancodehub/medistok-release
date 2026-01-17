/**
 * Medistok Release Configuration
 *
 * Update these URLs when you publish a new release
 */

// GitHub repository info
export const REPO_OWNER = 'titancodehub';
export const REPO_NAME = 'medistok-release';

// Current version (update this with each release)
export const CURRENT_VERSION = 'v1.0.0';

// Base GitHub release URLs
const GITHUB_BASE = `https://github.com/${REPO_OWNER}/${REPO_NAME}`;
export const RELEASES_PAGE = `${GITHUB_BASE}/releases`;
export const LATEST_RELEASE = `${GITHUB_BASE}/releases/latest`;

// Direct download links (auto-redirect to latest version)
export const DOWNLOAD_LINKS = {
  windows64: `${GITHUB_BASE}/releases/latest/download/Medistok-Setup-x64.exe`,
  windows32: `${GITHUB_BASE}/releases/latest/download/Medistok-Setup-x86.exe`,
  windowsPortable: `${GITHUB_BASE}/releases/latest/download/Medistok-Portable.zip`,
};

// Demo/Trial links
export const DEMO_LINK = LATEST_RELEASE;
export const TRIAL_LINK = DOWNLOAD_LINKS.windows64; // Default to 64-bit Windows

// WhatsApp & Email contact
export const WHATSAPP_NUMBER = '6285122747981'; // Format: country code + number (no spaces/dashes)
export const WHATSAPP_DISPLAY = '+62 851 2274 7981'; // Display format with spaces
export const CONTACT_EMAIL = 'halomedistok@gmail.com';

// Helper function to get download link by platform
export function getDownloadLink(platform: 'windows64' | 'windows32' | 'windowsPortable' = 'windows64') {
  return DOWNLOAD_LINKS[platform];
}

// Helper to detect user platform and return appropriate download
export function getAutomaticDownloadLink(): string {
  if (typeof window === 'undefined') return DOWNLOAD_LINKS.windows64;

  const userAgent = window.navigator.userAgent.toLowerCase();

  // Check if 64-bit Windows (default to 64-bit for modern systems)
  if (userAgent.includes('win64') || userAgent.includes('wow64') || userAgent.includes('x64')) {
    return DOWNLOAD_LINKS.windows64;
  } else if (userAgent.includes('win')) {
    // 32-bit Windows or unknown
    return DOWNLOAD_LINKS.windows32;
  } else {
    // Non-Windows (Mac/Linux) - default to 64-bit Windows
    return DOWNLOAD_LINKS.windows64;
  }
}

// Get WhatsApp click-to-chat link
export function getWhatsAppLink(message: string = 'Halo, saya tertarik dengan Medistok'): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// Get email mailto link
export function getEmailLink(subject: string = 'Pertanyaan tentang Medistok', body: string = ''): string {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
