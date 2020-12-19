import React from "react";
import SectionTitle from "../components/sectiontitle";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "../style/basepage.less";

export default function({ data }) {
    return (
        <Layout>
            <SEO
                lang="cs"
                title={data.markdownRemark.frontmatter.title}
                description={data.markdownRemark.frontmatter.description}
            />
            <section id={data.markdownRemark.frontmatter.title} className="containter">
				<div className="section-title">
					<SectionTitle title={data.markdownRemark.frontmatter.title} />
				</div>
                <article className="post">
                    <div className="content row flex">
                        <div
                            className="col s12 m11 l10 text-tertiary"
							style={{ align: "center" }}
                            dangerouslySetInnerHTML={{
                                __html: data.markdownRemark.html
                            }}
                        ></div>
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
            frontmatter {
                title
                description
            }
        }
    }
`;
