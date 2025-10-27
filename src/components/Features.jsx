import React from 'react';
import { BookOpen, QrCode, Upload, Shield, BadgeCheck, Sparkles } from 'lucide-react';

const features = [
  {
    icon: <BookOpen className="h-6 w-6 text-cyan-400" />,
    title: 'Source‑Agnostic Learning',
    desc: 'Submit YouTube links, blogs, books, or podcasts. Rushd respects independent education.'
  },
  {
    icon: <Sparkles className="h-6 w-6 text-cyan-400" />,
    title: 'AI Topic Analysis',
    desc: 'Open‑source LLMs extract key concepts, skills, and difficulty to tailor your assessment.'
  },
  {
    icon: <Shield className="h-6 w-6 text-cyan-400" />,
    title: 'Adaptive Assessments',
    desc: 'Personalized quizzes and practical tasks validate real understanding, not memorization.'
  },
  {
    icon: <QrCode className="h-6 w-6 text-cyan-400" />,
    title: 'QR‑Verified Certificates',
    desc: 'Instant, tamper‑evident credentialing that links to a live verification page.'
  },
  {
    icon: <Upload className="h-6 w-6 text-cyan-400" />,
    title: 'Project Upload & Linking',
    desc: 'Add GitHub links or upload files to showcase real‑world application of your skills.'
  },
  {
    icon: <BadgeCheck className="h-6 w-6 text-cyan-400" />,
    title: 'Peer Verification',
    desc: 'Mentors and peers review projects to grant the “Verified by Rushd” badge.'
  }
];

const Features = () => {
  return (
    <section id="features" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Why Rushd</h2>
          <p className="mt-4 text-slate-300">
            A unified way to prove what you learned and what you can build — affordable, open, and credible.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur transition hover:bg-white/8"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 ring-1 ring-cyan-400/30">
                  {f.icon}
                </div>
                <h3 className="text-lg font-semibold">{f.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{f.desc}</p>
              <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-cyan-500/10 blur-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
