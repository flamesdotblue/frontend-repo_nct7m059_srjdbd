import React from 'react';
import { Rocket, Star } from 'lucide-react';

const CTA = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-slate-900 to-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-8 backdrop-blur">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <h3 className="text-2xl font-semibold">Prototype Rushd today</h3>
              <p className="mt-2 max-w-2xl text-slate-300">
                Kickstart a portfolio‑ready experience: submit a source, take an adaptive quiz, get your QR certificate, and showcase a project — all in one flow.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="#features"
                className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-4 py-2.5 text-sm font-medium text-slate-900 shadow-lg shadow-cyan-500/25 transition hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300"
              >
                <Rocket className="h-4 w-4" /> Prototype this App
              </a>
              <a
                href="#how"
                className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2.5 text-sm font-medium text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                <Star className="h-4 w-4" /> See the Flow
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
