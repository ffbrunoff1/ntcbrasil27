import { motion } from 'framer-motion';
import { Building, Users, CheckCircle } from 'lucide-react';

export default function About() {
  const imageUrl =
    'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/construction-site-worker.jpg';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, when: 'beforeChildren' },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: [0.6, 0.01, -0.05, 0.95] },
    },
  };

  const stats = [
    { icon: Building, label: 'Projetos Inovadores' },
    { icon: Users, label: 'Clientes Satisfeitos' },
    { icon: CheckCircle, label: 'Qualidade Garantida' },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={textVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
              Transformando Projetos em{' '}
              <span className="text-gradient">Realidade</span>
            </h2>
            <p className="text-text-dark/80 mb-6 leading-relaxed">
              Na NTC Brasil, nossa paixão é construir. Somos uma empresa
              dedicada a entregar projetos de construção civil com a máxima
              excelência, combinando inovação, confiabilidade e práticas
              sustentáveis. Cada obra é um compromisso com a qualidade e a
              satisfação do cliente.
            </p>
            <p className="text-text-dark/80 mb-8 leading-relaxed">
              Nossa equipe trabalha de forma integrada para garantir que cada
              detalhe, do planejamento à entrega, supere as expectativas.
              Acreditamos que construir é mais do que erguer estruturas; é criar
              espaços que inspiram e perduram.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="h-10 w-10 mx-auto text-primary mb-2" />
                  <p className="font-semibold text-text-dark">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={imageVariants}
            className="relative h-96 md:h-full w-full"
          >
            <motion.img
              src={imageUrl}
              alt="Equipe de construção da NTC Brasil em uma obra"
              className="w-full h-full object-cover rounded-2xl shadow-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="absolute -bottom-4 -right-4 w-full h-full border-4 border-primary rounded-2xl -z-10"
              initial={{ x: 0, y: 0 }}
              whileInView={{ x: 16, y: 16 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
