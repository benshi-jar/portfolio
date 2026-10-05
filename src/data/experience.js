// Jobs and leadership roles.
// kind: 'work' | 'leadership'   (each kind gets its own group in the Experience section)
// Dates are 'YYYY' or 'YYYY-MM'. end: null means "Present".
// For roles you return to (e.g. every tax season), use `periods` instead of start/end.
// tags and location are optional.

export const experience = [
  {
    id: 'windloch',
    kind: 'work',
    role: 'Production Assistant',
    org: 'Windloch LLC',
    location: 'Deer Park, NY',
    start: '2026-06',
    end: '2026-08',
    bullets: [
      'Assembled window frames and receptors using measurements, hand and power tools, gaskets, silicone and protective tape.',
      'Followed production procedures and inspected finished assemblies for measurement accuracy, quality and defects.',
    ],
  },
  {
    id: 'rossman-tax',
    kind: 'work',
    role: 'Staff Assistant',
    org: 'Rossman Tax Service Inc.',
    location: 'Port Jefferson Station, NY',
    periods: [
      { start: '2026-01', end: '2026-04' },
      { start: '2025-01', end: '2025-04' },
    ],
    bullets: [
      'Processed and maintained 1,000+ confidential client files in a high-volume tax office.',
      'Used ATOM and Onvio for client notes, portal activity, document uploads and confidential financial records.',
      'Handled client calls, requested missing documents, coordinated return pickups and scheduled appointments.',
    ],
    tags: ['ATOM', 'Onvio'],
  },
  {
    id: 'mu-alpha-theta',
    kind: 'leadership',
    role: 'Vice President',
    org: 'Mu Alpha Theta, Ward Melville High School',
    location: 'East Setauket, NY',
    start: '2024',
    end: '2026',
    bullets: [
      'As vice president (2025–2026), coordinated events and led development of a student math tutoring initiative.',
      'Worked with fellow officers to connect students with peer tutors and resources.',
    ],
  },
  {
    id: 'cteen',
    kind: 'leadership',
    role: 'Chapter Leader',
    org: 'CTeen, Village Chabad Stony Brook',
    location: 'Stony Brook, NY',
    start: '2022',
    end: '2026',
    bullets: [
      'As chapter leader (2024–2026), helped lead about 30 teens and collaborated on chapter events.',
      'Spoke to groups and supported outreach, event planning and member engagement.',
    ],
  },
  {
    id: 'wm-cs-club',
    kind: 'leadership',
    role: 'Member',
    org: 'Ward Melville Computer Science Club',
    location: 'East Setauket, NY',
    start: '2023',
    end: '2026',
    bullets: [
      'Represented Ward Melville at the UPenn PClassic programming competition.',
      'Solved timed programming problems as a team using algorithmic reasoning and debugging.',
    ],
  },
];
