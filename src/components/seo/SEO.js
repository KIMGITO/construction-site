import { COMPANY, CONTACT } from "utils/constants";
import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({
  title,
  description,
  keywords,
  image,
  url,
  type = "website",
  publishedTime,
  modifiedTime,
  author = `${COMPANY.name}`,
  section,
  tags = [],
}) => {
  const siteTitle = `${COMPANY.name}`;
  const siteUrl = "https://martineconstructions.netlify.app/";
  const defaultImage = "";
  const twitterHandle = "@";

  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;

  const defaultDescriptions = {
    "/": `${COMPANY.name} - Premier construction company with 25+ years of excellence. Specializing in commercial, residential, renovations, and interior finishing.`,
    "/about": `Learn about ${COMPANY.name}'s 25+ year history, our mission, values, and the expert team behind our successful construction projects.`,
    "/services": `Explore ${COMPANY.name}'s comprehensive services: commercial construction, residential building, renovations, interior finishing, and project management.`,
    "/projects": `View ${COMPANY.name}'s portfolio of successful commercial and residential projects. See our quality craftsmanship and attention to detail.`,
    "/contact": `Contact ${COMPANY.name} for consultations, quotes, and inquiries. Let us bring your construction vision to life.`,
  };

  const metaDescription =
    description || defaultDescriptions[url] || defaultDescriptions["/"];
  const metaKeywords =
    keywords ||
    "construction company, commercial construction, residential construction, building contractor, renovations, interior finishing, construction services";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": type === "article" ? "Article" : "LocalBusiness",
    "@id": fullUrl,
    url: fullUrl,
    name: siteTitle,
    description: metaDescription,
    image: image || defaultImage,
    ...(type === "article"
      ? {
          headline: title,
          datePublished: publishedTime,
          dateModified: modifiedTime || publishedTime,
          author: {
            "@type": "kim",
            name: author,
          },
          keywords: tags.join(", "),
        }
      : {
          address: {
            "@type": "",
            streetAddress: "Thika Rd",
            addressLocality: "Juja",
            addressRegion: "ST",
            postalCode: "",
            addressCountry: "Kenya",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: "-1.1324535",
            longitude: "37.097837",
          },
          telephone: `${CONTACT.phone.primary}`,
          email: `${CONTACT.email.info}`,
          openingHours: "Mo-St 08:00-18:00",
          priceRange: "KSH",
          sameAs: [
            // "https://facebook.com/martineconstruction",
            // "https://instagram.com/martineconstruction",
            // "https://linkedin.com/company/martineconstruction",
            // "https://twitter.com/martineconst",
          ],
        }),
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />

      <link rel="canonical" href={fullUrl} />

      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={image || defaultImage} />

      <meta name="format-detection" content="telephone=no" />
      <meta name="theme-color" content="#c9a959" />

      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
