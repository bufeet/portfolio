import { Project, BlogPost } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'rail-scheduler',
    title: 'Autonomous Rail Scheduler',
    category: 'Logistical Control UI',
    year: '2025',
    description: 'An industrial-grade telemetry interface for managing automated cargo rail networks.',
    technologies: ['React', 'D3.js', 'WebSockets', 'Rust'],
    role: 'Lead UI/UX Architect',
    challenge: 'Operators were overwhelmed by dense, flickering tabular logs. The interface needed to display real-time physical track block states and velocity curves without inducing fatigue over 12-hour shifts.',
    solution: 'Designed a high-contrast, low-brightness dark canvas utilizing clean vector curves, color-coded block systems, and strict hierarchical typography to organize alert priority.',
    metrics: 'Reduced operator reaction latency by 42% and eliminated critical signaling misinterpretations during testing.'
  },
  {
    id: 'audio-synthesizer',
    title: 'Acoustic Pattern Synthesizer',
    category: 'Web Audio Tool',
    year: '2024',
    description: 'A professional-grade sound wave synthesizer running fully in the client browser.',
    technologies: ['Web Audio API', 'TypeScript', 'Tailwind CSS', 'Canvas'],
    role: 'Solo Developer & Designer',
    challenge: 'Typical web synthesis interfaces are cluttered, mimicking hardware knobs in ways that feel awkward on standard screen layouts.',
    solution: 'Created a direct-manipulation spectral playground where waveform characteristics are adjusted via fluid vector lines rather than skeuomorphic rotary dials.',
    metrics: 'Achieved sub-5ms rendering latency and supported continuous micro-tonal sound manipulation.'
  },
  {
    id: 'editorial-engine',
    title: 'Brutalist Editorial Engine',
    category: 'Publishing System',
    year: '2024',
    description: 'A static-site publishing framework built for typography-driven slow journalism.',
    technologies: ['Astro', 'TypeScript', 'Tailwind v4', 'MDX'],
    role: 'Core Contributor',
    challenge: 'Modern publication platforms load megabytes of JavaScript, degrading the reading experience on erratic mobile networks.',
    solution: 'Architected a zero-JS-by-default rendering system. Typography sizes dynamically scale using strict mathematical fluid equations, ensuring layout stability.',
    metrics: 'Achieved perfect 100/100 scores across all Lighthouse metrics with an initial bundle weight under 12KB.'
  },
  {
    id: 'monolithic-console',
    title: 'Monolithic Device Console',
    category: 'Hardware Control UI',
    year: '2023',
    description: 'A web-based supervisor interface for high-precision mechanical milling units.',
    technologies: ['React', 'Three.js', 'gRPC-Web', 'Tailwind'],
    role: 'Interactive Developer',
    challenge: 'Presenting high-dimensional coordinate paths (X, Y, Z, speed, tilt) in a two-dimensional interface without losing physical context.',
    solution: 'Designed an interactive orthopedic viewport using a customized orthographic projection. Emphasized clean lines and removed all non-essential visual details.',
    metrics: 'Enabled operators to identify coordinate path anomalies in real-time, reducing material waste by 18%.'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'quiet-software',
    title: 'The Case for Quiet Software',
    excerpt: 'Exploring why the modern web is noisy, and how we can design interfaces that respect cognitive limits and display quiet confidence.',
    date: 'June 18, 2025',
    readTime: '6 min read',
    category: 'Philosophy',
    content: `
The modern web is exhausting. Every interaction is an aggressive bid for our attention: flashing banners, auto-playing videos, insistent notifications, and hyper-kinetic animations that trigger simply because we scrolled a pixel. We have mistaken movement for engagement, and complexity for capability.

In contrast, **quiet software** has the courage to be still. It is built on the premise that an interface is a tool, not a spectacle. It speaks only when spoken to, stays out of the user's way, and values legibility over decoration.

### The Mechanics of Cognitive Calm
To design quiet software, we must adhere to several key principles:

1. **Information Density with Purpose**: We do not need massive margins of empty white space if our typography is well-structured. Good typography creates structural groups naturally, eliminating the need for decorative dividers, borders, and cards.
2. **Subtle Motion**: Animation should only serve to explain transition and direction. A page-to-page fade shows continuity. A staggering list item shows entry. Spinning icons, hover bounces, and flashy loaders are distractions.
3. **Restrained Color Palettes**: A high-contrast, limited palette (such as dark charcoal, cream, and a single accent color) creates a consistent, predictable hierarchy. When everything is muted, the single highlighted link becomes immediately obvious.

When we strip away the noise, we allow the user's focus to settle. We create interfaces that are not just easy to use, but restorative to interact with.
    `
  },
  {
    id: 'grid-and-anchor',
    title: 'Grids, Anchors, and Swiss Typography',
    excerpt: 'An analysis of Josef Müller-Brockmann’s grid systems and how their rigid logic translates to modern CSS Grid and custom typography.',
    date: 'April 12, 2025',
    readTime: '8 min read',
    category: 'Design Systems',
    content: `
In 1961, Josef Müller-Brockmann published *The Graphic Artist and his Design Problems*, formalizing the grid as a tool of strict structural discipline. To the Swiss modernists, the grid was not a cage; it was a mechanism of liberation. By committing to a mathematically consistent framework, they found absolute clarity.

Today, we have CSS Grid and modern flexible layout systems, yet many digital designs feel floaty and unanchored. Elements drift aimlessly across varied screen sizes.

### Translating Grid Logic to CSS
The key to Swiss grid design in the digital browser is the concept of **anchoring**. Every element on a page must align to a shared vertical or horizontal axis. 

- **The Axis of Baseline Alignment**: In print, the baseline grid keeps every line of text aligned. In CSS, we can achieve a similar effect by scaling line-heights in predictable ratios and utilizing standard layout units.
- **Strict Aspect Ratios**: Instead of arbitrary image heights, enforce precise proportions (e.g., 3:2, 16:9, or 1:1) to keep cards and visual modules unified.
- **Deliberate Offset**: A layout does not have to be symmetrical to be balanced. Swiss modernism thrives on asymmetry. Large display titles are pushed to the extreme margins, balanced by small blocks of dense, clean copy on the opposite side of the grid.

By imposing these restrictions upon ourselves, we create an underlying rhythm. The user may not consciously notice the grid, but they will instantly feel its structural confidence.
    `
  },
  {
    id: 'performance-accessibility',
    title: 'Performance is the Ultimate Accessibility',
    excerpt: 'Why high-performance design is an ethical obligation, not just a technical optimization. Design choices for slow, erratic networks.',
    date: 'January 29, 2025',
    readTime: '5 min read',
    category: 'Engineering',
    content: `
We often talk about performance in terms of conversion rates and SEO rankings. We analyze bundle sizes and latency metrics as if they were purely mathematical equations. But performance is fundamentally about human accessibility.

When we build a website that requires 4MB of JavaScript and dozens of heavy, uncompressed assets, we are locking out users on older hardware, unstable mobile towers, or metered data connections.

### Designing for Errant Latency
High-performance design starts at the layout phase, not in the compilation step:

1. **Rely on Local System Fonts or Lightweight Google Fonts**: Do not load multiple font weights if one or two can do the job. Set \`font-display: swap\` to ensure text is instantly readable during the initial load.
2. **Procedural SVGs over Heavy PNGs**: Vector illustrations defined in code are highly scalable, perfectly sharp, and weigh only a few hundred bytes.
3. **Avoid Dynamic Layout Shifts**: Set strict sizes on containers to prevent elements from leaping around as content loads. Nothing is more frustrating than a button that shifts just as you are about to tap it.

When we prioritize speed, we build trust. An app that loads instantly feels secure, competent, and deeply respectful of the user’s time.
    `
  }
];

export const MOTIVATIONS = {
  philosophy: 'Quiet engineering, architectural confidence, and typographic discipline.',
  intro: 'I am a designer-engineer who believes that software should be treated like architecture. It should be constructed with materials that last, respect its surrounding environment, and stand confidently without needing to shout.',
  points: [
    {
      title: 'Architectural Honesty',
      description: 'Interfaces should declare what they are. I avoid skeuomorphism, fake progress bars, simulated network status lines, or technical jargon introduced solely to look "complex". Clean code and direct UI components speak for themselves.'
    },
    {
      title: 'Swiss Modernism',
      description: 'Heavily inspired by the Swiss Style of the mid-20th century. High contrast, asymmetric layout, clean sans-serif typography, and mathematical grids. Let the layout rhythm do the talking, not decorative elements.'
    },
    {
      title: 'Structural Durability',
      description: 'Building software that persists. This means writing clean, well-typed code, optimizing bundle sizes to the absolute minimum, and ensuring that interfaces remain accessible and legible across all hardware.'
    }
  ],
  quote: {
    text: 'Good design is as little design as possible. Less, but better – because it concentrates on the essential aspects, and the products are not burdened with non-essentials.',
    author: 'Dieter Rams'
  }
};
