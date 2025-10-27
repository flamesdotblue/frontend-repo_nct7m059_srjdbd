import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, CheckCircle, QrCode } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/50 to-slate-950/80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_200px_at_50%_10%,rgba(56,189,248,0.25),transparent)]" />

      {/* Content */}
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pt-28 pb-16 sm:pt-32 lg:pt-40">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300 ring-1 ring-inset ring-cyan-400/30">
              <CheckCircle className="h-3.5 w-3.5" />
              Verified Learning for Self‑Taught Builders
            </span>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              Rushd — The Right Path to Verified Learning
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
              Prove what you learn from anywhere. AI analyzes your source, generates an assessment, and issues a QR‑verified certificate. Showcase real projects linked to your verified skills.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#how"
                className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-4 py-2.5 text-sm font-medium text-slate-900 shadow-lg shadow-cyan-500/25 transition hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300"
              >
                <Rocket className="h-4 w-4" /> Start the Journey
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2.5 text-sm font-medium text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                <QrCode className="h-4 w-4" /> Explore Features
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
