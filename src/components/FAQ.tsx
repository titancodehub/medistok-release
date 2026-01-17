import { useState } from 'react';
import { ChevronDown, Shield, HelpCircle, Zap, Clock, Database } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  icon: typeof Shield;
  color: string;
  items: FAQItem[];
}

const faqCategories: FAQCategory[] = [
  {
    title: 'Lisensi & Pembaruan',
    icon: Shield,
    color: 'blue',
    items: [
      {
        question: 'Apa yang dimaksud dengan "lisensi perpetual"?',
        answer: 'Lisensi perpetual berarti Anda membeli hak untuk menggunakan software tanpa batas waktu. Anda tidak perlu membayar biaya langganan bulanan atau tahunan. Setelah membeli, Anda bisa menggunakan versi yang dibeli selama-lamanya.'
      },
      {
        question: 'Apakah saya mendapat update gratis selamanya?',
        answer: 'Lisensi Anda mencakup pembaruan untuk fitur inti dan perbaikan bug sesuai kebijakan pembaruan yang berlaku saat ini. Kebijakan ini dapat berkembang seiring waktu. Untuk update fitur major atau versi baru di masa depan, mungkin ada kebijakan berbeda yang akan dikomunikasikan dengan jelas kepada pengguna.'
      },
      {
        question: 'Apa yang terjadi jika kebijakan berubah?',
        answer: 'Perubahan kebijakan tidak akan memengaruhi lisensi yang sudah Anda beli. Jika Anda sudah membeli lisensi, Anda tetap bisa menggunakan software dengan fitur yang Anda beli. Perubahan hanya berlaku untuk pembelian baru atau upgrade opsional di masa depan.'
      },
      {
        question: 'Berapa lama dukungan teknis diberikan?',
        answer: 'Dukungan teknis dasar (email support) diberikan selama kebijakan support berlaku. Untuk dedicated support atau SLA guarantee, tersedia dalam paket Custom/Enterprise. Detail lengkap ada di Syarat & Ketentuan.'
      },
      {
        question: 'Apakah bisa transfer lisensi ke komputer lain?',
        answer: 'Ya, lisensi bisa dipindahkan ke komputer lain. Hubungi tim support kami untuk proses deaktivasi di komputer lama dan aktivasi di komputer baru. Proses ini gratis dan bisa dilakukan sesuai kebutuhan.'
      }
    ]
  },
  {
    title: 'Trial & Demo',
    icon: Clock,
    color: 'green',
    items: [
      {
        question: 'Apa saja yang bisa saya akses di trial 14 hari?',
        answer: 'Trial 14 hari memberikan akses ke fitur-fitur yang tersedia dalam paket yang Anda pilih untuk trial. Anda bisa test semua fungsi utama seperti POS, manajemen inventori, laporan, dan mode offline. Tidak perlu kartu kredit untuk memulai trial.'
      },
      {
        question: 'Apakah data trial saya hilang setelah 14 hari?',
        answer: 'Tidak. Data yang Anda input selama trial akan tetap tersimpan. Jika Anda memutuskan untuk membeli lisensi, semua data akan langsung bisa digunakan tanpa perlu input ulang.'
      },
      {
        question: 'Bagaimana cara meminta demo langsung?',
        answer: 'Anda bisa jadwalkan demo dengan tim kami melalui tombol "Jadwalkan Demo" di website, atau hubungi kami via WhatsApp/email. Demo akan dipandu oleh tim kami dan disesuaikan dengan kebutuhan apotek Anda.'
      }
    ]
  },
  {
    title: 'Fitur & Fungsi',
    icon: Zap,
    color: 'purple',
    items: [
      {
        question: 'Bagaimana mode offline bekerja?',
        answer: 'Medistok dirancang offline-first. Semua fungsi utama (POS, kasir, inventori, laporan) berjalan penuh tanpa internet. Data disimpan lokal di komputer Anda. Jika ada koneksi internet, sistem akan otomatis sinkronisasi untuk backup atau multi-cabang (jika ada).'
      },
      {
        question: 'Apakah bisa digunakan untuk multi cabang?',
        answer: 'Fitur multi-cabang tersedia dalam paket Custom/Enterprise. Untuk paket Basic, lisensi berlaku untuk 1 komputer. Jika Anda butuh solusi multi-cabang, silakan hubungi tim kami untuk konsultasi.'
      },
      {
        question: 'Apakah bisa integrasi dengan sistem lain?',
        answer: 'Integrasi dengan sistem lain (ERP, accounting, dll) tersedia dalam paket Custom. Kami bisa develop custom integration sesuai kebutuhan bisnis Anda. Hubungi tim sales untuk diskusi lebih lanjut.'
      },
      {
        question: 'Apakah ada mobile app?',
        answer: 'Saat ini Medistok fokus pada desktop application untuk performa optimal. Roadmap development kami mencakup kemungkinan mobile app di masa depan, yang akan dikomunikasikan kepada existing users.'
      }
    ]
  },
  {
    title: 'Keamanan & Data',
    icon: Database,
    color: 'red',
    items: [
      {
        question: 'Di mana data saya disimpan?',
        answer: 'Data utama disimpan secara lokal di komputer apotek Anda. Ini memberikan Anda kontrol penuh atas data bisnis. Backup otomatis juga bisa diaktifkan ke cloud storage pilihan Anda (opsional).'
      },
      {
        question: 'Apakah data saya aman?',
        answer: 'Ya. Data Anda terenkripsi dan tersimpan lokal. Kami tidak mengakses data apotek Anda. Untuk keamanan tambahan, kami rekomendasikan backup rutin ke external drive atau cloud storage.'
      },
      {
        question: 'Bagaimana jika komputer rusak atau hilang?',
        answer: 'Jika Anda melakukan backup rutin (yang kami sangat rekomendasikan), data bisa dipulihkan ke komputer baru. Lisensi juga bisa ditransfer ke komputer pengganti. Hubungi support untuk bantuan recovery.'
      }
    ]
  },
  {
    title: 'Harga & Pembayaran',
    icon: HelpCircle,
    color: 'orange',
    items: [
      {
        question: 'Apa saja metode pembayaran yang diterima?',
        answer: 'Kami menerima transfer bank, e-wallet (GoPay, OVO, Dana), dan kartu kredit. Untuk pembelian paket Enterprise, tersedia opsi cicilan atau invoice untuk perusahaan.'
      },
      {
        question: 'Apakah ada biaya tersembunyi?',
        answer: 'Tidak ada biaya tersembunyi. Harga yang tertera adalah harga final untuk lisensi. Tidak ada biaya bulanan atau tahunan wajib. Biaya tambahan hanya untuk custom development atau dedicated support (opsional).'
      },
      {
        question: 'Apakah ada refund policy?',
        answer: 'Kami menyediakan trial 14 hari agar Anda bisa test semua fitur sebelum membeli. Setelah pembelian, refund dapat dipertimbangkan dalam kondisi tertentu sesuai Syarat & Ketentuan. Hubungi support untuk diskusi lebih lanjut.'
      },
      {
        question: 'Berapa lama proses aktivasi setelah pembayaran?',
        answer: 'Aktivasi lisensi dilakukan maksimal 1x24 jam setelah pembayaran terverifikasi. Untuk pembayaran via transfer bank di hari kerja, biasanya proses dalam beberapa jam saja.'
      }
    ]
  }
];

