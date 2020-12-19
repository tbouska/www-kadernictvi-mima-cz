import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout";
import SectionTitle from "../components/sectiontitle";
import Img from "gatsby-image"
import SEO from "../components/seo";

export default () => {
	const data = useStaticQuery(graphql`
		query GetMapImg {
			fileImgMap: file(relativePath: { eq: "mapa.png" }) {
				childImageSharp {
					fluid(maxWidth: 600, maxHeight: 400) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`)
    return (
        <Layout>
            <SEO lang="cs" title="Mapa" />
            <section id="mapa" className="containter">
				<div className="section-title">
					<SectionTitle title="Mapa" />
				</div>
				<div className="content row flex" style={{ margin: "auto", marginBottom: "30px", justifyContent: "center" }}>
					<p className="text-tertiary">
						Kadeřnictví MiMa sídlí na adrese
						<a href="https://mapy.cz/s/coparonura" target="_blank" rel="noopener noreferrer"> Pod Skalkou 519, Králův Dvůr - Počaply</a>.&nbsp;Cestu si můžete naplánovat po kliknutí na mapu.
					</p>
				</div>
				<div style={{ maxWidth: "600px", margin: "auto", marginBottom: "20px", justifyContent: "center" }}>
					<a href="https://mapy.cz/s/coparonura" target="_blank" rel="noopener noreferrer">
						<Img
							fluid={data.fileImgMap.childImageSharp.fluid}
							alt="Pod Skalkou 519, Králův Dvůr - Počaply"
						/>
					</a>
				</div>
			</section>
        </Layout>
    );
}
