import { ABOUT_DATA } from './data';

export function AboutSection() {
  return (
    <section id='about' className='py-20 sm:py-28'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Section label */}
        <p className='text-center text-sm font-semibold uppercase tracking-widest text-primary'>
          {ABOUT_DATA.sectionLabel}
        </p>

        {/* Title */}
        <h2
          className='mt-3 text-center font-abhaya-libre font-bold text-foreground'
          style={{ fontSize: 'clamp(1.75rem, 3vw + 0.5rem, 3rem)' }}
        >
          {ABOUT_DATA.title}
        </h2>

        {/* Description */}
        <p
          className='mx-auto mt-6 max-w-3xl text-center leading-relaxed text-muted-foreground'
          style={{ fontSize: 'clamp(0.938rem, 1vw + 0.5rem, 1.125rem)' }}
        >
          {ABOUT_DATA.description}
        </p>

        {/* Images */}
        <div className='mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2'>
          {ABOUT_DATA.images.map((img) => (
            <div
              key={img.alt}
              className='aspect-4/3 overflow-hidden rounded-2xl bg-muted'
            >
              {/* Placeholder — swap to Next/Image when real assets are ready */}
              <div className='flex size-full items-center justify-center text-sm text-muted-foreground'>
                {img.alt}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
