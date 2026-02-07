// ---------------------------------------------------------------------------
// Landing-page constant data
// Every piece of visible text lives here so it can later be fetched from a
// local SQLite DB (or any other data source) without touching component files.
// ---------------------------------------------------------------------------

/* ------------------------------------------------------------------ types */

export interface NavLink {
  label: string;
  href: string;
}

export interface HeroData {
  title: string;
  subtitle: string;
  cta: string;
  backgroundImage: string;
}

export interface AboutData {
  sectionLabel: string;
  title: string;
  description: string;
  images: { src: string; alt: string }[];
}

export interface StatItem {
  icon: string; // hugeicons icon name identifier
  value: string;
  label: string;
}

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
}

export interface ServicesData {
  sectionLabel: string;
  title: string;
  items: ServiceItem[];
}

export interface ProjectItem {
  image: string;
  title: string;
  description: string;
  category: string;
}

export interface ProjectsData {
  sectionLabel: string;
  categories: string[];
  items: ProjectItem[];
}

export interface WhyChooseUsItem {
  icon: string;
  title: string;
  description: string;
}

export interface WhyChooseUsData {
  sectionLabel: string;
  title: string;
  items: WhyChooseUsItem[];
}

export interface CtaData {
  title: string;
  description: string;
  cta: string;
  image: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterData {
  description: string;
  quickLinks: FooterLink[];
  services: FooterLink[];
  contact: {
    address: string;
    phone: string;
    email: string;
  };
  socials: { icon: string; href: string; label: string }[];
  copyright: string;
}

/* ------------------------------------------------------------------ data */

export const NAV_LINKS: NavLink[] = [
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
] as const;

export const HERO_DATA: HeroData = {
  title: 'From Concept to Completion',
  subtitle:
    'Delivering high-quality construction, façade, and interior solutions with precision, innovation, and reliability',
  cta: 'CONTACT US',
  backgroundImage: '/hero-background.jpg',
};

export const ABOUT_DATA: AboutData = {
  sectionLabel: 'About Us',
  title: 'Creating & Building Spaces',
  description:
    'We are a leading construction company specializing in façade solutions, interior fit-outs, and general contracting. With years of experience and a commitment to quality, we bring your vision to life — from concept to completion.',
  images: [
    { src: '/placeholder-about-1.jpg', alt: 'Modern interior design' },
    { src: '/placeholder-about-2.jpg', alt: 'Luxury living room' },
  ],
};

export const STATS_DATA: StatItem[] = [
  { icon: 'briefcase', value: '50+', label: 'Our Projects' },
  { icon: 'user-group', value: '100+', label: 'Our Clients' },
  { icon: 'building', value: '25+', label: 'Expert Team' },
  { icon: 'shield-check', value: '10+', label: 'Years Experience' },
];

export const SERVICES_DATA: ServicesData = {
  sectionLabel: 'Our Services',
  title: 'Design That Inspires',
  items: [
    {
      icon: 'paint-brush',
      title: 'Façade Solutions',
      description:
        'Premium exterior cladding and curtain wall systems that combine aesthetics with performance for lasting impressions.',
    },
    {
      icon: 'armchair',
      title: 'Interior Fit-Out',
      description:
        'Complete interior design and build services — from concept development to final handover, tailored to your needs.',
    },
    {
      icon: 'hard-hat',
      title: 'General Contracting',
      description:
        'End-to-end construction management ensuring projects are delivered on time, within budget, and to the highest standards.',
    },
  ],
};

export const PROJECTS_DATA: ProjectsData = {
  sectionLabel: 'Featured Projects',
  categories: ['Industrial Milestones', 'Exterior', 'Interior', 'Fit Out'],
  items: [
    {
      image: '/placeholder-project-1.jpg',
      title: 'Elite Business Tower',
      description:
        'A modern commercial tower featuring a state-of-the-art glass façade system and premium interior finishes.',
      category: 'Exterior',
    },
    {
      image: '/placeholder-project-2.jpg',
      title: 'Sunrise Residential Complex',
      description:
        'Luxury residential development with bespoke interiors and contemporary façade design.',
      category: 'Interior',
    },
    {
      image: '/placeholder-project-3.jpg',
      title: 'Central Plaza Mall',
      description:
        'Large-scale retail space with modern fit-out solutions and striking exterior finishes.',
      category: 'Fit Out',
    },
    {
      image: '/placeholder-project-4.jpg',
      title: 'Grand Hotel Renovation',
      description:
        'Full renovation of a five-star hotel including façade upgrade, interior redesign, and MEP works.',
      category: 'Interior',
    },
    {
      image: '/placeholder-project-5.jpg',
      title: 'Industrial Warehouse Complex',
      description:
        'State-of-the-art industrial facility with optimised layout and durable construction.',
      category: 'Industrial Milestones',
    },
    {
      image: '/placeholder-project-6.jpg',
      title: 'Skyview Office Park',
      description:
        'Premium office complex with energy-efficient façade and contemporary work environments.',
      category: 'Exterior',
    },
  ],
};

export const WHY_CHOOSE_US_DATA: WhyChooseUsData = {
  sectionLabel: 'Why Choose Us',
  title: 'Your Partner in Construction Excellence',
  items: [
    {
      icon: 'checkmark-badge',
      title: 'Quality Craftsmanship',
      description:
        'We use only premium materials and employ skilled professionals to deliver superior results.',
    },
    {
      icon: 'clock',
      title: 'On-Time Delivery',
      description:
        'Our efficient project management ensures every milestone is met on schedule.',
    },
    {
      icon: 'dollar-circle',
      title: 'Competitive Pricing',
      description:
        'Get the best value without compromising on quality through our optimised processes.',
    },
    {
      icon: 'headset',
      title: 'Dedicated Support',
      description:
        'From initial consultation to project handover, our team is with you every step of the way.',
    },
  ],
};

export const CTA_DATA: CtaData = {
  title: "Let's Build Your Vision Together",
  description:
    'Ready to start your next project? Contact us today and let our team of experts turn your ideas into reality.',
  cta: 'GET IN TOUCH',
  image: '/placeholder-cta.jpg',
};

export const FOOTER_DATA: FooterData = {
  description:
    'Delivering high-quality construction, façade, and interior solutions with precision, innovation, and reliability.',
  quickLinks: [
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ],
  services: [
    { label: 'Façade Solutions', href: '#services' },
    { label: 'Interior Fit-Out', href: '#services' },
    { label: 'General Contracting', href: '#services' },
  ],
  contact: {
    address: 'Business Bay, Dubai, UAE',
    phone: '+971 50 123 4567',
    email: 'info@plannedgroup.com',
  },
  socials: [
    { icon: 'facebook', href: '#', label: 'Facebook' },
    { icon: 'instagram', href: '#', label: 'Instagram' },
    { icon: 'linkedin', href: '#', label: 'LinkedIn' },
    { icon: 'twitter', href: '#', label: 'X / Twitter' },
  ],
  copyright: `© ${new Date().getFullYear()} Planned Group. All rights reserved.`,
};
