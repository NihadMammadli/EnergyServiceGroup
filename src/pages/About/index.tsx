import { Compass, Goal, HardHat, Network, ShieldCheck, Wrench } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { SectionTitle } from '@/components/common/SectionTitle';
import styles from './index.module.css';

const expertise = [
  {
    icon: Wrench,
    title: 'Pipeline Construction',
    text: 'Design and installation of high- and medium-pressure pipelines, including polyethylene and steel networks across challenging terrains.',
  },
  {
    icon: Network,
    title: 'Infrastructure Engineering',
    text: 'Civil works, trenching, station construction, and full SCADA integration for industrial-grade distribution systems.',
  },
  {
    icon: HardHat,
    title: 'Gas Systems',
    text: 'Pressure regulation, metering, and safety systems engineered to international codes and tested for long-term reliability.',
  },
];

export default function AboutPage() {
  return (
    <>
      <Container>
        <SectionTitle
          eyebrow="About us"
          title="Built to deliver critical energy infrastructure."
          description="Energy Service Group is a pipeline construction and infrastructure engineering firm partnering with national operators, free-economic zones, and industrial clients to deliver durable, code-compliant networks."
        />

        <section className={styles.overview}>
          <div className={styles.overviewText}>
            <p>
              We combine field engineering rigor with disciplined project management to
              execute complex pipeline programs end-to-end — from route survey and design
              through construction, commissioning, and handover.
            </p>
            <p>
              Every project is delivered under a single accountable team, ensuring that
              quality, safety, and timeline targets are met without the friction of
              fragmented vendors.
            </p>
          </div>
          <ul className={styles.highlights}>
            <li>
              <ShieldCheck size={18} aria-hidden="true" />
              <span>HSE-first culture with zero-harm operations</span>
            </li>
            <li>
              <Compass size={18} aria-hidden="true" />
              <span>End-to-end ownership from survey to commissioning</span>
            </li>
            <li>
              <Goal size={18} aria-hidden="true" />
              <span>Transparent reporting and milestone-based delivery</span>
            </li>
          </ul>
        </section>
      </Container>

      <section className={styles.expertise}>
        <Container>
          <SectionTitle
            eyebrow="Capabilities"
            title="Three pillars of expertise"
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
            <span className={styles.mvLabel}>Mission</span>
            <h3 className={styles.mvTitle}>
              Build energy infrastructure that powers communities for decades.
            </h3>
            <p className={styles.mvBody}>
              We deliver pipeline and gas systems that meet the highest standards of
              safety, durability, and operational reliability — supporting the
              infrastructure that economies depend on.
            </p>
          </article>
          <article className={[styles.mvCard, styles.mvCardAccent].join(' ')}>
            <span className={styles.mvLabel}>Vision</span>
            <h3 className={styles.mvTitle}>
              The trusted regional partner for critical energy projects.
            </h3>
            <p className={styles.mvBody}>
              To be the region's first call for complex pipeline and infrastructure
              programs — recognized for engineering excellence, predictable delivery,
              and long-term partnership.
            </p>
          </article>
        </section>
      </Container>
    </>
  );
}
