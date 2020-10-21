module.exports = {
    siteMetadata: {
        title: "My super blog",
        description: "Gatsby blog with Strapi",
        author: "Strapi team",
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
                contentTypes: [
                    "article",
                    "category",
                    "experience",
                    "project",
                    "stack",
                    "social-link"

                ],
                singleTypes: [
                    "about",
                    "privacy"
                ],
                queryLimit: 1000,
            },
        },
        "gatsby-transformer-sharp",
        "gatsby-plugin-sharp",
        {
            resolve: `gatsby-transformer-remark`,
            options: {

                plugins: [{
                    resolve: `gatsby-remark-images`,
                    options: {
                        maxWidth: 1920
                    },
                }, {
                    resolve: `gatsby-remark-prismjs`,
                    options: {
                        aliases: { sh: "bash", js: "javascript" },
                        showLineNumbers: true,
                    }
                }],
            },
        }
    ]
}