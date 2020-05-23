import React from 'react'
import { Link, useCurrentRoute, useView } from 'react-navi'
import { MDXProvider } from '@mdx-js/react'
import siteMetadata from '../siteMetadata'
import ArticleMeta from './ArticleMeta'
import Bio from './Bio'
import styles from './BlogPostLayout.module.css'
import HyvorTalk from 'hyvor-talk-react'

function BlogPostLayout({ blogRoot }) {
  let { title, data, url } = useCurrentRoute()
  let { connect, content, head } = useView()
  let { MDXComponent, readingTime } = content

  // The content for posts is an MDX component, so we'll need
  // to use <MDXProvider> to ensure that links are rendered
  // with <Link>, and thus use pushState.
  return connect(
    <>
      {head}
      <article className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>
            <Link href={url.pathname}>{title}</Link>
          </h1>
          <ArticleMeta
            blogRoot={blogRoot}
            meta={data}
            readingTime={readingTime}
          />
        </header>
        <MDXProvider components={{
          a: Link,
          wrapper: ({ children }) =>
            <div className={styles.content}>
              {children}
            </div>
        }}>
          <MDXComponent />
        </MDXProvider>

        <footer className={styles.footer}>
          <h3 className={styles.title}>
            <Link href={blogRoot}>
              {siteMetadata.footerTitle}
            </Link>
          </h3>

          <Bio className={styles.bio} />

          <section className={styles.links}>
            {
              data.previousDetails &&
              <Link className={styles.previous} href={data.previousDetails.href}>
                ← {data.previousDetails.title}
              </Link>
            }
            {
              data.nextDetails &&
              <Link className={styles.next} href={data.nextDetails.href}>
                {data.nextDetails.title} →
              </Link>
            }
          </section>

          {/* Page Comments */}
          <HyvorTalk.Embed websiteId={707} id={"reee"} />

        </footer>
        
      </article>
    </>
  )
}

export default BlogPostLayout
