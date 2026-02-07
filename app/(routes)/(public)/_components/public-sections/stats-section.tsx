import {
  Briefcase02Icon,
  Building01Icon,
  SecurityCheckIcon,
  UserGroupIcon,
} from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

import { STATS_DATA } from './data';

/* Map the icon string from data to actual icon components */
const ICON_MAP: Record<string, typeof Briefcase02Icon> = {
  briefcase: Briefcase02Icon,
  'user-group': UserGroupIcon,
  building: Building01Icon,
  'shield-check': SecurityCheckIcon,
};

export function StatsSection() {
  return (
    <section className='bg-card py-16'>
      <div className='mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 md:grid-cols-4 lg:px-8'>
        {STATS_DATA.map((stat) => {
          const Icon = ICON_MAP[stat.icon];
          return (
            <div
              key={stat.label}
              className='flex flex-col items-center gap-3 text-center'
            >
              {Icon && (
                <div className='flex size-14 items-center justify-center rounded-xl bg-primary/10'>
                  <HugeiconsIcon icon={Icon} className='size-7 text-primary' />
                </div>
              )}
              <span
                className='font-abhaya-libre font-bold text-foreground'
                style={{ fontSize: 'clamp(1.5rem, 2.5vw + 0.5rem, 2.5rem)' }}
              >
                {stat.value}
              </span>
              <span className='text-sm text-muted-foreground'>
                {stat.label}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
