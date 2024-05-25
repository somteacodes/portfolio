import { MetadataRoute } from "next";

const manifest = (): MetadataRoute.Manifest => {
  return {
    name: "Somtochukwu's portfolio",
    short_name: "Portfolio",
    start_url: "/",
    display: "standalone",
    theme_color: "#006E2C",
    background_color: "#0d3515",
    description: "Somtochukwu portfolio",
    icons: [
      {
        src: "/assets/icon_x48.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        src: "/assets/icon_x72.png",
        sizes: "72x72",
        type: "image/png",
      },
      {
        src: "/assets/icon_x96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        src: "/assets/icon_x128.png",
        sizes: "128x128",
        type: "image/png",
      },
      {
        src: "/assets/icon_x144.png",
        sizes: "144x144",
        type: "image/png",
      },
      {
        src: "/assets/icon_x192.png",
        sizes: "192x192",
        type: "image/png",
      },

      {
        src: "/assets/icon_x384.png",
        sizes: "384x384",
        type: "image/png",
      },
      {
        src: "/assets/icon_x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    shortcuts: [
      {
        name: "Home",
        short_name: "Home",
        description: "Home page",
        url: "/",
        icons: [
          {
            src: "/assets/home_icon_x48.png",
            sizes: "48x48",
            type: "image/png",
          },
          {
            src: "/assets/home_icon_x72.png",
            sizes: "72x72",
            type: "image/png",
          },
          {
            src: "/assets/home_icon_x96.png",
            sizes: "96x96",
            type: "image/png",
          },
          {
            src: "/assets/home_icon_x128.png",
            sizes: "128x128",
            type: "image/png",
          },
          {
            src: "/assets/home_icon_x192.png",
            sizes: "192x192",
            type: "image/png",
          },

          {
            src: "/assets/home_icon_x384.png",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: "/assets/home_icon_x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      {
        name: "Contact",
        short_name: "Contact",
        description: "Contact Somtochukwu Anunobi",
        url: "/contact.html",
        icons: [
          {
            src: "/assets/contact_icon_x48.png",
            sizes: "48x48",
            type: "image/png",
          },
          {
            src: "/assets/contact_icon_x72.png",
            sizes: "72x72",
            type: "image/png",
          },
          {
            src: "/assets/contact_icon_x96.png",
            sizes: "96x96",
            type: "image/png",
          },
          {
            src: "/assets/contact_icon_x128.png",
            sizes: "128x128",
            type: "image/png",
          },
          {
            src: "/assets/contact_icon_x192.png",
            sizes: "192x192",
            type: "image/png",
          },

          {
            src: "/assets/contact_icon_x384.png",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: "/assets/contact_icon_x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    ],
  };
};
