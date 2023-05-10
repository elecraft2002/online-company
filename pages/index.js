import Head from "next/head";
import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../prismicio";
import { components } from "../slices/";
import { Layout } from "../components/Layout";
import Scene from "../components/Scene";

const Index = ({ page, navigation, settings }) => {
  return (
    <Layout
      alternateLanguages={page.alternate_languages}
      navigation={navigation}
      settings={settings}
    >
      <Head>
        <title>{prismicH.asText(page.data.title)}</title>
      </Head>
      <div className="h-[100vh] w-full">
        <Scene />
        <h1 className="desktop:text-[10vw] tablet:text-8xl text-6xl font-bold ">
          <span className="spac absolute top-24 tracking-widest">PES</span>
          <span className="absolute bottom-24 right-0">DESIGN</span>
        </h1>
      </div>
      <SliceZone slices={page.data.slices} components={components} />
    </Layout>
  );
};

export default Index;

export async function getStaticProps({ locale, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID("page", "home", { lang: locale });
  const navigation = await client.getSingle("navigation", { lang: locale });
  const settings = await client.getSingle("settings", { lang: locale });

  return {
    props: {
      page,
      navigation,
      settings,
    },
  };
}
