import { motion } from 'framer-motion';
import { personalInfo } from '../data/personal.ts';
import './Stats.css';

export default function Stats() {
  const milestoneStats = personalInfo.hero.stats.slice(0, 2);

  return (
    <section className="stats" aria-labelledby="stats-title">
      <div className="container">
        <motion.div
          className="stats-grid"
          role="list"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '0px 0px -10% 0px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          {milestoneStats.map((stat) => (
            <motion.div
              key={stat.label}
              className="stat-item"
              role="listitem"
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                },
              }}
            >
              <div className="stat-value" data-target={stat.value}>
                {stat.value}
              </div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}