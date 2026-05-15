import { useState } from 'react';
import type { FormEvent } from 'react';
import { CheckCircle2, Clock, Mail, MapPin, Phone, Send } from 'lucide-react';
import logo from '@/assets/logo.jpeg';
import { Container } from '@/components/common/Container';
import { Reveal } from '@/components/common/Reveal';
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

const MAP_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d739.0070349485517!2d49.73546776147718!3d40.52350718453514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDMxJzI0LjIiTiA0OcKwNDQnMDkuNCJF!5e0!3m2!1sen!2saz!4v1778764128086!5m2!1sen!2saz';

function validate(values: FormState): Partial<Record<keyof FormState, string>> {
  const errors: Partial<Record<keyof FormState, string>> = {};
  if (!values.name.trim()) errors.name = 'Adınızı yazın.';
  if (!values.email.trim()) errors.email = 'E-poçt ünvanınızı yazın.';
  else if (!EMAIL_RE.test(values.email)) errors.email = 'Düzgün e-poçt ünvanı daxil edin.';
  if (!values.subject.trim()) errors.subject = 'Mövzunu yazın.';
  if (!values.message.trim()) errors.message = 'Mesajınızı yazın.';
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
    <Container className={styles.page}>
      {/* Top: form (left) + logo card (right, equal height) */}
      <section className={styles.topGrid}>
        <Reveal direction="left" duration={800}>
          <div className={styles.formCol}>
            <div className={styles.formIntro}>
              <span className={styles.formEyebrow}>Bizimlə əlaqə</span>
              <h1 className={styles.formTitle}>Layihəniz üçün etibarlı tərəfdaş</h1>
              <p className={styles.formLead}>
                Formu doldurun — komandamız adətən bir iş günü ərzində geri dönəcək.
              </p>
            </div>

            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              {submitted && (
                <div className={styles.success} role="status">
                  <CheckCircle2 size={18} aria-hidden="true" />
                  <span>Təşəkkürlər — mesajınız göndərildi. Tezliklə əlaqə saxlayacağıq.</span>
                </div>
              )}

              <div className={styles.row}>
                <Input
                  label="Ad və Soyad"
                  value={values.name}
                  onChange={handleChange('name')}
                  error={errors.name}
                  placeholder="Adınız Soyadınız"
                  required
                />
                <Input
                  label="E-poçt ünvanı"
                  type="email"
                  value={values.email}
                  onChange={handleChange('email')}
                  error={errors.email}
                  placeholder="ad@example.com"
                  required
                />
              </div>

              <Input
                label="Mövzu"
                value={values.subject}
                onChange={handleChange('subject')}
                error={errors.subject}
                placeholder="Sorğunuzun mövzusu"
                required
              />

              <TextArea
                label="Mesaj"
                value={values.message}
                onChange={handleChange('message')}
                error={errors.message}
                placeholder="Mesajınızı buraya yazın..."
                required
              />

              <div className={styles.actions}>
                <Button type="submit" variant="accent" rightIcon={<Send size={16} />}>
                  Mesaj göndər
                </Button>
                <span className={styles.note}>Adətən bir iş günü ərzində cavablandırırıq.</span>
              </div>
            </form>
          </div>
        </Reveal>

        <Reveal direction="right" duration={800} delay={120}>
          <aside className={styles.logoCol}>
            <div className={styles.logoFrame}>
              <img src={logo} alt="Energy Service Group logo" className={styles.logoImage} />
            </div>
            <h2 className={styles.logoBrandTitle}>ENERGY SERVICE GROUP</h2>
            <p className={styles.logoBrandTagline}>
              Etibarlı enerji infrastrukturu — layihədən təhvilə qədər.
            </p>
          </aside>
        </Reveal>
      </section>

      {/* Bottom: direct contact (full width) */}
      <section className={styles.directContact}>
        <Reveal direction="up">
          <header className={styles.directHeader}>
            <span className={styles.directEyebrow}>Əlaqə məlumatları</span>
            <h2 className={styles.directTitle}>Bizimlə birbaşa əlaqə</h2>
            <p className={styles.directLead}>
              Ofisdən, telefonla və ya e-poçt ilə bizimlə birbaşa əlaqə saxlaya bilərsiniz.
            </p>
          </header>
        </Reveal>

        <div className={styles.directGrid}>
          <div className={styles.directItem}>
            <span className={styles.directIcon}>
              <MapPin size={18} />
            </span>
            <span className={styles.directLabel}>Ünvan</span>
            <span className={styles.directValue}>
              Abşeron rayonu, Saray ŞTQ,<br />Polad Həşimov küç. 409
            </span>
          </div>

          <div className={styles.directItem}>
            <span className={styles.directIcon}>
              <Phone size={18} />
            </span>
            <span className={styles.directLabel}>Telefon</span>
            <a href="tel:+994108881808" className={styles.directLink}>
              (010) 888 18 08
            </a>
          </div>

          <div className={styles.directItem}>
            <span className={styles.directIcon}>
              <Mail size={18} />
            </span>
            <span className={styles.directLabel}>E-poçt</span>
            <a href="mailto:office@energyservicegroup.az" className={styles.directLink}>
              office@energyservicegroup.az
            </a>
          </div>

          <div className={styles.directItem}>
            <span className={styles.directIcon}>
              <Clock size={18} />
            </span>
            <span className={styles.directLabel}>İş saatları</span>
            <span className={styles.directValue}>B.e — Cümə<br />09:00 — 18:00</span>
          </div>
        </div>

        <Reveal direction="up" duration={800}>
          <div className={styles.officeCard}>
            <div className={styles.officeMap}>
              <iframe
                title="Energy Service Group ofisi — xəritə"
                src={MAP_EMBED_URL}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className={styles.officeInfo}>
              <div className={styles.officeCity}>Bakı ofisi</div>
              <div className={styles.officeAddress}>
                Abşeron rayonu, Saray ŞTQ,<br />
                Polad Həşimov küç. 409, Azərbaycan
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </Container>
  );
}
