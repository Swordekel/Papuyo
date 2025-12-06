import { motion } from 'motion/react';
import { Instagram, Phone, MessageCircle, MapPin, Clock } from 'lucide-react';

export function Contact() {
  const handleOrder = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSfZKbMRu6D3JuL4R5Ow7BJYw-JvEPlOjoNrskWVqtochRnPqQ/viewform', '_blank');
  };

  const contactMethods = [
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@pa_puyoo',
      href: 'https://instagram.com/pa_puyoo',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '0812-3286-9888',
      href: 'https://wa.me/6281232869888',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50',
    },
  ];

  const info = [
    {
      icon: MapPin,
      label: 'Lokasi',
      value: 'Jakarta, Indonesia',
    },
    {
      icon: Clock,
      label: 'Jam Operasional',
      value: 'Coming Soon',
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-white" />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-200/30 to-pink-200/30 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block text-orange-500 mb-4"
          >
            📞 Hubungi Kami 📞
          </motion.span>
          <h2 className="mb-4 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
            Mari Terhubung dengan Papuyo
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Punya pertanyaan atau ingin memesan? Kami siap membantu Anda kapan saja!
          </p>
        </motion.div>
        
        <div className="max-w-5xl mx-auto">
          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-3xl mx-auto">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.a
                  key={index}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${method.bgColor} rounded-2xl blur-xl opacity-50 group-hover:opacity-80 transition-opacity`} />
                  
                  <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                    <div className="flex flex-col items-center text-center gap-4">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className={`w-20 h-20 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center shadow-lg`}
                      >
                        <Icon className="text-white" size={36} />
                      </motion.div>
                      
                      <div>
                        <p className="text-gray-600 text-sm mb-1">{method.label}</p>
                        <p className="text-gray-800">{method.value}</p>
                      </div>

                      <motion.div
                        initial={{ width: 0 }}
                        whileHover={{ width: '100%' }}
                        className={`h-1 bg-gradient-to-r ${method.color} rounded-full`}
                      />
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto"
          >
            {info.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  className="bg-gradient-to-br from-orange-50 to-pink-50 p-6 rounded-2xl shadow-md"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <Icon className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">{item.label}</p>
                      <p className="text-gray-800">{item.value}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(249, 115, 22, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={handleOrder}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-4 rounded-full shadow-lg transition-all"
            >
              <span className="flex items-center gap-2">
                <Phone size={20} />
                Pesan Sekarang
              </span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
