import React, { JSX } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function TreeflowUrl({protocol = 'https'}: {protocol?: string}): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  const treeflowUrl = siteConfig.customFields?.treeflowUrl as string;
  
  return (
    <span>{protocol}://{treeflowUrl}</span>
  );
}
