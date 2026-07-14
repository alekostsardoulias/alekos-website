'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

export function FaqSection({
  heading,
  items,
}: {
  heading: string;
  items: FaqItem[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div>
      <h2 className="text-3xl font-semibold text-foreground mb-8">{heading}</h2>
      <div className="divide-y divide-white/[0.06]">
        {items.map((item, i) => (
          <div key={i}>
            <button
              onClick={() => toggle(i)}
              className="w-full flex items-center justify-between gap-4 py-5 text-left group transition-colors duration-200"
            >
              <span className="text-xl font-medium text-foreground group-hover:text-purple-300 transition-colors duration-200">
                {item.question}
              </span>
              <ChevronDown
                size={20}
                className={`shrink-0 text-muted group-hover:text-purple-400 transition-all duration-300 ${
                  openIndex === i ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                openIndex === i
                  ? 'grid-rows-[1fr] opacity-100'
                  : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <p className="text-lg text-muted leading-relaxed pb-5">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
