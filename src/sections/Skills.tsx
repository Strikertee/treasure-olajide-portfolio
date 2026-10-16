import { skills, proficiencyLevels } from '../data/skills.ts';
import Tag from '../components/Tag.tsx';
import './Skills.css';

export default function Skills() {
  return (
    <section id="skills" className="skills" aria-labelledby="skills-title">
      <div className="container">
        <header className="section-header">
          <Tag variant="primary" size="sm" className="section-tag">
            Skills
          </Tag>
          <h2 id="skills-title" className="section-title display-md">
            Skills & Technologies
          </h2>
          <p className="section-subtitle">
            Technologies and tools I work with regularly. Primary = deep practical experience, Working = solid understanding, Exploring = actively learning.
          </p>
        </header>

        <div className="skills-grid">
          {skills.map((category, _index) => (
            <article key={category.category} className="skill-category">
              <header className="category-header">
                <div className="category-icon" aria-hidden="true">
                  {getCategoryIcon(category.icon)}
                </div>
                <h3 className="category-title">{category.category}</h3>
              </header>
              <div className="category-skills">
                {category.items.map((skill, i) => (
                  <Tag
                    key={i}
                    variant={getSkillVariant(skill.level)}
                    size="sm"
                    title={proficiencyLevels[skill.level]?.description}
                  >
                    {skill.name}
                    <span className="skill-level-indicator" aria-hidden="true">
                      {getLevelIndicator(skill.level)}
                    </span>
                  </Tag>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="skills-legend">
          <h4 className="legend-title">Proficiency Levels</h4>
          <div className="legend-items">
            {Object.entries(proficiencyLevels).map(([key, value]) => (
              <div key={key} className="legend-item">
                <Tag variant={getSkillVariant(key as keyof typeof proficiencyLevels)} size="sm">
                  {value.label}
                </Tag>
                <span className="legend-desc">{value.description}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function getCategoryIcon(icon: string): string {
  const icons: Record<string, string> = {
    brain: '🧠',
    server: '⚙️',
    code: '💻',
    chart: '📊',
    tools: '🔧'
  };
  return icons[icon] || '🔧';
}

function getSkillVariant(level: string): string {
  const variants: Record<string, string> = {
    primary: 'primary',
    working: 'cyan',
    exploring: 'exploring'
  };
  return variants[level] || 'cyan';
}

function getLevelIndicator(level: string): string {
  const indicators: Record<string, string> = {
    primary: '★★★',
    working: '★★☆',
    exploring: '★☆☆'
  };
  return indicators[level] || '★☆☆';
}
