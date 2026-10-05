// Schools, newest first. Add a course each semester:
//   { name: 'Data Structures', code: 'CSE 214', term: 'Fall 2026' }
// code, term, notes and gpa are optional.

export const education = [
  {
    id: 'stony-brook',
    school: 'Stony Brook University',
    detail: 'Honors College · B.S. Computer Science',
    location: 'Stony Brook, NY',
    start: '2026',
    end: '2030',
    expected: true,
    courses: [
      { name: 'Data Structures', code: 'CSE 214' },
      { name: 'Mathematical Foundations of CS' },
      { name: 'Linear Algebra' },
      { name: 'Human Knowledge' },
    ],
  },
  {
    id: 'ward-melville',
    school: 'Ward Melville High School',
    location: 'East Setauket, NY',
    end: '2026',
    gpa: '4.0',
  },
];
