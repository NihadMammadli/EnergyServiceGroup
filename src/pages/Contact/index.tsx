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
  if (!values.name.trim()) errors.name = 'Adınızı yazın.';
  if (!values.email.trim()) errors.email = 'E-poçt ünvanınızı yazın.';
  else if (!EMAIL_RE.test(values.email)) errors.email = 'Düzgün e-poçt ünvanı daxil edin.';
  if (!values.subject.trim())
    errors.subject = 'Mövzunu qısaca yazın ki, sorğunuzu doğru istiqamətləndirək.';
  if (!values.message.trim()) errors.message = 'Layihəniz haqqında qısa məlumat verin.';
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
        eyebrow="Əlaqə saxlayın"
        title="Layihəniz haqqında bizə danışın"
        description="Yeni boru kəmərinin planlaşdırılması, paylama şəbəkəsinin genişləndirilməsi və ya stansiyanın modernləşdirilməsi — sizdən eşitmək istərik."
      />

      <div className={styles.grid}>
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
              placeholder="Cəmilə Əliyeva"
              required
            />
            <Input
              label="E-poçt ünvanı"
              type="email"
              value={values.email}
              onChange={handleChange('email')}
              error={errors.email}
              placeholder="info@numune.az"
              required
            />
          </div>

          <Input
            label="Mövzu"
            value={values.subject}
            onChange={handleChange('subject')}
            error={errors.subject}
            placeholder="Boru kəməri genişləndirilməsi sorğusu"
            required
          />

          <TextArea
            label="Mesaj"
            value={values.message}
            onChange={handleChange('message')}
            error={errors.message}
            placeholder="Sahə, ərazi və vaxt çərçivəsi haqqında qısa məlumat verin."
            required
          />

          <div className={styles.actions}>
            <Button type="submit" variant="accent" rightIcon={<Send size={16} />}>
              Mesaj göndər
            </Button>
            <span className={styles.note}>Adətən bir iş günü ərzində cavablandırırıq.</span>
          </div>
        </form>

        <aside className={styles.info}>
          <h3 className={styles.infoTitle}>Bizimlə birbaşa əlaqə</h3>
          <ul className={styles.infoList}>
            <li>
              <span className={styles.infoIcon}>
                <MapPin size={16} />
              </span>
              <div>
                <span className={styles.infoLabel}>Baş ofis</span>
                <span className={styles.infoValue}>Bakı, Azərbaycan</span>
              </div>
            </li>
            <li>
              <span className={styles.infoIcon}>
                <Mail size={16} />
              </span>
              <div>
                <span className={styles.infoLabel}>E-poçt</span>
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
                <span className={styles.infoLabel}>Telefon</span>
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
                <span className={styles.infoLabel}>İş saatları</span>
                <span className={styles.infoValue}>B.e — Cümə · 09:00 — 18:00</span>
              </div>
            </li>
          </ul>
          <div className={styles.mapPlaceholder} role="img" aria-label="Yerləşmə xəritəsi">
            <span className={styles.mapPin}>
              <MapPin size={20} />
            </span>
            <span>Xəritə</span>
          </div>
        </aside>
      </div>
    </Container>
  );
}
