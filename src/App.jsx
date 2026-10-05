import Nav from './components/layout/Nav.jsx';
import Footer from './components/layout/Footer.jsx';
import Home from './sections/Home.jsx';
import Projects from './sections/Projects.jsx';
import Experience from './sections/Experience.jsx';
import Education from './sections/Education.jsx';
import Skills from './sections/Skills.jsx';
import Currently from './sections/Currently.jsx';
import Resume from './sections/Resume.jsx';
import Contact from './sections/Contact.jsx';
import { sections } from './data/sections.js';

// Maps the ids in data/sections.js to their components.
const SECTION_COMPONENTS = {
  home: Home,
  projects: Projects,
  experience: Experience,
  education: Education,
  skills: Skills,
  currently: Currently,
  resume: Resume,
  contact: Contact,
};

const enabledSections = sections.filter((s) => s.enabled && SECTION_COMPONENTS[s.id]);

// Today the whole site is this one page. When project-detail pages are added,
// this becomes the "home" view and a small router chooses between it and
// a ProjectDetail view built from lib/projects.js + components/projects/*.
export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Nav sections={enabledSections} />
      <main id="main">
        {enabledSections.map(({ id }, index) => {
          const Component = SECTION_COMPONENTS[id];
          // Every other section after the hero gets a slightly different background band.
          return <Component key={id} tone={index % 2 === 0 ? 'alt' : undefined} />;
        })}
      </main>
      <Footer />
    </>
  );
}
