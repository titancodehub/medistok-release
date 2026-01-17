import { Check, ChevronRight } from 'lucide-react';

export function CustomPlan() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
            Paket Custom
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Butuh Solusi yang Lebih Spesifik?
          </h2>
          <p className="text-lg text-gray-600">
            Kami menyediakan paket custom yang disesuaikan dengan kebutuhan bisnis apotek Anda.
            Dari skala kecil hingga jaringan apotek besar.
          </p>
        </div>

        {/* Custom Plan Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative p-8 md:p-12 rounded-3xl border-2 border-purple-200 bg-white shadow-2xl">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-semibold rounded-full">
              Enterprise & Custom
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Left: Description */}
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Paket Disesuaikan untuk Kebutuhan Anda
                </h3>
                <p className="text-gray-600">
                  Apakah Anda memiliki jaringan apotek atau butuh fitur khusus?
                  Kami siap membuat solusi yang tepat untuk bisnis Anda.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700">
                      Multi-cabang & Sinkronisasi Real-time
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700">
                      Integrasi dengan sistem existing (ERP, Accounting, dll)
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700">
                      Custom reporting & analytics sesuai kebutuhan bisnis
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700">
                      Training & onboarding khusus untuk tim Anda
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700">
                      Dedicated support & SLA guarantee
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700">
                      Lisensi multi-cabang sesuai kebutuhan
                    </span>
                  </div>
                </div>
              </div>

              {/* Right: CTA */}
              <div className="flex flex-col justify-center space-y-6">
                <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 border border-purple-100">
                  <div className="text-center space-y-4">
                    <div className="text-lg font-semibold text-gray-900">
                      Harga Khusus
                    </div>
                    <p className="text-gray-600 text-sm">
                      Disesuaikan dengan skala dan kebutuhan apotek Anda
                    </p>
                  </div>
                </div>

                <button className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all hover:shadow-lg hover:shadow-purple-600/30 font-semibold flex items-center justify-center gap-2 group">
                  Konsultasi Gratis
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="text-center text-sm text-gray-600">
                  <div className="flex items-center justify-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Konsultasi gratis tanpa komitmen</span>
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
