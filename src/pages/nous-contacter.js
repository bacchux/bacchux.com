import { graphql, StaticQuery } from 'gatsby';
import React from 'react';

import { DefaultLayout } from '../components/layout';
import { Map } from '../components/molecules';

const pageQuery = graphql`
  {
    allStagesJson(filter: { siteTitle: { eq: "Contactez-nous" } }) {
      edges {
        node {
          id
          siteTitle
          siteDescription
        }
      }
    }
  }
`;

const Contact = () => (
  <StaticQuery
    query={pageQuery}
    render={({ allStagesJson }) => {
      const { siteTitle, siteDescription } = allStagesJson.edges[0].node;

      return (
        <DefaultLayout siteTitle={siteTitle} siteDescription={siteDescription}>
          <Map />
        </DefaultLayout>
      );
    }}
  />
);

export default Contact;
