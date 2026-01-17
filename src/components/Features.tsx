import { WifiOff, Wallet, Zap, Shield, TrendingUp, Users } from 'lucide-react';

const features = [
  {
    icon: WifiOff,
    title: 'Tetap Berjalan Tanpa Internet',
    description: 'Transaksi dan manajemen stok terus berjalan lancar meski koneksi internet terputus. Data otomatis sinkronisasi saat online.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Wallet,
    title: 'Sekali Bayar, Tanpa Langganan',
    description: 'Model lisensi sekali bayar untuk penggunaan jangka panjang. Tidak ada biaya bulanan atau tahunan yang membebani operasional apotek Anda.',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Zap,
    title: 'Ringan & Cepat',
    description: 'Dirancang untuk berjalan mulus di komputer spesifikasi rendah. Transaksi lebih cepat, antrian lebih singkat.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Shield,
    title: 'Data Tersimpan Lokal',
    description: 'Data apotek Anda disimpan di perangkat lokal, tidak di cloud. Dapat diakses kapan saja tanpa koneksi internet.',
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: TrendingUp,
    title: 'Laporan & Analitik Real-time',
    description: 'Pantau performa apotek dengan dashboard intuitif. Laporan penjualan, stok, dan keuangan dalam satu tampilan.',
    color: 'from-cyan-500 to-cyan-600'
  },
  {
    icon: Users,
    title: 'Mudah Digunakan',
    description: 'Interface modern dan intuitif. Karyawan baru bisa langsung produktif tanpa training berhari-hari.',
    color: 'from-pink-500 to-pink-600'
  }
];

export function Features() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            Fitur Unggulan
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Semua yang Apotek Anda Butuhkan
          </h2>
          <p className="text-lg text-gray-600">
            Solusi lengkap untuk mempermudah transaksi harian, manajemen stok,
            dan pengembangan bisnis apotek Anda.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-white rounded-2xl border-2 border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        {/* <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Ingin tahu lebih detail? Lihat semua fitur lengkapnya
          </p>
          <button className="px-8 py-4 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors font-semibold">
            Lihat Semua Fitur
          </button>
        </div> */}
      </div>
    </section>
  );
}
