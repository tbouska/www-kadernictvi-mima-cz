import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Contact from "../components/contact";

export default function() {
    return (
        <Layout>
            <SEO lang="cs" title="Kontakt" />
            <div style={{ minHeight: "550px", marginBottom: "10%" }}>
                <Contact />
            </div>
        </Layout>
    );
}
