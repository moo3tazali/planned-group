import { ArrowRight01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

import { Button } from '@/components/ui/button';

import { CTA_DATA } from './data';

export function CtaSection() {
  return (
    <section id='contact' className='py-20 sm:py-28'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 items-center gap-12 lg:grid-cols-2'>
          {/* Text content */}
          <div>
            <h2
              className='font-abhaya-libre font-bold text-foreground'
              style={{ fontSize: 'clamp(1.75rem, 3vw + 0.5rem, 3rem)' }}
            >
              {CTA_DATA.title}
            </h2>
            <p
              className='mt-6 leading-relaxed text-muted-foreground'
              style={{ fontSize: 'clamp(0.938rem, 1vw + 0.5rem, 1.125rem)' }}
            >
              {CTA_DATA.description}
            </p>
            <a href='#contact' className='mt-8 inline-block'>
              <Button className='gap-2 rounded-full bg-primary px-8 py-3 text-sm font-bold uppercase tracking-widest text-primary-foreground hover:bg-primary/90'>
                {CTA_DATA.cta}
                <HugeiconsIcon icon={ArrowRight01Icon} className='size-4' />
              </Button>
            </a>
          </div>

          {/* Image placeholder */}
          <div className='aspect-4/3 overflow-hidden rounded-2xl bg-muted'>
            <div className='flex size-full items-center justify-center text-sm text-muted-foreground'>
              Contact Image
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
