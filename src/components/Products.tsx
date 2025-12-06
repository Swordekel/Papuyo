import { motion } from 'motion/react';
import { useState } from 'react';
import { ShoppingCart, Heart, Star } from 'lucide-react';
import productFresh from 'figma:asset/a4f0cc31e3e6e33b843e26ce8c5f4c83aad078a9.png';
import productChocolate from 'figma:asset/c9855e22d125398555ed3e1f6157038e5a4c0812.png';
import productStrawberry from 'figma:asset/e9f0600bce28e3f07501ed8d2bf4f6b5a4c7e5d9.png';

export function Products() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [likedProducts, setLikedProducts] = useState<Set<number>>(new Set());

  const handleOrder = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSfZKbMRu6D3JuL4R5Ow7BJYw-JvEPlOjoNrskWVqtochRnPqQ/viewform', '_blank');
  };

  const products = [
    {
      id: 1,
      name: 'Papuyo Fresh',
      description: 'Buah pepaya segar pilihan yang dipotong sempurna, siap dinikmati',
      price: 'Rp 18.000',
      rating: 4.8,
      image: productFresh,
      badge: 'Best Seller'
    },
    {
      id: 2,
      name: 'Papuyo Chocolate',
      description: 'Dessert cokelat premium dengan pepaya segar yang menyegarkan',
      price: 'Rp 15.000',
      rating: 4.9,
      image: productChocolate,
      badge: 'New'
    },
    {
      id: 3,
      name: 'Papuyo Strawberry',
      description: 'Perpaduan manis strawberry dan pepaya yang menyehatkan',
      price: 'Rp 18.000',
      rating: 4.7,
      image: productStrawberry,
      badge: 'Popular'
    },
  ];

  const toggleLike = (id: number) => {
    const newLiked = new Set(likedProducts);
    if (newLiked.has(id)) {
      newLiked.delete(id);
    } else {
      newLiked.add(id);
    }
    setLikedProducts(newLiked);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="products" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -right-20 w-64 h-64 border-2 border-orange-200/30 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 -left-20 w-64 h-64 border-2 border-pink-200/30 rounded-full"
        />
      </div>

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
            ✨ Produk Kami ✨
          </motion.span>
          <h2 className="mb-4 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
            Menu Spesial Papuyo
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Pilihan dessert sehat dengan bahan-bahan premium dan pepaya segar pilihan
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              onHoverStart={() => setHoveredId(product.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="group relative"
            >
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                {/* Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                    className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs shadow-lg"
                  >
                    {product.badge}
                  </motion.span>
                </div>

                {/* Like Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => toggleLike(product.id)}
                  className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg"
                >
                  <Heart
                    size={20}
                    className={`transition-colors ${
                      likedProducts.has(product.id)
                        ? 'fill-red-500 text-red-500'
                        : 'text-gray-400'
                    }`}
                  />
                </motion.button>

                {/* Product Image */}
                <div className="relative aspect-square bg-gradient-to-br from-orange-50 to-pink-50 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay on Hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredId === product.id ? 1 : 0 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end justify-center pb-6"
                  >
                    <motion.button
                      initial={{ y: 20 }}
                      animate={{ y: hoveredId === product.id ? 0 : 20 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleOrder}
                      className="bg-white text-orange-600 px-6 py-2 rounded-full flex items-center gap-2 shadow-lg"
                    >
                      <ShoppingCart size={18} />
                      Quick Order
                    </motion.button>
                  </motion.div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-gray-800">{product.name}</h3>
                    <div className="flex items-center gap-1">
                      <Star className="fill-yellow-400 text-yellow-400" size={16} />
                      <span className="text-sm text-gray-600">{product.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-orange-600">{product.price}</span>
                    <motion.button
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleOrder}
                      className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full flex items-center gap-2 shadow-md hover:shadow-lg transition-shadow"
                    >
                      <ShoppingCart size={18} />
                      Pesan
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 px-8 py-3 rounded-full transition-all"
            onClick={handleOrder}
          >
            Lihat Semua Produk
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}