import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { useState } from 'react';

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Wijaya',
      role: 'Health Enthusiast',
      text: 'Papuyo adalah dessert favorit saya! Rasanya enak banget dan yang paling penting, sehat. Ga perlu merasa bersalah lagi makan dessert!',
      rating: 5,
      avatar: '👩‍💼',
    },
    {
      name: 'Budi Santoso',
      role: 'Fitness Coach',
      text: 'Saya rekomendasikan Papuyo ke semua klien saya. Dessert yang sempurna untuk diet sehat tanpa mengorbankan kelezatan.',
      rating: 5,
      avatar: '👨‍⚕️',
    },
    {
      name: 'Dina Permata',
      role: 'Food Blogger',
      text: 'Konsep pepaya sebagai bahan utama dessert itu genius! Rasanya unik, segar, dan pastinya sehat. Love it!',
      rating: 5,
      avatar: '👩‍🍳',
    },
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-pink-50 to-orange-50" />
      
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-300/20 to-pink-300/20 rounded-full blur-3xl"
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
            ⭐ Testimoni ⭐
          </motion.span>
          <h2 className="mb-4 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
            Kata Mereka Tentang Papuyo
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ribuan pelanggan telah merasakan kelezatan dan manfaat sehat dari dessert kami
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                onHoverStart={() => setActiveIndex(index)}
                className="relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br from-orange-200/50 to-pink-200/50 rounded-2xl blur-xl transition-opacity ${
                  activeIndex === index ? 'opacity-70' : 'opacity-0'
                }`} />
                
                <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  <motion.div
                    animate={activeIndex === index ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 0.6 }}
                  >
                    <Quote className="text-orange-300 mb-4" size={40} />
                  </motion.div>

                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + i * 0.1 }}
                      >
                        <Star className="fill-yellow-400 text-yellow-400" size={18} />
                      </motion.div>
                    ))}
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {testimonial.text}
                  </p>

                  <div className="flex items-center gap-4">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full flex items-center justify-center text-2xl shadow-lg"
                    >
                      {testimonial.avatar}
                    </motion.div>
                    <div>
                      <p className="text-gray-800">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
