import { useState } from 'react';
import './Contact.css';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle, AlertCircle } from 'lucide-react';
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
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

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
        setSubmitStatus('error');
      }
    } catch {
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
                {t('contact', 'titleWork')} <span className="gradient-text">{t('contact', 'titleTogether')}</span>
              </h2>
              <p className="contact-desc">{t('contact', 'desc')}</p>
            </div>

            <div className="contact-info-modern">
              <div className="info-card">
                <div className="icon-box"><Phone size={22} /></div>
                <div className="info-content">
                  <span className="label">{t('contact', 'phoneLabel')}</span>
                  <span className="value">+237 657 715 898 <br /> +237 654 217 409</span>
                </div>
              </div>

              <div className="info-card">
                <div className="icon-box"><Mail size={22} /></div>
                <div className="info-content">
                  <span className="label">{t('contact', 'emailLabel')}</span>
                  <a href="mailto:joanfreeddonfmomeufo@gmail.com" className="value hover-link">joanfreeddonfmomeufo@gmail.com</a>
                </div>
              </div>

              <div className="info-card">
                <div className="icon-box"><MapPin size={22} /></div>
                <div className="info-content">
                  <span className="label">{t('contact', 'addressLabel')}</span>
                  <span className="value">Nkolmesseng, Cameroun 🇨🇲</span>
                </div>
              </div>
            </div>

            <a href="https://wa.me/237657715898" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <MessageCircle size={20} /> {t('contact', 'whatsappBtn')}
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
                    <label htmlFor="contact-name">{t('contact', 'nameInput')}</label>
                    <input type="text" id="contact-name" name="name" placeholder={t('contact', 'namePlaceholder')} required autoComplete="name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-email">{t('contact', 'emailInput')}</label>
                    <input type="email" id="contact-email" name="email" placeholder={t('contact', 'emailPlaceholder')} required autoComplete="email" />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-subject">{t('contact', 'subjectInput')}</label>
                  <input type="text" id="contact-subject" name="subject" placeholder={t('contact', 'subjectPlaceholder')} required />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message">{t('contact', 'messageInput')}</label>
                  <textarea id="contact-message" name="message" placeholder={t('contact', 'messagePlaceholder')} rows="4" required></textarea>
                </div>

                <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="btn-loading">
                      <span className="spinner" />
                      {t('contact', 'sendingBtn')}
                    </span>
                  ) : (
                    <span className="btn-content">
                      {t('contact', 'sendBtn')} <Send size={18} />
                    </span>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="form-status form-status--success" role="alert">
                    <CheckCircle size={18} />
                    {t('contact', 'successMsg')}
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="form-status form-status--error" role="alert">
                    <AlertCircle size={18} />
                    {t('contact', 'errorMsg')}
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
