let siteMetadata = {
    title: `Kadeřnictví MiMa`,
    capitalizeTitleOnHome: true,
    logo: `/images/logo_transparent.png`,
    icon: `/images/icon.png`,
    titleImage: `/images/wall.jpg`,
    introTag: `Vítejte na stránkách kadeřnictví MiMa!`,
    description: `Jmenuji se Michaela Martásková a provozuji malé kadeřnictví v Králově Dvoře u Berouna.\nNa těchto stránkách naleznete ukázky účesů, které jsem vytvořila a informace potřebné k objednání.\nTěším se na Vaši návštěvu!`,
    author: `Tomáš Bouška`,
    blogItemsPerPage: 10,
    portfolioItemsPerPage: 10,
    darkmode: false,
    switchTheme: false,
    navLinks: [
        {
            name: "KADEŘNICTVÍ MIMA",
            url: "/"
        },
        {
            name: "FOTO",
            url: "/portfolio"
        },
        {
            name: "CENÍK",
            url: "/pricing"
        },
        {
            name: "MAPA",
            url: "/map"
        },
        {
            name: "KONTAKT",
            url: "/contact"
        }
    ],
    footerLinks: [
		{	
			name: "Vytvořil Tomáš Bouška",
			url: "https://buvis.net",
		}
    ],
    social: [
        {
            name: "Facebook",
            icon: "/images/Facebook.svg",
            url: "https://www.facebook.com/Kade%C5%99nictv%C3%AD-MiMa-370843460296775/"
        },
    ],
    contact: {
        /* Leave the below value completely empty (no space either) if you don't want a contact form. */
        api_url: "",
        description: `Pokud máte dotaz nebo se chcete objednat, zavolejte mi, prosím. Děkuji!`,
        phone: "724 530 165",
        address: "Pod Skalkou 519 \nKrálův Dvůr - Počaply"
    }
};

module.exports = {
    siteMetadata: siteMetadata,
    plugins: [
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    "gatsby-remark-copy-linked-files",
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1280
                        }
                    }
                ]
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `contents`,
                path: `${__dirname}/contents/`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/static/images/`
            }
        },
        {
            resolve: `gatsby-plugin-less`,
            options: {
                strictMath: true
            }
        }
    ]
};
