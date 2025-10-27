import React from 'react';
import { Link, Sparkles, Shield, QrCode, Upload, BadgeCheck } from 'lucide-react';

const steps = [
  {
    step: '1',
    title: 'Submit a Source',
    icon: <Link className="h-5 w-5 text-cyan-400" />,
    desc: 'Share a YouTube video, blog, book, or podcast. Optionally add notes or summaries.'
  },
  {
    step: '2',
    title: 'AI Topic Analysis',
    icon: <Sparkles className="h-5 w-5 text-cyan-400" />,
    desc: 'Open‑source LLMs extract concepts, expected skills, and difficulty level.'
  },
  {
    step: '3',
    title: 'Take the Assessment',
    icon: <Shield className="h-5 w-5 text-cyan-400" />,
    desc: 'Adaptive MCQs and practical tasks verify your understanding and depth.'
  },
  {
    step: '4',
    title: 'Get QR‑Verified',
    icon: <QrCode className="h-5 w-5 text-cyan-400" />,
    desc: 'Pass the test to receive a digital certificate with a unique QR code.'
  },
  {
    step: '5',
    title: 'Showcase a Project',
    icon: <Upload className="h-5 w-5 text-cyan-400" />,
    desc: 'Upload files or link GitHub/live demos to prove real‑world application.'
  },
  {
    step: '6',
    title: 'Peer Verification',
    icon: <BadgeCheck className="h-5 w-5 text-cyan-400" />,
    desc: 'Mentors/peers review your project. Verified projects display a badge on your profile.'
  }
];

const HowItWorks = () => {
  return (
    <section id="how" className="relative w-full bg-slate-900 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">How it works</h2>
          <p className="mt-4 text-slate-300">Simple steps from learning to verified proof and real projects.</p>
        </div>

        <ol className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s) => (
            <li key={s.step} className="relative rounded-2xl border border-white/10 bg-slate-800/40 p-6 backdrop-blur">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-400/10 ring-1 ring-cyan-400/30">
                  {s.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-xs font-semibold">{s.step}</span>
                    <h3 className="text-base font-semibold">{s.title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-slate-300">{s.desc}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default HowItWorks;
