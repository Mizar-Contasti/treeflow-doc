import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export function TreeflowUrlMdx() {
  const {siteConfig} = useDocusaurusContext();
  const treeflowUrl = siteConfig.customFields?.treeflowUrl;
  return <span>https://{treeflowUrl}</span>;
}

export function TreeflowUrlHttp() {
  const {siteConfig} = useDocusaurusContext();
  const treeflowUrl = siteConfig.customFields?.treeflowUrl;
  return <span>http://{treeflowUrl}</span>;
}

export function TreeflowUrlRaw() {
  const {siteConfig} = useDocusaurusContext();
  return <span>{siteConfig.customFields?.treeflowUrl}</span>;
}
