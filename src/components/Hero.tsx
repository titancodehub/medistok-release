import { WifiOff, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { getAutomaticDownloadLink, DEMO_LINK } from '../config/release';

export function Hero() {
  const handleDownload = async () => {
    const downloadLink = await getAutomaticDownloadLink();
    window.open(downloadLink, '_blank');
  };

  const handleDemo = () => {
    void 0;
    // window.open(DEMO_LINK, '_blank');
  };
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-12 h-12 flex items-center justify-center overflow-hidden">
           <img src="logo.png" alt="Medistok Logo" className="w-40 h-40" />
          </div>
          <span className="text-2xl font-bold text-gray-900">Medistok</span>
        </div>
        {/* <button className="hidden md:block px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Masuk
        </button> */}
      </nav>

      {/* Hero Content */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              <WifiOff className="w-4 h-4" />
              <span>Offline-First Technology</span>
            </div> */}

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Kelola Apotek Lebih Mudah,{' '}
              <span className="text-blue-600">Bahkan Tanpa Internet</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Solusi manajemen apotek modern untuk apotek kecil hingga menengah.
              Tetap produktif meski internet mati. Model lisensi sekali bayar, tanpa biaya bulanan.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleDownload}
                className="px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-600/30 font-semibold flex items-center justify-center gap-2 group"
              >
                Coba Medistok Sekarang
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              {/* <button
                onClick={handleDemo}
                className="px-8 py-4 bg-white text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-semibold border-2 border-gray-200"
              >
                Lihat Demo
              </button> */}
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-xl">✓</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Digunakan</div>
                  <div className="text-sm text-gray-600">Apotek Indonesia</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-xl">💯</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Sekali Bayar</div>
                  <div className="text-sm text-gray-600">Tanpa Langganan</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-green-500/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-white rounded-2xl shadow-2xl p-4 border border-gray-200">
              <ImageWithFallback
                src="pharmacy.png"
                alt="Medistok Dashboard"
                className="w-full h-auto rounded-xl"
              />
              {/* Offline Indicator Overlay */}
              <div className="absolute top-8 left-8 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="font-semibold text-sm">Offline Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
