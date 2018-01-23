import PropTypes from 'prop-types';
import React from 'react';
import { css, injectGlobal } from 'react-emotion';
import Helmet from 'react-helmet';

import 'normalize.css';

import Container from '../components/Container';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  body {
    box-sizing: border-box;
    font-family: Montserrat, sans-serif;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  a {
    color: #03a9f4;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }

    header &, footer & {
      color: inherit;
    }
  }

  p {
    line-height: 1.5;
  }
`;

const IndexLayout = ({ children, data }) => (
  <div
    className={css`
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    `}
  >
    <Helmet
      titleTemplate={`%s | ${data.site.siteMetadata.title}`}
      defaultTitle={data.site.siteMetadata.title}
    >
      <html lang="hu" />

      <link
        href="https://fonts.googleapis.com/css?family=Montserrat"
        rel="stylesheet"
      />

      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Helmet>

    {/* TODO: A navigation bar inside a HTML `<header>` element */}

    <main
      className={css`
        flex: 1;
      `}
    >
      {children()}
    </main>

    <footer>
      <Container>TODO: Footer</Container>
    </footer>
  </div>
);

IndexLayout.propTypes = {
  children: PropTypes.func.isRequired,
  data: PropTypes.shape({}).isRequired,
};

export default IndexLayout;

export const query = graphql`
  query IndexLayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;