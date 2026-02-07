'use client';

import {
  ArrowRight01Icon,
  Cancel01Icon,
  Menu01Icon,
} from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Logo } from '@/icons/logo';
import { cn } from '@/lib/utils';

import { NAV_LINKS } from './public-sections/data';

export function PublicHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className='fixed inset-x-0 top-0 z-50 bg-background/80 backdrop-blur-md'>
      <div className='mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8'>
        {/* Logo */}
        <a href={'#hero'} className='shrink-0'>
          <Logo className='h-8 w-auto sm:h-10' />
        </a>

        {/* Desktop nav */}
        <nav className='hidden items-center gap-8 md:flex'>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className='text-sm font-medium text-foreground/70 transition-colors hover:text-foreground'
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a href='#contact' className='hidden md:block'>
          <Button
            variant='outline'
            className='gap-2 rounded-full border-primary px-5 py-2 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground'
          >
            LET&apos;S CONTACT
            <HugeiconsIcon icon={ArrowRight01Icon} className='size-4' />
          </Button>
        </a>

        {/* Mobile menu toggle */}
        <button
          type='button'
          className='inline-flex items-center justify-center md:hidden'
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label='Toggle menu'
        >
          <HugeiconsIcon
            icon={mobileOpen ? Cancel01Icon : Menu01Icon}
            className='size-6 text-foreground'
          />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          'overflow-hidden transition-all duration-300 md:hidden',
          mobileOpen ? 'max-h-96' : 'max-h-0',
        )}
      >
        <nav className='flex flex-col gap-4 px-6 pb-6'>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className='text-base font-medium text-foreground/70 transition-colors hover:text-foreground'
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href='#contact' onClick={() => setMobileOpen(false)}>
            <Button
              variant='outline'
              className='w-full gap-2 rounded-full border-primary px-5 py-2 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground'
            >
              LET&apos;S CONTACT
              <HugeiconsIcon icon={ArrowRight01Icon} className='size-4' />
            </Button>
          </a>
        </nav>
      </div>
    </header>
  );
}
