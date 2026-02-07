import { ArrowRight01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import Image from 'next/image';

import { Button } from '@/components/ui/button';

import { HERO_DATA } from './data';

export function HeroSection() {
  return (
    <section
      id='hero'
      className='relative flex min-h-[90vh] items-center justify-center overflow-hidden sm:min-h-screen'
    >
      {/* Background image */}
      <Image
        src={HERO_DATA.backgroundImage}
        alt='Hero background'
        fill
        priority
        className='object-cover'
        quality={90}
      />

      {/* Overlay */}
      <div className='absolute inset-0 bg-black/50' />

      {/* Content */}
      <div className='relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8'>
        <h1
          className='font-abhaya-libre font-extrabold tracking-tight text-white'
          style={{
            fontSize: 'clamp(2.25rem, 5vw + 1rem, 4.5rem)',
            lineHeight: 1.1,
          }}
        >
          {HERO_DATA.title}
        </h1>

        <p
          className='mx-auto mt-6 max-w-2xl text-white/80'
          style={{ fontSize: 'clamp(1rem, 1.5vw + 0.5rem, 1.25rem)' }}
        >
          {HERO_DATA.subtitle}
        </p>

        <a href='#contact' className='mt-10 inline-block'>
          <Button className='gap-2 rounded-full bg-primary px-8 py-3 text-sm font-bold uppercase tracking-widest text-primary-foreground hover:bg-primary/90'>
            {HERO_DATA.cta}
            <HugeiconsIcon icon={ArrowRight01Icon} className='size-4' />
          </Button>
        </a>
      </div>
    </section>
  );
}
