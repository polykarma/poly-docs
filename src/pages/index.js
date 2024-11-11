import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Translate from '@docusaurus/Translate';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Welcome`}
      description="A collaborative platform for Polytechnique Montreal's course content and resources">
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>
          <Translate>Welcome to PolyDocs</Translate>
        </h1>
        <p>
          <Translate>
            PolyDocs is a community-driven platform dedicated to gathering and organizing course notes, tutorials, and resources for students and educators at Polytechnique Montreal.
          </Translate>
        </p>

        <section style={{ marginTop: '2rem' }}>
          <h2>
            <Translate>What is PolyDocs?</Translate>
          </h2>
          <p>
            <Translate>
              This project aims to create a centralized repository of knowledge that is easily accessible and modifiable. It's our very own Wiki for Polytechnique, made by students, for students.
            </Translate>
          </p>
        </section>

        <section style={{ marginTop: '2rem' }}>
          <h2>
            <Translate>How to Contribute</Translate>
          </h2>
          <p>
            <Translate>
              We welcome contributions of all kinds—course content, tutorials, study guides, translations, and more! If you'd like to contribute:
            </Translate>
          </p>
          <ol style={{ textAlign: 'left', display: 'inline-block', marginTop: '1rem' }}>
            <li>
              <Translate>Fork the repository on </Translate><a href='https://github.com/polykarma/poly-docs' target='_blank'>GitHub</a>.
            </li>
            <li>
              <Translate>Create or edit Markdown files (.md) with your content.</Translate>
            </li>
            <li>
              <Translate>Submit a pull request (PR) for review.</Translate>
            </li>
          </ol>
          <p>
            <Translate>
              Once reviewed, your contributions will be added to PolyDocs, expanding this resource for everyone at Polytechnique.
            </Translate>
          </p>
        </section>

        <section style={{ marginTop: '2rem' }}>
          <h2>
            <Translate>Accepted Content</Translate>
          </h2>
          <p>
            <Translate>
              We're looking for a wide range of materials, including:
            </Translate>
          </p>
          <ul style={{ textAlign: 'left', display: 'inline-block', marginTop: '1rem' }}>
            <li><Translate>Course notes and summaries</Translate></li>
            <li><Translate>Tutorials and how-tos</Translate></li>
            <li><Translate>Practice questions and solutions</Translate></li>
            <li><Translate>Translations of course materials and site content</Translate></li>
            <li><Translate>Anything that might help your peers!</Translate></li>
          </ul>
          <p>
            <Translate>Explore, learn, and contribute to make this platform a valuable resource for the entire Polytechnique community!</Translate>
          </p>
        </section>
      </main>
    </Layout>
  );
}
