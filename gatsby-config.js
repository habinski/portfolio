module.exports = {
    siteMetadata: {
        title: "Habinski",
        description: "",
        author: "Andriy Habinski",
        image: "/",
        siteUrl: "http://habinski.dev",
        keywords: [
            'developer',
            'front-end',
            'frontend',
            'web developer',
            'web develop',
            'react',
            'freelancer',

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
                apiURL: "https://habinski.herokuapp.com",
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
                    "privacy",
                    "hero"
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
                        // Class prefix for <pre> tags containing syntax highlighting;
                        // defaults to 'language-' (e.g. <pre class="language-js">).
                        // If your site loads Prism into the browser at runtime,
                        // (e.g. for use with libraries like react-live),
                        // you may use this to prevent Prism from re-processing syntax.
                        // This is an uncommon use-case though;
                        // If you're unsure, it's best to use the default value.
                        classPrefix: "language-",
                        // This is used to allow setting a language for inline code
                        // (i.e. single backticks) by creating a separator.
                        // This separator is a string and will do no white-space
                        // stripping.
                        // A suggested value for English speakers is the non-ascii
                        // character '›'.
                        inlineCodeMarker: null,
                        // This lets you set up language aliases.  For example,
                        // setting this to '{ sh: "bash" }' will let you use
                        // the language "sh" which will highlight using the
                        // bash highlighter.
                        aliases: {},
                        // This toggles the display of line numbers globally alongside the code.
                        // To use it, add the following line in gatsby-browser.js
                        // right after importing the prism color scheme:
                        //  require("prismjs/plugins/line-numbers/prism-line-numbers.css")
                        // Defaults to false.
                        // If you wish to only show line numbers on certain code blocks,
                        // leave false and use the {numberLines: true} syntax below
                        showLineNumbers: false,
                        // If setting this to true, the parser won't handle and highlight inline
                        // code used in markdown i.e. single backtick code like `this`.
                        noInlineHighlight: false,
                        // This adds a new language definition to Prism or extend an already
                        // existing language definition. More details on this option can be
                        // found under the header "Add new language definition or extend an
                        // existing language" below.
                        languageExtensions: [{
                            language: "superscript",
                            extend: "javascript",
                            definition: {
                                superscript_types: /(SuperType)/,
                            },
                            insertBefore: {
                                function: {
                                    superscript_keywords: /(superif|superelse)/,
                                },
                            },
                        }, ],
                        // Customize the prompt used in shell output
                        // Values below are default
                        //!!!!!!!!
                        // prompt: {
                        //     user: "root",
                        //     host: "localhost",
                        //     global: false,
                        // },
                        //!!!!!!!!!
                        // By default the HTML entities <>&'" are escaped.
                        // Add additional HTML escapes by providing a mapping
                        // of HTML entities and their escape value IE: { '}': '&#123;' }
                        escapeEntities: {},
                    },
                }],
            },
        },
        {
            resolve: "gatsby-plugin-google-tagmanager",
            options: {
                id: "GTM-M5C7B7D",

                // Include GTM in development.
                //
                // Defaults to false meaning GTM will only be loaded in production.
                includeInDevelopment: true,

                // datalayer to be set before GTM is loaded
                // should be an object or a function that is executed in the browser
                //
                // Defaults to null
                defaultDataLayer: { platform: "gatsby" },

                // Specify optional GTM environment details.
                // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
                // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
                // dataLayerName: "YOUR_DATA_LAYER_NAME",

                // Name of the event that is triggered
                // on every Gatsby route change.
                //
                // Defaults to gatsby-route-change
                // routeChangeEventName: "YOUR_ROUTE_CHANGE_EVENT_NAME",
            },
        },
    ]
}

//  УДАЛЯЙ МОДУЛИ, ОНИ ОПЯТЬ ЕБНУЛИСЬ!