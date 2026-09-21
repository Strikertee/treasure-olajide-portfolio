import { useState, type FormEvent, type ChangeEvent } from 'react';
import { personalInfo } from '../data/personal.ts';
import Button from '../components/Button.tsx';
import Tag from '../components/Tag.tsx';
import './Contact.css';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type FormStatus = 'idle' | 'submitting' | 'success';

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    setTimeout(() => {
      const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
      )}`;
      window.location.href = mailtoLink;
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <div className="container">
        <header className="section-header">
          <h2 id="contact-title" className="section-title display-md">
            {personalInfo.contact.heading}
          </h2>
          <p className="section-subtitle">
            {personalInfo.contact.subheading}
          </p>
        </header>

        <div className="contact-content">
          <div className="contact-links">
            <Button variant="primary" size="lg" className="contact-btn-primary">
              Send me a message
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </Button>

            <div className="contact-methods">
              <a href={`tel:${personalInfo.phone}`} className="contact-method">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>{personalInfo.phone}</span>
                <Tag variant="secondary" size="xs">WhatsApp</Tag>
              </a>
              <a href={`mailto:${personalInfo.email}`} className="contact-method">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>treasureolajide402@gmail.com</span>
              </a>
            </div>

            <div className="social-links">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.305-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href={personalInfo.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="TikTok"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12.545,10.239v5.891c0,0.462-0.121,0.794-0.457,0.937c-0.278,0.117-0.766,0.117-1.192,0c-0.426-0.174-0.597-0.651-0.426-1.042v-4.023h-1.792c-0.485,0-0.797-0.43-0.626-0.861c0.136-0.344,0.562-0.501,0.937-0.377l0.618,0.2c0.117,0.029,0.266,0.029,0.443,0c0.358-0.087,0.591-0.396,0.531-0.806c-0.037-0.279-0.159-0.588-0.409-0.861c-0.492-0.54-1.288-0.597-1.694-0.117c-0.548,0.651-0.591,1.534-0.216,2.184c0.562,0.942,1.823,1.277,2.514,1.131c0.585-0.117,1.294-0.217,1.694,0.117c0.454,0.415,0.683,1.035,0.531,1.595c-0.251,0.914-1.242,1.102-1.849,0.597c-0.635-0.562-0.784-1.462-0.655-2.154v-6.502c0-0.485,0.228-0.914,0.683-1.074c0.311-0.117,0.784-0.117,1.16,0c0.198,0.058,0.37,0.117,0.597,0.174C12.191,8.939,12.545,9.455,12.545,10.239z M18.46,5.003c-0.117-0.292-0.263-0.649-0.457-0.894c-0.336-0.43-0.823-0.487-1.277-0.22c-0.586,0.377-0.901,1.03-0.784,1.604c0.136,0.75,0.884,1.091,1.529,0.806c0.465-0.206,0.632-0.711,0.488-1.219c-0.118-0.433-0.344-0.892-0.683-1.074C18.491,5.091,18.46,5.048,18.46,5.003z M5.394,12.517c0.252,0.233,0.591,0.377,0.965,0.377c0.485,0,0.738-0.202,0.827-0.504c0.128-0.423-0.057-0.908-0.403-1.144c-0.215-0.146-0.582-0.178-0.861,0.029c-0.426,0.365-0.67,0.867-0.715,1.335C5.272,12.187,5.315,12.348,5.394,12.517z M12.545,1.5c-6.094,0-11.045,4.951-11.045,11.045s4.951,11.045,11.045,11.045s11.045-4.951,11.045-11.045S18.639,1.5,12.545,1.5z"/>
                </svg>
              </a>
            </div>

            <p className="form-note">{personalInfo.contact.formNote}</p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                disabled={status === 'submitting'}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                disabled={status === 'submitting'}
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-input"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="What's this about?"
                disabled={status === 'submitting'}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your project, idea, or opportunity..."
                rows={6}
                disabled={status === 'submitting'}
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
              loading={status === 'submitting'}
              className="form-submit"
            >
              {status === 'success' ? 'Message Sent!' : 'Send Message'}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </Button>

            {status === 'success' && (
              <p className="form-success" role="status" aria-live="polite">
                ✓ Opening your email client...
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}