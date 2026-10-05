// Schools, newest first. Add a course each semester:
//   { code: 'CSE 214', name: 'Data Structures', term: 'Fall 2026' }
// Use the official course name. code, term, notes and gpa are optional.
// Courses listed in currently.js `taking` are looked up here by code.

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
      { code: 'CSE 113', name: 'Foundations of Computer Science I', term: 'Fall 2026' },
      { code: 'CSE 214', name: 'Data Structures', term: 'Fall 2026' },
      { code: 'AMS 210', name: 'Applied Linear Algebra', term: 'Fall 2026' },
      { name: 'Human Knowledge', term: 'Fall 2026' },
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
