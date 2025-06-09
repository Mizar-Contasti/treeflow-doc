import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function AppUrl({ children = 'TreeFlow' }) {
  const {siteConfig} = useDocusaurusContext();
  const treeflowUrl = siteConfig.customFields?.treeflowUrl || 'tf.botsmexico.com';
  
  return (
    <a href={`https://${treeflowUrl}`} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
