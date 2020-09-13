module.exports = {
    siteMetadata: {
        title: "My super blog",
        description: "Gatsby blog with Strapi",
        author: "Strapi team",
    },
    plugins: [
        `gatsby-plugin-sass`,
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
    ],
}