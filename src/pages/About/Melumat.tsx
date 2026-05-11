import { Compass, Goal, HardHat, Network, ShieldCheck, Wrench } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { SectionTitle } from '@/components/common/SectionTitle';
import { Reveal } from '@/components/common/Reveal';
import { useReveal } from '@/hooks/useReveal';
import styles from './about.module.css';

const expertise = [
  {
    icon: Wrench,
    title: 'Qaz kəmərlərinin çəkilişi',
    text: 'Magistral polad qaz kəmərləri (o cümlədən Dş 1000 mm) və polietilen şəbəkələr (Ø 450 mm-ə qədər) — AZS 806-2-2014 və EN 12201-2 standartlarına uyğun.',
  },
  {
    icon: Network,
    title: 'İçməli su və kanalizasiya xətləri',
    text: 'PE 100 SDR 11 polietilen borularla xarici içməli su xətləri, kanalizasiya şəbəkəsi və yağış suyu sistemlərinin layihələndirilməsi və çəkilişi.',
  },
  {
    icon: HardHat,
    title: 'Tikinti və elektrik təchizatı',
    text: 'Sənaye obyektləri, yaşayış kompleksləri, anqar və yardımçı binaların tikintisi; transformator məntəqələrinin (400 kVA) və elektrik xətlərinin quraşdırılması.',
  },
];

export default function MelumatPage() {
  const expertiseStagger = useReveal<HTMLDivElement>({ stagger: true, direction: 'up' });
  const mvStagger = useReveal<HTMLElement>({ stagger: true, direction: 'up' });

  return (
    <>
      <Container>
        <Reveal direction="up">
          <SectionTitle
            eyebrow="Haqqımızda"
            title='"Energy Service Group" MMC'
            description='"Energy Service Group" MMC — qaz kəmərlərinin çəkilişi, içməli su və kanalizasiya şəbəkələri, elektrik təchizatı, eləcə də sənaye və yaşayış obyektlərinin tikinti-quraşdırma işləri sahəsində fəaliyyət göstərən şirkətdir.'
          />
        </Reveal>

        <section className={styles.overview}>
          <Reveal direction="left" duration={800}>
            <div className={styles.overviewText}>
              <p>
                Şirkətimiz SOCAR-ın "Qaz İxrac" İdarəsi, Ələt Azad İqtisadi Zonası (AFEZ /
                SW AFEZCO), MİDA, "AS İNŞAAT" MMC, "ND COMPANY" MMC və Dövlət qurumları ilə
                müqavilələr çərçivəsində magistral qaz kəmərlərinin yenidən qurulmasından
                tutmuş aeroport infrastrukturuna qədər müxtəlif miqyaslı layihələr icra edir.
              </p>
              <p>
                "Qazıməmməd–Qazax" magistral qaz kəmərinin yenidən qurulması, Ələt Karqo
                Aeroportunda 11 km-lik qaz xətti və 8 km-lik içməli su xətti, Zəngilan
                Ağalı kəndlərində yaşayış evlərinin tikintisi və qaz/su xətlərinin çəkilişi
                tamamlanmış və davam edən əsas layihələrimiz arasındadır.
              </p>
            </div>
          </Reveal>
          <Reveal direction="right" duration={800} delay={120}>
            <ul className={styles.highlights}>
              <li>
                <ShieldCheck size={18} aria-hidden="true" />
                <span>ISO 9001, 14001, 45001 və 10002 sertifikatlı idarəetmə sistemləri</span>
              </li>
              <li>
                <Compass size={18} aria-hidden="true" />
                <span>Layihələndirmədən təhvilə qədər tam məsuliyyət</span>
              </li>
              <li>
                <Goal size={18} aria-hidden="true" />
                <span>SOCAR, AFEZ, MİDA və dövlət qurumları ilə uzunmüddətli tərəfdaşlıq</span>
              </li>
            </ul>
          </Reveal>
        </section>
      </Container>

      <section className={styles.expertise}>
        <Container>
          <Reveal direction="up">
            <SectionTitle
              eyebrow="Fəaliyyət sahələrimiz"
              title="Əsas ixtisaslıq sahələrimiz"
              align="center"
            />
          </Reveal>
          <div
            ref={expertiseStagger.ref}
            className={[styles.expertiseGrid, expertiseStagger.className].join(' ')}
          >
            {expertise.map(({ icon: Icon, title, text }) => (
              <article key={title} className={styles.expertiseCard}>
                <span className={styles.expertiseIcon}>
                  <Icon size={22} />
                </span>
                <h3 className={styles.expertiseTitle}>{title}</h3>
                <p className={styles.expertiseText}>{text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <Container>
        <section
          ref={mvStagger.ref}
          className={[styles.mvGrid, mvStagger.className].join(' ')}
        >
          <article className={styles.mvCard}>
            <span className={styles.mvLabel}>Missiya</span>
            <h3 className={styles.mvTitle}>
              Etibarlı qaz, su və enerji infrastrukturu ilə icmaları və sənayeni təmin etmək.
            </h3>
            <p className={styles.mvBody}>
              Hər layihəni beynəlxalq keyfiyyət, ətraf mühit və əməyin təhlükəsizliyi
              standartlarına uyğun şəkildə, müqavilə şərtləri və müddətləri pozulmadan
              həyata keçirmək.
            </p>
          </article>
          <article className={[styles.mvCard, styles.mvCardAccent].join(' ')}>
            <span className={styles.mvLabel}>Vizyon</span>
            <h3 className={styles.mvTitle}>
              SOCAR, AFEZ və dövlət qurumlarının ilk seçilən podratçısı olmaq.
            </h3>
            <p className={styles.mvBody}>
              Mühəndislik dəqiqliyi, proqnozlaşdırıla bilən təslimat və uzunmüddətli
              tərəfdaşlıq ilə tanınan — magistral kəmərlərdən aeroport infrastrukturuna
              qədər mürəkkəb layihələri icra edən etibarlı şirkətə çevrilmək.
            </p>
          </article>
        </section>
      </Container>
    </>
  );
}
