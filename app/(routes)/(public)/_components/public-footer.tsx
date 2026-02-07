import {
  Facebook01Icon,
  InstagramIcon,
  Linkedin01Icon,
  Mail01Icon,
  MapsLocation01Icon,
  NewTwitterIcon,
  SmartPhone01Icon,
} from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

import { Logo } from '@/icons/logo';

import { FOOTER_DATA } from './public-sections/data';

const SOCIAL_ICON_MAP: Record<string, typeof Facebook01Icon> = {
  facebook: Facebook01Icon,
  instagram: InstagramIcon,
  linkedin: Linkedin01Icon,
  twitter: NewTwitterIcon,
};

export function PublicFooter() {
  return (
    <footer className='bg-foreground text-background'>
      <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4'>
          {/* Brand column */}
          <div className='space-y-4'>
            <Logo className='h-8 w-auto brightness-0 invert' />
            <p className='text-sm leading-relaxed text-background/70'>
              {FOOTER_DATA.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='font-abhaya-libre text-lg font-bold'>Quick Links</h4>
            <ul className='mt-4 space-y-2'>
              {FOOTER_DATA.quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className='text-sm text-background/70 transition-colors hover:text-background'
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className='font-abhaya-libre text-lg font-bold'>Services</h4>
            <ul className='mt-4 space-y-2'>
              {FOOTER_DATA.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className='text-sm text-background/70 transition-colors hover:text-background'
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className='font-abhaya-libre text-lg font-bold'>Contact</h4>
            <ul className='mt-4 space-y-3'>
              <li className='flex items-start gap-3'>
                <HugeiconsIcon
                  icon={MapsLocation01Icon}
                  className='mt-0.5 size-4 shrink-0 text-primary'
                />
                <span className='text-sm text-background/70'>
                  {FOOTER_DATA.contact.address}
                </span>
              </li>
              <li className='flex items-start gap-3'>
                <HugeiconsIcon
                  icon={SmartPhone01Icon}
                  className='mt-0.5 size-4 shrink-0 text-primary'
                />
                <span className='text-sm text-background/70'>
                  {FOOTER_DATA.contact.phone}
                </span>
              </li>
              <li className='flex items-start gap-3'>
                <HugeiconsIcon
                  icon={Mail01Icon}
                  className='mt-0.5 size-4 shrink-0 text-primary'
                />
                <span className='text-sm text-background/70'>
                  {FOOTER_DATA.contact.email}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider + bottom row */}
        <div className='mt-12 border-t border-background/10 pt-8'>
          <div className='flex flex-col items-center justify-between gap-4 sm:flex-row'>
            <p className='text-sm text-background/50'>
              {FOOTER_DATA.copyright}
            </p>
            <div className='flex gap-4'>
              {FOOTER_DATA.socials.map((social) => {
                const Icon = SOCIAL_ICON_MAP[social.icon];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className='text-background/50 transition-colors hover:text-primary'
                  >
                    {Icon && <HugeiconsIcon icon={Icon} className='size-5' />}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
