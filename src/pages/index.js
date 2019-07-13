import { graphql, StaticQuery } from 'gatsby';
import React from 'react';

import { DefaultLayout } from '../components/layout';
import { PersonalContact, Stage } from '../components/molecules';
import { replaceCount } from '../utils/count';

const pageQuery = graphql`
  {
    allMediumPost(limit: 2, sort: { fields: [firstPublishedAt], order: DESC }) {
      edges {
        node {
          id
          title
          uniqueSlug
          author {
            name
          }
          virtuals {
            subtitle
            previewImage {
              imageId
            }
          }
        }
      }
    }
    allContactsJson(filter: { slug: { eq: "jeremie" } }) {
      edges {
        node {
          name
          phone
          mail
          image {
            childImageSharp {
              fluid(maxWidth: 640, quality: 92) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      }
    }
    allStagesJson(filter: { siteTitle: { eq: "Accueil" } }) {
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
          link
          linkText
        }
      }
    }
    allMembersJson {
      edges {
        node {
          name
        }
      }
    }
    allImageSharp(
      filter: {
        fluid: {
          originalName: {
            regex: "/case-study-migros-reactions-bronze.png|case-study-cosmo.jpg|case-study-subsidia.jpg/"
          }
        }
      }
    ) {
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

const Index = () => (
  <StaticQuery
    query={pageQuery}
    render={({ allStagesJson, allMembersJson, allContactsJson }) => {
      const { imageSrc, imageAlt, title, contentBlocks } = allStagesJson.edges[0].node;
      const {
        name: contactName,
        phone: contactPhone,
        mail: contactMail,
        image: contactImage,
      } = allContactsJson.edges[0].node;

      //const members = allMembersJson.edges;

      return (
        <DefaultLayout>
          <Stage
            modifiers={['landing-page', 'left-highlighted']}
            image={{
              fluid: imageSrc.childImageSharp.fluid,
              alt: imageAlt,
            }}
            title={<h1 dangerouslySetInnerHTML={{ __html: title }} />}
          >
            {contentBlocks.map(({ id, value }) => (
              <p key={id} dangerouslySetInnerHTML={{ __html: value }} />
            ))}
          </Stage>

          <PersonalContact
            name={contactName}
            titlePrefix={`Votre interlocuteur`}
            text={`Vous souhaitez organiser un test utilisateur avec BacchUX ? Je suis à votre disposition pour en discuter avec vous.`}
            mail={contactMail}
            phone={contactPhone}
            img={contactImage.childImageSharp.fluid}
          />
        </DefaultLayout>
      );
    }}
  />
);

export default Index;
