/**
 * Medistok Release Configuration
 *
 * Download URLs are dynamically generated from the latest GitHub release
 */

// GitHub repository info
export const REPO_OWNER = 'titancodehub';
export const REPO_NAME = 'medistok-release';

// Base GitHub release URLs
const GITHUB_BASE = `https://github.com/${REPO_OWNER}/${REPO_NAME}`;
export const RELEASES_PAGE = `${GITHUB_BASE}/releases`;
export const LATEST_RELEASE = `${GITHUB_BASE}/releases/latest`;

// Fetch the latest release version from GitHub API
export async function getLatestVersion(): Promise<string> {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/releases/latest`,
      { headers: { 'Accept': 'application/vnd.github.v3+json' } }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch latest release');
    }

    const data = await response.json();
    // Remove 'v' prefix if present (e.g., "v1.2.0" -> "1.2.0")
    return (data.tag_name as string).replace(/^v/, '');
  } catch (error) {
    console.error('Error fetching latest version:', error);
    return '1.0.0'; // Fallback version if API fails
  }
}

// Generate download links dynamically based on version
export function getDownloadLinks(version: string) {
  return {
    windows64: `${GITHUB_BASE}/releases/download/v${version}/medistok-${version}-x64.exe`,
    windows32: `${GITHUB_BASE}/releases/download/v${version}/medistok-${version}-ia32.exe`,
    windowsUniversal: `${GITHUB_BASE}/releases/download/v${version}/medistok-${version}.exe`,
  };
}

// Demo/Trial links
export const DEMO_LINK = LATEST_RELEASE;

// WhatsApp & Email contact
export const WHATSAPP_NUMBER = '6285122747981'; // Format: country code + number (no spaces/dashes)
export const WHATSAPP_DISPLAY = '+62 851 2274 7981'; // Display format with spaces
export const CONTACT_EMAIL = 'halomedistok@gmail.com';

// Helper function to get download link by platform
export async function getDownloadLink(
  platform: 'windows64' | 'windows32' | 'windowsUniversal' = 'windows64'
): Promise<string> {
  const version = await getLatestVersion();
  const links = getDownloadLinks(version);
  return links[platform];
}

// Helper to detect user platform and return appropriate download
export async function getAutomaticDownloadLink(): Promise<string> {
  const version = await getLatestVersion();
  const links = getDownloadLinks(version);

  if (typeof window === 'undefined') return links.windows64;

  const userAgent = window.navigator.userAgent.toLowerCase();

  // Check if 64-bit Windows (default to 64-bit for modern systems)
  if (userAgent.includes('win64') || userAgent.includes('wow64') || userAgent.includes('x64')) {
    return links.windows64;
  } else if (userAgent.includes('win')) {
    // 32-bit Windows or unknown
    return links.windows32;
  } else {
    // Non-Windows (Mac/Linux) - default to 64-bit Windows
    return links.windows64;
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

// Google Analytics
export const GA_MEASUREMENT_ID = 'G-BEGPCSKQ1P';
