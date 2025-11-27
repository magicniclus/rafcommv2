'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, User, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { submitFormToFirebase, validateFormData, FormData as CustomFormData } from '@/lib/firebase-service';
import FormLoader from '@/components/FormLoader';
import { useRouter } from 'next/navigation';

export default function ContactClient() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    motif: '',
    rgpd: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loaderStage, setLoaderStage] = useState<'idle' | 'sending' | 'success' | 'redirecting'>('idle');
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Validation en cours

    // Validation des données
    if (!validateFormData(formData)) {
      alert('Veuillez remplir tous les champs obligatoires.');
      setIsSubmitting(false);
      return;
    }

    setLoaderStage('sending');

    try {
      const docId = await submitFormToFirebase(formData);
      console.log('Form submitted successfully:', docId);
      
      setLoaderStage('success');
      
      // Redirection après succès
      setTimeout(() => {
        setLoaderStage('redirecting');
        setTimeout(() => {
          router.push('/merci');
        }, 500);
      }, 1500);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Une erreur est survenue lors de l\'envoi. Veuillez réessayer.');
      setIsSubmitting(false);
    }
  };

  const contactInfo = {
    address: "200 rue de la Croix Nivert\nParis 75015",
    phone: "07 83 49 01 36",
    email: "contact@rafcomm.fr",
    hours: "Lundi - Samedi: 8h00 - 18h00",
    mapEmbedUrl: "https://maps.google.com/maps?q=200+rue+de+la+Croix+Nivert,+Paris+75015&t=&z=15&ie=UTF8&iwloc=&output=embed"
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-20 overflow-hidden">
        {/* Optional background image overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Contactez-nous
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Un projet de travaux fibre optique ? Notre équipe RAFCOM est là pour vous accompagner dans tous vos besoins en télécommunications et fibre optique.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Envoyez-nous un message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="prenom" className="block text-sm font-semibold text-gray-700 mb-2">
                        Prénom *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          id="prenom"
                          name="prenom"
                          value={formData.prenom}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                          placeholder="Votre prénom"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="nom" className="block text-sm font-semibold text-gray-700 mb-2">
                        Nom *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          id="nom"
                          name="nom"
                          value={formData.nom}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                          placeholder="Votre nom"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                          placeholder="votre@email.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="telephone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Téléphone *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="tel"
                          id="telephone"
                          name="telephone"
                          value={formData.telephone}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                          placeholder="06 12 34 56 78"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="motif" className="block text-sm font-semibold text-gray-700 mb-2">
                      Type de projet *
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <select
                        id="motif"
                        name="motif"
                        value={formData.motif}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 appearance-none bg-white"
                      >
                        <option value="">Sélectionnez votre projet</option>
                        <option value="Travaux Fibre Optique">Travaux Fibre Optique</option>
                        <option value="Fourreau Bouché">Fourreau Bouché</option>
                        <option value="Détection Point de Blocage">Détection Point de Blocage</option>
                        <option value="Raccordement Fibre Complexe">Raccordement Fibre Complexe</option>
                        <option value="Urgence Fibre">Urgence Fibre</option>
                        <option value="Devis Général">Devis Général</option>
                        <option value="Autre">Autre</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="rgpd"
                      name="rgpd"
                      checked={formData.rgpd}
                      onChange={handleInputChange}
                      required
                      className="mt-1 h-4 w-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                    />
                    <label htmlFor="rgpd" className="text-sm text-gray-600">
                      J'accepte que mes données personnelles soient utilisées pour me recontacter dans le cadre de ma demande. *
                    </label>
                  </div>


                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                  >
                    {isSubmitting ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Envoyer ma demande</span>
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info & Map */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Contact Information */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Nos coordonnées</h3>
                
                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-gray-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Adresse</h4>
                      <p className="text-gray-600 leading-relaxed whitespace-pre-line">{contactInfo.address}</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-gray-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Téléphone</h4>
                      <a 
                        href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                        className="text-gray-600 hover:text-gray-800 transition-colors duration-200 font-medium"
                      >
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-gray-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <a 
                        href={`mailto:${contactInfo.email}`}
                        className="text-gray-600 hover:text-gray-800 transition-colors duration-200 font-medium"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Clock className="h-6 w-6 text-gray-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Horaires</h4>
                      <p className="text-gray-600 leading-relaxed whitespace-pre-line">{contactInfo.hours}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="h-96 rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src={contactInfo.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Besoin d'un devis rapide ?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Appelez-nous directement pour obtenir une estimation gratuite de vos travaux.
            </p>
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}>
                <Phone className="h-5 w-5 mr-2" />
                Appeler maintenant
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
      
      {/* Form Loader */}
      {loaderStage !== 'idle' && (
        <FormLoader 
          isVisible={true} 
          stage={loaderStage as 'sending' | 'success' | 'redirecting'}
        />
      )}
    </div>
  );
}
