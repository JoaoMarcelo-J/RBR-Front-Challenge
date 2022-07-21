import { NextSeoProps } from "next-seo";

export interface ISEOAdapter {
  adapt(data: Record<string, any>): NextSeoProps;
}

export interface IMakeSEOProps {
  data: NextSeoProps | Record<string, any>;
  adapter?: ISEOAdapter;
}
