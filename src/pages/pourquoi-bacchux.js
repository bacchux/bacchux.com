import { graphql, StaticQuery } from 'gatsby';
import React from 'react';

import { CaseTeaser, Stage } from '../components/molecules';
import { DefaultLayout } from '../components/layout';

const pageQuery = graphql`
  {
    allStagesJson(filter: { siteTitle: { eq: "Pourquoi choisir BacchUX" } }) {
      edges {
        node {
          id
          siteTitle
          siteDescription
          title
          contentBlocks {
            id
            value
          }
          imageSrc {
            childImageSharp {
              fluid(maxWidth: 800, quality: 92) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
          imageAlt
        }
      }
    }
    allImageSharp(filter: { fluid: { originalName: { regex: "/case-study-dimmi.png/" } } }) {
      edges {
        node {
          id
          fluid(maxWidth: 800, quality: 92) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  }
`;

const Projects = () => (
  <StaticQuery
    query={pageQuery}
    render={({ allStagesJson, allImageSharp }) => {
      const { siteTitle, siteDescription, imageSrc, imageAlt, title, contentBlocks } = allStagesJson.edges[0].node;
      const caseImage = allImageSharp.edges[0].node.fluid;

      return (
        <DefaultLayout siteTitle={siteTitle} siteDescription={siteDescription}>
          <Stage
            modifiers={['gradient']}
            image={{
              fluid: imageSrc.childImageSharp.fluid,
              alt: imageAlt,
            }}
            title={<h1 dangerouslySetInnerHTML={{ __html: title }} />}
          >
            {contentBlocks.map(({ id, value }) => (
              <p key={id}>{value}</p>
            ))}
          </Stage>

          <CaseTeaser
            modifiers={['right-highlighted', 'image-padded', 'dark']}
            url="https://thehustle.co/drunk-shopping-survey"
            title="The 2019 Drunk Shopping Census"
            subline=""
            image={{
              src: 'https://thehustle.co/wp-content/uploads/2019/03/regrets.jpg',
              alt: 'The Hustle drunk shopping survey 2019',
            }}
          >
            <p
              dangerouslySetInnerHTML={{
                __html: `The Hustle, grand media américain, a récemment conduit une enquête auprès de plus de 2000 américains consommateur d'alcool et en a conclu que le <em>"drunk shopping"</em> représente un marché d'environ 48 milliars de dollars par an.`,
              }}
            />
          </CaseTeaser>
        </DefaultLayout>
      );
    }}
  />
);

export default Projects;
