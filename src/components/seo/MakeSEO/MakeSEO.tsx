import React from "react";
import { NextSeo } from "next-seo";
import { IMakeSEOProps } from "./contracts";
import { DefaultSEOAdapter } from "./DefaultSEOAdapter";

export function MakeSEO({
  data,
  adapter = new DefaultSEOAdapter()
}: IMakeSEOProps): JSX.Element {
  const resolvedData = adapter.adapt(data);

  return <NextSeo {...resolvedData} />;
}
