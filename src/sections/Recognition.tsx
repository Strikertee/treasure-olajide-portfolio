import { recognition, milestones } from '../data/recognition.ts';
import Tag from '../components/Tag.tsx';
import './Recognition.css';

export default function Recognition() {
  return (
    <section id="recognition" className="recognition" aria-labelledby="recognition-title">
      <div className="container">
        <header className="section-header">
          <Tag variant="primary" size="sm" className="section-tag">
            Recognition & Milestones
          </Tag>
          <h2 id="recognition-title" className="section-title display-md">
            Recognition & Milestones
          </h2>
        </header>

        <div className="recognition-grid" role="list">
          {recognition.map((item, _index) => (
            <article key={item.id} className="recognition-card" role="listitem">
              <div className="card-icon" aria-hidden="true">
                {item.icon === 'trophy' && '🏆'}
                {item.icon === 'award' && '🚀'}
                {item.icon === 'medal' && '🥇'}
              </div>
              <div className="card-content">
                <div className="card-meta">
                  <Tag variant="primary" size="sm">{item.category}</Tag>
                  <span className="card-year">{item.year}</span>
                </div>
                <h3 className="card-title">{item.title}</h3>
                <div className="card-achievement">
                  <span className="achievement-label">{item.achievement}</span>
                </div>
                <p className="card-description">{item.description}</p>
                <ul className="card-highlights">
                  {item.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="milestones-section">
          <h3 className="milestones-title">Timeline</h3>
          <div className="milestones-timeline">
            {milestones.map((yearData, _index) => (
              <div key={yearData.year} className="milestone-year">
                <div className="year-marker">
                  <span className="year-label">{yearData.year}</span>
                  <div className="year-dot" aria-hidden="true"></div>
                </div>
                <ul className="year-items">
                  {yearData.items.map((item, i) => (
                    <li key={i} className="year-item">
                      <span className="item-bullet" aria-hidden="true">●</span>
                      <span className="item-text">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}