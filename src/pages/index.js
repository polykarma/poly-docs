import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Translate from '@docusaurus/Translate';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="A community resource for course notes at Polytechnique Montreal">
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>
          <Translate>Welcome to PolyDocs</Translate>
        </h1>
        <p>
          <Translate>
            This site serves as a community resource for students and educators at Polytechnique
            Montreal. Here, you’ll find organized notes, topics, and resources across various courses.
          </Translate>
        </p>
        <p>
          <Translate>
            Use the sidebar to navigate by course and topic.
          </Translate>
        </p>
      </main>
    </Layout>
  );
}
