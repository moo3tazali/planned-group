import {
  CheckmarkBadge04Icon,
  Clock02Icon,
  DollarCircleIcon,
  HeadsetIcon,
} from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

import { WHY_CHOOSE_US_DATA } from './data';

const ICON_MAP: Record<string, typeof CheckmarkBadge04Icon> = {
  'checkmark-badge': CheckmarkBadge04Icon,
  clock: Clock02Icon,
  'dollar-circle': DollarCircleIcon,
  headset: HeadsetIcon,
};

export function WhyChooseUsSection() {
  return (
    <section id='why-us' className='bg-primary/5 py-20 sm:py-28'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Section label */}
        <p className='text-center text-sm font-semibold uppercase tracking-widest text-primary'>
          {WHY_CHOOSE_US_DATA.sectionLabel}
        </p>

        {/* Title */}
        <h2
          className='mt-3 text-center font-abhaya-libre font-bold text-foreground'
          style={{ fontSize: 'clamp(1.75rem, 3vw + 0.5rem, 3rem)' }}
        >
          {WHY_CHOOSE_US_DATA.title}
        </h2>

        {/* Feature grid */}
        <div className='mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4'>
          {WHY_CHOOSE_US_DATA.items.map((item) => {
            const Icon = ICON_MAP[item.icon];
            return (
              <div
                key={item.title}
                className='flex flex-col items-center text-center'
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
                  className='mt-5 font-abhaya-libre font-bold text-foreground'
                  style={{
                    fontSize: 'clamp(1.063rem, 1.2vw + 0.5rem, 1.375rem)',
                  }}
                >
                  {item.title}
                </h3>
                <p className='mt-2 text-sm leading-relaxed text-muted-foreground'>
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
