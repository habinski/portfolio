module.exports = {
    siteMetadata: {
        title: "Habiński",
        description: "",
        author: "Andriy Habinski",
        image: "/",
        siteUrl: "https://habinski.dev",
        keywords: [
            'developer',
            'front-end',
            'frontend',
            'web developer',
            'web develop',
            'react',
            'freelancer'
        ]
    },
    plugins: [
        `gatsby-plugin-sass`, {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `assets`,
                path: `${__dirname}/src/assets`,
            },
        },
        {
            resolve: "gatsby-source-strapi",
            options: {
                apiURL: "http://localhost:1337",
                collectionTypes: [
                    "article",
                    "category",
                    "experience",
                    "project",
                    "stack",
                    "social-link"
                ],
                singleTypes: [
                    "about",
                    "privacy",
                    "hero",
                    "contact"
                ],
                queryLimit: 1000,
            },
        },
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    //         {
                    //             resolve: `gatsby-remark-prismjs`,
                    //             options: {
                    //                 classPrefix: "language-",
                    //                 inlineCodeMarker: null,
                    //                 aliases: {},
                    //                 showLineNumbers: true,
                    //                 noInlineHighlight: false,
                    //                 escapeEntities: {},
                    //             },
                    //         },
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 590,
                        },
                    },
                ],
            },
        },
        // {
        //     resolve: "gatsby-plugin-google-tagmanager",
        //     options: {
        //         id: "GTM-M5C7B7D",
        //         includeInDevelopment: true,
        //         defaultDataLayer: { platform: "gatsby" }
        //     },
        // },
        {
            resolve: `gatsby-plugin-gdpr-cookies`,
            options: {

                googleTagManager: {
                    trackingId: 'GTM-M5C7B7D', // leave empty if you want to disable the tracker
                    cookieName: 'gatsby-gdpr-google-tagmanager', // default
                    dataLayerName: 'dataLayer', // default
                },
                // defines the environments where the tracking should be available  - default is ["production"]
                environments: ['production', 'development']
            },
        },
    ]
}