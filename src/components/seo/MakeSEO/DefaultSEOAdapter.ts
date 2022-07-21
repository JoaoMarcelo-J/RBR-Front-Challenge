import { NextSeoProps } from "next-seo";
import {
  AdditionalRobotsProps,
  MetaTag,
  OpenGraph,
  Twitter
} from "next-seo/lib/types";
import { ISEOAdapter } from "./contracts";

interface LanguageAlternate {
  hrefLang: string;
  href: string;
}

interface LinkTag {
  rel: string;
  href: string;
  sizes?: string;
  type?: string;
  color?: string;
  keyOverride?: string;
  as?: string;
  crossOrigin?: string;
}

export class DefaultSEOAdapter implements ISEOAdapter {
  adapt(data: Record<string, any>): NextSeoProps {
    return {
      title: data.title as string | undefined,
      description: data.description as string | undefined,
      openGraph: data.openGraphData as OpenGraph | undefined,
      noindex: data.noindex as boolean | undefined,
      nofollow: data.nofollow as boolean | undefined,
      robotsProps: data.robotsProps as AdditionalRobotsProps | undefined,
      canonical: data.canonical as string | undefined,
      languageAlternates: data.languageAlternates as
        | ReadonlyArray<LanguageAlternate>
        | undefined,
      facebook: data.facebook?.appId
        ? {
            appId: data.facebook.appId
          }
        : undefined,
      twitter: data.twitter as Twitter | undefined,
      additionalMetaTags: data.additionalMetaTags as
        | ReadonlyArray<MetaTag>
        | undefined,
      additionalLinkTags: data.additionalLinkTags as
        | ReadonlyArray<LinkTag>
        | undefined
    };
  }
}
