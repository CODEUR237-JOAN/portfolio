import React, { useState } from 'react';
import './Contact.css';
import { Phone, Mail, MapPin, MessageCircle, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    const formData = new FormData(e.target);
    // Remplacez par votre clé d'accès Web3Forms
    formData.append("access_key", "0143b29b-0e67-4978-b2c1-a95169bcc967");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        e.target.reset();
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        console.error("Erreur:", data);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error("Erreur fetch:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="contact-wrapper">
          
          {/* LEFT SIDE: Info */}
          <div className="contact-left" data-aos="fade-right">
            <div className="contact-header">
              <h2 className="contact-title">
                {t('contact', 'titleWork')} <span>{t('contact', 'titleTogether')}</span>
              </h2>
              <p className="contact-desc">{t('contact', 'desc')}</p>
            </div>
            
            <div className="contact-info-modern">
              <div className="info-card">
                <div className="icon-box"><Phone size={24} /></div>
                <div className="info-content">
                  <span className="label">{t('contact', 'phoneLabel')}</span>
                  <span className="value">+237 657 715 898 <br/> +237 654 217 409</span>
                </div>
              </div>
              
              <div className="info-card">
                <div className="icon-box"><Mail size={24} /></div>
                <div className="info-content">
                  <span className="label">{t('contact', 'emailLabel')}</span>
                  <a href="mailto:joanfreeddonfmomeufo@gmail.com" className="value hover-link">joanfreeddonfmomeufo@gmail.com</a>
                </div>
              </div>

              <div className="info-card">
                <div className="icon-box"><MapPin size={24} /></div>
                <div className="info-content">
                  <span className="label">{t('contact', 'addressLabel')}</span>
                  <span className="value">Nkolmesseng, Cameroun</span>
                </div>
              </div>
            </div>

            <a href="https://wa.me/237657715898" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <MessageCircle size={20} /> Discuter sur WhatsApp
            </a>
          </div>

          {/* RIGHT SIDE: Form */}
          <div className="contact-right" data-aos="fade-left" data-aos-delay="200">
            <div className="form-card">
              <div className="form-header">
                <h3>{t('contact', 'formTitle')}</h3>
                <p>{t('contact', 'formSubtitle')}</p>
              </div>
              
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>{t('contact', 'nameInput')}</label>
                    <input type="text" name="name" placeholder={t('contact', 'namePlaceholder')} required />
                  </div>
                  <div className="form-group">
                    <label>{t('contact', 'emailInput')}</label>
                    <input type="email" name="email" placeholder={t('contact', 'emailPlaceholder')} required />
                  </div>
                </div>
                
                <div className="form-group">
                  <label>{t('contact', 'subjectInput')}</label>
                  <input type="text" name="subject" placeholder={t('contact', 'subjectPlaceholder')} required />
                </div>

                <div className="form-group">
                  <label>{t('contact', 'messageInput')}</label>
                  <textarea name="message" placeholder={t('contact', 'messagePlaceholder')} rows="4" required></textarea>
                </div>

                <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
                  <span style={{ display: isSubmitting ? 'none' : 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    {t('contact', 'sendBtn')} <Send size={18} />
                  </span>
                  <span style={{ display: isSubmitting ? 'block' : 'none' }}>
                    Envoi en cours...
                  </span>
                </button>
                {submitStatus === 'success' && <p style={{ color: '#25D366', marginTop: '10px', textAlign: 'center' }}>Message envoyé avec succès !</p>}
                {submitStatus === 'error' && <p style={{ color: '#ff4d4f', marginTop: '10px', textAlign: 'center' }}>Une erreur s'est produite. Veuillez réessayer.</p>}
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
