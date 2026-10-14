import { useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { Scene, STAGE } from "./ProcessScenes";
import "../../styles/ProcessTabs.css";

const EASE = [0.22, 1, 0.36, 1];

const STEPS = [
  {
    id: "discover",
    tab: "Discover & Plan",
    title: "Discover & plan",
    text: "We map your goals, users, and constraints, then agree on scope, budget, and a timeline before a single line of code is written.",
  },
  {
    id: "design",
    tab: "Design & Prototype",
    title: "Design & prototype",
    text: "Wireframes become clickable prototypes. You approve the actual experience before we commit engineering time to building it.",
  },
  {
    id: "build",
    tab: "Build & Review",
    title: "Build & review",
    text: "Short sprints with a demo at the end of every week. You watch your product grow instead of waiting months for a big reveal.",
  },
  {
    id: "launch",
    tab: "Launch & Scale",
    title: "Launch & scale",
    text: "We deploy, monitor, and keep shipping fixes, improvements, and new features. The work doesn't end at go-live.",
  },
];

// Text column: slides in from the direction of travel, slides out the opposite way.
const copyVariants = {
  enter: (dir) => ({ opacity: 0, x: dir * 36 }),
  center: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE } },
  exit: (dir) => ({ opacity: 0, x: dir * -36, transition: { duration: 0.2, ease: "easeIn" } }),
};

// Canvas: quick fade out, scene items then stagger in themselves (see ProcessScenes).
const canvasVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.18, ease: "easeIn" } },
};

// Keeps the fixed-size illustration stage scaled to the width of its canvas.
function useStageScale(ref) {
  const [scale, setScale] = useState(1);
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const observer = new ResizeObserver(([entry]) => {
      setScale(entry.contentRect.width / STAGE.w);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);
  return scale;
}

export default function ProcessTabs({ ctaHref = "/contact", ctaLabel = "Get Started" }) {
  const [[active, dir], setState] = useState([0, 1]);
  const tabRefs = useRef([]);
  const canvasRef = useRef(null);
  const scale = useStageScale(canvasRef);
  const step = STEPS[active];

  const select = (index) =>
    setState(([current]) => (index === current ? [current, 1] : [index, index > current ? 1 : -1]));

  const onKeyDown = (event) => {
    const last = STEPS.length - 1;
    const keys = {
      ArrowRight: active === last ? 0 : active + 1,
      ArrowLeft: active === 0 ? last : active - 1,
      Home: 0,
      End: last,
    };
    if (!(event.key in keys)) return;
    event.preventDefault();
    select(keys[event.key]);
    tabRefs.current[keys[event.key]]?.focus();
  };

  return (
    <MotionConfig reducedMotion="user">
      <section className="process-tabs" aria-labelledby="process-heading">
        <div className="pt-container">
          <header className="pt-header">
            <h2 id="process-heading">Your project, streamlined</h2>
            <p>
              From first call to launch day in four clear steps, with a demo you can click every
              single week.
            </p>
          </header>

          <div className="pt-tablist" role="tablist" aria-label="Project process" onKeyDown={onKeyDown}>
            {STEPS.map((s, i) => (
              <button
                key={s.id}
                ref={(el) => (tabRefs.current[i] = el)}
                id={`pt-tab-${s.id}`}
                className="pt-tab"
                type="button"
                role="tab"
                aria-selected={active === i}
                aria-controls="pt-panel"
                tabIndex={active === i ? 0 : -1}
                onClick={() => select(i)}
              >
                {s.tab}
                {active === i && (
                  <motion.span
                    className="pt-tab-bar"
                    layoutId="pt-tab-bar"
                    transition={{ type: "spring", stiffness: 420, damping: 38 }}
                  />
                )}
              </button>
            ))}
          </div>

          <div className="pt-shell" id="pt-panel" role="tabpanel" aria-labelledby={`pt-tab-${step.id}`}>
            <div className="pt-copy">
              <AnimatePresence mode="wait" custom={dir} initial={false}>
                <motion.div
                  key={step.id}
                  className="pt-copy-body"
                  custom={dir}
                  variants={copyVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                >
                  <div>
                    <p className="pt-step">Step {active + 1}</p>
                    <h3 className="pt-title">{step.title}</h3>
                  </div>
                  <p className="pt-text">{step.text}</p>
                </motion.div>
              </AnimatePresence>
              <a className="pt-cta" href={ctaHref}>
                {ctaLabel}
              </a>
            </div>

            <div className="pt-canvas" ref={canvasRef} style={{ "--pt-scale": scale }} aria-hidden="true">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={step.id}
                  className="pt-stage"
                  variants={canvasVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                >
                  <Scene id={step.id} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}