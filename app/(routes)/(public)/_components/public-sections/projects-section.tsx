'use client';

import { useState } from 'react';

import { cn } from '@/lib/utils';

import { PROJECTS_DATA } from './data';

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState(
    PROJECTS_DATA.categories[0],
  );

  const filteredProjects =
    activeCategory === PROJECTS_DATA.categories[0]
      ? PROJECTS_DATA.items // "Industrial Milestones" shows all
      : PROJECTS_DATA.items.filter((p) => p.category === activeCategory);

  return (
    <section id='projects' className='bg-card py-20 sm:py-28'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Section label */}
        <p className='text-center text-sm font-semibold uppercase tracking-widest text-primary'>
          {PROJECTS_DATA.sectionLabel}
        </p>

        {/* Tabs */}
        <div className='mt-8 flex flex-wrap justify-center gap-3'>
          {PROJECTS_DATA.categories.map((cat) => (
            <button
              key={cat}
              type='button'
              onClick={() => setActiveCategory(cat)}
              className={cn(
                'rounded-full px-5 py-2 text-sm font-medium transition-colors',
                activeCategory === cat
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80',
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className='mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className='group overflow-hidden rounded-2xl border border-border bg-background transition-shadow hover:shadow-lg'
            >
              {/* Image placeholder */}
              <div className='aspect-4/3 bg-muted'>
                <div className='flex size-full items-center justify-center text-sm text-muted-foreground'>
                  {project.title}
                </div>
              </div>

              {/* Content */}
              <div className='p-6'>
                <h3
                  className='font-abhaya-libre font-bold text-foreground'
                  style={{
                    fontSize: 'clamp(1.063rem, 1.2vw + 0.5rem, 1.375rem)',
                  }}
                >
                  {project.title}
                </h3>
                <p className='mt-2 text-sm leading-relaxed text-muted-foreground'>
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
