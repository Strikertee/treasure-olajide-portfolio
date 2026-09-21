import { currentlyBuilding } from '../data/personal.ts';
import Tag from '../components/Tag.tsx';
import './CurrentlyBuilding.css';

export default function CurrentlyBuilding() {
  return (
    <section id="building" className="currently-building" aria-labelledby="building-title">
      <div className="container">
        <header className="section-header">
          <Tag variant="primary" size="sm" className="section-tag">
            Now
          </Tag>
          <h2 id="building-title" className="section-title display-md">
            Currently Building
          </h2>
        </header>

        <div className="building-grid">
          {currentlyBuilding.map((item, index) => (
            <article key={item.id} className="building-card" style={{ '--index': index }}>
              <div className="card-emoji" aria-hidden="true">{item.emoji}</div>
              <h3 className="card-name">{item.name}</h3>
              <p className="card-desc">{item.description}</p>
              <Tag variant={item.status === 'Active' ? 'active' : 'exploring'} size="sm">
                {item.status}
              </Tag>
            </article>
          ))}
        </div>

        <p className="building-note">
          This section changes as the work evolves.
        </p>
      </div>
    </section>
  );
}