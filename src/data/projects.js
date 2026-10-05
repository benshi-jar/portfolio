// ─────────────────────────────────────────────────────────────
// Projects. To add one, copy this template into the array below.
// Only slug, title, summary and tech are required. Every other field
// can be left out entirely and the site handles it.
//
// {
//   slug: 'my-project',            // unique, lowercase-with-dashes; future URL: /projects/my-project
//   title: 'My Project',
//   summary: 'One or two sentences about what it is.',
//   tech: ['React', 'Node'],
//
//   // ── optional ──
//   tagline: 'Short pitch shown on featured cards',
//   highlights: ['What you built', 'What was hard'],
//   category: 'personal',          // 'personal' | 'coursework'  (powers the filters)
//   course: 'CSE 214',             // for coursework; shown as the card label
//   context: 'Hackathon',          // optional label override
//   languages: ['Java'],           // filter chips; worked out from `tech` if left out
//   status: 'in-progress',         // 'complete' | 'in-progress' | 'archived'
//   featured: true,                // large card at the top of Projects
//   date: '2026-10',               // 'YYYY' or 'YYYY-MM'
//   github: 'https://github.com/benshi-jar/my-project',
//   demo: 'https://...',
//   images: [                      // files go in public/images/projects/; first one is the card image
//     { src: '/images/projects/my-project.png', alt: 'What the screenshot shows', caption: '...' },
//   ],
//   details: {                     // for a future /projects/my-project page
//     overview: 'A longer write-up...',
//     architecture: { image: '/images/projects/my-project-arch.png', caption: '...' },
//     sections: [{ heading: 'How it works', body: '...' }],
//     challenges: ['...'],
//     lessons: ['...'],
//   },
// },
// ─────────────────────────────────────────────────────────────

export const projects = [
  {
    slug: 'claim-investigator',
    title: 'Claim Investigator',
    tagline: 'Investigate claims, not verdicts.',
    summary:
      'A Chrome extension that lets you highlight a claim on any webpage and investigate it with external evidence, source tracing, context and uncertainty, instead of relying on an AI-generated verdict alone.',
    highlights: [
      'Highlight a claim on any page to start an investigation',
      'Surfaces evidence, sources and uncertainty rather than a single verdict',
    ],
    tech: ['JavaScript', 'HTML', 'CSS', 'Chrome Extension APIs'],
    category: 'personal',
    status: 'in-progress',
    featured: true,
    github: 'https://github.com/benshi-jar/claim-investigator',
    // No screenshot yet; the card shows a placeholder frame until one is added here.
  },
  {
    slug: 'practice-ledger',
    title: 'Practice Ledger',
    tagline: 'A desktop log for deliberate coding practice.',
    summary:
      'A desktop tracker for coding sessions with filtering, sorting, editing, and total-time and longest-session analytics.',
    highlights: [
      'Gson JSON persistence with stable IDs and immutable sessions',
      'Input validation and automated save/load checks',
    ],
    tech: ['Java', 'Swing', 'Gson'],
    category: 'personal',
    status: 'complete',
    featured: true,
    github: 'https://github.com/benshi-jar/practice-ledger',
    images: [
      {
        src: '/images/projects/practice-ledger.png',
        alt: 'Practice Ledger window showing a table of four coding sessions with topic and minutes, and totals at the bottom',
        width: 883,
        height: 559,
      },
    ],
  },
  {
    slug: 'block-tracer',
    title: 'Block Tracer',
    summary:
      'Parses C source files with a stack of nested blocks to track variable declarations and initial values.',
    highlights: [
      'Variable shadowing and scoped lookup',
      'Custom print directives and JUnit 5 edge-case tests',
    ],
    tech: ['Java', 'Stack ADT', 'JUnit 5'],
    category: 'coursework',
    course: 'CSE 214',
    status: 'complete',
  },
  {
    slug: 'wordle',
    title: 'Wordle Game',
    summary:
      'A complete Wordle-style desktop game with custom graphics, keyboard input and game-state logic.',
    highlights: [
      'Two-pass duplicate-letter evaluation',
      'Tile and keyboard feedback, win/loss tracking',
    ],
    tech: ['Java', 'Swing'],
    category: 'coursework',
    context: 'AP Computer Science A Final Project',
    status: 'complete',
  },
  {
    slug: 'music-playlist',
    title: 'Music Playlist',
    summary:
      'A playlist backed by a doubly linked list, with insertion, removal and traversal in both directions.',
    highlights: ['Previous/next, shuffle and WAV playback', 'Careful pointer updates and edge cases'],
    tech: ['Java', 'Doubly Linked Lists'],
    category: 'coursework',
    course: 'CSE 214',
    status: 'complete',
  },
];
