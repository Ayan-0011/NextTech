import { motion } from "framer-motion";

/** Design-space size of the illustration stage. CSS scales it to the canvas width. */
export const STAGE = { w: 760, h: 506 };

const EASE = [0.22, 1, 0.36, 1];

const floatVariants = {
  hidden: { opacity: 0, y: 14, scale: 0.97 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: 0.12 + i * 0.07, duration: 0.5, ease: EASE },
  }),
};
const fadeVariants = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { delay: 0.5, duration: 0.6 } } };
const drawVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  show: { pathLength: 1, opacity: 1, transition: { delay: 0.55, duration: 0.8, ease: EASE } },
};
const barVariants = {
  hidden: { scaleY: 0 },
  show: (i) => ({ scaleY: 1, transition: { delay: 0.35 + i * 0.07, duration: 0.55, ease: EASE } }),
};

const GLYPHS = {
  check: <path d="M5.5 12.5l4 4L18.5 7.5" />,
  bolt: <path d="M13 3.5L6 13h5.5L10.5 20.5 18 11h-5.5L13 3.5z" />,
  gear: <circle cx="12" cy="12" r="3" />,
  sparkle: <path d="M12 4.5l1.7 4.8 4.8 1.7-4.8 1.7L12 17.5l-1.7-4.8L5.5 11l4.8-1.7L12 4.5z" />,
  pencil: <path d="M6 18l.8-3.2L15.5 6l2.5 2.5-8.7 8.8L6 18z" />,
  square: <rect x="7" y="7" width="10" height="10" rx="1.8" />,
  merge: <path d="M7 8h9l-2.5-2.5M17 16H8l2.5 2.5" />,
  play: <path d="M9 6.5v11l8.5-5.5L9 6.5z" />,
};

function Icon({ name, tone }) {
  return (
    <span className={`pt-icon pt-icon--${tone}`}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {GLYPHS[name]}
      </svg>
    </span>
  );
}

/** Absolutely positioned (desktop) / stacked (mobile) animated item. */
function Float({ x, y, w, i = 0, className = "", children }) {
  return (
    <motion.div
      className={`pt-float ${className}`}
      style={{ "--x": x, "--y": y, "--w": w }}
      variants={floatVariants}
      custom={i}
    >
      {children}
    </motion.div>
  );
}

function Node({ icon, tone, title, text, chips, i, ...pos }) {
  return (
    <Float className="pt-node" i={i} {...pos}>
      <Icon name={icon} tone={tone} />
      <div className="pt-node-body">
        <p className="pt-node-title">{title}</p>
        <p className="pt-node-text">{text}</p>
        {chips && (
          <ul className="pt-chips">
            {chips.map((chip) => (
              <li key={chip}>{chip}</li>
            ))}
          </ul>
        )}
      </div>
      <span className="pt-kebab">⋮</span>
    </Float>
  );
}

function Pill({ tone = "dark", icon = "cursor", children, i, ...pos }) {
  return (
    <Float className={`pt-pill pt-pill--${tone}`} i={i} {...pos}>
      {icon === "cursor" && (
        <svg viewBox="0 0 14 14" width="12" height="12" fill="currentColor" aria-hidden="true">
          <path d="M1.5 1.5l11 4.8-4.5 1.6-1.6 4.6z" />
        </svg>
      )}
      {icon === "play" && (
        <svg viewBox="0 0 14 14" width="12" height="12" fill="currentColor" aria-hidden="true">
          <path d="M3 1.8v10.4l8.6-5.2z" />
        </svg>
      )}
      {icon === "dot" && <span className="pt-live-dot" />}
      {children}
    </Float>
  );
}

function Window({ i, size, children, ...pos }) {
  return (
    <Float className={`pt-window pt-window--${size}`} i={i} {...pos}>
      <div className="pt-window-dots">
        <span /><span /><span />
      </div>
      {children}
    </Float>
  );
}

/* ---------- Scenes ---------- */

