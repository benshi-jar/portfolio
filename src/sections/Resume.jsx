import Section from '../components/layout/Section.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import LinkButton from '../components/ui/LinkButton.jsx';
import { DownloadIcon, FileIcon } from '../components/ui/icons.jsx';
import { profile } from '../data/profile.js';
import { formatDate } from '../lib/dates.js';

export default function Resume({ tone }) {
  const { file, updated } = profile.resume;
  const fileName = `${profile.name.replace(/\s+/g, '_')}_Resume.pdf`;

  return (
    <Section
      id="resume"
      title="Resume"
      intro={`A one-page summary of everything above${updated ? `, last updated ${formatDate(updated)}` : ''}.`}
      tone={tone}
    >
      <Reveal style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-3)' }}>
        <LinkButton href={file} variant="primary" external aria-label="View resume PDF (opens in a new tab)">
          <FileIcon /> View PDF
        </LinkButton>
        <LinkButton href={file} download={fileName}>
          <DownloadIcon /> Download
        </LinkButton>
      </Reveal>
    </Section>
  );
}
