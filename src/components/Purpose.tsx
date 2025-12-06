import { motion } from 'motion/react';
import { Heart, Leaf, Smile, Sparkles } from 'lucide-react';

export function Purpose() {
  const purposes = [
    {
      icon: Heart,
      text: 'Menyediakan dessert rumahan yang tentunya sehat, unik namun tetap mementingkan cita rasa.',
      color: 'from-red-500 to-pink-500',
      bgColor: 'from-red-50 to-pink-50',
    },
    {
      icon: Sparkles,
      text: 'Mengenalkan Buah Pepaya sebagai bahan utama iconic bisnis kami, yang Enak dan Modern.',
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'from-yellow-50 to-orange-50',
    },
    {
      icon: Leaf,
      text: 'Mendukung Gaya Hidup Sehat tanpa mengorbankan Cita Rasa.',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50',
    },
    {
      icon: Smile,
      text: 'Menghadirkan dessert manis rendah gula dengan pemanis alami (Stevia).',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="purpose" className="py-16 md:py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-orange-50/50 to-white" />
      
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-orange-200/20 to-pink-200/20 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block text-orange-500 mb-4"
          >
            💡 Misi Kami 💡
          </motion.span>
          <h2 className="mb-4 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
            Tujuan Papuyo
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Menghadirkan inovasi dessert sehat yang tidak hanya lezat, tapi juga memberikan nilai lebih untuk kesehatan Anda
          </p>
        </motion.div>
        
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {purposes.map((purpose, index) => {
              const Icon = purpose.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="relative group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${purpose.bgColor} rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity`} />
                  
                  <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                    <div className="flex items-start gap-6">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${purpose.color} rounded-2xl flex items-center justify-center shadow-lg`}
                      >
                        <Icon className="text-white" size={28} />
                      </motion.div>
                      
                      <div className="flex-1">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2, duration: 0.6 }}
                          className={`h-1 bg-gradient-to-r ${purpose.color} rounded-full mb-4`}
                        />
                        <p className="text-gray-700 leading-relaxed">{purpose.text}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto"
        >
          {[
            { number: '100%', label: 'Natural' },
            { number: '0%', label: 'Gula Tambahan' },
            { number: '500+', label: 'Pelanggan Puas' },
            { number: '4.9', label: 'Rating' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="text-center p-6 bg-white rounded-2xl shadow-lg"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                className="text-orange-600 mb-2"
              >
                {stat.number}
              </motion.div>
              <p className="text-gray-600 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
