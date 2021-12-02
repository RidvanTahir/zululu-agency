import * as React from 'react'
import { Link } from 'gatsby'
import { container, nav, navLinks, navLinkItem, navLinkText, siteTitle } from './layout.module.css'
import { useStaticQuery, graphql } from 'gatsby'
import Footer from '../components/footer'


const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    wpPage(slug: { eq: "contact-us" }) {
      contactPageFields {
        companyInformation {
          address
          city
          postcode
          socials {
            facebook
            instagram
          }
        }
      }
    }
  }
`)
  return (
    <div className={container}>
      <nav className={nav}>
          <header className={siteTitle}>{data.site.siteMetadata.title}</header>
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link className={navLinkText} to="/">
                Home
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link className={navLinkText} to="/about">
                About
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link className={navLinkText} to="/artists">
                Artists
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link className={navLinkText} to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
      <Footer
        siteTitle={data.site.siteMetadata.title}
        companyInfo={data.wpPage.contactPageFields.companyInformation}
      />
    </div>
  )
}

export default Layout