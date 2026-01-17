import { ImageWithFallback } from './figma/ImageWithFallback';
import { ShoppingCart, Package, BarChart3, FileText } from 'lucide-react';

const showcaseItems = [
  {
    icon: ShoppingCart,
    title: 'Point of Sale (POS)',
    description: 'Proses transaksi cepat dengan barcode scanner. Interface kasir yang mudah dan intuitif.',
    color: 'bg-blue-500'
  },
  {
    icon: Package,
    title: 'Manajemen Inventori',
    description: 'Pantau stok real-time, notifikasi stok menipis, dan kelola expired date dengan mudah.',
    color: 'bg-green-500'
  },
  {
    icon: BarChart3,
    title: 'Dashboard Analitik',
    description: 'Visualisasi data penjualan, produk terlaris, dan proyeksi stok dalam satu dashboard.',
    color: 'bg-purple-500'
  },
  {
    icon: FileText,
    title: 'Laporan Lengkap',
    description: 'Generate laporan harian, bulanan, dan tahunan dengan satu klik. Export ke Excel/PDF.',
    color: 'bg-orange-500'
  }
];

export function ProductShowcase() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
            Produk
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Interface Modern yang Memudahkan Pekerjaan
          </h2>
          <p className="text-lg text-gray-600">
            Screenshot produk nyata dari Medistok. Lihat bagaimana aplikasi kami
            dirancang untuk produktivitas maksimal.
          </p>
        </div>

        {/* Main Product Image */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="relative bg-white rounded-3xl shadow-2xl p-4 md:p-8 border border-gray-200">
            <ImageWithFallback
              src="kasir.png"
              alt="Medistok Workspace"
              className="w-full h-auto rounded-3xl"
            />
            {/* Feature Badges */}
            <div className="absolute top-8 right-8 space-y-3">
            </div>
          </div>
        </div>

        {/* Feature Modules Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {showcaseItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl border-2 border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all"
              >
                <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Pharmacy Image Section */}
        <div className="mt-16 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1680551285554-d047f69cc7ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjeSUyMGNvdW50ZXIlMjBtb2Rlcm58ZW58MXx8fHwxNzY4NTU3Mjc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Apotek Modern"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Digunakan oleh Apotek di Indonesia
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Dari apotek tradisional hingga modern, Medistok membantu
                meningkatkan efisiensi operasional dan memberikan pelayanan terbaik kepada pelanggan.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Setup dalam 1 Hari</div>
                    <div className="text-gray-600 text-sm">Instalasi cepat, langsung bisa digunakan</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  {/* <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div> */}
                  {/* <div>
                    <div className="font-semibold text-gray-900">Support 24/7</div>
                    <div className="text-gray-600 text-sm">Tim kami siap membantu kapan saja</div>
                  </div> */}
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Pembaruan Tersedia</div>
                    <div className="text-gray-600 text-sm">Pembaruan fitur inti sesuai kebijakan saat ini</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
