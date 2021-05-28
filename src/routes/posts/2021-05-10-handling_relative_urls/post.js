export default {
  title: `Handling Relative URLs for Redirects / Forwards`,
  tags: ['Web'],
  spoiler: "Remediating unvalidated forwards and redirects is almost always achieved by using an allow list of absolute URLs. Although what do you do if the absolute URL is not known ahead of time? This post digs into validating URLs for redirects / forwards using a relative path.",
  getContent: () => import('./document.mdx'),
}

