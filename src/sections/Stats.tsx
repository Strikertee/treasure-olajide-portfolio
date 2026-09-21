import { personalInfo } from '../data/personal.ts';
import './Stats.css';

export default function Stats() {
  const milestoneStats = personalInfo.hero.stats.slice(0, 2);
  
  return (
    <section className="stats" aria-labelledby="stats-title">
      <div className="container">
        <div className="stats-grid" role="list">
          {milestoneStats.map((stat, _index) => (
            <div key={stat.label} className="stat-item" role="listitem">
              <div className="stat-value" data-target={stat.value}>
                {stat.value}
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}