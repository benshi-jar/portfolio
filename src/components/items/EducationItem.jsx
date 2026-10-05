import { formatDate, formatRange } from '../../lib/dates.js';
import './Entry.css';

export default function EducationItem({ item }) {
  const dates = item.start
    ? formatRange(item.start, item.end, { expected: item.expected })
    : `Class of ${formatDate(item.end)}`;

  return (
    <article className="entry">
      <div className="entry__when">
        <span>{dates}</span>
        {item.location && <span className="entry__where">{item.location}</span>}
      </div>
      <div className="entry__body">
        <h3 className="entry__title">{item.school}</h3>
        {(item.detail || item.gpa) && (
          <p className="entry__detail">{[item.detail, item.gpa && `GPA ${item.gpa}`].filter(Boolean).join(' · ')}</p>
        )}
        {item.notes && <p className="entry__notes">{item.notes}</p>}

        {item.courses?.length > 0 && (
          <div className="entry__courses">
            <h4 className="eyebrow entry__subheading">Coursework</h4>
            <ul className="course-list">
              {item.courses.map((course) => (
                <li key={course.code ?? course.name} className="course">
                  <span className="course__code">{course.code ?? '—'}</span>
                  <span>{course.name}</span>
                  {course.term && <span className="course__term">{course.term}</span>}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  );
}