function DiscoverScene() {
  return (
    <>
      <svg className="pt-links" viewBox={`0 0 ${STAGE.w} ${STAGE.h}`}>
        <motion.path className="pt-link pt-link--dash" variants={fadeVariants} d="M232 83 C330 83 372 112 372 172" />
        <motion.path className="pt-link pt-link--green" variants={drawVariants} d="M372 247 C372 275 470 262 548 274 C562 286 568 300 570 318" />
        <motion.path className="pt-link pt-link--dash" variants={fadeVariants} d="M232 452 C330 452 440 448 496 440" />
      </svg>
      <Node i={0} x="3.5%" y="8%" w="215px" icon="bolt" tone="purple" title="Trigger" text="New project requested" />
      <Node i={1} x="13.5%" y="33%" w="235px" icon="check" tone="green" title="Validate" text="Validate request data" chips={["Scope", "Budget", "Timeline", "Sponsor"]} />
      <Node i={2} x="70%" y="44%" w="215px" icon="gear" tone="blue" title="Action" text="Allocate initial resources" />
      <Node i={3} x="69.5%" y="62.5%" w="215px" icon="gear" tone="blue" title="Action" text="Schedule project kick-off" />
      <Node i={4} x="65%" y="81%" w="215px" icon="gear" tone="blue" title="Action" text="Setup project collaboration space" />
      <Node i={5} x="4%" y="83%" w="215px" icon="sparkle" tone="pink" title="AI Process" text="Generate initial task breakdown" />
      <Pill i={6} x="18%" y="71%">Our team</Pill>
    </>
  );
}

function DesignScene() {
  return (
    <>
      <Window i={0} size="lg" x="3.5%" y="10%" w="266px">
        <div className="pt-bar pt-bar--w40" />
        <div className="pt-boxes"><span /><span /><span /></div>
        <div className="pt-bar pt-bar--w70" />
        <div className="pt-bar pt-bar--w30" />
      </Window>
      <Window i={1} size="sm" x="78.5%" y="17%" w="130px">
        <div className="pt-bar pt-bar--w100" />
        <div className="pt-bar pt-bar--w60" />
        <div className="pt-bar pt-bar--w85" />
        <div className="pt-bar pt-bar--w45" />
      </Window>
      <Float className="pt-palette" i={2} x="4.7%" y="52%">
        {["#1d2a6b", "#3b50c8", "#f59e0b", "#10b981", "#0f1117"].map((c) => (
          <span key={c} style={{ background: c }} />
        ))}
      </Float>
      <Node i={3} x="5.5%" y="67%" w="215px" icon="pencil" tone="pink" title="Client feedback" text={"“Make the CTA bigger” · resolved ✓"} />
      <Node i={4} x="70%" y="63%" w="215px" icon="square" tone="blue" title="Prototype" text="Clickable in your browser. Approve before we build" />
      <Pill i={5} tone="blue" x="71%" y="47.5%">You</Pill>
      <Pill i={6} tone="pink" x="16.5%" y="91%">Designer</Pill>
    </>
  );
}

function BuildScene() {
  return (
    <>
      <Float className="pt-terminal" i={0} x="3.5%" y="9%" w="93%">
        <p><span className="pt-prompt">$</span> git push origin feature/checkout</p>
        <p className="pt-ok">✓ CI: 128 tests passed in 2m 14s</p>
      </Float>
      <Node i={1} x="5.5%" y="29%" w="215px" icon="merge" tone="green" title="Pull Request #128" text="Checkout flow · +182 −46" chips={["✓ CI passed", "2 approvals", "Merged"]} />
      <Node i={2} x="69%" y="52%" w="215px" icon="bolt" tone="purple" title="Sprint 12" text="8 of 10 tasks shipped this week" />
      <Node i={3} x="9.7%" y="69%" w="215px" icon="play" tone="blue" title="Weekly Demo" text="A working build you can click yourself" />
      <Pill i={4} icon="play" x="72.7%" y="88%">Demo · Friday, 5pm</Pill>
    </>
  );
}

const BARS = [18, 28, 38, 52, 66, 82];

function LaunchScene() {
  return (
    <>
      <Node i={0} x="3.7%" y="9.7%" w="215px" icon="check" tone="green" title="Deployed" text="v1.0 live in production" />
      <Float className="pt-chart" i={1} x="65.4%" y="29.4%" w="232px">
        <p className="pt-chart-label">Traffic after launch</p>
        <div className="pt-chart-bars">
          {BARS.map((h, n) => (
            <motion.span key={h} style={{ height: `${h}%` }} variants={barVariants} custom={n} />
          ))}
        </div>
      </Float>
      <Node i={2} x="6.3%" y="56.5%" w="215px" icon="gear" tone="blue" title="Monitoring" text="99.9% uptime · alerts configured" />
      <Node i={3} x="68%" y="73%" w="215px" icon="sparkle" tone="pink" title="Next release" text="v1.1 features already in sprint" />
      <Pill i={4} icon="dot" x="19.4%" y="90%">Live · zero downtime</Pill>
    </>
  );
}

const SCENES = { discover: DiscoverScene, design: DesignScene, build: BuildScene, launch: LaunchScene };

export function Scene({ id }) {
  const Content = SCENES[id];
  return (
    <motion.div className="pt-stage-inner" initial="hidden" animate="show">
      <Content />
    </motion.div>
  );
}