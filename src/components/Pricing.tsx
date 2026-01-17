import { Check, ChevronRight } from 'lucide-react';
import { getAutomaticDownloadLink, TRIAL_LINK, DEMO_LINK } from '../config/release';

const plans = [
  {
    name: 'Basic',
    price: '399.999',
    description: 'Untuk apotek kecil-menengah yang butuh fitur lengkap.',
    features: [
      '1 Lisensi Komputer',
      'POS & Kasir Lengkap',
      'Manajemen Inventori',
      'Dashboard Analitik',
      'Laporan Lengkap (Excel/PDF)',
      'Mode Offline',
      'Multi-user Management',
      'Pembaruan Fitur Inti*',
    ],
    popular: true
  },
];

export function Pricing() {
  const handleDownload = () => {
    window.open(getAutomaticDownloadLink(), '_blank');
  };

  const handleTrial = () => {
    window.open(TRIAL_LINK, '_blank');
  };

  const handleDemo = () => {
    window.open(DEMO_LINK, '_blank');
  };

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            Harga Transparan
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Lisensi Sekali Bayar, Biaya Terkendali
          </h2>
          <p className="text-lg text-gray-600">
            Tidak ada biaya tersembunyi, tidak ada langganan bulanan.
            Lisensi perpetual untuk penggunaan jangka panjang.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-3xl border-2 transition-all ${
                plan.popular
                  ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-white shadow-2xl scale-105'
                  : 'border-gray-200 bg-white hover:border-blue-200 hover:shadow-xl'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-blue-600 to-green-500 text-white text-sm font-semibold rounded-full">
                  Paling Populer
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                {plan.price === 'Custom' ? (
                  <div className="text-4xl font-bold text-gray-900">
                    Hubungi Kami
                  </div>
                ) : (
                  <>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-gray-900">
                        Rp {plan.price}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      Lisensi perpetual, tanpa biaya bulanan
                    </div>
                  </>
                )}
              </div>

              <button
                onClick={handleDownload}
                className={`w-full py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 group mb-8 ${
                  plan.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
              >
                {plan.price === 'Custom' ? 'Hubungi Sales' : 'Coba Medistok Sekarang'}
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="space-y-4">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      plan.popular ? 'bg-blue-600' : 'bg-green-500'
                    }`}>
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 md:p-12 border-2 border-blue-100">
            <div className="text-center space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                Masih ragu? Coba dulu, baru putuskan!
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Dapatkan akses trial 14 hari dengan fitur yang tersedia.
                Tidak perlu kartu kredit, tidak ada komitmen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleTrial}
                  className="px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-600/30 font-semibold"
                >
                  Mulai Trial Gratis
                </button>
                <button
                  onClick={handleDemo}
                  className="px-8 py-4 bg-white text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-semibold border-2 border-gray-200"
                >
                  Jadwalkan Demo
                </button>
              </div>
              <div className="flex flex-wrap justify-center gap-8 pt-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Tidak Perlu Kartu Kredit</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Setup dalam 1 Hari</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Batal Kapan Saja</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 max-w-4xl mx-auto text-center">
          <p className="text-sm text-gray-500">
            *Pembaruan untuk fitur inti dan perbaikan bug selama kebijakan pembaruan berlaku.
            Cakupan dan kebijakan pembaruan dapat berkembang seiring waktu.
          </p>
        </div>
      </div>
    </section>
  );
}
