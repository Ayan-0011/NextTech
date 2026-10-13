
import FadeIn from '../../components/animations/FadeIn'
import Logo from '../../components/brand/Logo'
import NLogo from '../../components/brand/NLogo'
import './TechnologySection.css'


const technologies = [
  { name: 'React', slug: 'react', color: '#61DAFB', angle: 0, orbit: 240 },
  { name: 'Next.js', slug: 'nextdotjs', color: '#111827', angle: 30, orbit: 240 },
  { name: 'TypeScript', slug: 'typescript', color: '#3178C6', angle: 60, orbit: 240 },
  { name: 'Node.js', slug: 'nodedotjs', color: '#339933', angle: 90, orbit: 240 },
  { name: 'Express', slug: 'express', color: '#374151', angle: 120, orbit: 240 },
  { name: 'MongoDB', slug: 'mongodb', color: '#47A248', angle: 150, orbit: 240 },
  { name: 'PostgreSQL', slug: 'postgresql', color: '#4169E1', angle: 180, orbit: 240 },
  { name: 'Python', slug: 'python', color: '#3776AB', angle: 210, orbit: 240 },
  { name: 'AWS', slug: 'redux', color: '#FF9900', angle: 240, orbit: 240 },
  { name: 'Docker', slug: 'docker', color: '#2496ED', angle: 270, orbit: 240 },
  { name: 'Git', slug: 'git', color: '#F05032', angle: 300, orbit: 240 },
  { name: 'GitHub', slug: 'github', color: '#111827', angle: 330, orbit: 240 },
]

function TechnologyIcon({ tech, index }) {
  return (
    <div
      className="tech-orbit-icon"
      style={{
        '--angle': `${tech.angle}deg`,
        '--orbit': `${tech.orbit}px`,
        '--delay': `${index * -0.35}s`,
      }}
      title={tech.name}
      aria-label={tech.name}
    >
      <img
        src={`https://cdn.simpleicons.org/${tech.slug}/${tech.color.replace('#', '')}`}
        alt={tech.name}
        loading="lazy"
        width="30"
        height="30"
      />
    </div>
  )
}

export default function TechnologySection() {
  return (
    <section className="section-padding bg-bg overflow-hidden">
      <div className="container">
        <FadeIn className="mb-8 text-center">
          <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            Technology
          </span>

          <h2 className="heading-section text-forest">
            Technology that fits the problem
          </h2>
        </FadeIn>

        <FadeIn>
          <div className="tech-orbit-scene">
            <div className="tech-orbit-ring tech-orbit-ring-outer" />
            <div className="tech-orbit-ring tech-orbit-ring-middle" />
            <div className="tech-orbit-ring tech-orbit-ring-inner" />

            <div className="tech-orbit-center">
              <div className="tech-brand-mark">
                
                <NLogo size={80}/>
              </div>
            </div>

            {technologies.map((tech, index) => (
              <TechnologyIcon
                key={tech.name}
                tech={tech}
                index={index}
              />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
