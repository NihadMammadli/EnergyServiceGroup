import { Compass, Goal, HardHat, Network, ShieldCheck, Wrench } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { SectionTitle } from '@/components/common/SectionTitle';
import styles from './about.module.css';

const expertise = [
  {
    icon: Wrench,
    title: 'Boru kəmərinin tikintisi',
    text: 'Mürəkkəb relyeflərdə polietilen və polad şəbəkələr daxil olmaqla yüksək və orta təzyiqli boru kəmərlərinin layihələndirilməsi və quraşdırılması.',
  },
  {
    icon: Network,
    title: 'İnfrastruktur mühəndisliyi',
    text: 'Sənaye səviyyəli paylama sistemləri üçün mülki tikinti, qazma, stansiya tikintisi və tam SCADA inteqrasiyası.',
  },
  {
    icon: HardHat,
    title: 'Qaz sistemləri',
    text: 'Beynəlxalq standartlara uyğun və uzunmüddətli etibarlılıq üçün test edilmiş təzyiq tənzimləməsi, ölçmə və təhlükəsizlik sistemləri.',
  },
];

export default function MelumatPage() {
  return (
    <>
      <Container>
        <SectionTitle
          eyebrow="Haqqımızda"
          title="Kritik enerji infrastrukturu üçün qurulmuşuq."
          description="Energy Service Group milli operatorlar, azad iqtisadi zonalar və sənaye müştəriləri ilə tərəfdaşlıq edərək davamlı və standartlara uyğun şəbəkələr quran boru kəməri tikintisi və infrastruktur mühəndisliyi şirkətidir."
        />

        <section className={styles.overview}>
          <div className={styles.overviewText}>
            <p>
              Mühəndislik dəqiqliyini intizamlı layihə idarəçiliyi ilə birləşdirərək
              kompleks boru kəməri proqramlarını başdan sona icra edirik — marşrut
              tədqiqindən və layihələndirmədən tikinti, istismara verilmə və təhvilə
              qədər.
            </p>
            <p>
              Hər layihə vahid məsuliyyətli komanda tərəfindən həyata keçirilir;
              beləliklə keyfiyyət, təhlükəsizlik və müddət hədəfləri parçalanmış
              təchizatçıların yaratdığı çətinliklər olmadan təmin edilir.
            </p>
          </div>
          <ul className={styles.highlights}>
            <li>
              <ShieldCheck size={18} aria-hidden="true" />
              <span>HSE prioritetli — sıfır-zərər əsaslı iş mədəniyyəti</span>
            </li>
            <li>
              <Compass size={18} aria-hidden="true" />
              <span>Tədqiqatdan istismara qədər tam məsuliyyət</span>
            </li>
            <li>
              <Goal size={18} aria-hidden="true" />
              <span>Şəffaf hesabat və mərhələ əsaslı təslimat</span>
            </li>
          </ul>
        </section>
      </Container>

      <section className={styles.expertise}>
        <Container>
          <SectionTitle
            eyebrow="İmkanlarımız"
            title="Üç əsas ixtisaslıq sahəmiz"
            align="center"
          />
          <div className={styles.expertiseGrid}>
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
        <section className={styles.mvGrid}>
          <article className={styles.mvCard}>
            <span className={styles.mvLabel}>Missiya</span>
            <h3 className={styles.mvTitle}>
              Onilliklər boyu icmaları enerji ilə təmin edən infrastruktur qurmaq.
            </h3>
            <p className={styles.mvBody}>
              Boru kəməri və qaz sistemlərimizi ən yüksək təhlükəsizlik, davamlılıq və
              əməliyyat etibarlılıq standartları ilə həyata keçiririk — iqtisadiyyatların
              dayandığı infrastrukturu dəstəkləyirik.
            </p>
          </article>
          <article className={[styles.mvCard, styles.mvCardAccent].join(' ')}>
            <span className={styles.mvLabel}>Vizyon</span>
            <h3 className={styles.mvTitle}>
              Kritik enerji layihələri üçün regionun etibarlı tərəfdaşı olmaq.
            </h3>
            <p className={styles.mvBody}>
              Mühəndislik mükəmməlliyi, proqnozlaşdırıla bilən təslimat və uzunmüddətli
              tərəfdaşlıq ilə tanınan, mürəkkəb boru kəməri və infrastruktur
              proqramları üçün ilk müraciət olunan şirkətə çevrilmək.
            </p>
          </article>
        </section>
      </Container>
    </>
  );
}
