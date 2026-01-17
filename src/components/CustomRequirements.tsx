import { Building2, Users, Zap, Shield, Headphones, Settings } from 'lucide-react';

const requirements = [
  {
    icon: Building2,
    title: 'Multi Cabang',
    description: 'Kelola beberapa cabang apotek dalam satu sistem terpusat dengan sinkronisasi real-time',
    color: 'blue'
  },
  {
    icon: Users,
    title: 'Multi User & Role',
    description: 'Atur hak akses berbeda untuk kasir, apoteker, manager, dan owner dengan fleksibel',
    color: 'green'
  },
  {
    icon: Zap,
    title: 'Integrasi Sistem',
    description: 'Integrasikan dengan ERP, accounting software, atau sistem yang sudah Anda gunakan',
    color: 'purple'
  },
  {
    icon: Shield,
    title: 'Keamanan Data',
    description: 'Enkripsi data, backup otomatis, dan disaster recovery untuk melindungi data bisnis Anda',
    color: 'red'
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    description: 'Tim support khusus yang siap membantu Anda kapan saja dengan SLA guarantee',
    color: 'orange'
  },
  {
    icon: Settings,
    title: 'Custom Features',
    description: 'Fitur khusus yang dikembangkan sesuai dengan workflow dan kebutuhan bisnis Anda',
    color: 'indigo'
  }
];

const colorClasses = {
  blue: {
    bg: 'bg-blue-100',
    text: 'text-blue-600',
    border: 'border-blue-200',
    hover: 'hover:border-blue-400'
  },
  green: {
    bg: 'bg-green-100',
    text: 'text-green-600',
    border: 'border-green-200',
    hover: 'hover:border-green-400'
  },
  purple: {
    bg: 'bg-purple-100',
    text: 'text-purple-600',
    border: 'border-purple-200',
    hover: 'hover:border-purple-400'
  },
  red: {
    bg: 'bg-red-100',
    text: 'text-red-600',
    border: 'border-red-200',
    hover: 'hover:border-red-400'
  },
  orange: {
    bg: 'bg-orange-100',
    text: 'text-orange-600',
    border: 'border-orange-200',
    hover: 'hover:border-orange-400'
  },
  indigo: {
    bg: 'bg-indigo-100',
    text: 'text-indigo-600',
    border: 'border-indigo-200',
    hover: 'hover:border-indigo-400'
  }
};

export function CustomRequirements() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
            Kebutuhan Khusus
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Solusi untuk Kebutuhan Spesifik Apotek Anda
          </h2>
          <p className="text-lg text-gray-600">
            Setiap apotek memiliki kebutuhan yang berbeda. Kami menyediakan solusi custom
            yang dapat disesuaikan dengan workflow dan proses bisnis Anda.
          </p>
        </div>

        {/* Requirements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {requirements.map((req, index) => {
            const Icon = req.icon;
            const colors = colorClasses[req.color as keyof typeof colorClasses];

            return (
              <div
                key={index}
                className={`group p-6 rounded-2xl border-2 ${colors.border} ${colors.hover} transition-all hover:shadow-xl bg-white`}
              >
                <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-6 h-6 ${colors.text}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {req.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {req.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 border-2 border-green-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Punya kebutuhan khusus lainnya?
            </h3>
            <p className="text-gray-600 mb-6">
              Diskusikan kebutuhan apotek Anda dengan tim kami.
              Kami akan bantu carikan solusi terbaik untuk bisnis Anda.
            </p>
            <button className="px-8 py-4 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all hover:shadow-lg hover:shadow-green-600/30 font-semibold">
              Hubungi Tim Kami
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