const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
  blue: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-200' },
  green: { bg: 'bg-green-100', text: 'text-green-600', border: 'border-green-200' },
  purple: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-200' },
  red: { bg: 'bg-red-100', text: 'text-red-600', border: 'border-red-200' },
  orange: { bg: 'bg-orange-100', text: 'text-orange-600', border: 'border-orange-200' }
};

function FAQAccordion({ question, answer }: FAQItem) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 px-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-gray-900 pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          <p className="text-gray-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export function FAQ() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            FAQ
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-lg text-gray-600">
            Temukan jawaban untuk pertanyaan umum tentang Medistok, lisensi, dan fitur-fiturnya.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="max-w-5xl mx-auto space-y-8">
          {faqCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            const colors = colorClasses[category.color];

            return (
              <div key={categoryIndex} className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-gray-100">
                {/* Category Header */}
                <div className={`px-6 py-4 ${colors.bg} border-b ${colors.border}`}>
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 ${colors.bg} rounded-xl flex items-center justify-center border ${colors.border}`}>
                      <Icon className={`w-5 h-5 ${colors.text}`} />
                    </div>
                    <h3 className={`text-xl font-bold ${colors.text}`}>
                      {category.title}
                    </h3>
                  </div>
                </div>

                {/* Questions */}
                <div>
                  {category.items.map((item, itemIndex) => (
                    <FAQAccordion key={itemIndex} {...item} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border-2 border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Masih punya pertanyaan lain?
            </h3>
            <p className="text-gray-600 mb-6">
              Tim kami siap membantu menjawab pertanyaan spesifik Anda.
              Hubungi kami untuk konsultasi gratis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-600/30 font-semibold">
                Hubungi via WhatsApp
              </button>
              <button className="px-8 py-4 bg-white text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-semibold border-2 border-gray-200">
                Email Kami
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
