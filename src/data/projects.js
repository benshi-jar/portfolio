// ─────────────────────────────────────────────────────────────
// Projects. To add one, copy this template into the array below.
// Only slug, title, summary and tech are required. Every other field
// can be left out entirely (or set to null) and the site handles it.
//
// {
//   slug: 'my-project',            // unique, lowercase-with-dashes; future URL: /projects/my-project
//   title: 'My Project',
//   summary: 'One sentence about what it is.',
//   tech: ['React', 'Node'],
//
//   // ── optional ──
//   highlights: ['What you built', 'What was hard'],
//   context: 'Personal Project',   // or 'CSE 214', 'Hackathon', ...
//   status: 'in-progress',         // 'complete' | 'in-progress' | 'archived'
//   featured: true,                // featured projects are listed first
//   date: '2026-10',               // 'YYYY' or 'YYYY-MM'
//   image: '/images/projects/my-project.png',   // file in public/images/projects/
//   imageAlt: 'Screenshot of ...',
//   github: 'https://github.com/benshi-jar/my-project',
//   demo: 'https://...',
//   details: {                     // reserved for a future project-detail page
//     overview: 'A longer write-up...',
//     sections: [{ heading: 'How it works', body: '...' }],
//   },
// },
// ─────────────────────────────────────────────────────────────

export const projects = [
  {
    slug: 'practice-ledger',
    title: 'Practice Ledger',
    summary:
      'A desktop tracker for coding sessions with filtering, sorting, editing, and total-time and longest-session analytics.',
    highlights: [
      'Gson JSON persistence with stable IDs and immutable sessions',
      'Input validation and automated save/load checks',
    ],
    tech: ['Java', 'Swing', 'Gson'],
    context: 'Personal Project',
    status: 'complete',
    featured: true,
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
    context: 'CSE 214',
    status: 'complete',
    featured: true,
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
    context: 'CSE 214',
    status: 'complete',
  },
];
