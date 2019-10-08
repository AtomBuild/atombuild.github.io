const siteMetadata = {
  title: "AtomBuild",
  siteUrl: "https://atombuild.github.io",
  description: "Integrate your Build System with Atom.",
  color: {
    primary: "#efeae1",
    secondary: "#66595c",
    active: "#81c08b"
  },
  nav: [
    { name: "Atom Package Manager", url: "https://atom.io/packages/build" },
    { name: "Slack", url: "https://atom-slack.herokuapp.com/" },
    { name: "GitHub", url: "https://github.com/noseglid/atom-build" }
  ]
};

module.exports = {
  siteMetadata,
  plugins: [
    "gatsby-theme-atom-service",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteMetadata.title,
        short_name: siteMetadata.title,
        start_url: "/",
        background_color: siteMetadata.color.secondary,
        theme_color: siteMetadata.color.primary,
        display: "minimal-ui",
        icon: "content/assets/logo.svg"
      }
    },
    "gatsby-plugin-offline"
  ]
};
