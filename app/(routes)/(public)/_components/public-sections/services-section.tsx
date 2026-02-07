import {
  LegalHammerIcon,
  PaintBrush04Icon,
  SofaSingleIcon,
} from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

import { SERVICES_DATA } from './data';

const ICON_MAP: Record<string, typeof PaintBrush04Icon> = {
  'paint-brush': PaintBrush04Icon,
  armchair: SofaSingleIcon,
  'hard-hat': LegalHammerIcon,
};

export function ServicesSection() {
  return (
    <section id='services' className='py-20 sm:py-28'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Section label */}
        <p className='text-center text-sm font-semibold uppercase tracking-widest text-primary'>
          {SERVICES_DATA.sectionLabel}
        </p>

        {/* Title */}
        <h2
          className='mt-3 text-center font-abhaya-libre font-bold text-foreground'
          style={{ fontSize: 'clamp(1.75rem, 3vw + 0.5rem, 3rem)' }}
        >
          {SERVICES_DATA.title}
        </h2>

        {/* Service cards */}
        <div className='mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {SERVICES_DATA.items.map((service) => {
            const Icon = ICON_MAP[service.icon];
            return (
              <div
                key={service.title}
                className='group rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-lg'
              >
                {Icon && (
                  <div className='flex size-14 items-center justify-center rounded-xl bg-primary/10'>
                    <HugeiconsIcon
                      icon={Icon}
                      className='size-7 text-primary'
                    />
                  </div>
                )}
                <h3
                  className='mt-6 font-abhaya-libre font-bold text-foreground'
                  style={{
                    fontSize: 'clamp(1.125rem, 1.5vw + 0.5rem, 1.5rem)',
                  }}
                >
                  {service.title}
                </h3>
                <p className='mt-3 leading-relaxed text-muted-foreground'>
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
