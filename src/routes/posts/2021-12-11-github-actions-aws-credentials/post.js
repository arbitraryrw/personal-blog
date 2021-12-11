export default {
  title: `Ephemeral AWS Credentials in Github Actions`,
  tags: ['Amazon Web Services (AWS)'],
  spoiler: "Github provides a built-in mechanism to automate development workflows through Github Actions. Integrating workflows with AWS services is a common use case, however, many tutorials suggest the path of least resistance - introducing sharp edges. This post presents a CDK application that is deployed to through Github Actions using ephemeral AWS credentials.",
  getContent: () => import('./document.mdx'),
}

