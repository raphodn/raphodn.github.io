import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import style from '../styles/footer.module.css'

const Footer = ({ copyrights }) => (
  <footer className={style.footer}>
    {copyrights ? (
      <div
        dangerouslySetInnerHTML={{
          __html: copyrights,
        }}
      />
    ) : (
      <>
        <span className={style.footerCopyrights}>
          © 2019 Raphael Odini
        </span>
        {/* <span className={style.footerCopyrights}>
          Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
        </span>
        <span className={style.footerCopyrights}>
          Theme by <a href="https://radoslawkoziel.pl">panr</a>
        </span> */}
        <span className={style.footerCopyrights}>
          <Link to='/sitemap'>Sitemap</Link>
        </span>
      </>
    )}
  </footer>
)

Footer.propTypes = {
  copyrights: PropTypes.string,
}

export default Footer
