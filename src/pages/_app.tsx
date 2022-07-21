import { ChakraProvider } from "@chakra-ui/react";
import { DefaultSeo } from "next-seo";
import Head from "next/head";
import theme from "theme";
import { ApplicationContextProvider } from "contexts/ApplicationContext";
import { websiteData } from "config/website-data";

function Application({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0"
        />
      </Head>
      <ApplicationContextProvider>
        <DefaultSeo
          titleTemplate={"%s | " + websiteData.titleLabel}
          defaultTitle={websiteData.homeTitle}
          openGraph={{
            type: "website",
            locale: websiteData.locale,
            url: websiteData.baseUrl,
            site_name: websiteData.ogTitle,
            description: websiteData.ogDescription,
            images: websiteData.ogDefaultImages
          }}
          twitter={
            websiteData.twitter
              ? {
                  cardType: websiteData.twitter.summary,
                  site: websiteData.twitter.site,
                  handle: websiteData.twitter.handle
                }
              : undefined
          }
          additionalLinkTags={websiteData.favicons}
        />
        <Component {...pageProps} />
      </ApplicationContextProvider>
    </ChakraProvider>
  );
}

export default Application;
