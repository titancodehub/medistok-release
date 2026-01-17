import { Mail, MessageCircle, Phone, MapPin, Clock } from 'lucide-react';
import { WHATSAPP_DISPLAY, CONTACT_EMAIL, getWhatsAppLink, getEmailLink } from '../config/release';

export function ContactCTA() {
  const handleWhatsAppClick = () => {
    window.open(getWhatsAppLink('Halo, saya tertarik dengan Medistok dan ingin konsultasi lebih lanjut.'), '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = getEmailLink('Konsultasi Medistok', 'Halo tim Medistok,\n\nSaya tertarik untuk mengetahui lebih lanjut tentang Medistok.\n\n');
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-4">
            Hubungi Kami
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Siap Transformasi Apotek Anda?
          </h2>
          <p className="text-lg text-blue-100">
            Tim kami siap membantu Anda memilih paket yang tepat dan menjawab semua pertanyaan Anda.
            Konsultasi gratis, tanpa komitmen.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {/* WhatsApp Card */}
          <button
            onClick={handleWhatsAppClick}
            className="group p-8 bg-white rounded-2xl hover:shadow-2xl transition-all hover:scale-105 text-left"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Chat via WhatsApp
                </h3>
                <p className="text-gray-600 mb-3">
                  Respon cepat dalam hitungan menit. Chat langsung dengan tim support kami.
                </p>
                <div className="flex items-center gap-2 text-green-600 font-semibold">
                  <span>Mulai Chat</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          </button>

          {/* Email Card */}
          <button
            onClick={handleEmailClick}
            className="group p-8 bg-white rounded-2xl hover:shadow-2xl transition-all hover:scale-105 text-left"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Email Kami
                </h3>
                <p className="text-gray-600 mb-3">
                  Untuk pertanyaan detail atau dokumen pendukung. Kami akan respon dalam 1x24 jam.
                </p>
                <div className="flex items-center gap-2 text-blue-600 font-semibold">
                  <span>Kirim Email</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          </button>
        </div>

        {/* Additional Info */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-3 text-white">
              <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
              <div>
                <div className="font-semibold mb-1">WhatsApp</div>
                <div className="text-sm text-blue-100">{WHATSAPP_DISPLAY}</div>
              </div>
            </div>
            <div className="flex items-start gap-3 text-white">
              <Clock className="w-5 h-5 mt-1 flex-shrink-0" />
              <div>
                <div className="font-semibold mb-1">Jam Operasional</div>
                <div className="text-sm text-blue-100">Senin - Jumat, 09:00 - 18:00 WIB</div>
              </div>
            </div>
            <div className="flex items-start gap-3 text-white">
              <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
              <div>
                <div className="font-semibold mb-1">Lokasi</div>
                <div className="text-sm text-blue-100">Jakarta, Indonesia</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-blue-100 text-sm">
            Hubungi kami untuk konsultasi gratis dan demo aplikasi
          </p>
        </div>
      </div>
    </section>
  );
}
