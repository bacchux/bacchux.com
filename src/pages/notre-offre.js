import { graphql, StaticQuery } from 'gatsby';
import React from 'react';

import { Stage, PersonalContact } from '../components/molecules';
import { DefaultLayout } from '../components/layout';

const pageQuery = graphql`
  {
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
    allStagesJson(filter: { siteTitle: { eq: "Notre offre" } }) {
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
  }
`;

const Services = () => (
  <StaticQuery
    query={pageQuery}
    render={({ allStagesJson, allContactsJson }) => {
      const { siteTitle, siteDescription, imageSrc, imageAlt, title, contentBlocks } = allStagesJson.edges[0].node;
      const {
        name: contactName,
        phone: contactPhone,
        mail: contactMail,
        image: contactImage,
      } = allContactsJson.edges[0].node;

      return (
        <DefaultLayout siteTitle={siteTitle} siteDescription={siteDescription}>
          <Stage
            modifiers={['left-highlighted', 'gradient']}
            image={{
              fluid: imageSrc.childImageSharp.fluid,
              alt: imageAlt,
            }}
            title={<h1 dangerouslySetInnerHTML={{ __html: title }} />}
          >
            <div>
              {contentBlocks.map(({ id, value }) => (
                <p key={id} dangerouslySetInnerHTML={{ __html: value }} />
              ))}
            </div>
          </Stage>
          <div className="container">
            <div className="row">
              <PersonalContact
                name={contactName}
                titlePrefix={`Votre interlocuteur`}
                text={`Vous souhaitez organiser un test utilisateur avec BacchUX ? Je suis à votre disposition pour en discuter avec vous.`}
                mail={contactMail}
                phone={contactPhone}
                img={contactImage.childImageSharp.fluid}
              />
            </div>
          </div>
        </DefaultLayout>
      );
    }}
  />
);

export default Services;
