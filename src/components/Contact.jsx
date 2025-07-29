import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Loader,
  CheckCircle,
  AlertTriangle,
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(null);

    try {
      const response = await fetch('/.netlify/functions/send-contact-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || 'Ocorreu uma falha ao enviar a mensagem.'
        );
      }

      setSubmitSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setSubmitError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Phone, text: '+55 44 99104-0774', href: 'tel:+5544991040774' },
    {
      icon: Mail,
      text: 'ffbrunoff@yahoo.com.br',
      href: 'mailto:ffbrunoff@yahoo.com.br',
    },
    { icon: MapPin, text: 'Padre Lebret 801, G05 Bloco 03', href: '#' },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
            Vamos <span className="text-gradient">Construir Juntos</span>?
          </h2>
          <p className="text-lg text-text-dark/80 max-w-2xl mx-auto">
            Estamos prontos para ouvir sobre seu projeto. Entre em contato e
            vamos transformar suas ideias em realidade.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-text-dark mb-6">
              Informações de Contato
            </h3>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center group"
                >
                  <div className="bg-primary/10 text-primary w-12 h-12 rounded-lg flex items-center justify-center mr-4 transition-all duration-300 group-hover:bg-primary group-hover:text-secondary">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <span className="text-text-dark/90 text-lg group-hover:text-primary transition-colors duration-300">
                    {item.text}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Seu nome completo"
                required
                className="w-full p-4 bg-background-light rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none transition-shadow"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Seu melhor e-mail"
                required
                className="w-full p-4 bg-background-light rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none transition-shadow"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Seu telefone (opcional)"
                className="w-full p-4 bg-background-light rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none transition-shadow"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Conte-nos sobre seu projeto..."
                required
                rows="5"
                className="w-full p-4 bg-background-light rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none transition-shadow"
              ></textarea>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center bg-primary text-secondary px-8 py-4 rounded-full font-bold text-lg hover:bg-accent transition-all duration-300 transform hover:scale-105 shadow-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <Loader className="animate-spin mr-2" />
                ) : (
                  <Send className="mr-2" />
                )}
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </button>

              <AnimatePresence>
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="flex items-center p-4 mt-4 text-green-800 bg-green-100 rounded-lg"
                  >
                    <CheckCircle className="mr-3" /> Mensagem enviada com
                    sucesso! Entraremos em contato em breve.
                  </motion.div>
                )}
                {submitError && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="flex items-center p-4 mt-4 text-red-800 bg-red-100 rounded-lg"
                  >
                    <AlertTriangle className="mr-3" /> Erro: {submitError}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
