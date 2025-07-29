import { motion } from 'framer-motion';

export default function Footer() {
  const logoUrl =
    'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1753758733417_0.png';

  const navLinks = [
    { name: 'Sobre Nós', href: '#about' },
    { name: 'Nossos Pilares', href: '#services' },
    { name: 'Contato', href: '#contact' },
  ];

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.footer
      className="bg-text-dark text-text-light"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <motion.div
            className="lg:col-span-2 md:col-span-3"
            variants={itemVariants}
          >
            <a href="#" aria-label="Página inicial da NTC Brasil">
              <img
                src={logoUrl}
                alt="Logo NTC Brasil"
                className="h-14 w-auto mb-4 bg-white p-2 rounded-md"
              />
            </a>
            <p className="max-w-sm text-text-light/70">
              Construindo o futuro com solidez e confiança. Soluções
              personalizadas, confiáveis e sustentáveis para o seu projeto.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-lg mb-4 text-secondary">Navegação</h4>
            <ul className="space-y-3">
              {navLinks.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-text-light/70 hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-lg mb-4 text-secondary">Contato</h4>
            <ul className="space-y-3 text-text-light/70">
              <li>+55 44 99104-0774</li>
              <li>ffbrunoff@yahoo.com.br</li>
              <li>Padre Lebret 801, G05 Bloco 03</li>
            </ul>
          </motion.div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-text-light/50">
          <p>
            &copy; {new Date().getFullYear()} NTC Brasil. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
