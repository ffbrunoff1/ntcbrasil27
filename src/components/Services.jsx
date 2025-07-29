import { motion } from 'framer-motion';
import { Target, ShieldCheck, Leaf } from 'lucide-react';

export default function Services() {
  const pillars = [
    {
      icon: Target,
      title: 'Planejamento e Inovação',
      description:
        'Cada projeto começa com um planejamento meticuloso, onde integramos as mais recentes tecnologias e abordagens inovadoras para garantir eficiência e precisão.',
    },
    {
      icon: ShieldCheck,
      title: 'Execução Confiável',
      description:
        'Nossa reputação é construída sobre a confiança. Cumprimos prazos e orçamentos com uma execução impecável, gerenciada por profissionais experientes e dedicados.',
    },
    {
      icon: Leaf,
      title: 'Sustentabilidade e Futuro',
      description:
        'Comprometemo-nos com práticas de construção sustentáveis, utilizando materiais ecológicos e métodos que minimizam o impacto ambiental, construindo para o futuro.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="services" className="py-20 md:py-32 bg-background-light">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
            Nossos Pilares Fundamentais
          </h2>
          <p className="text-lg text-text-dark/80 max-w-2xl mx-auto">
            A base do nosso sucesso e da satisfação dos nossos clientes está em
            três pilares essenciais que guiam cada projeto.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-secondary p-8 rounded-2xl shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              <div className="bg-primary/10 text-primary w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <pillar.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-text-dark mb-3">
                {pillar.title}
              </h3>
              <p className="text-text-dark/80 leading-relaxed flex-grow">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
