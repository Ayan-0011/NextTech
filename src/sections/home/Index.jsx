'use client';

import { ReactLenis } from 'lenis/react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import {
  ArrowUpRight,
  Globe2,
  Smartphone,
  Sparkles,
  LayoutDashboard,
  Cloud,
} from 'lucide-react';

const services = [
  {
    number: '01',
    title: 'Web Development',
    description:
      'We build fast, scalable websites and web applications that turn ideas into reliable digital products.',
    tags: ['React', 'Next.js', 'Node.js'],
    icon: Globe2,
    accent: '#ECFDF5',
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    number: '02',
    title: 'Mobile App Development',
    description:
      'From simple business apps to complex mobile products, we create smooth experiences across modern devices.',
    tags: ['React Native', 'iOS', 'Android'],
    icon: Smartphone,
    accent: '#E3F7EE',
    image:
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80',
  },
  {
    number: '03',
    title: 'AI & Automation',
    description:
      'We connect AI with everyday business workflows to reduce repetitive work and create smarter digital experiences.',
    tags: ['AI Integration', 'Automation', 'Chatbots'],
    icon: Sparkles,
    accent: '#D1FAE5',
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80',
  },
  {
    number: '04',
    title: 'CRM & Business Systems',
    description:
      'Custom dashboards, CRM platforms and internal systems designed around the way your business actually works.',
    tags: ['CRM', 'Dashboards', 'APIs'],
    icon: LayoutDashboard,
    accent: '#F0FAF6',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
  },
]
export default function WhatWeBuild() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <ReactLenis root>
      <section
        ref={container}
        className="relative bg-bg text-text"
      >
        {/* Section Intro */}
        <div className="relative z-20 flex min-h-[70vh] items-center overflow-hidden px-6 py-24 sm:px-10 lg:px-20">
          {/* Soft emerald glows */}
          <div aria-hidden="true" className="pointer-events-none absolute -right-40 top-8 h-[26rem] w-[26rem] rounded-full bg-emerald-300/25 blur-3xl" />
          <div aria-hidden="true" className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-teal-200/25 blur-3xl" />

          {/* Background grid */}
          <div
            className="
              pointer-events-none
              absolute inset-0
              opacity-[0.45]
              [background-image:linear-gradient(to_right,#cfe5da_1px,transparent_1px),linear-gradient(to_bottom,#cfe5da_1px,transparent_1px)]
              [background-size:64px_64px]
              [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]
            "
          />

          <div className="relative mx-auto w-full max-w-7xl">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-brand" />

              <span className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
                What We Build
              </span>
            </div>

            <h2 className=" max-w-5xl text-[clamp(3rem,8vw,8rem)] font-medium  leading-[1] tracking-[-0.06em] " >
              Digital products
              <br />
              <span className="text-brand">built to move.</span>
            </h2>

            <div className="mt-10 flex max-w-2xl justify-between gap-8">
              <p className="text-base leading-7 text-muted sm:text-lg">
                We combine technology, design and automation to build digital
                systems that help businesses work better and grow faster.
              </p>

              
            </div>
          </div>
        </div>

        {/* Stacking Cards */}
        <div className="relative">
          {services.map((service, index) => {
            const targetScale = 1 - (services.length - index) * 0.045;

            return (
              <ServiceCard
                key={service.number}
                service={service}
                index={index}
                progress={scrollYProgress}
                range={[index * 0.2, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </div>
      </section>
    </ReactLenis>
  );
}

function ServiceCard({
  service,
  index,
  progress,
  range,
  targetScale,
}) {
  const cardRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1.15, 1]
  );

  const scale = useTransform(
    progress,
    range,
    [1, targetScale]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.15, 1],
    [0.65, 1, 1]
  );

  const Icon = service.icon;

  return (
    <div ref={cardRef}
      className="sticky top-20 flex h-screen items-center justify-center px-4 sm:px-8 lg:px-12" >
      <motion.article
        style={{
          scale,
          opacity,
          top: `calc(-4vh + ${index * 22}px)`,
          backgroundColor: service.accent,
        }}
        className="
          relative
          flex
          h-[570px]
          w-full
          max-w-7xl
          origin-top
          flex-col
          overflow-hidden
          rounded-[28px]
          border
          border-forest/10
          shadow-[0_25px_80px_rgba(5,59,51,0.10)]
          sm:h-[600px]
          lg:h-[620px]
        "
      >
        {/* Card Header */}
        <div className="flex items-center justify-between px-6 pt-6 sm:px-10 sm:pt-10">
          <span className="text-sm font-medium tracking-wider text-muted">
            / {service.number}
          </span>

          <span className="rounded-full border border-black/10 bg-white/60 px-4 py-2 text-xs font-medium uppercase tracking-wider text-forest/80">
            {service.title}
          </span>
        </div>

        {/* Content */}
        <div className="grid flex-1 grid-cols-1 gap-8 px-6 pb-6 pt-8 sm:px-10 sm:pb-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16">
          {/* Left */}
          <div className="flex h-full flex-col justify-between">
            <div>
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-black/10 bg-white/70">
                <Icon
                  size={25}
                  strokeWidth={1.6}
                />
              </div>

              <h3
                className="
                  max-w-xl
                  text-4xl
                  font-medium
                  leading-[1]
                  tracking-[-0.04em]
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                {service.title}
              </h3>

              <p className="mt-6 max-w-lg text-sm leading-6 text-muted sm:text-base sm:leading-7">
                {service.description}
              </p>
            </div>

            <div>
              <div className="mb-6 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-black/10 bg-white/60 px-3 py-1.5 text-xs text-forest/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a href="#service"  className="group inline-flex items-center gap-2 text-sm font-medium" >
                Explore service
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-forest text-white transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowUpRight size={15} />
                </span>
              </a>
            </div>
          </div>

          {/* Right Visual */}
     {/* Right Visual */}
<div className="relative h-[220px] overflow-hidden rounded-2xl border border-black/10 bg-white/40 sm:h-[280px] lg:h-full">
  <motion.div
    style={{ scale: imageScale }}
    className="absolute inset-0"
  >
    {/* Real service image */}
    <img
      src={service.image}
      alt={service.title}
      className="h-full w-full object-cover"
    />

    {/* Subtle image overlay */}
    <div className="absolute inset-0 bg-black/[0.08]" />

    {/* Soft grid overlay */}
    <div
      className="
        pointer-events-none
        absolute inset-0
        opacity-[0.18]
        [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
        [background-size:38px_38px]
      "
    />

    {/* Floating service icon — KEEPING YOUR EXISTING ANIMATION */}
    <motion.div
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className="
        absolute
        -right-5
        -top-5
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-2xl
        border
        border-black/10
        bg-white
        shadow-lg
      "
    >
      <Icon
        size={25}
        strokeWidth={1.5}
      />
    </motion.div>

    {/* Small floating detail */}
    <div
      className="
        absolute
        bottom-5
        left-5
        rounded-xl
        border
        border-white/30
        bg-white/80
        px-4
        py-2
        text-[10px]
        font-medium
        uppercase
        tracking-[0.15em]
        text-forest
        backdrop-blur-md
      "
    >
      {service.number} / {service.title}
    </div>
  </motion.div>
</div>
        </div>
      </motion.article>
    </div>
  );
}