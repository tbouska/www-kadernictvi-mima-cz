import React from "react";
import SectionTitle from "./sectiontitle";
import { StaticQuery, graphql } from "gatsby";
import { Mapmarker, Mobile } from "./icons";
import SocialLinks from "./sociallinks";
import "../style/contact.less";

class Contact extends React.Component {

    componentDidMount() {

        let li = this.contactArea.querySelectorAll(".item");

        li.forEach(function(e, i) {
            let p = e.querySelector("path");
            if (p)
                p.setAttribute(
                    "fill",
                    window.getComputedStyle(e, null).getPropertyValue("color")
                );
        });
    }

    render() {
        return (
            <section id="contact" className="container">
                <div className="section-title">
                    <SectionTitle title="Kontakt" />
                </div>
                <div className="row no-form" ref={c => (this.contactArea = c)}>
                    <div className="col s12 details">
                        {this.props.contact.description && (
                            <p className="text-tertiary">
                                {this.props.contact.description}
                            </p>
                        )}
                        <ul>
                            {this.props.contact.phone && (
                                <li className="text-secondary item">
                                    <span className="icon">
                                        <Mobile />
                                    </span>
                                    <a href={"tel:" + this.props.contact.phone}>
                                        {this.props.contact.phone}
                                    </a>
                                </li>
                            )}
                            {this.props.contact.address && (
                                <li
                                    className="text-secondary item"
                                    style={{ whiteSpace: "pre" }}
                                >
                                    <span className="icon">
                                        <Mapmarker />
                                    </span>
                                    <a href="https://mapy.cz/s/coparonura" target="_blank" rel="noopener noreferrer">{this.props.contact.address}</a>
                                </li>
                            )}
                            <li>
                                <SocialLinks />
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}

export default () => (
    <StaticQuery
        query={graphql`
            query {
                site {
                    siteMetadata {
                        contact {
                            api_url
                            description
                            phone
                            address
                        }
                    }
                }
            }
        `}
        render={data => <Contact contact={data.site.siteMetadata.contact} />}
    />
);
