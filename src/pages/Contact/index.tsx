import { useState } from 'react';
import type { FormEvent } from 'react';
import { CheckCircle2, Clock, Mail, MapPin, Phone, Send } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { SectionTitle } from '@/components/common/SectionTitle';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { TextArea } from '@/components/ui/TextArea';
import styles from './index.module.css';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const INITIAL: FormState = { name: '', email: '', subject: '', message: '' };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: FormState): Partial<Record<keyof FormState, string>> {
  const errors: Partial<Record<keyof FormState, string>> = {};
  if (!values.name.trim()) errors.name = 'Please share your name.';
  if (!values.email.trim()) errors.email = 'Please share your email.';
  else if (!EMAIL_RE.test(values.email)) errors.email = 'Enter a valid email address.';
  if (!values.subject.trim()) errors.subject = 'A short subject helps us route your inquiry.';
  if (!values.message.trim()) errors.message = 'Tell us a little about your project.';
  return errors;
}

export default function ContactPage() {
  const [values, setValues] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange =
    (field: keyof FormState) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((prev) => ({ ...prev, [field]: event.target.value }));
      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: undefined }));
      }
    };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const next = validate(values);
    if (Object.keys(next).length > 0) {
      setErrors(next);
      return;
    }
    setErrors({});
    setSubmitted(true);
    setValues(INITIAL);
  };

  return (
    <Container>
      <SectionTitle
        eyebrow="Get in touch"
        title="Tell us about your project"
        description="Whether you're planning a new pipeline, expanding a distribution network, or modernizing a station — we'd love to hear from you."
      />

      <div className={styles.grid}>
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          {submitted && (
            <div className={styles.success} role="status">
              <CheckCircle2 size={18} aria-hidden="true" />
              <span>Thanks — your message is on its way. We'll be in touch shortly.</span>
            </div>
          )}

          <div className={styles.row}>
            <Input
              label="Full name"
              value={values.name}
              onChange={handleChange('name')}
              error={errors.name}
              placeholder="Jane Doe"
              required
            />
            <Input
              label="Email address"
              type="email"
              value={values.email}
              onChange={handleChange('email')}
              error={errors.email}
              placeholder="jane@company.com"
              required
            />
          </div>

          <Input
            label="Subject"
            value={values.subject}
            onChange={handleChange('subject')}
            error={errors.subject}
            placeholder="Pipeline expansion inquiry"
            required
          />

          <TextArea
            label="Message"
            value={values.message}
            onChange={handleChange('message')}
            error={errors.message}
            placeholder="Briefly describe scope, location, and timing."
            required
          />

          <div className={styles.actions}>
            <Button type="submit" variant="accent" rightIcon={<Send size={16} />}>
              Send message
            </Button>
            <span className={styles.note}>We typically respond within one business day.</span>
          </div>
        </form>

        <aside className={styles.info}>
          <h3 className={styles.infoTitle}>Reach us directly</h3>
          <ul className={styles.infoList}>
            <li>
              <span className={styles.infoIcon}>
                <MapPin size={16} />
              </span>
              <div>
                <span className={styles.infoLabel}>Headquarters</span>
                <span className={styles.infoValue}>Baku, Azerbaijan</span>
              </div>
            </li>
            <li>
              <span className={styles.infoIcon}>
                <Mail size={16} />
              </span>
              <div>
                <span className={styles.infoLabel}>Email</span>
                <a href="mailto:info@energyservice.group" className={styles.infoLink}>
                  info@energyservice.group
                </a>
              </div>
            </li>
            <li>
              <span className={styles.infoIcon}>
                <Phone size={16} />
              </span>
              <div>
                <span className={styles.infoLabel}>Phone</span>
                <a href="tel:+994000000000" className={styles.infoLink}>
                  +994 00 000 00 00
                </a>
              </div>
            </li>
            <li>
              <span className={styles.infoIcon}>
                <Clock size={16} />
              </span>
              <div>
                <span className={styles.infoLabel}>Hours</span>
                <span className={styles.infoValue}>Mon — Fri · 09:00 — 18:00</span>
              </div>
            </li>
          </ul>
          <div className={styles.mapPlaceholder} role="img" aria-label="Location map placeholder">
            <span className={styles.mapPin}>
              <MapPin size={20} />
            </span>
            <span>Map preview</span>
          </div>
        </aside>
      </div>
    </Container>
  );
}
