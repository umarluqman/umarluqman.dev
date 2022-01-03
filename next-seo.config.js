const title = "Umar Luqman";
const description = "Life-long learner, into front-end & calisthenics";

const SEO = {
  title,
  description,
  canonical: "https://umarluqman.dev",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://umarluqman.dev",
    title,
    description,
    images: [
      {
        url: "https://images.prismic.io/blog-next/2e099607-29dd-4621-baea-50e0c07e1614_Screenshot+at+Jun+12+23-06-03.png?auto=compress,format",
        width: 800,
        height: 600,
        alt: "Umar Luqman digital garden",
      },
    ],
  },
  twitter: {
    handle: "@umarlqmn",
    site: "@umarlqmn",
    cardType: "summary_large_image",
  },
};

export default SEO;
