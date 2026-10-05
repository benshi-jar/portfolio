// Who you are and where people can find you.
// The phone number is intentionally left out of the site.

export const profile = {
  name: 'Assaf Ben-Shimon',
  tagline: 'Computer Science student at Stony Brook University, Honors College.',
  location: 'Stony Brook, NY',
  // A few sentences in your own voice. Edit freely.
  bio: [
    "I'm a first-year CS student who likes building things end to end: small desktop apps, games, and the data structures underneath them.",
    'Most of my work so far is in Java. I care about clean state management, careful edge cases, and tests that actually catch bugs.',
  ],
  // Shown as a single line in the Home section. Set to null to hide.
  outsideOfCode: 'Outside of code: chess, game development, cars, pickleball, debate and music.',
  email: 'benshimonassaf@gmail.com',
  links: {
    github: 'https://github.com/benshi-jar',
    linkedin: 'https://www.linkedin.com/in/assaf-ben-shimon-26b97426b',
  },
  // Add more as you make them; they show up in Contact. Leave the array empty if none.
  extraLinks: [
    // { label: 'Devpost', url: 'https://devpost.com/...' },
  ],
  resume: {
    file: '/resume.pdf', // replace public/resume.pdf to update
    updated: '2026-10',
  },
};
