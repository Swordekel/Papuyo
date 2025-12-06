import { motion } from 'motion/react';
import { ArrowDown, Sparkles } from 'lucide-react';

export function Hero() {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOrder = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSfZKbMRu6D3JuL4R5Ow7BJYw-JvEPlOjoNrskWVqtochRnPqQ/viewform', '_blank');
  };

  return (
    <section id="home" className="relative pt-20 min-h-screen flex items-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-orange-200/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-40 right-20 w-48 h-48 bg-pink-200/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 left-1/4 w-40 h-40 bg-yellow-200/30 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-pink-100 px-6 py-2 rounded-full mb-6"
            >
              <Sparkles className="text-orange-500" size={20} />
              <span className="text-sm text-orange-700">Healthy & Delicious</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-3xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-orange-600 via-pink-600 to-orange-600 bg-clip-text text-transparent"
            >
              Dessert Sehat yang Memanjakan Lidah
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="text-lg md:text-xl text-gray-600 mb-8"
            >
              Dessert rumahan yang sehat, unik namun tetap mementingkan cita rasa.
              <br />
              Dibuat dengan pepaya segar dan pemanis alami.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(249, 115, 22, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToProducts}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-full transition-all shadow-lg"
              >
                Lihat Produk Kami
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleOrder}
                className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 px-8 py-4 rounded-full transition-all"
              >
                Hubungi Kami
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-16"
          >
            <ArrowDown className="text-orange-500" size={32} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}