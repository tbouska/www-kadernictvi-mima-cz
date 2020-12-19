import React from "react";
import SectionTitle from "../components/sectiontitle";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Row, Col } from "../components/page-components/grid";
import MD from "gatsby-custom-md";
import "../style/portfolio-singlepage.less";

const components = {
    row: Row,
    col: Col
};

export default function({ data }) {
    return (
        <Layout>
            <SEO
                lang="cs"
                title={data.markdownRemark.frontmatter.title}
                description={data.markdownRemark.frontmatter.description}
                image={data.markdownRemark.frontmatter.image.publicURL}
            />
            <section id={data.markdownRemark.frontmatter.title} className="containter">
				<div className="section-title">
					<SectionTitle title={data.markdownRemark.frontmatter.title} />
				</div>
                <article className="portfolio-post">
                    <div className="content row flex">
                        <div className="col s12 text-tertiary">
                            <MD
                                components={components}
                                htmlAst={data.markdownRemark.htmlAst}
                            />
                        </div>
                    </div>
                </article>
            </section>
        </Layout>
    );
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            htmlAst
            id
            frontmatter {
                title
                description
                image {
                    publicURL
                    childImageSharp {
                        fluid(maxWidth: 600) {
                            srcSet
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`;
