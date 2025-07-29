import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-background-light pt-24 md:pt-0"
    >
      <div className="container mx-auto px-6 z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-dark leading-tight mb-4"
          >
            Construindo o Futuro com{' '}
            <span className="text-gradient">Solidez e Confiança</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-text-dark/80 max-w-2xl mx-auto mb-10"
          >
            NTC Brasil é uma empresa comprometida com a excelência na construção
            civil, oferecendo soluções personalizadas, confiáveis e
            sustentáveis.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <a
              href="#contact"
              className="w-full sm:w-auto flex items-center justify-center bg-primary text-secondary px-8 py-4 rounded-full font-bold text-lg hover:bg-accent transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <span>Vamos Construir Juntos</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#about"
              className="w-full sm:w-auto bg-secondary text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-all duration-300 border-2 border-primary"
            >
              Saiba Mais
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent" />

      <motion.div
        className="absolute top-1/4 -left-16 h-32 w-32 bg-primary/20 rounded-full filter blur-2xl"
        animate={{
          x: [0, 20, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-16 h-40 w-40 bg-accent/10 rounded-full filter blur-3xl"
        animate={{
          x: [0, -20, 0],
          y: [0, 20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse',
          delay: 2,
        }}
      />
    </section>
  );
}
