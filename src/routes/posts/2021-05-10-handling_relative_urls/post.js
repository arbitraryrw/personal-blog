export default {
  title: `Handling Relative URLs for Redirect / Forwards`,
  tags: ['Web'],
  spoiler: "Remediating unvalidated forwards and redirects is almost always achieved by using an allow list of complete URLs. However, what do you do if the complete URL cannot be determined ahead of time? Unfortunately the default solution to the problem does not apply to every corner case. This post digs into validating URLs for redirects / forwards using a relative path.",
  getContent: () => import('./document.mdx'),
}

