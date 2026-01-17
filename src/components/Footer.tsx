import { WifiOff, Mail, Phone, MapPin } from 'lucide-react';
import { WHATSAPP_DISPLAY, CONTACT_EMAIL } from '../config/release';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-500 rounded-lg flex items-center justify-center">
                <WifiOff className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Medistok</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Solusi manajemen apotek offline-first untuk apotek kecil hingga menengah di seluruh Indonesia.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Produk</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Fitur</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Harga</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Demo</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Update Terbaru</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Roadmap</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Perusahaan</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Tentang Kami</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Karir</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Studi Kasus</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Partner</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Hubungi Kami</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm text-gray-400">Email</div>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-blue-400 transition-colors">
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm text-gray-400">WhatsApp</div>
                  <a href={`https://wa.me/${WHATSAPP_DISPLAY.replace(/\D/g, '')}`} className="hover:text-blue-400 transition-colors">
                    {WHATSAPP_DISPLAY}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm text-gray-400">Alamat</div>
                  <p>Banjarnegara, Jawa Tengah</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
            <p className="text-gray-400 text-sm">
              © 2026 Medistok. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              Kebijakan Privasi
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              Syarat & Ketentuan
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              Bantuan
            </a>
            </div>
          </div>

          {/* Legal Disclaimer */}
          <div className="text-center mt-6 pt-6 border-t border-gray-800">
            <p className="text-xs text-gray-500 max-w-4xl mx-auto">
              Model lisensi, fitur, dan kebijakan pembaruan dapat berubah pada versi mendatang
              tanpa memengaruhi lisensi yang telah aktif. Informasi lebih lanjut tersedia dalam
              Syarat & Ketentuan.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
