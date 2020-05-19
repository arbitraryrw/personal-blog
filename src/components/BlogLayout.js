import React from 'react'
import {
  View,
  Link,
  NotFoundBoundary,
  useLoadingRoute,
} from 'react-navi'
import siteMetadata from '../siteMetadata'
import NotFoundPage from './NotFoundPage'
import LoadingIndicator from './LoadingIndicator'
import styles from './BlogLayout.module.css'
import Banner from './Banner'
import PageScroller from './PageScroller'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHome} from '@fortawesome/free-solid-svg-icons';

function BlogLayout({ blogRoot, isViewingIndex }) {
  let loadingRoute = useLoadingRoute()
  let myRef = React.createRef();

  return (
    <div>

    {
    isViewingIndex && (
      <div className={styles.bannerContainer}>
          <Banner/>
          <PageScroller target={myRef}/>
      </div>
    )}

    <div ref={myRef} className={styles.container}>
      <LoadingIndicator active={!!loadingRoute} />

      {// Don't show the header on index pages, as it has a special header.
      !isViewingIndex && (
        <header>
          <h3 className={styles.title}>
            <Link href={blogRoot}>
          
              <FontAwesomeIcon className={styles.blob} icon={faHome} size="2x" width="1.8rem"/>
              {siteMetadata.title}

            </Link>
          </h3>
        </header>
      )}

      <main>
        <NotFoundBoundary render={() => <NotFoundPage />}>
          <View />
        </NotFoundBoundary>
      </main>
    </div>
  </div>
  )
}

export default BlogLayout
